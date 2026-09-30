#!/usr/bin/env node
/**
 * sitecheck.js —— 下包区（包点）几何自检
 *
 * 目的：战术数据里「A 点 / B 点」标反了是肉眼很难发现、但后果最严重的错误
 *       （整张图的进攻方向全反）。这个脚本从**小地图像素**里独立地把下包区找出来，
 *       再和 data/callouts.json 里来自官方 Wiki 的 sites 锚点比对，验证两者是否一致。
 *
 * 原理：
 *   小地图上橄榄色方块 = 下包区（约 RGB 152,152,118，亮处 173,173,145），
 *   和灰色地面、黑色虚空在色相上区分明显。做一次连通域标记，
 *   取面积最大的若干个区块作为包点，输出其质心（小地图百分比）。
 *
 * 用法：
 *   node tools/sitecheck.js                # 全部地图，与 callouts.json 比对
 *   node tools/sitecheck.js bind sunset    # 只查指定地图
 *
 * 退出码：全部对得上 0，有对不上的 1。
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..');
const MAPS_DIR = path.join(ROOT, 'assets', 'maps');
const CALLOUTS = path.join(ROOT, 'data', 'callouts.json');

/* ------------------------------------------------------------------ PNG */

/** 解码 8bit、非隔行的 PNG，返回 { width, height, data }（RGBA）。 */
function decodePng(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('不是 PNG 文件');
  let off = 8, w = 0, h = 0, bitDepth = 0, colorType = 0, interlace = 0;
  const idat = [];
  let palette = null, trns = null;
  while (off < buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    const body = buf.subarray(off + 8, off + 8 + len);
    if (type === 'IHDR') {
      w = body.readUInt32BE(0); h = body.readUInt32BE(4);
      bitDepth = body[8]; colorType = body[9]; interlace = body[12];
    } else if (type === 'PLTE') palette = Buffer.from(body);
    else if (type === 'tRNS') trns = Buffer.from(body);
    else if (type === 'IDAT') idat.push(Buffer.from(body));
    else if (type === 'IEND') break;
    off += 12 + len;
  }
  if (bitDepth !== 8) throw new Error('只支持 8bit PNG');
  if (interlace !== 0) throw new Error('不支持隔行 PNG');

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

/* -------------------------------------------------------------- 包点提取 */

/** 橄榄色（下包区）判定：r≈g，明显偏暖，且足够亮。 */
function isOlive(r, g, b, a) {
  if (a < 200) return false;
  if (Math.abs(r - g) > 14) return false;
  if (r - b < 18) return false;
  return r >= 110;
}

/**
 * 找出所有下包区连通域，返回 [{x, y, area}]（坐标为小地图百分比，左上原点）。
 * @param {number} minRatio 面积下限（占全图比例），滤掉噪点与细小装饰
 */
function findSites(img, minRatio = 0.002) {
  const { width: w, height: h, data } = img;
  const mask = new Uint8Array(w * h);
  for (let i = 0, px = 0; px < w * h; px++, i += 4) {
    if (isOlive(data[i], data[i + 1], data[i + 2], data[i + 3])) mask[px] = 1;
  }

  const seen = new Uint8Array(w * h);
  const stack = new Int32Array(w * h);
  const blobs = [];
  const minArea = Math.max(64, Math.floor(w * h * minRatio));

  for (let start = 0; start < w * h; start++) {
    if (!mask[start] || seen[start]) continue;
    let sp = 0;
    stack[sp++] = start;
    seen[start] = 1;
    let area = 0, sx = 0, sy = 0;
    while (sp > 0) {
      const cur = stack[--sp];
      const x = cur % w, y = (cur - x) / w;
      area++; sx += x; sy += y;
      if (x > 0 && mask[cur - 1] && !seen[cur - 1]) { seen[cur - 1] = 1; stack[sp++] = cur - 1; }
      if (x < w - 1 && mask[cur + 1] && !seen[cur + 1]) { seen[cur + 1] = 1; stack[sp++] = cur + 1; }
      if (y > 0 && mask[cur - w] && !seen[cur - w]) { seen[cur - w] = 1; stack[sp++] = cur - w; }
      if (y < h - 1 && mask[cur + w] && !seen[cur + w]) { seen[cur + w] = 1; stack[sp++] = cur + w; }
    }
    if (area >= minArea) {
      blobs.push({ x: (sx / area) / w * 100, y: (sy / area) / h * 100, area });
    }
  }
  return blobs.sort((a, b) => b.area - a.area);
}

/* ------------------------------------------------------------------ main */

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
}

function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  const callouts = fs.existsSync(CALLOUTS) ? loadJson(CALLOUTS) : {};
  const slugs = args.length ? args : Object.keys(callouts).filter((k) => !k.startsWith('_'));

  console.log('下包区几何自检：小地图像素里找到的橄榄色区块 vs data/callouts.json 的 Wiki 锚点\n');
  let bad = 0;

  for (const slug of slugs) {
    const file = path.join(MAPS_DIR, slug + '.png');
    if (!fs.existsSync(file)) { console.log(`? ${slug.padEnd(9)} 找不到小地图`); continue; }
    const blobs = findSites(decodePng(fs.readFileSync(file)));
    const sites = (callouts[slug] && callouts[slug].sites) || {};

    const parts = [];
    const used = new Set();
    let ok = true;
    for (const key of Object.keys(sites).sort()) {
      const [ax, ay] = sites[key];
      let best = -1, bestD = Infinity;
      blobs.forEach((b, i) => {
        const d = Math.hypot(b.x - ax, b.y - ay);
        if (d < bestD) { bestD = d; best = i; }
      });
      const hit = best >= 0 && bestD <= 6;
      if (hit) used.add(best); else ok = false;
      parts.push(`${key} Wiki(${ax.toFixed(1)},${ay.toFixed(1)})→色块(${best >= 0 ? blobs[best].x.toFixed(1) : '?'},${best >= 0 ? blobs[best].y.toFixed(1) : '?'}) Δ${bestD === Infinity ? '?' : bestD.toFixed(1)}% ${hit ? '✓' : '✗'}`);
    }
    const extra = blobs.filter((_, i) => !used.has(i) && i < 3);
    if (!ok) bad++;
    console.log(`${ok ? '✓' : '✗'} ${slug.padEnd(9)} 色块 ${blobs.length} 个 | ${parts.join('  |  ')}`);
    if (extra.length) {
      console.log(`  ${' '.repeat(9)} 另有未匹配色块: ${extra.map((b) => `(${b.x.toFixed(1)},${b.y.toFixed(1)})`).join(' ')}`);
    }
  }

  console.log(bad ? `\n${bad} 张图的包点对不上` : '\n全部通过');
  process.exit(bad ? 1 : 0);
}

main();
