# 战术数据文件规范 (Tactics Data Schema)

每张地图一个文件：`data/tactics/<slug>.js`

文件必须是**纯浏览器脚本**（非 ES module），形如：

```js
window.TACTICS = window.TACTICS || {};
window.TACTICS['ascent'] = {
  slug: 'ascent',
  zh: '亚海悬城',
  en: 'Ascent',
  overview: '一句话地图特征（30~60字）：几个包点、中路结构、进攻/防守倾向。',
  markers: [ /* 见下 */ ],
  strats: [ /* 见下 */ ]
};
```

## 坐标系统

以**地图小地图图片的百分比**表示，左上角为 (0, 0)，右下角为 (100, 100)。
参考图（带 10% 网格标注）在：`D:\dsh\valorant-playbook\_grid\<slug>_grid.png`
**务必先用 read_image 查看该图**，再写下坐标，误差控制在 3% 以内。

## markers[] — 道具点位

```js
{
  id: 'a-heaven-smoke',        // 全图唯一，kebab-case
  side: 'attack',              // 'attack' 进攻方用 | 'defense' 防守方用 | 'both'
  agent: 'omen',               // 特工 slug，见下方允许列表（小写）
  ability: 'smoke',            // smoke | molly | flash | recon | wall | trap | ult | other
  label: 'A 天堂烟',            // 8 字以内
  x: 30.5, y: 12,              // 【落点】百分比坐标
  r: 7,                        // 作用半径（百分比），smoke 默认 7，molly 默认 4.5，flash 默认 3
  from: { x: 45, y: 20 },      // 【站位】施放者所在位置百分比坐标（可选，强烈建议填）
  aim: '站在 A 大门口贴右墙，准星对准天上信号塔顶端的红白横杆，跳投。',
  note: '封住 A 天堂视野，让队友可以从 A 大正面压进。',   // 战术价值，一句话
  tags: ['A区', '进攻']         // 可选标签
}
```

**要求**
- `aim` 必须写清「站哪 → 看哪 → 怎么投（跳投/原地/蓄力）」，这是本站的核心价值。
- 每张图 **12~16 个** markers：进攻方烟位/道具为主，包含 3~5 个防守方道具。
- 烟（smoke）要覆盖包点关键视野（天堂、后场、连接、双门等）。
- 不要编造特工不存在的能力：写之前确认该特工确实有这个技能。

## strats[] — 职业打法

```js
{
  id: 'ascent-a-split',
  name: 'A 区双点夹击 (A Split)',
  side: 'attack',              // attack | defense
  level: 3,                    // 1 简单 ~ 5 复杂（配合难度）
  comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],   // 推荐 5 人阵容（slug）
  marks: ['a-heaven-smoke', 'a-tree-molly'],           // 关联的 markers id，点击高亮
  summary: '一句话说明这套打法的核心思路（40 字以内）。',
  steps: [
    '0:00 炼狱在 A 大封天堂烟，猎枭无人机清 A 树，',
    '0:08 捷风开烟进场……'
  ],
  tips: '职业队常用的细节/反制思路，一到两句。'
}
```

**要求**
- 每张图 **4~5 套**打法，进攻/防守都要有。
- `name` 用中文 + 括号英文术语，例如「B 区快打 (B Rush)」「中路前压 (Mid Push)」。
- `steps` 3~6 条，带时间轴或顺序词，写具体到技能与站位。
- `comp` 5 个 slug，符合当前版本常见阵容（一般 1 控场 + 1 先锋 + 1 决斗 + 1 哨卫 的结构）。
- `marks` 只能引用本文件 markers 里存在的 id。

## 允许的 agent slug

gekko, fade, breach, deadlock, tejo, raze, chamber, kayo, skye, cypher, sova, miks,
killjoy, harbor, vyse, viper, phoenix, veto, astra, brimstone, iso, clove, neon,
yoru, waylay, sage, reyna, omen, jett

（中文名对照：控场=炼狱 brimstone / 蝰蛇 viper / 幽影 omen / 星礈 astra / 海神 harbor / 暮蝶 clove / 迷核 miks；
先锋=猎枭 sova / 铁臂 breach / 斯凯 skye / 黑梦 fade / K/O kayo / 盖可 gekko / 钛狐 tejo；
哨卫=奇乐 killjoy / 零 cypher / 尚勃勒 chamber / 钢锁 deadlock / 维斯 vyse / 贤者 sage / 禁灭 veto；
决斗=捷风 jett / 雷兹 raze / 不死鸟 phoenix / 芮娜 reyna / 夜露 yoru / 霓虹 neon / 壹决 iso / 幻棱 waylay）

## 校验

写完运行：`node tools/validate.js <slug>`，必须 0 错误后才能交付。
