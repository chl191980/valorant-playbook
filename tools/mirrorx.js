#!/usr/bin/env node
/**
 * mirrorx.js —— 水平镜像一张图的全部点位横坐标（x → 100 − x）
 *
 * 什么时候需要它：
 *   早期有两张地图的数据是按「水平翻转」的参照系写的（作者默认 A 点在左、B 点在右，
 *   而官方小地图上恰好相反），表现为整张图的进攻方向左右对调。
 *   用 tools/sitecheck.js + data/callouts.json 可以确认，再用本脚本一键镜回来。
 *
 * 只改 marker 的 `x:` 与 `from` 里的 `x:`，y 与所有文案原样保留。
 *
 * `--prose` 会顺带把文案里的方位词一起翻转（西↔东、左↔右，西北自动变东北），
 * 因为作者是按翻转后的参照系写「站在 A 点西北角」这类描述的。
 * 已经单独跑过坐标镜像时，用 `--prose-only` 只翻文案。
 *
 * 用法：
 *   node tools/mirrorx.js bind sunset                  # 就地镜像坐标
 *   node tools/mirrorx.js bind sunset --prose          # 坐标 + 方位词一起翻
 *   node tools/mirrorx.js bind sunset --prose-only     # 只翻方位词
 *   node tools/mirrorx.js bind --dry                   # 只打印将要做的改动
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TACTICS_DIR = path.join(ROOT, 'data', 'tactics');

const round = (n) => Math.round(n * 10) / 10;

/** 会被「西→东 / 左→右」误伤的词，出现就拒绝改写。 */
const FORBIDDEN = ['东西', '左右', '南北'];

function swapProse(text, slug) {
  for (const w of FORBIDDEN) {
    if (text.includes(w)) {
      throw new Error(`${slug}: 文案里出现「${w}」，整体翻转方位词会把它改坏，请手工处理`);
    }
  }
  let n = 0;
  return {
    text: text
      .replace(/[西东]/g, (c) => { n++; return c === '西' ? '东' : '西'; })
      .replace(/[左右]/g, (c) => { n++; return c === '左' ? '右' : '左'; }),
    count: n,
  };
}

function mirror(text) {
  let count = 0;

  // marker 自己的横坐标：整行只有 x
  let out = text.replace(/^(\s*)x:\s*(\d+(?:\.\d+)?)(,?)\s*$/gm, (m, indent, num, tail) => {
    count++;
    return `${indent}x: ${round(100 - parseFloat(num))}${tail}`;
  });

  // 站位：from: { x: .., y: .. }
  out = out.replace(
    /^(\s*from:\s*\{\s*)x:\s*(\d+(?:\.\d+)?)(\s*,\s*y:\s*\d+(?:\.\d+)?\s*\},?)\s*$/gm,
    (m, head, num, rest) => {
      count++;
      return `${head}x: ${round(100 - parseFloat(num))}${rest}`;
    }
  );

  return { text: out, count };
}

function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');
  const proseOnly = args.includes('--prose-only');
  const prose = proseOnly || args.includes('--prose');
  const slugs = args.filter((a) => !a.startsWith('-'));

  if (!slugs.length) {
    console.error('用法: node tools/mirrorx.js <slug...> [--dry] [--prose | --prose-only]');
    process.exit(2);
  }

  let total = 0;
  let totalProse = 0;
  for (const slug of slugs) {
    const file = path.join(TACTICS_DIR, slug + '.js');
    if (!fs.existsSync(file)) { console.error(`✗ ${slug}: 找不到 ${file}`); process.exit(1); }
    const src = fs.readFileSync(file, 'utf8');

    let text = src;
    let count = 0;
    if (!proseOnly) {
      const r = mirror(src);
      text = r.text;
      count = r.count;
    }

    let proseCount = 0;
    if (prose) {
      const r = swapProse(text, slug);
      text = r.text;
      proseCount = r.count;
    }

    total += count;
    totalProse += proseCount;
    if (dry) {
      console.log(`· ${slug}: 将镜像 ${count} 处横坐标、翻转 ${proseCount} 个方位词（未写入）`);
    } else {
      fs.writeFileSync(file, text);
      console.log(`✓ ${slug}: 镜像了 ${count} 处横坐标、翻转了 ${proseCount} 个方位词`);
    }
  }
  console.log(`共 ${total} 处坐标、${totalProse} 个方位词${dry ? '（dry-run）' : ''}`);
}

main();
