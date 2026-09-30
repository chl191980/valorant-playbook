#!/usr/bin/env node
/* 从 data/maps.json + data/agents.json 生成 data/core.js —— node tools/build-core.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8').replace(/^\uFEFF/, ''));

const maps = read('data/maps.json');
const agents = read('data/agents.json');

const ORDER = ['ascent', 'split', 'haven', 'bind', 'sunset', 'lotus', 'pearl',
  'icebox', 'breeze', 'fracture', 'abyss', 'summit', 'corrode'];
const slug = (a) => a.en.toLowerCase().replace(/[^a-z0-9]/g, '');
const roleMap = { '控场': 'controller', '先锋': 'initiator', '哨卫': 'sentinel', '决斗': 'duelist' };

const out = {
  maps: ORDER.map((s) => {
    const m = maps.find((x) => x.slug === s);
    return m ? { slug: m.slug, zh: m.zh, en: m.en, icon: m.icon, splash: m.splash } : null;
  }).filter(Boolean),
  agents: agents.map((a) => ({
    slug: slug(a), zh: a.zh, en: a.en, role: a.role,
    roleKey: roleMap[a.role] || 'other',
    icon: 'assets/agents/' + slug(a) + '.png',
    abilities: (a.abilities || []).map((ab) => ({
      slot: ab.slot, zh: ab.zh, en: ab.en,
      icon: 'assets/abilities/' + slug(a) + '-' + ab.slot.toLowerCase().replace(/[^a-z0-9]/g, '') + '.png'
    }))
  })).sort((a, b) => a.roleKey.localeCompare(b.roleKey) || a.en.localeCompare(b.en))
};

fs.writeFileSync(path.join(ROOT, 'data', 'core.js'),
  '/* 自动生成：node tools/build-core.js —— 数据源 valorant-api.com（语言 zh-CN） */\nwindow.CORE = ' +
  JSON.stringify(out, null, 1) + ';\n');
console.log('maps=' + out.maps.length + ' agents=' + out.agents.length);
