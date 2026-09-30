#!/usr/bin/env node
/**
 * voidcheck.js —— 点位落地自检
 *
 * 判断每张图的每个道具点位（落点 x/y 与站位 from）是否真的落在「可走地面」上。
 *
 * 原理：
 *   1. 用内置的最小 PNG 解码器读出 assets/maps/<slug>.png 的 alpha 通道
 *      （官方小地图是 1024x1024、8bit RGBA、非隔行；墙体/虚空/地图外 alpha=0）。
 *   2. 构造 ok[] = 5x5 邻域内 alpha>40 的像素（即「离墙至少 2px」的安全地面）。
 *   3. 对所有 ok 像素做多源 BFS 距离变换，得到每个像素到最近安全地面的像素距离。
 *   4. 把每个 marker 的 (x,y)% 和 from 换算成像素，查距离；
 *      超过阈值（默认 0.35% 图宽 ≈ 3.6px）即判为「越界」，并给出最近的合法落点。
 *
 * 用法：
 *   node tools/voidcheck.js                    # 检查全部已有战术数据的图
 *   node tools/voidcheck.js ascent split       # 只检查指定地图
 *   node tools/voidcheck.js --max 0.5          # 放宽阈值（单位：图宽的百分比）
 *   node tools/voidcheck.js --patch tools/_fix.json   # 输出可直接喂给 nudge.js 的补丁
 *   node tools/voidcheck.js --all              # 连没有战术数据文件的图也列出来
 *
 * 退出码：全部通过 0，有越界 1。
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..');
const MAPS_DIR = path.join(ROOT, 'assets', 'maps');
const TACTICS_DIR = path.join(ROOT, 'data', 'tactics');

/* ------------------------------------------------------------------ PNG */

/** 解码 8bit、非隔行的 PNG，返回 { width, height, data }，data 为 RGBA 字节数组。 */
function decodePng(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('不是 PNG 文件');
  let off = 8;
  let w = 0, h = 0, bitDepth = 0, colorType = 0, interlace = 0;
  const idat = [];
  let palette = null, trns = null;

  while (off < buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    const body = buf.subarray(off + 8, off + 8 + len);
    if (type === 'IHDR') {
      w = body.readUInt32BE(0);
      h = body.readUInt32BE(4);
      bitDepth = body[8];
      colorType = body[9];
      interlace = body[12];
    } else if (type === 'PLTE') {
      palette = Buffer.from(body);
    } else if (type === 'tRNS') {
      trns = Buffer.from(body);
    } else if (type === 'IDAT') {
      idat.push(Buffer.from(body));
    } else if (type === 'IEND') {
      break;
    }
    off += 12 + len;
  }

  if (bitDepth !== 8) throw new Error('只支持 8bit PNG，实际 ' + bitDepth);
  if (interlace !== 0) throw new Error('不支持隔行 PNG');
  if (colorType !== 6 && colorType !== 2 && colorType !== 0 && colorType !== 4 && colorType !== 3) {
    throw new Error('不支持的 colorType ' + colorType);
  }

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
  const stride = w * channels;
  const out = Buffer.alloc(w * h * 4);
  let prev = Buffer.alloc(stride);
  let p = 0;

  for (let y = 0; y < h; y++) {
    const filter = raw[p++];
    const line = Buffer.from(raw.subarray(p, p + stride));
    p += stride;

    for (let i = 0; i < stride; i++) {
      const a = i >= channels ? line[i - channels] : 0;
      const b = prev[i];
      const c = i >= channels ? prev[i - channels] : 0;
      switch (filter) {
        case 1: line[i] = (line[i] + a) & 0xff; break;
        case 2: line[i] = (line[i] + b) & 0xff; break;
        case 3: line[i] = (line[i] + ((a + b) >> 1)) & 0xff; break;
        case 4: {
          const pp = a + b - c;
          const pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c);
          const pr = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
          line[i] = (line[i] + pr) & 0xff;
          break;
        }
        default: break;
      }
    }

    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      if (colorType === 6) {
        out[o] = line[x * 4]; out[o + 1] = line[x * 4 + 1]; out[o + 2] = line[x * 4 + 2]; out[o + 3] = line[x * 4 + 3];
      } else if (colorType === 2) {
        out[o] = line[x * 3]; out[o + 1] = line[x * 3 + 1]; out[o + 2] = line[x * 3 + 2]; out[o + 3] = 255;
      } else if (colorType === 0) {
        out[o] = out[o + 1] = out[o + 2] = line[x]; out[o + 3] = 255;
      } else if (colorType === 4) {
        out[o] = out[o + 1] = out[o + 2] = line[x * 2]; out[o + 3] = line[x * 2 + 1];
      } else {
        const idx = line[x];
        out[o] = palette[idx * 3]; out[o + 1] = palette[idx * 3 + 1]; out[o + 2] = palette[idx * 3 + 2];
        out[o + 3] = trns && idx < trns.length ? trns[idx] : 255;
      }
    }
    prev = line;
  }

  return { width: w, height: h, data: out };
}

