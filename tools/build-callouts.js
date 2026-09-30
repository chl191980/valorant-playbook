#!/usr/bin/env node
/**
 * build-callouts.js —— 把 data/callouts.json 编译成浏览器可直接 <script> 加载的 data/callouts.js
 *
 * data/callouts.json 由 Wiki callout 抓取脚本产出（origin bottom-left、0..1024），
 * 里面已经是换算好的「小地图百分比（左上原点）」。本工具只做两件事：
 *   1. 给英文 callout 名配一个中文名（术语表逐词翻译，翻不出来的词原样保留）；
 *   2. 包成 window.CALLOUTS = {...} 写进 data/callouts.js。
 *
 * 用法：node tools/build-callouts.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'callouts.json');
const OUT = path.join(ROOT, 'data', 'callouts.js');

/** 逐词术语表：命中就换成中文。键一律小写。 */
const TERMS = {
  'site': '包点',
  'spike site': '包点',
  'a site': 'A 包点', 'b site': 'B 包点', 'c site': 'C 包点',
  'main': '主道',
  'hall': '大厅',
  'lobby': '前厅',
  'heaven': '天堂',
  'hell': '地狱',
  'rafters': '架梁',
  'tree': '树', 'trees': '树',
  'generator': '发电机',
  'boathouse': '船屋',
  'market': '市场',
  'pizza': '披萨店',
  'wine': '酒窖',
  'back': '后方',
  'back site': '后包点',
  'spawn': '出生点',
  'attacker side spawn': '进攻方出生点',
  'defender side spawn': '防守方出生点',
  'attacker side': '进攻方',
  'defender side': '防守方',
  'attacker spawn': '进攻方出生点',
  'defender spawn': '防守方出生点',
  'nest': '巢',
  'window': '窗口',
  'bridge': '桥',
  'shop': '商店',
  'tunnel': '隧道',
  'elbow': '拐角',
  'ramp': '斜坡',
  'stairs': '楼梯',
  'cave': '洞穴',
  'hookah': '水烟房',
  'short': '短道',
  'long': '长道',
  'mid': '中路',
  'mid doors': '中路门',
  'doors': '门',
  'wood doors': '木门',
  'pillar': '柱子',
  'link': '连接',
  'cubby': '凹槽',
  'garden': '花园',
  'sewer': '下水道',
  'tower': '塔',
  'bench': '长椅',
  'default': '默认位',
  'ult orb': '大招球',
  'ultimate orb': '大招球',
  'ascender': '升降台',
  'zipline': '滑索',
  'automatic door': '自动门',
  'teleporter': '传送门',
  'pyramid': '金字塔', 'pyramids': '金字塔',
  'wall': '墙',
  'arches': '拱门',
  'arch': '拱门',
  'cannon': '加农炮',
  'grass': '草丛',
  'sand': '沙地',
  'water': '水域',
  'statue': '雕像',
  'top': '上层',
  'bottom': '下层',
  'switch': '开关',
  'crane': '吊车',
  'docks': '码头',
  'bar': '吧台',
  'kitchen': '厨房',
  'showers': '淋浴间',
  'sewers': '下水道',
  'boat': '船',
  'logs': '木堆',
  'boxes': '箱子',
  'crate': '木箱', 'crates': '木箱',
  'orange': '橙箱',
  'green': '绿箱',
  'yellow': '黄箱',
  'graffiti': '涂鸦墙',
  'post': '岗哨',
  'office': '办公室',
  'garage': '车库',
  'hut': '小屋',
  'rubble': '碎石堆',
  'double': '双箱',
  'cubbyhole': '壁龛',
  'alley': '小巷',
  'court': '庭院',
  'fountain': '喷泉',
  'pool': '水池',
  'terrace': '露台',
  'balcony': '阳台',
  'walkway': '走道',
  'underpass': '地下通道',
  'vent': '通风管',
  'tube': '管道',
  'metro': '地铁',
  'train': '火车',
  'station': '车站',
  'plant': '种植区',
  'hub': '中枢',
  'connector': '连接道',
  'cross': '十字路口',
  'danger': '危险区',
  'new': '新',
  'old': '旧',
  'left': '左',
  'right': '右',
  'front': '前',
  'outer': '外',
  'inner': '内',
  'upper': '上层',
  'lower': '下层',
  'art': '壁画墙',
  'bend': '弯道',
  'tiles': '瓷砖区',
  'gym': '健身房',
  'trophy': '奖杯室',
  'drop': '跳台',
  'silent drop': '静音跳台',
  'pocket': '口袋区',
  'yard': '场地',
  'wall switch': '墙开关',
  'loudspeaker': '广播器',
  'radio': '无线电',
  'messages': '留言板',
  'dome': '穹顶',
  'hole': '洞口',
  'pit': '坑',
  'lane': '巷道',
  'deck': '平台',
  'hut': '小屋',
  'boba': '奶茶店',
  'courtyard': '中庭',
  'mound': '土丘',
  'waterfall': '瀑布',
  'lotus': '莲池',
  'zoo': '动物园',
  'snake': '蛇道',
  'rafters': '架梁',
  'vault': '金库',
  'subway': '地铁',
  'atrium': '中庭',
  'skybridge': '天桥',
  'drip': '排水口',
  'snowman': '雪人',
  'pipes': '管道',
  'kitchen': '厨房',
  'bath': '浴池',
  'cannon': '加农炮',
  'apse': '拱顶',
  'steps': '台阶'
};

