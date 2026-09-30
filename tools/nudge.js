/* 按补丁微调 tactics 文件里的坐标（保留原有排版与注释）
   用法: node tools/nudge.js patches.json
   补丁格式: { "<slug>": { "<markerId>": { "pt": [x,y], "from": [x,y] } } }
   只替换该 marker 块内的 x/y（及 from 的 x/y），不触碰其他内容。 */
const fs = require('fs');
const path = require('path');

const PATCH = JSON.parse(fs.readFileSync(process.argv[2], 'utf8').replace(/^\uFEFF/, ''));
const DIR = path.resolve(__dirname, '..', 'data', 'tactics');
const num = (v) => (Number.isInteger(v) ? String(v) : String(Math.round(v * 10) / 10));

let changed = 0, missed = [];
for (const [slug, marks] of Object.entries(PATCH)) {
  const file = path.join(DIR, slug + '.js');
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');
  for (const [id, fix] of Object.entries(marks)) {
    const start = lines.findIndex((l) => l.includes("id: '" + id + "'"));
    if (start < 0) { missed.push(slug + '/' + id + ' (not found)'); continue; }
    // marker 块 = 从 id 行到下一个以 '    }' 或 '    },' 结尾的行的前一行
    let end = start + 1;
    while (end < lines.length && !/^\s{4}\},?\s*$/.test(lines[end])) end++;
    const block = lines.slice(start, end + 1).join('\n');
    let next = block;
    if (fix.pt) {
      next = next.replace(/x:\s*-?[\d.]+,\s*y:\s*-?[\d.]+/, 'x: ' + num(fix.pt[0]) + ', y: ' + num(fix.pt[1]));
    }
    if (fix.from) {
      next = next.replace(/from:\s*\{\s*x:\s*-?[\d.]+,\s*y:\s*-?[\d.]+\s*\}/,
        'from: { x: ' + num(fix.from[0]) + ', y: ' + num(fix.from[1]) + ' }');
    }
    if (next === block) { missed.push(slug + '/' + id + ' (no change)'); continue; }
    lines.splice(start, end - start + 1, ...next.split('\n'));
    changed++;
  }
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
}
console.log('调整坐标 ' + changed + ' 处' + (missed.length ? '\n未命中: ' + missed.join(', ') : ''));
