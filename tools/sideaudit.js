#!/usr/bin/env node
/**
 * sideaudit.js —— 判断一张图的 A/B 阵营有没有左右对调
 *
 * 做法：把每个点位的**标签首字母**（A/B/C）当作它自称的阵营，
 *       再看它的落点离「官方 Wiki 同字母 callout 群」近，还是离「异字母 callout 群」近。
 *       如果绝大多数点位在某个朝向下都更贴近同字母 callout，那个朝向就是对的。
 *
 * 会同时评估当前朝向与水平镜像后的朝向，给出结论。
 *
 * 用法：node tools/sideaudit.js [slug...]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
}

function loadTactics(slug) {
  global.window = {};
  const code = fs.readFileSync(path.join(ROOT, 'data', 'tactics', slug + '.js'), 'utf8');
  (0, eval)(code);
  return global.window.TACTICS[slug];
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** 某点 (x,y) 到所有以这些字母开头的 callout 的最近距离；没有则返回 Infinity */
function nearLetter(callouts, letters, x, y) {
  let best = Infinity;
  for (const c of callouts) {
    const L = String(c.name).trim()[0];
    if (!letters.includes(L)) continue;
    best = Math.min(best, dist([x, y], [c.x, c.y]));
  }
  return best;
}

function audit(slug, callouts) {
  const t = loadTactics(slug);
  const list = callouts.callouts || [];
  const letters = ['A', 'B', 'C'].filter((L) => list.some((c) => String(c.name).trim()[0] === L));
  if (letters.length < 2) return null;

  const rows = [];
  for (const m of t.markers) {
    const L = String(m.label || '').trim()[0];
    if (!letters.includes(L)) continue;
    const others = letters.filter((l) => l !== L);
    const cur = { own: nearLetter(list, [L], m.x, m.y), other: Math.min(...others.map((o) => nearLetter(list, [o], m.x, m.y))) };
    const mx = 100 - m.x;
    const mir = { own: nearLetter(list, [L], mx, m.y), other: Math.min(...others.map((o) => nearLetter(list, [o], mx, m.y))) };
    rows.push({ id: m.id, label: m.label, cur, mir });
  }

  const winsCur = rows.filter((r) => r.cur.own < r.cur.other).length;
  const winsMir = rows.filter((r) => r.mir.own < r.mir.other).length;
  return { slug, rows, winsCur, winsMir, total: rows.length };
}

function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  const callouts = loadJson(path.join(ROOT, 'data', 'callouts.json'));
  const slugs = args.length ? args : Object.keys(callouts).filter((k) => !k.startsWith('_'));

  const suspects = [];
  for (const slug of slugs) {
    const r = audit(slug, callouts[slug] || {});
    if (!r) continue;
    const verdict = r.winsMir > r.winsCur ? '镜像 ←' : r.winsCur > r.winsMir ? '当前 OK' : '持平 ?';
    console.log(
      `${verdict.padEnd(8)} ${slug.padEnd(9)} 自称阵营更贴近同字母 callout：当前 ${String(r.winsCur).padStart(2)}/${r.total}，镜像后 ${String(r.winsMir).padStart(2)}/${r.total}`
    );
    if (r.winsMir > r.winsCur) suspects.push(slug);
    if (process.env.VERBOSE) {
      for (const row of r.rows) {
        console.log(`    ${row.id.padEnd(24)} ${row.label}  当前 own=${row.cur.own.toFixed(1)} other=${row.cur.other.toFixed(1)} | 镜像 own=${row.mir.own.toFixed(1)} other=${row.mir.other.toFixed(1)}`);
      }
    }
  }
  if (suspects.length) console.log(`\n疑似左右对调：${suspects.join(', ')}`);
}

main();
