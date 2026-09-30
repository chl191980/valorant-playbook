/* 从 decompress 出的原始消息文本里抽取 write/edit 调用，恢复文件 */
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(process.argv[2], 'utf8');
const OUT = process.argv[3];
const lines = src.split('\n');

const writes = [], edits = [];
for (const raw of lines) {
  const s = raw.trim();
  if (s[0] !== '{') continue;
  let o;
  try { o = JSON.parse(s); } catch (e) { continue; }
  const fp = o.file_path || o.filePath;
  if (!fp) continue;
  if (typeof o.content === 'string') writes.push([fp, o.content]);
  else if (typeof o.old_string === 'string') edits.push([fp, o.old_string, o.new_string || '']);
}

console.log('writes=' + writes.length + ' edits=' + edits.length);
const seen = new Map();
for (const [fp, c] of writes) {
  seen.set(fp, c);
  console.log('  W ' + fp + '  ' + c.length + 'ch');
}
for (const [fp, a, b] of edits) console.log('  E ' + fp + '  -' + a.length + ' +' + b.length);

if (OUT) {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [fp, c] of seen) {
    const base = path.basename(fp);
    const dest = path.join(OUT, base);
    fs.writeFileSync(dest, c, 'utf8');
    console.log('恢复 → ' + dest);
  }
}
