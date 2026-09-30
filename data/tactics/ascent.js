window.TACTICS = window.TACTICS || {};
window.TACTICS['ascent'] = {
  slug: 'ascent',
  zh: '亚海悬城',
  en: 'Ascent',
  overview: '双包点 + 开阔中路的经典结构。中路（Market / Boathouse）是全图枢纽，谁控住中路谁就能自由选择 A / B，因此烟位与侦查的优先级高于单纯的对枪。',

  markers: [
    // ── 进攻方 · A 区 ─────────────────────────────
    {
      id: 'a-heaven-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'A 天堂烟',
      x: 36.5, y: 18.5, r: 7.5, from: { x: 42.5, y: 11 },
      aim: '站在 A 大门口内侧贴右墙，准星抬到天上信号塔塔身偏左上、与塔顶红灯齐平，原地投（无需跳）。',
      note: '封掉 A 天堂后，防守方在 A 站内失去最高视野，A 大正面才能安全压进去。',
      tags: ['A区', '进攻', '核心烟']
    },
    {
      id: 'a-trees-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'A 树烟',
      x: 38, y: 21.5, r: 7.5, from: { x: 42.9, y: 12 },
      aim: '在 A 大门口用炼狱战术目镜直接点选 A 树（Trees）房间中心，不用瞄天空。',
      note: '切断 A 树到 A 站的补枪线，同时挡住中路上来夹击的防守方。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-generator-molly', side: 'attack', agent: 'brimstone', ability: 'molly', label: 'A 发电机清点',
      x: 26.5, y: 13, r: 4.5, from: { x: 42, y: 11.5 },
      aim: '站在 A 大门口，准星对准 A 站内发电机（Generator）箱体的上沿，用燃烧弹抛物线越墙丢入。',
      note: '开局先烧发电机后手位，逼走习惯蹲在箱子后的防守方。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-ct-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'A 后场烟',
      x: 30, y: 20, r: 7, from: { x: 43, y: 12 },
      aim: '在 A 大门口向 A 后场（CT 出口）方向抬高约 30°，看准后场拱门上方第一根横梁投出。',
      note: '封死防守方从 CT 出来补 A 的最短路线，是 A 爆点里最容易漏的一个烟。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-sova-recon', side: 'attack', agent: 'sova', ability: 'recon', label: 'A 站侦查箭',
      x: 30, y: 10, r: 6, from: { x: 43, y: 12 },
      aim: '站在 A 大门口，一发蓄力满的侦查箭射向 A 站顶棚，让箭在包点正上方反弹一次落地。',
      note: '扫出 A 站里所有守点的人，配合烟的节奏让队友知道往哪补枪。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-hunters-fury', side: 'attack', agent: 'sova', ability: 'ult', label: 'A 站大招洗地',
      x: 29, y: 12, r: 9, from: { x: 42.5, y: 11.5 },
      aim: '站在 A 大门口，把猎兽之怒的三道能量波压在 A 站地面（贴地扫），覆盖发电机到天堂下方一整条线。',
      note: '队友刚下包或对方强行回防时开，是逼退拆包的终极手段。',
      tags: ['A区', '进攻', '大招']
    },

    // ── 进攻方 · B 区 / 中路 ───────────────────────
    {
      id: 'b-main-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'B 大口烟',
      x: 34.5, y: 70, r: 7, from: { x: 40, y: 62 },
      aim: '站在 B 大口内侧，准星抬到 B 站上方灯柱的最顶端，向前轻推一下投出。',
      note: '把 B 站正面切开，让进点的人只需要处理左右两个夹角。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-site-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'B 站内烟',
      x: 27, y: 76, r: 7.5, from: { x: 39, y: 64 },
      aim: '在 B 大口用战术目镜点选 B 站包点中心稍靠后一点的位置。',
      note: '封住 B 后场（B 天台）的辅助视野，让下包位只能听到脚步。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-heaven-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'B 天堂烟',
      x: 31, y: 84, r: 7, from: { x: 40, y: 64 },
      aim: '站在 B 大口，准星对准 B 站最深处上方那根斜梁的接缝处，跳投。',
      note: 'B 天堂是 B 区最常见的架枪位，不封这个烟进点必被点名。',
      tags: ['B区', '进攻', '核心烟']
    },
    {
      id: 'b-back-molly', side: 'attack', agent: 'raze', ability: 'molly', label: 'B 后场燃烧弹',
      x: 26, y: 86, r: 5, from: { x: 39, y: 66 },
      aim: '在 B 大口贴左墙，准星对准 B 后场地面与墙面交线的中点，平抛油漆弹。',
      note: '直接烧掉 B 后场蹲点，配合烟让防守方没有落脚的地方。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'mid-market-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'Market 封锁烟',
      x: 61, y: 28, r: 7, from: { x: 52, y: 42 },
      aim: '在中路（Mid）对着 Market 方向，准星抬到 Market 窗户上沿再往上一个准星高度，原地投。',
      note: '中路控制的第一步：Market 被切断后，进攻方可以安全地把人推进到 Market 门口。',
      tags: ['中路', '进攻', '控图']
    },
    {
      id: 'mid-sova-recon', side: 'attack', agent: 'sova', ability: 'recon', label: '中路侦查箭',
      x: 55, y: 40, r: 6, from: { x: 50, y: 46 },
      aim: '站在中路上斜坡，一发满蓄力侦查箭射向 Market 屋檐，反弹一次落在中路正中央。',
      note: '开局第一箭，用来确认防守方在中路放了几个人的信息。',
      tags: ['中路', '进攻', '信息']
    },

    // ── 防守方 ────────────────────────────────────
    {
      id: 'def-a-main-smoke', side: 'defense', agent: 'omen', ability: 'smoke', label: '守 A · 封 A 大',
      x: 42.5, y: 11, r: 7.5, from: { x: 33, y: 15 },
      aim: '站在 A 站内发电机旁，准星对准 A 大门口上方电线杆的顶端，跳投。',
      note: '听到 A 大脚步先封口，把进攻方的第一波进点节奏压回去。',
      tags: ['A区', '防守']
    },
    {
      id: 'def-a-heaven-trap', side: 'defense', agent: 'cypher', ability: 'trap', label: '守 A · 后场警报',
      x: 30.5, y: 21.5, r: 4, from: { x: 30, y: 20 },
      aim: '把陷阱线（Trapwire）横拉在 A 后场到 A 站的门框之间，绳高齐肩。',
      note: 'A 后场是进攻方最爱绕的点，一条线就能换到一次免费的击杀机会。',
      tags: ['A区', '防守', '信息']
    },
    {
      id: 'def-b-main-molly', side: 'defense', agent: 'killjoy', ability: 'molly', label: '守 B · 封大燃烧',
      x: 36.5, y: 72, r: 5, from: { x: 31, y: 74 },
      aim: '站在 B 站内，把纳米蜂群（Nanoswarm）直接丢到 B 大口地面上，贴住门口一次落位。',
      note: 'B 大口是窄道，一颗蜂群能烧掉整支队伍的进点站位。',
      tags: ['B区', '防守']
    },
    {
      id: 'def-mid-trap', side: 'defense', agent: 'cypher', ability: 'trap', label: '守中 · 中路警报',
      x: 52.5, y: 40, r: 4, from: { x: 51, y: 43 },
      aim: '把陷阱线横拉在中路正中央的两面墙之间，尽量贴地一点让人难以跳过。',
      note: '中路是全图枢纽，第一条信息一定要从这里拿到。',
      tags: ['中路', '防守', '信息']
    },
    {
      id: 'def-b-rolling-thunder', side: 'defense', agent: 'breach', ability: 'ult', label: '守 B · 余震反打',
      x: 36, y: 70.5, r: 8, from: { x: 30, y: 73 },
      aim: '站在 B 站里背对 B 大口，把余震（Rolling Thunder）沿着门口方向正面推出。',
      note: '配合队友提前压到 B 大口，一次大招直接锁死进攻方的进点路线。',
      tags: ['B区', '防守', '大招']
    }
  ],

  strats: [
    {
      id: 'ascent-a-execute', name: 'A 区标准爆点 (A Execute)', side: 'attack', level: 2,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['a-heaven-smoke', 'a-trees-smoke', 'a-ct-smoke', 'a-generator-molly', 'a-sova-recon'],
      summary: '三烟切割 A 站视野，侦查箭开路，捷风直接落点，是最基础也最稳的 A 区拿分套路。',
      steps: [
        '0:00 炼狱/幽影在 A 大门口就位，先丢 A 发电机燃烧弹，把蹲点的防守方逼走。',
        '0:03 三颗烟同时落地：A 天堂、A 树、A 后场，形成一条完整的视野墙。',
        '0:05 猎枭的侦查箭射向 A 站顶棚，队友看小地图确认站内人数。',
        '0:08 捷风从 A 大正面切入并落点，其余人拉开 A 大宽度跟进，避免挤成一团。',
        '0:15 下包后立刻分散到发电机与 A 天堂下方的两个夹角，等对手回防。'
      ],
      tips: '职业队会先派一人摸中路拿信息再决定是否转点；如果 A 后场烟被对面用拆烟技能清掉，立刻退回 A 大重打。'
    },
    {
      id: 'ascent-a-split', name: '中路夹 A (Mid → A Split)', side: 'attack', level: 4,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['mid-market-smoke', 'mid-sova-recon', 'a-trees-smoke', 'a-heaven-smoke'],
      summary: '先用一颗 Market 烟拿下中路，再从 Market 与 A 树同时夹击 A 站，让防守方无法预判主攻方向。',
      steps: [
        '0:00 两人控中路，幽影丢 Market 烟，切割 Market 窗户的视线。',
        '0:05 猎枭中路侦查箭扫 Market，确认防守方中路人数。',
        '0:10 拿下中路后，一名队员从 Market 摸到 A 树门口，另一人回 A 大。',
        '0:18 A 树烟 + A 天堂烟落地，A 大与 A 树两路同时入场。',
        '0:25 优先击杀 A 天堂下方的防守方，再下包。'
      ],
      tips: '这套的关键是中路不能死人，所以中路二人组必须至少有一个人带位移或闪现；对面重防中路时要果断改成 B 区。'
    },
    {
      id: 'ascent-b-rush', name: 'B 区快打 (B Rush)', side: 'attack', level: 2,
      comp: ['jett', 'raze', 'omen', 'brimstone', 'kayo'],
      marks: ['b-main-smoke', 'b-site-smoke', 'b-heaven-smoke', 'b-back-molly'],
      summary: '集合全队直接冲 B 大口，用三颗烟把 B 站前后切成两段，五秒内完成进点。',
      steps: [
        '0:00 五人静步压到 B 大口外，不暴露脚步。',
        '0:02 两颗烟同时落地：B 大口烟 + B 站内烟；幽影补 B 天堂烟。',
        '0:04 雷兹先把燃烧弹丢进 B 后场，逼走贴墙蹲点的人。',
        '0:06 Jett 或 KAY/O 带牌先入，所有人拉开 140° 扇面进点。',
        '0:12 下包后把一人放在 B 大口外看回防，一人卡 B 天堂下方。'
      ],
      tips: 'B 区打完最容易吃亏的地方是回防的 CT 与 B 天台，所以下包后要有一个人专门盯 B 天堂方向，不要全员缩包。'
    },
    {
      id: 'ascent-mid-control', name: '中路控制转 B (Mid Control)', side: 'attack', level: 3,
      comp: ['jett', 'sova', 'omen', 'viper', 'killjoy'],
      marks: ['mid-market-smoke', 'b-main-smoke', 'b-heaven-smoke', 'b-back-molly'],
      summary: '把中路和 Boathouse 握在手里，逼防守方分兵，然后在最后 30 秒从 Boathouse 快速转 B。',
      steps: [
        '0:00 两人拿中路，一人守 Boathouse 口，两人在 A 大做假动作（丢烟丢闪）。',
        '0:20 确认防守方把重心移到 A 后，中路二人组向 Boathouse 移动。',
        '0:35 三颗烟瞬间落在 B 大口、B 站内、B 天堂。',
        '0:40 全队从 Boathouse 与 B 大口同时进入，打防守方一个转身不及。'
      ],
      tips: '假动作必须做得像真的：A 大要真的有人开枪、真的丢烟，否则防守方不会上钩。'
    },
    {
      id: 'ascent-a-defense', name: 'A 区标准防守 (1-2-1-1)', side: 'defense', level: 2,
      comp: ['jett', 'sova', 'omen', 'cypher', 'killjoy'],
      marks: ['def-a-main-smoke', 'def-a-heaven-trap', 'def-mid-trap'],
      summary: '一人守 A 大、一人在 A 站内架天堂、一人控中路，靠信息而不是靠对枪。',
      steps: [
        '0:00 奇乐把陷阱线布在 A 后场门口，零把线布在中路正中央。',
        '0:05 幽影站在发电机旁，听到 A 大脚步先在门口落一颗烟。',
        '0:10 中路的队友拿到信息后立刻报点：是 A 大推进还是中路转点。',
        '0:20 确认 A 大爆点后，中路与 B 的队友同步回防，从 CT 与 A 树两点夹击。'
      ],
      tips: 'A 防守最忌讳全员缩在包点里，留一个人在中路就意味着防守方永远比进攻方多 3 秒的旋转时间。'
    },
    {
      id: 'ascent-b-defense', name: 'B 区重防 + 中路反清 (B Stack)', side: 'defense', level: 3,
      comp: ['jett', 'breach', 'omen', 'killjoy', 'cypher'],
      marks: ['def-b-main-molly', 'def-b-rolling-thunder', 'def-mid-trap'],
      summary: '开局三个人压 B，用燃烧弹和警报线吃掉进攻方的第一波，被打穿前立刻转 A。',
      steps: [
        '0:00 奇乐纳米蜂群直接丢 B 大口地面，零把线布在 B 大口侧身位。',
        '0:05 三人分别卡 B 大口、B 站右角、B 天堂下方，形成交叉火力。',
        '0:15 铁臂把余震沿 B 大口推出，配合蜂群完成收人头。',
        '0:30 一旦 B 大口失守，所有人往 CT 方向撤，改用 B 站内防守，不要恋战。'
      ],
      tips: 'B 重防必须有人在中路留信息，否则对面一个中路转点就能把你们全部甩开。'
    }
  ]
};
