window.TACTICS = window.TACTICS || {};
window.TACTICS['split'] = {
  slug: 'split',
  zh: '霓虹町',
  en: 'Split',
  overview: '垂直落差极大的双包点地图，中路（Vent / 洗手间）是唯一能快速旋转的通道。A 坡与 B 天井都是高台，谁先站上高处谁就赢一半，因此绳索与烟的配合是这张图的灵魂。',

  markers: [
    // ── 进攻方 · A 区 ─────────────────────────────
    {
      id: 'a-heaven-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'A 天堂烟',
      x: 27, y: 5.5, r: 7, from: { x: 41, y: 21 },
      aim: '站在 A 坡（Ramp）上贴近左侧墙，准星抬到 A 天堂上方霓虹招牌的右下角，跳投。',
      note: 'A 天堂是 Split 最恶心的架枪位，不封掉它 A 大的人根本不敢露头。',
      tags: ['A区', '进攻', '核心烟']
    },
    {
      id: 'a-main-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'A 大口封烟',
      x: 37.2, y: 8.7, r: 7, from: { x: 47, y: 15 },
      aim: '在 A 大里用炼狱战术目镜直接点选 A 大口正中，压住防守方的第一时间架枪。',
      note: '把防守方的第一枪线切掉，让进攻方可以先站住 A 坡再决定怎么进。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-site-molly', side: 'attack', agent: 'brimstone', ability: 'molly', label: 'A 站烧后手',
      x: 29, y: 9, r: 4.5, from: { x: 45.4, y: 13 },
      aim: '在 A 大口对着 A 站包点靠后的地面，用燃烧弹抛物线越墙丢入箱子后侧。',
      note: '逼走习惯在包点后侧等回防的防守方，为下包清出空间。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-ramp-recon', side: 'attack', agent: 'sova', ability: 'recon', label: 'A 坡侦查箭',
      x: 33, y: 14, r: 6, from: { x: 43, y: 21 },
      aim: '站在 A 坡上，满蓄力侦查箭射向 A 站上方的棚顶，反弹一次落在包点正中央。',
      note: 'A 站空间窄，一支侦查箭基本上能扫出所有守点的人。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-vent-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: '中路上方封烟',
      x: 49, y: 32, r: 7, from: { x: 46.6, y: 37.7 },
      aim: '站在中路（Mid）贴右墙，准星对准中路上方（Vent）通道口顶部棱线，原地投。',
      note: '切断防守方从中路往 A / B 的快速旋转，是 Split 控中路的必修课。',
      tags: ['中路', '进攻', '控图']
    },

    // ── 进攻方 · B 区 ─────────────────────────────
    {
      id: 'b-heaven-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'B 天堂烟',
      x: 44, y: 68.5, r: 7, from: { x: 50.8, y: 78 },
      aim: '站在 B 大口内贴右墙，准星抬到 B 天堂上方横排霓虹灯管的正中央，跳投。',
      note: 'B 天堂俯瞰整个 B 站，这个烟没落地就进 B 等于送。',
      tags: ['B区', '进攻', '核心烟']
    },
    {
      id: 'b-main-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'B 大口封烟',
      x: 45.6, y: 73.5, r: 7, from: { x: 55, y: 78 },
      aim: '在 B 大口用战术目镜点选 B 大口地面正中，把整条通道口盖住。',
      note: 'B 大口是窄门，一颗烟就能让防守方的交叉火力完全失效。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-site-molly', side: 'attack', agent: 'raze', ability: 'molly', label: 'B 站内燃烧弹',
      x: 33, y: 79, r: 5, from: { x: 50.8, y: 78 },
      aim: '站在 B 大口，准星对准 B 站内左侧箱子的棱角，平抛油漆弹让它在箱子后弹开。',
      note: 'Split 的 B 站全是小隔间，燃烧弹比子弹更容易清人。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-back-smoke', side: 'attack', agent: 'astra', ability: 'smoke', label: 'B 后场星云',
      x: 28.9, y: 84.5, r: 7, from: { x: 45.6, y: 71.5 },
      aim: '提前在 B 后场放置星辰（Star），进点时直接引爆成星云，不用瞄准。',
      note: '星礈的优势是不需要露头瞄准，B 后场这种深处烟位用她最安全。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-garage-recon', side: 'attack', agent: 'fade', ability: 'recon', label: 'B 车库探测',
      x: 49.4, y: 65.4, r: 6, from: { x: 49.2, y: 69.3 },
      aim: '黑梦在 B 大口外把「窥视之眼」抛向 B 车库方向的墙面，让它挂在墙顶往下照。',
      note: 'B 车库是防守方最常蹲的补枪位，先照再进，能省掉一个队友。',
      tags: ['B区', '进攻', '信息']
    },
    {
      id: 'mid-toilets-molly', side: 'attack', agent: 'viper', ability: 'molly', label: '洗手间清点',
      x: 40, y: 35, r: 5, from: { x: 44.7, y: 37.7 },
      aim: '在中路把蝰蛇的毒液（Snake Bite）抛物线丢向洗手间（Toilets）门口地面，覆盖整个门框。',
      note: '洗手间是防守方插在中路的一颗钉子，不清掉它中路永远推不上去。',
      tags: ['中路', '进攻', '清点']
    },

    // ── 防守方 ────────────────────────────────────
    {
      id: 'def-a-ramp-smoke', side: 'defense', agent: 'omen', ability: 'smoke', label: '守 A · 封 A 坡',
      x: 41.5, y: 20, r: 7, from: { x: 30, y: 13 },
      aim: '站在 A 站里，准星对准 A 坡斜坡上方第一盏吊灯的灯座，跳投。',
      note: 'A 坡是 A 区的主攻方向，听到脚步先封坡，把进攻方逼到 A 大再处理。',
      tags: ['A区', '防守']
    },
    {
      id: 'def-a-heaven-trap', side: 'defense', agent: 'cypher', ability: 'trap', label: '守 A · 天堂警报',
      x: 26.5, y: 7, r: 4, from: { x: 27, y: 6 },
      aim: '把陷阱线横拉在 A 天堂入口的两面墙之间，高度齐腰，逼对方必须开枪打掉。',
      note: 'A 天堂是防守方自己的高台，一条线就能保住它不被进攻方偷上去。',
      tags: ['A区', '防守', '信息']
    },
    {
      id: 'def-mid-vent-molly', side: 'defense', agent: 'killjoy', ability: 'molly', label: '守中 · 封 Vent',
      x: 49.5, y: 31, r: 5, from: { x: 47, y: 38 },
      aim: '在中路把纳米蜂群直接丢到中路上方（Vent）出口的地面上，落地即触发。',
      note: 'Split 的旋转全靠 Vent，一颗蜂群就能把对面的快攻节奏打断。',
      tags: ['中路', '防守']
    },
    {
      id: 'def-b-heaven-wall', side: 'defense', agent: 'harbor', ability: 'wall', label: '守 B · 水墙切场',
      x: 43, y: 72, r: 10, from: { x: 36, y: 76 },
      aim: '站在 B 站里正对 B 大口方向，把「海潮」水墙沿 B 大口到 B 站的连线推出，横切整条通道。',
      note: '水墙比烟更难被拆，B 区被压时用它拖时间等队友旋转。',
      tags: ['B区', '防守']
    },
    {
      id: 'def-b-site-molly', side: 'defense', agent: 'killjoy', ability: 'molly', label: '守 B · 站内封点',
      x: 33, y: 81, r: 5, from: { x: 30, y: 78 },
      aim: '站在 B 站内靠后，把蜂群丢到包点正中央地面上，覆盖下包位。',
      note: '听到下包声立刻丢，一颗蜂群往往能直接打断拆包或逼出对面走位。',
      tags: ['B区', '防守']
    },
    {
      id: 'def-a-ult-sova', side: 'defense', agent: 'sova', ability: 'ult', label: '守 A · 大招封坡',
      x: 37.2, y: 14.2, r: 8, from: { x: 31, y: 11 },
      aim: '站在 A 站，把猎兽之怒的三道能量波沿 A 坡方向贴地推出，覆盖整条斜坡。',
      note: 'A 坡是长条通道，这道大招几乎无法躲，是防守方最稳的收人头手段。',
      tags: ['A区', '防守', '大招']
    }
  ],

  strats: [
    {
      id: 'split-a-execute', name: 'A 大 + A 坡双夹 (A Split)', side: 'attack', level: 3,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['a-heaven-smoke', 'a-main-smoke', 'a-site-molly', 'a-ramp-recon'],
      summary: '一路走 A 大、一路走 A 坡，同时到场，用两颗烟把 A 天堂和 A 大口一起切掉。',
      steps: [
        '0:00 三人走 A 大（A Main），两人走 A 坡（Ramp），保持完全同步的节奏。',
        '0:05 幽影在 A 坡封 A 天堂烟，炼狱在 A 大封 A 大口烟。',
        '0:08 炼狱的燃烧弹落在 A 站后手位，逼走蹲箱的人。',
        '0:12 A 坡的猎枭射侦查箭，确认站内人数后两边同时进。',
        '0:18 下包后一人卡 A 天堂下方，一人退回 A 坡看回头。'
      ],
      tips: '这套最怕的是不同步：A 坡先响枪、A 大还在走，防守方就只需要处理一边。所以约定一个「三、二、一」的口令再一起出门。'
    },
    {
      id: 'split-mid-control', name: '中路控制转 B (Mid Control → B)', side: 'attack', level: 4,
      comp: ['jett', 'fade', 'omen', 'viper', 'killjoy'],
      marks: ['a-vent-smoke', 'mid-toilets-molly', 'b-heaven-smoke', 'b-main-smoke'],
      summary: '先在 30 秒内吃下中路与洗手间，逼防守方分兵，然后从中路和 B 大同时压 B。',
      steps: [
        '0:00 两人进中路，幽影封「中路上方」切断防守方的旋转路线。',
        '0:06 蝰蛇用毒液清掉洗手间，黑梦的窥视之眼照 B 车库。',
        '0:20 确认防守方中路只剩一人后，两人从 Vent 摸到 B 附近。',
        '0:35 B 天堂烟 + B 大口烟同时落地，中路与 B 大两路一起进。'
      ],
      tips: 'Split 的中路拿下后，B 区的回防时间会被拉长到 8 秒以上；但中路一旦死人就要立刻放弃转点，改打 A。'
    },
    {
      id: 'split-b-execute', name: 'B 区标准爆点 (B Execute)', side: 'attack', level: 2,
      comp: ['jett', 'raze', 'omen', 'astra', 'kayo'],
      marks: ['b-heaven-smoke', 'b-main-smoke', 'b-site-molly', 'b-back-smoke', 'b-garage-recon'],
      summary: '四颗烟把 B 天堂、B 大口、B 后场、B 车库全部封死，然后全员从 B 大正面推。',
      steps: [
        '0:00 五人静步压到 B 大口外，星礈提前在 B 后场放好星辰。',
        '0:02 星礈引爆 B 后场星云，同时幽影封 B 天堂、炼狱封 B 大口。',
        '0:05 黑梦/猎枭探测 B 车库，确认没有埋伏。',
        '0:08 雷兹燃烧弹清 B 站小隔间，随后全员进点。',
        '0:14 下包后一人留守 B 大口外，专门盯中路的回防。'
      ],
      tips: 'Split 的 B 站很碎，进点后千万不要站着不动，必须立刻把每个小隔间踩一遍，否则回防的人随便一个角就能翻盘。'
    },
    {
      id: 'split-defense-a', name: 'A 区重防 + 中路信息 (A Stack)', side: 'defense', level: 3,
      comp: ['jett', 'sova', 'omen', 'cypher', 'harbor'],
      marks: ['def-a-ramp-smoke', 'def-a-heaven-trap', 'def-mid-vent-molly', 'def-a-ult-sova'],
      summary: '三人压 A，用天堂线和中路信息提前预判 A 大/A 坡的主攻方向。',
      steps: [
        '0:00 零把陷阱线布在 A 天堂入口，奇乐把蜂群预留在 Vent。',
        '0:05 三人分别卡 A 坡上、A 大口、A 天堂，形成上下交叉。',
        '0:15 听到 A 坡脚步，幽影先封 A 坡，猎枭大招封整条斜坡。',
        '0:30 若判断是中路转 B，中路与 B 的队友立刻收缩，A 区留一人看门。'
      ],
      tips: 'A 天堂不能让给进攻方，哪怕只用一条警报线也要保住；Split 里进攻方拿到 A 天堂基本等于赢下这一回合。'
    },
    {
      id: 'split-defense-b', name: 'B 区水墙防守 (B Hold)', side: 'defense', level: 2,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'harbor'],
      marks: ['def-b-heaven-wall', 'def-b-site-molly', 'def-mid-vent-molly'],
      summary: '用海神水墙 + 奇乐蜂群把 B 大口变成死亡走廊，等对面撞上来。',
      steps: [
        '0:00 海神把水墙贴着 B 大口方向预架，奇乐蜂群丢在 B 站包点正中。',
        '0:05 两人卡 B 天堂与 B 站右角，第三人在中路口拿信息。',
        '0:10 听到 B 大口脚步，海神立刻推水墙，蜂群同时落地。',
        '0:20 中路队友回防从 B 车库夹击，不要在 B 大口正面换枪。'
      ],
      tips: 'B 区防守的核心是「换位」而不是「对枪」：水墙一开就换到侧翼去，正面站着只有被烟雾弹后面的爆头线吃掉。'
    }
  ]
};