/* -------------------------------------------------------- 距离变换 */

/**
 * 返回 { dist, ok }：
 *   ok[i]   该像素是否「安全地面」（自身与 5x5 邻域 alpha > alphaMin）
 *   dist[i] 到最近安全地面的 4-连通像素距离（安全地面本身为 0）
 */
function buildDistanceField(img, alphaMin) {
  const { width: w, height: h, data } = img;
  const n = w * h;
  const ok = new Uint8Array(n);

  for (let y = 2; y < h - 2; y++) {
    for (let x = 2; x < w - 2; x++) {
      let solid = 1;
      for (let dy = -2; dy <= 2 && solid; dy++) {
        const row = (y + dy) * w;
        for (let dx = -2; dx <= 2; dx++) {
          if (data[(row + x + dx) * 4 + 3] <= alphaMin) { solid = 0; break; }
        }
      }
      ok[y * w + x] = solid;
    }
  }

  const dist = new Int32Array(n).fill(0x7fffffff);
  const queue = new Int32Array(n);
  let head = 0, tail = 0;
  for (let i = 0; i < n; i++) {
    if (ok[i]) { dist[i] = 0; queue[tail++] = i; }
  }
  while (head < tail) {
    const i = queue[head++];
    const x = i % w, y = (i / w) | 0;
    const d = dist[i] + 1;
    if (x > 0 && dist[i - 1] > d) { dist[i - 1] = d; queue[tail++] = i - 1; }
    if (x < w - 1 && dist[i + 1] > d) { dist[i + 1] = d; queue[tail++] = i + 1; }
    if (y > 0 && dist[i - w] > d) { dist[i - w] = d; queue[tail++] = i - w; }
    if (y < h - 1 && dist[i + w] > d) { dist[i + w] = d; queue[tail++] = i + w; }
  }

  return { ok, dist, w, h };
}

/** 在 (px,py) 周围半径 radius 像素内找最近的 ok 像素；找不到返回 null。 */
function nearestSolid(field, px, py, radius) {
  const { ok, dist, w, h } = field;
  const x0 = Math.max(0, px - radius), x1 = Math.min(w - 1, px + radius);
  const y0 = Math.max(0, py - radius), y1 = Math.min(h - 1, py + radius);
  let bx = -1, by = -1, best = Infinity;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if (!ok[y * w + x]) continue;
      const d = (x - px) * (x - px) + (y - py) * (y - py);
      if (d < best) { best = d; bx = x; by = y; }
    }
  }
  if (bx < 0) return null;
  return { x: bx, y: by, pxDist: Math.sqrt(best), dist: dist[py * w + px] };
}

/* -------------------------------------------------------- 读取战术数据 */

/** 在 Node 里安全执行浏览器风格的数据文件（它们只做 window.TACTICS[...] = ...）。 */
function loadTactics() {
  const win = {};
  global.window = win;
  const files = fs.existsSync(TACTICS_DIR)
    ? fs.readdirSync(TACTICS_DIR).filter((f) => f.endsWith('.js')).sort()
    : [];
  const results = [];
  for (const f of files) {
    const full = path.join(TACTICS_DIR, f);
    const slug = f.replace(/\.js$/, '');
    try {
      // eslint-disable-next-line no-eval
      (0, eval)(fs.readFileSync(full, 'utf8').replace(/^\uFEFF/, ''));
      results.push({ slug, file: f, data: win.TACTICS && win.TACTICS[slug], error: null });
    } catch (err) {
      results.push({ slug, file: f, data: null, error: err.message });
    }
  }
  return results;
}

/* ------------------------------------------------------------------ main */

