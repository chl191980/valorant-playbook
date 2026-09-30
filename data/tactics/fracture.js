window.TACTICS = window.TACTICS || {};
window.TACTICS['fracture'] = {
  slug: 'fracture',
  zh: '裂变峡谷',
  en: 'Fracture',
  overview: '环形双包点地图，进攻方在南北两侧同时出生，中路断桥把 A、B 两区连成一圈；防守方容易被上下两条线夹击，分兵压力极大。',
  markers: [
    {
      id: 'a-link-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A 连接烟',
      x: 66.4, y: 46,
      r: 7,
      from: { x: 68.6, y: 27 },
      aim: '站上 A 圆盘平台的木箱，准星抬到 A 连接门框上沿与远端钢梁的交点，暗影笼罩满蓄力后原地投放。',
      note: '切断防守方从出生点与中路补 A 的连接枪线，A 包点一旦被清空就不会被瞬间反打。',
      tags: ['A区', '进攻', '切枪线']
    },
    {
      id: 'a-drop-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'A 天降烟',
      x: 78.4, y: 43.2,
      r: 7,
      from: { x: 68.6, y: 27.4 },
      aim: '在 A 圆盘角落开天降烟幕平板，把烟圈中心压在 A 天降口台阶正上方，点选后立刻收板。',
      note: '封死 A 上方高台，防守方无法从天降口落到包点后方架枪，也看不到 A 圆的推进脚步。',
      tags: ['A区', '进攻', '高点']
    },
    {
      id: 'a-plant-smoke',
      side: 'attack',
      agent: 'viper',
      ability: 'smoke',
      label: 'A 包点烟',
      x: 88.5, y: 52,
      r: 7,
      from: { x: 83.5, y: 64.5 },
      aim: '贴 A 大出口左墙，准星对准 A 包点后墙的横向焊缝，轻抛毒云（不需要跳投）。',
      note: '把默认下包位与后墙一起盖住，进攻方只露一条窄线进场，占点后也能安全下包。',
      tags: ['A区', '进攻', '下包']
    },
    {
      id: 'a-default-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A 默认位漆弹',
      x: 88.9, y: 52.3,
      r: 4.5,
      from: { x: 83.3, y: 64.5 },
      aim: '从 A 大出口探半步，准星压到 A 包点地砖上默认下包贴纸的中心，原地抛漆弹。',
      note: '逼走蹲在默认位后箱子的防守方，配合烟一起进场可以直接站住包点。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-main-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 大侦查箭',
      x: 88.5, y: 50,
      r: 6,
      from: { x: 82.5, y: 63.5 },
      aim: '站 A 大门口贴左墙，准星抬到 A 包点上沿再高半个身位，满蓄力朝墙内斜上方射侦查箭（可跳投）。',
      note: '一发照出 A 包点、A 天降与 A 连接三条枪线，队伍开烟之前就能决定这波打不打。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-main-flash',
      side: 'attack',
      agent: 'kayo',
      ability: 'flash',
      label: 'A 大闪光',
      x: 85.5, y: 57,
      r: 3,
      from: { x: 83.3, y: 64.5 },
      aim: '站 A 大门口贴左墙，准星对准 A 包点前场立柱的顶端，原地抛出闪光驱动（左键短闪）。',
      note: '闪住 A 前点与箱子后的防守方，给决斗位制造一到两秒的进点窗口。',
      tags: ['A区', '进攻', '进点']
    },
    {
      id: 'b-tower-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'B 塔楼烟',
      x: 11.7, y: 44.8,
      r: 7,
      from: { x: 14.1, y: 68.5 },
      aim: '站 B 大门口贴右墙，准星抬到 B 塔楼窗口上沿与地图边墙的交点，暗影笼罩满蓄力原地投。',
      note: '盖掉 B 塔楼对包点的高点视野，下路强攻 B 时不会被塔楼先手点名。',
      tags: ['B区', '进攻', '高点']
    },
    {
      id: 'b-link-smoke',
      side: 'attack',
      agent: 'clove',
      ability: 'smoke',
      label: 'B 连接烟',
      x: 35.2, y: 42.1,
      r: 7,
      from: { x: 24.2, y: 67.7 },
      aim: '站 B 隧道口，准星对准 B 连接门框上沿再抬高半个身位，跑一步跳投烟雾。',
      note: '隔断防守方从 B 连接与中路的补位，B 包点被清掉之后不会被立刻反打。',
      tags: ['B区', '进攻', '切枪线']
    },
    {
      id: 'b-default-molly',
      side: 'attack',
      agent: 'brimstone',
      ability: 'molly',
      label: 'B 默认位燃烧弹',
      x: 11.3, y: 51.3,
      r: 4.5,
      from: { x: 14.1, y: 68.5 },
      aim: '在 B 大门口贴左墙，准星压到 B 包点默认下包位的地砖缝，原地投燃烧弹。',
      note: '把默认下包位烧出来，逼防守方离开箱子，配合烟可以无伤下包。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-site-recon',
      side: 'attack',
      agent: 'fade',
      ability: 'recon',
      label: 'B 区诡眼',
      x: 11.5, y: 50,
      r: 6,
      from: { x: 14.1, y: 68.5 },
      aim: '站 B 大门口，准星抬到 B 包点后墙顶端，原地抛诡眼后立刻跟枪。',
      note: '照出 B 包点内的站位与 B 塔楼的人，下路队伍第一时间就能判断是打点还是转点。',
      tags: ['B区', '进攻', '信息']
    },
    {
      id: 'b-upper-flash',
      side: 'attack',
      agent: 'skye',
      ability: 'flash',
      label: 'B 拱廊闪',
      x: 15.5, y: 47,
      r: 3,
      from: { x: 23.3, y: 34.7 },
      aim: '站 B 拱廊转角，准星朝向 B 包点立柱上方，操控引路之光从左路弯进包点，落点定在包点前沿再引爆。',
      note: '上层队伍进 B 的入点闪，配合下路同拍进场才能形成真正的上下夹击。',
      tags: ['B区', '进攻', '进点']
    },
    {
      id: 'mid-bridge-smoke',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: '中路断桥烟',
      x: 50.9, y: 43.2,
      r: 7,
      from: { x: 46.7, y: 80 },
      aim: '在出生点角落进入星界形态，把星云星体放在防守方出生点前的断桥地砖正中央，退出星界后按技能引爆。',
      note: '隔断防守方出生点到断桥的快速补位，是 Fracture 上下双线夹击能成立的前提。',
      tags: ['中路', '进攻']
    },
    {
      id: 'def-a-link-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A 连接绊线',
      x: 66.4, y: 46,
      r: 5,
      from: { x: 66, y: 48.5 },
      aim: '贴 A 连接内侧左墙，把绊线从门框拉到对面墙裙，高度压到第二格。',
      note: '任何从断桥或中路摸进 A 连接的人都会触发，防守方能提前半秒拉枪。',
      tags: ['A区', '防守', '预警']
    },
    {
      id: 'def-a-gate-alarmbot',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'A 大门警报',
      x: 67.4, y: 14.4,
      r: 5,
      from: { x: 67.5, y: 17 },
      aim: '蹲在 A 门内侧，把警报机器人贴地放在门框右侧的阴影里，准星一直贴着地面放。',
      note: '封住断桥方向进 A 门的第一条路径，触发后可以直接呼叫 A 区回防。',
      tags: ['A区', '防守', '预警']
    },
    {
      id: 'def-b-main-wall',
      side: 'defense',
      agent: 'viper',
      ability: 'wall',
      label: 'B 大毒幕',
      x: 14.5, y: 62,
      r: 12,
      from: { x: 16.5, y: 56 },
      aim: '站 B 包点内的木箱上，开毒幕平板把墙线沿 B 大入口拉成一条，横穿整个入口后立刻开墙。',
      note: 'B 大强攻最有效的拖延手段，配合 B 塔楼的高点可以白拿一到两个人头。',
      tags: ['B区', '防守', '拖延']
    },
    {
      id: 'def-mid-recon',
      side: 'defense',
      agent: 'fade',
      ability: 'recon',
      label: '中路诡眼',
      x: 30, y: 53,
      r: 6,
      from: { x: 33, y: 47 },
      aim: '站防守方出生点前三步，准星朝 B 发电机方向抬到二层墙沿，原地抛诡眼。',
      note: '开图看中路与 B 发电机的动向，判断对手是打 B 大还是走断桥转 A。',
      tags: ['中路', '防守', '信息']
    }
  ],
  strats: [
    {
      id: 'fracture-a-double-split',
      name: 'A 区上下双线夹击 (A Double Split)',
      side: 'attack',
      level: 4,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['mid-bridge-smoke', 'a-link-smoke', 'a-drop-smoke', 'a-main-recon', 'a-main-flash'],
      summary: '上路断桥组走 A 门，下路出生点组走 A 走廊，两条线同时砸进 A 包点。',
      steps: [
        '0:00 控场先在出生点把中路断桥烟架上，切断防守方出生点到断桥的快速补位。',
        '0:05 上路组从断桥进 A 门，贴 A 圆盘架好 A 连接烟与 A 天降烟，先锋同时准备开图。',
        '0:10 下路组走出生点 → A 走廊 → A 门 → A 大，全程静步，不交火也不露脚步。',
        '0:16 侦查箭从 A 大射进 A 包点照出两条枪线，闪光先出、决斗位踩包点前沿，两路同拍进场。',
        '0:24 清点后下包，控场把 A 包点烟补在默认位，哨卫退 A 连接架枪等回防。'
      ],
      tips: 'Fracture 的 A 区最怕两条线不同拍：上路先动、下路晚三秒就会被逐个击破。断桥烟和 A 连接烟要卡在同一秒起，才能真正把 A 包点切成孤岛。'
    },
    {
      id: 'fracture-b-lower-rush',
      name: 'B 区下路强攻 (B Rush)',
      side: 'attack',
      level: 2,
      comp: ['raze', 'fade', 'clove', 'killjoy', 'skye'],
      marks: ['b-tower-smoke', 'b-link-smoke', 'b-default-molly', 'b-site-recon'],
      summary: '五人堆下路 B 大，先封塔楼再烧默认位，一波把 B 包点打穿。',
      steps: [
        '0:00 五人全部走出生点下路，快进 B 树并卡住 B 大出口，B 长椅方向只留一个人听脚步。',
        '0:05 B 塔楼烟与 B 连接烟同时起，把两个高点与补位路线全部盖掉。',
        '0:09 诡眼抛进 B 包点开图，确认包点人数与 B 塔楼是否有人。',
        '0:12 燃烧弹烧掉默认下包位，决斗位贴 B 大左墙进场，先锋跟闪补枪。',
        '0:18 清点后直接下包，剩下的道具全部留给 B 连接的反打方向。'
      ],
      tips: 'B 区最怕拖，从 B 大进场到清点要控制在 20 秒内。塔楼烟没落地就不要进，改从 B 长椅方向走上层，节奏慢但更安全。'
    },
    {
      id: 'fracture-bridge-fake-rotate',
      name: '断桥佯攻转点 (Fake A into B)',
      side: 'attack',
      level: 5,
      comp: ['jett', 'sova', 'omen', 'cypher', 'breach'],
      marks: ['mid-bridge-smoke', 'b-upper-flash', 'b-tower-smoke'],
      summary: '上路在 A 门放道具骗回防，下路静默从断桥拉链转到 B 长椅。',
      steps: [
        '0:00 上路两人带满道具走断桥，对着 A 门方向丢侦查箭、放枪声，再补一颗 A 天降烟。',
        '0:07 下路三人保持静默，从出生点侧搭南向北的单向拉链直接拉到断桥。',
        '0:14 防守方回防 A 之后，下路三人从 B 长椅 → B 拱廊进 B 包点，控场补中路断桥烟切断回防。',
        '0:20 上路两人从 A 门退回断桥，搭另一条拉链合流，在 B 区形成四打二。',
        '0:26 下包后按 B 连接与 B 大两个方向分人架枪，控场把烟留到反打。'
      ],
      tips: 'Fracture 的两条拉链都是单向的，先确认方向再上，走错方向等于白送转点时间。转点时全队静步，骗人靠道具不靠枪声。'
    },
    {
      id: 'fracture-defense-212',
      name: '防守方 2-1-2 布阵 (2-1-2 Setup)',
      side: 'defense',
      level: 3,
      comp: ['cypher', 'killjoy', 'viper', 'omen', 'sova'],
      marks: ['def-a-link-trap', 'def-b-main-wall', 'def-mid-recon'],
      summary: 'A 区两人带陷阱守下路，B 区一人用毒幕撑住 B 大，中路留一人看断桥。',
      steps: [
        '0:00 A 区两人分守 A 包点与 A 天降，先把 A 连接绊线与 A 门警报机器人放好。',
        '0:08 B 区一人站 B 包点上箱，把毒幕沿 B 大入口拉满，自己只负责报点和拖延。',
        '0:15 中路一人守防守方出生点，诡眼开图看 B 发电机与断桥，判断对手是下路堆还是上路转。',
        '0:25 确认主攻方向后，A 区的人贴 A 连接、B 区的人撤 B 塔楼，等回防到位再一起反打。',
        '0:35 反清顺序是断桥口 → 包点 → 后场，先清补位线再进包点，别被背后偷人。'
      ],
      tips: 'Fracture 防守不能贪枪：B 大毒幕只要撑住十秒就够回防到位，宁可放包点也不要在大门口被换人头。'
    },
    {
      id: 'fracture-defense-mid-aggro',
      name: '中路前压断桥反清 (Mid Aggro)',
      side: 'defense',
      level: 4,
      comp: ['fade', 'cypher', 'killjoy', 'omen', 'jett'],
      marks: ['def-mid-recon', 'def-a-link-trap', 'def-a-gate-alarmbot'],
      summary: '开局两人前压中路与断桥，抢在进攻方铺开之前先吃掉落单。',
      steps: [
        '0:00 两人从防守方出生点前压，一人贴 B 发电机方向，一人贴中路断桥口。',
        '0:05 诡眼抛向 B 发电机与 A 圆盘两个方向，确认对手站位后再决定压哪边。',
        '0:10 抓到上路转点的落单就直接从断桥口推 A 门，把 A 门警报机器人留在身后当眼。',
        '0:16 前压得手就顺势架 A 连接，让对手的 A 区夹击少一条腿，再退回 A 包点。',
        '0:24 前压失败立刻回撤，A 连接绊线与 A 门警报是唯一的预警手段，别在开阔地带硬拼。'
      ],
      tips: 'Fracture 的中路前压收益高、代价也高，只在前两回合或对手经济局用。抓到一个人就要立刻收手，多压一步往往就是被反包。'
    }
  ]
};