/** 保留原样的方位字母与数字。 */
const KEEP = new Set(['a', 'b', 'c', 'mid', 'i', 'ii', '1', '2', '3']);

function zhName(en) {
  if (!en) return '';
  const lower = en.trim().toLowerCase();
  if (TERMS[lower]) return TERMS[lower];
  const parts = lower.replace(/[()]/g, ' ').split(/\s+/).filter(Boolean);
  const out = parts.map((w) => {
    if (KEEP.has(w)) return w.toUpperCase();
    if (TERMS[w]) return TERMS[w];
    return w;
  });
  // "A 主道" / "中路 木门" —— 第一位是字母时用空格分隔更清楚
  const joined = out.join(' ').replace(/\s+/g, ' ').trim();
  return joined || en;
}

function main() {
  let data = {};
  if (fs.existsSync(SRC)) {
    const raw = fs.readFileSync(SRC, 'utf8').replace(/^\uFEFF/, '');
    data = JSON.parse(raw);
  } else {
    console.warn('⚠ 找不到 data/callouts.json，先写一个空的 data/callouts.js 占位。');
  }

  const out = {};
  let total = 0;
  for (const [slug, m] of Object.entries(data)) {
    if (slug.startsWith('_')) continue; // 跳过 _note 之类的说明字段
    const list = (m && m.callouts) || (Array.isArray(m) ? m : []);
    out[slug] = {
      en: (m && m.en) || slug,
      sites: (m && m.sites) || {},
      callouts: list.map((c) => ({
        name: c.name,
        zh: zhName(c.name),
        x: c.x, y: c.y,
        cat: c.cat || ''
      }))
    };
    total += out[slug].callouts.length;
  }

  const body = '/* 由 tools/build-callouts.js 自动生成，请勿手改；数据源 data/callouts.json */\n' +
    'window.CALLOUTS = ' + JSON.stringify(out, null, 0) + ';\n';
  fs.writeFileSync(OUT, body, 'utf8');

  const maps = Object.keys(out).length;
  console.log('已写出 data/callouts.js：' + maps + ' 张图、' + total + ' 个地名');
  for (const [slug, v] of Object.entries(out)) {
    console.log('  · ' + slug.padEnd(10) + v.callouts.length + ' 个' +
      (Object.keys(v.sites).length ? '，下包区 ' + Object.keys(v.sites).join('/') : ''));
  }
}

main();