function main() {
  const argv = process.argv.slice(2);
  const opts = { max: 0.35, patch: null, all: false, radius: 40, slugs: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--max') opts.max = parseFloat(argv[++i]);
    else if (a === '--patch') opts.patch = argv[++i];
    else if (a === '--all') opts.all = true;
    else if (a === '--radius') opts.radius = parseInt(argv[++i], 10);
    else if (!a.startsWith('--')) opts.slugs.push(a);
  }

  const available = fs.existsSync(MAPS_DIR)
    ? fs.readdirSync(MAPS_DIR).filter((f) => f.endsWith('.png')).map((f) => f.replace(/\.png$/, '')).sort()
    : [];

  const loaded = loadTactics();
  const wanted = opts.slugs.length ? opts.slugs : loaded.map((r) => r.slug);

  if (opts.all) {
    for (const s of available) if (!wanted.includes(s)) wanted.push(s);
  }

  const patch = {};
  let failures = 0;
  const cache = new Map();

  console.log('可走地面自检（阈值 ' + opts.max + '% 图宽，含 5x5 安全边距）\n');

  for (const slug of wanted) {
    const entry = loaded.find((r) => r.slug === slug);
    const mapFile = path.join(MAPS_DIR, slug + '.png');

    if (!fs.existsSync(mapFile)) {
      console.log('· ' + slug.padEnd(12) + ' 缺少 assets/maps/' + slug + '.png');
      continue;
    }
    if (!entry) {
      console.log('· ' + slug.padEnd(12) + ' 尚未录入战术数据（' + (opts.all ? '待补' : '跳过') + '）');
      continue;
    }
    if (entry.error) {
      console.log('✗ ' + slug.padEnd(12) + ' 数据文件语法错误：' + entry.error);
      failures++;
      continue;
    }

    let field = cache.get(slug);
    if (!field) {
      field = buildDistanceField(decodePng(fs.readFileSync(mapFile)), 40);
      cache.set(slug, field);
    }
    const { w, h } = field;
    const toPx = (v, size) => Math.round((v / 100) * (size - 1));
    const toPct = (v, size) => (v / (size - 1)) * 100;
    const limit = (opts.max / 100) * w;

    const bad = [];
    const markers = (entry.data && entry.data.markers) || [];
    for (const m of markers) {
      const checks = [{ key: 'pt', x: m.x, y: m.y }];
      if (m.from) checks.push({ key: 'from', x: m.from.x, y: m.from.y });
      for (const c of checks) {
        const px = toPx(c.x, w), py = toPx(c.y, h);
        const d = field.dist[py * w + px];
        if (d <= limit) continue;
        const near = nearestSolid(field, px, py, Math.ceil(limit) + opts.radius);
        const rec = {
          id: m.id, key: c.key, old: [c.x, c.y],
          distPct: (d / w) * 100,
          snap: near ? [+toPct(near.x, w).toFixed(1), +toPct(near.y, h).toFixed(1)] : null,
        };
        bad.push(rec);
        // 只在位移不大（<= 6% 图宽）时才给自动补丁，避免把点位挪到隔壁房间
        if (near && near.pxDist / w * 100 <= 6) {
          patch[slug] = patch[slug] || {};
          const dst = patch[slug][m.id] = patch[slug][m.id] || {};
          if (c.key === 'pt') dst.pt = rec.snap; else dst.from = rec.snap;
        }
      }
    }

    if (!bad.length) {
      console.log('✓ ' + slug.padEnd(12) + markers.length + ' 个点位，全部落在可走地面');
    } else {
      failures++;
      console.log('✗ ' + slug.padEnd(12) + markers.length + ' 个点位，' + bad.length + ' 处越界：');
      for (const b of bad) {
        const where = b.key === 'pt' ? '落点' : '站位';
        const hint = b.snap ? '  → 建议改到 (' + b.snap[0] + ', ' + b.snap[1] + ')' : '  → 附近 40px 内没有可走地面，坐标可能整体写错了';
        console.log('    · ' + b.id + ' 的' + where + ' (' + b.old[0] + ', ' + b.old[1] + ') 距最近地面 ' + b.distPct.toFixed(2) + '%' + hint);
      }
    }
  }

  if (opts.patch && Object.keys(patch).length) {
    fs.mkdirSync(path.dirname(path.resolve(opts.patch)), { recursive: true });
    fs.writeFileSync(path.resolve(opts.patch), JSON.stringify(patch, null, 2) + '\n', 'utf8');
    console.log('\n已写出补丁：' + opts.patch + '（用 node tools/nudge.js ' + opts.patch + ' 应用）');
  } else if (opts.patch) {
    console.log('\n没有需要修正的点位，未写出补丁。');
  }

  console.log('\n' + (failures ? failures + ' 张图存在越界点位' : '全部通过'));
  process.exit(failures ? 1 : 0);
}

main();
