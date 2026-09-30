#!/usr/bin/env node
/* 战术数据校验器： node tools/validate.js [slug...]   不带参数则校验全部 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TACTICS_DIR = path.join(ROOT, 'data', 'tactics');
const AGENTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'agents.json'), 'utf8').replace(/^\uFEFF/, ''));
const AGENT_SLUGS = new Set(
  AGENTS.map(a => a.en.toLowerCase().replace(/[^a-z0-9]/g, ''))
);
const ABILITIES = new Set(['smoke', 'molly', 'flash', 'recon', 'wall', 'trap', 'ult', 'other']);
const SIDES = new Set(['attack', 'defense', 'both']);

function loadTactics(slug) {
  const file = path.join(TACTICS_DIR, slug + '.js');
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  new Function('window', code)(sandbox.window);
  const t = sandbox.window.TACTICS && sandbox.window.TACTICS[slug];
  if (!t) throw new Error('文件加载后 window.TACTICS["' + slug + '"] 不存在');
  return t;
}

function validate(slug) {
  const errs = [];
  const warns = [];
  let t;
  try { t = loadTactics(slug); }
  catch (e) { return { errs: ['加载失败: ' + e.message], warns: [] }; }

  const pct = (v) => typeof v === 'number' && v >= -2 && v <= 102;

  if (!t.zh || !t.en) errs.push('缺少 zh / en 名称');
  if (!t.overview || t.overview.length < 10) errs.push('overview 缺失或过短');
  if (!Array.isArray(t.markers) || t.markers.length < 12) errs.push('markers 少于 12 个（当前 ' + (t.markers || []).length + '）');
  if (!Array.isArray(t.strats) || t.strats.length < 4) errs.push('strats 少于 4 套（当前 ' + (t.strats || []).length + '）');

  const ids = new Set();
  const seen = new Set();
  for (const m of t.markers || []) {
    const tag = 'marker[' + (m.id || '?') + ']';
    if (!m.id) errs.push(tag + ' 缺少 id');
    else if (seen.has(m.id)) errs.push(tag + ' id 重复');
    else seen.add(m.id);
    if (!AGENT_SLUGS.has(m.agent)) errs.push(tag + ' agent 非法: ' + m.agent);
    if (!ABILITIES.has(m.ability)) errs.push(tag + ' ability 非法: ' + m.ability);
    if (!SIDES.has(m.side)) errs.push(tag + ' side 非法: ' + m.side);
    if (!pct(m.x) || !pct(m.y)) errs.push(tag + ' 落点坐标越界: ' + m.x + ',' + m.y);
    if (!m.label) errs.push(tag + ' 缺少 label');
    if (!m.aim) warns.push(tag + ' 缺少 aim（核心字段，强烈建议补上）');
    if (!m.note) warns.push(tag + ' 缺少 note');
    if (m.from && (!pct(m.from.x) || !pct(m.from.y))) errs.push(tag + ' from 坐标越界');
    if (m.r !== undefined && (typeof m.r !== 'number' || m.r <= 0 || m.r > 40)) errs.push(tag + ' r 非法: ' + m.r);
  }

  const stratSides = new Set();
  for (const s of t.strats || []) {
    const tag = 'strat[' + (s.id || s.name || '?') + ']';
    if (!s.id) errs.push(tag + ' 缺少 id');
    if (!s.name) errs.push(tag + ' 缺少 name');
    if (!SIDES.has(s.side) || s.side === 'both') errs.push(tag + ' side 必须为 attack 或 defense');
    stratSides.add(s.side);
    if (!Array.isArray(s.comp) || s.comp.length !== 5) errs.push(tag + ' comp 必须为 5 个特工');
    else s.comp.forEach(a => { if (!AGENT_SLUGS.has(a)) errs.push(tag + ' comp 中 agent 非法: ' + a); });
    if (!Array.isArray(s.steps) || s.steps.length < 3) errs.push(tag + ' steps 少于 3 条');
    if (!s.summary) errs.push(tag + ' 缺少 summary');
    for (const mid of s.marks || []) {
      if (!seen.has(mid)) errs.push(tag + ' 引用了不存在的 marker: ' + mid);
    }
  }
  if (t.strats && t.strats.length && !stratSides.has('attack')) warns.push('缺少进攻方打法');
  if (t.strats && t.strats.length && !stratSides.has('defense')) warns.push('缺少防守方打法');

  return { errs, warns };
}

const args = process.argv.slice(2);
const slugs = args.length
  ? args
  : fs.readdirSync(TACTICS_DIR).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''));

let bad = 0;
for (const slug of slugs) {
  let r;
  try { r = validate(slug); } catch (e) { r = { errs: [e.message], warns: [] }; }
  if (r.errs.length) {
    bad++;
    console.log('\n✗ ' + slug);
    r.errs.forEach(e => console.log('   ERROR ' + e));
  } else {
    console.log('\n✓ ' + slug);
  }
  r.warns.forEach(w => console.log('   warn  ' + w));
}
console.log('\n' + (bad ? bad + ' 个文件存在错误' : '全部通过'));
process.exit(bad ? 1 : 0);
