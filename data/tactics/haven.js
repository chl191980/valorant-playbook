window.TACTICS = window.TACTICS || {};
window.TACTICS['haven'] = {
  slug: 'haven',
  zh: '隐世修所',
  en: 'Haven',
  overview: '唯一的三包点地图（A / B / C），中路（Mid Window / Garage）是三条通道的交汇点。包点多意味着防守方必须分兵，也意味着进攻方一旦暴露意图就会被 3 秒内包夹，所以信息与假动作的权重远高于对枪。',

  markers: [
    // ── 进攻方 · A 区 ─────────────────────────────
    {
      id: 'a-long-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'A 长封口烟',
      x: 44, y: 12, r: 7, from: { x: 52, y: 13 },
      aim: '站在 A 长（A Long）通道里贴右墙，准星抬到 A 大口上方横梁的接缝处，原地投。',
      note: 'A 长是开阔长直道，不封口正面推进必被两三个架枪位同时点名。',
      tags: ['A区', '进攻', '核心烟']
    },
    {
      id: 'a-site-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'A 站内烟',
      x: 33, y: 13, r: 7.5, from: { x: 47, y: 14 },
      aim: '在 A 长用战术目镜直接点选 A 站包点中心偏后位置，盖住后场架枪线。',
      note: '把 A 站切成前后两段，让下包位只能靠听觉判断。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-short-molly', side: 'attack', agent: 'brimstone', ability: 'molly', label: 'A 短清点',
      x: 43, y: 24, r: 4.5, from: { x: 47, y: 20 },
      aim: '从 A 短（A Short）方向把燃烧弹丢向 A 短出口的地面，覆盖门口与第一层台阶。',
      note: 'A 短是防守方插在 A 站后方的眼睛，先烧再进。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-long-recon', side: 'attack', agent: 'sova', ability: 'recon', label: 'A 站侦查箭',
      x: 35, y: 10, r: 6, from: { x: 50, y: 13 },
      aim: '站在 A 长，满蓄力侦查箭射向 A 站上方屋檐，反弹一次落在包点正上方。',
      note: 'Haven 的 A 站结构开阔，一支箭能同时扫出包点和后场的人。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-heaven-smoke', side: 'attack', agent: 'astra', ability: 'smoke', label: 'A 后场星云',
      x: 27, y: 22, r: 7, from: { x: 46, y: 14 },
      aim: '提前在 A 后场（防守方回防口）放置星辰，进点时直接引爆成星云。',
      note: 'A 后场是防守方最快的回防路线，星礈可以远程引爆，不用露头补烟。',
      tags: ['A区', '进攻']
    },

    // ── 进攻方 · B 区 ─────────────────────────────
    {
      id: 'b-window-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'B 窗口烟',
      x: 41.6, y: 39.1, r: 7, from: { x: 50, y: 40 },
      aim: '站在中路，准星抬到 B 窗口（Window）上方霓虹灯牌顶边，向前轻推一下投出。',
      note: 'B 窗口是防守方俯瞰 B 站的制高点，不封等于把 B 站送给对手。',
      tags: ['B区', '进攻', '核心烟']
    },
    {
      id: 'b-site-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'B 站中烟',
      x: 36, y: 46, r: 7.5, from: { x: 50, y: 41 },
      aim: '在中路口用战术目镜点选 B 站包点中心，盖住 B 站与 B 后场之间的走位线。',
      note: 'B 站本身很小，一颗烟就能让防守方失去全部纵深。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-garage-molly', side: 'attack', agent: 'viper', ability: 'molly', label: 'B 车库毒液',
      x: 52.3, y: 47.1, r: 5, from: { x: 48.4, y: 40.4 },
      aim: '在中路把蝰蛇毒液丢向 B 车库（Garage）门口地面，让毒液覆盖整个门口。',
      note: '车库是防守方回防 B 的必经之路，一道毒液能直接拖住他们 4 秒。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-heaven-flash', side: 'attack', agent: 'kayo', ability: 'flash', label: 'B 窗口闪光',
      x: 44.9, y: 37.6, r: 4, from: { x: 49, y: 41 },
      aim: '从中路把闪光弹（Flashdrive）贴着 B 窗口上沿丢出，让它在窗口内侧爆开。',
      note: '烟 + 闪的组合是 B 区最快拿下窗口的办法，闪完立刻跟人。',
      tags: ['B区', '进攻', '配合']
    },

    // ── 进攻方 · C 区 ─────────────────────────────
    {
      id: 'c-long-smoke', side: 'attack', agent: 'omen', ability: 'smoke', label: 'C 长封口烟',
      x: 44, y: 85, r: 7, from: { x: 52, y: 85 },
      aim: '站在 C 长（C Long）里贴左墙，准星对准 C 大口上方管道的最下端，跳投。',
      note: 'C 长的正面烟，让进攻方可以安全地推进到最后一段掩体。',
      tags: ['C区', '进攻', '核心烟']
    },
    {
      id: 'c-site-molly', side: 'attack', agent: 'raze', ability: 'molly', label: 'C 站清点弹',
      x: 32, y: 80, r: 5, from: { x: 50, y: 83 },
      aim: '在 C 长把油漆弹平行抛向 C 站包点左侧的死角，让它撞墙后弹进角里。',
      note: 'C 站角落很多，燃烧弹是唯一能低成本清空它们的手段。',
      tags: ['C区', '进攻', '清点']
    },
    {
      id: 'c-link-smoke', side: 'attack', agent: 'brimstone', ability: 'smoke', label: 'C 连接烟',
      x: 39.9, y: 67.8, r: 7, from: { x: 51, y: 80 },
      aim: '在 C 长用战术目镜点选 C 连接（C Link）通道口，把回防路线直接切断。',
      note: 'C 连接的烟决定了下包之后防守方能不能快速回防，价值极高。',
      tags: ['C区', '进攻']
    },
    {
      id: 'c-heaven-recon', side: 'attack', agent: 'fade', ability: 'recon', label: 'C 后场探测',
      x: 31.4, y: 82, r: 6, from: { x: 49, y: 83 },
      aim: '黑梦把窥视之眼抛向 C 后场墙面高处，让它挂在墙顶往下照整个后场。',
      note: 'C 后场是防守方的主回防口，提前照出来能决定是继续打还是转点。',
      tags: ['C区', '进攻', '信息']
    },

    // ── 防守方 ────────────────────────────────────
    {
      id: 'def-mid-window-smoke', side: 'defense', agent: 'omen', ability: 'smoke', label: '守中 · 封中路口',
      x: 49, y: 39.5, r: 7, from: { x: 45, y: 44 },
      aim: '站在 B 站内往中路方向，准星对准中路口上方天花板灯座，原地投。',
      note: '中路是 Haven 的枢纽，守住中路等于给三个包点都买了保险。',
      tags: ['中路', '防守', '核心烟']
    },
    {
      id: 'def-a-long-molly', side: 'defense', agent: 'killjoy', ability: 'molly', label: '守 A · 封 A 长',
      x: 45.5, y: 13, r: 5, from: { x: 34, y: 15 },
      aim: '站在 A 站内把纳米蜂群直接丢到 A 大口地面上，贴住门口落位。',
      note: 'A 长是长条通道，一颗蜂群就能把进攻方的推进节奏打断三秒以上。',
      tags: ['A区', '防守']
    },
    {
      id: 'def-a-short-trap', side: 'defense', agent: 'cypher', ability: 'trap', label: '守 A · A 短警报',
      x: 42.5, y: 25.5, r: 4, from: { x: 43, y: 25 },
      aim: '把陷阱线横拉在 A 短出口两侧墙面之间，尽量贴地防止被人跳过去。',
      note: 'A 短是防守方的旋转通道，也是进攻方最爱偷的点，一条线两种收益。',
      tags: ['A区', '防守', '信息']
    },
    {
      id: 'def-c-long-wall', side: 'defense', agent: 'harbor', ability: 'wall', label: '守 C · 水墙封长',
      x: 44, y: 80, r: 10, from: { x: 35, y: 82 },
      aim: '站在 C 站里正对 C 长方向，把海潮水墙沿 C 长通道推出，横切整条路。',
      note: 'C 长大招难覆盖，水墙是最省资源的一次性封锁。',
      tags: ['C区', '防守']
    },
    {
      id: 'def-c-site-molly', side: 'defense', agent: 'killjoy', ability: 'molly', label: '守 C · 站内封点',
      x: 32, y: 82, r: 5, from: { x: 28.4, y: 76.3 },
      aim: '站在 C 站后方，把蜂群丢到包点正中央，覆盖下包位。',
      note: '听到下包声立刻丢，逼对方在下包与保命之间做选择。',
      tags: ['C区', '防守']
    },
    {
      id: 'def-b-ult-breach', side: 'defense', agent: 'breach', ability: 'ult', label: '守 B · 余震反打',
      x: 47, y: 43, r: 8, from: { x: 38, y: 46 },
      aim: '站在 B 站里背对中路口，把余震沿中路方向正面推出，覆盖中路与 B 窗口整片区域。',
      note: 'B 区空间最小，这套大招几乎必定命中，是防守方最强的翻盘手段。',
      tags: ['B区', '防守', '大招']
    }
  ],

  strats: [
    {
      id: 'haven-a-execute', name: 'A 区标准爆点 (A Execute)', side: 'attack', level: 2,
      comp: ['jett', 'sova', 'omen', 'brimstone', 'killjoy'],
      marks: ['a-long-smoke', 'a-site-smoke', 'a-short-molly', 'a-long-recon', 'a-heaven-smoke'],
      summary: 'A 长主攻、A 短牵扯，两颗烟把 A 站切成两段，守方回防路线同时被星云切断。',
      steps: [
        '0:00 三人 A 长、两人 A 短，两路同时压到门口。',
        '0:03 A 长封口烟 + A 站内烟同时落地，星礈引爆 A 后场星云。',
        '0:06 炼狱燃烧弹清 A 短出口，猎枭侦查箭确认站内人数。',
        '0:10 A 长正面进、A 短同时切进，交叉清理包点后下包。',
        '0:18 下包后一人退回 A 长看回防，一人占住 A 后场烟的下方。'
      ],
      tips: 'Haven 的 A 站回防口很多（A 短、A 后场、中路），所以下包后不要全员待在包点上，至少要有一个人的枪口对着 A 后场方向。'
    },
    {
      id: 'haven-b-execute', name: '中路控 B (Mid → B)', side: 'attack', level: 3,
      comp: ['jett', 'kayo', 'omen', 'viper', 'killjoy'],
      marks: ['b-window-smoke', 'b-site-smoke', 'b-garage-molly', 'b-heaven-flash'],
      summary: '先用中路视野拿下 B 窗口，再烟闪配合直接切入 B 站，是最省资源的 B 区打法。',
      steps: [
        '0:00 三人控中路，两人在 A 长做假动作牵制。',
        '0:05 幽影封 B 窗口烟，炼狱封 B 站中烟。',
        '0:08 KAY/O 闪光弹贴 B 窗口上沿丢出，闪完立刻跟人进窗口。',
        '0:10 蝰蛇毒液封 B 车库，切断防守方的中路回防。',
        '0:15 全队压进 B 站下包，一人守住中路口。'
      ],
      tips: 'B 站很小，进点的人不要超过三个，剩下的人在外围卡中路口和车库口，否则一颗雷就能收掉全队。'
    },
    {
      id: 'haven-c-rush', name: 'C 区快打 (C Rush)', side: 'attack', level: 2,
      comp: ['jett', 'raze', 'omen', 'brimstone', 'fade'],
      marks: ['c-long-smoke', 'c-site-molly', 'c-link-smoke', 'c-heaven-recon'],
      summary: '五个人全押 C 长，两颗烟 + 一颗燃烧弹把 C 站清空，是最直接的拿分方式。',
      steps: [
        '0:00 五人静步集合 C 长，不开枪不露脚步。',
        '0:02 C 长封口烟 + C 连接烟落地，同时黑梦照 C 后场。',
        '0:05 雷兹油漆弹清 C 站死角，捷风带牌第一个进。',
        '0:10 全员进点下包，一人守 C 连接烟外侧。',
        '0:16 剩下两人分别卡 C 长回口和 C 后场方向。'
      ],
      tips: '快打的核心是「不犹豫」，只要第一个人在烟里停住，整套节奏就废了；同时要有人在 C 长口盯住防守方的中路旋转。'
    },
    {
      id: 'haven-fake-c-to-a', name: '假打 C 真打 A (C Fake → A)', side: 'attack', level: 5,
      comp: ['jett', 'sova', 'omen', 'cypher', 'killjoy'],
      marks: ['c-long-smoke', 'c-site-molly', 'a-long-smoke', 'a-site-smoke', 'a-heaven-smoke'],
      summary: '先用全套资源在 C 区造出「要打 C」的假象，逼防守方旋转，再全员走 A 短打空点。',
      steps: [
        '0:00 两人真的在 C 长丢烟、烧包点，甚至开一枪制造接触。',
        '0:12 中路一人用侦察技能确认防守方是否在往 C 移动。',
        '0:18 确认 C 区被重防后，三人悄悄退回中路转 A 短。',
        '0:28 A 长封口烟 + A 后场星云落地，A 短同时切进。',
        '0:35 目标是「快下包、快站位」，因为防守方 15 秒内就会回来。'
      ],
      tips: '假动作要真，但不要真死人：留两个技术好的人在 C 长拉扯，其余人不要在假动作里交代掉。'
    },
    {
      id: 'haven-defense-mid', name: '中路核心防守 (Mid Anchor)', side: 'defense', level: 3,
      comp: ['jett', 'breach', 'omen', 'cypher', 'killjoy'],
      marks: ['def-mid-window-smoke', 'def-a-long-molly', 'def-a-short-trap', 'def-b-ult-breach'],
      summary: '中路放一个「锚点」负责全部信息，A、B 各两人用技能拖时间，用旋转而不是硬拼。',
      steps: [
        '0:00 中路锚点站在 B 站内，同时看中路口与 B 窗口两条线。',
        '0:05 零把陷阱线布在 A 短，奇乐蜂群留在 A 大口。',
        '0:15 中路锚点报出方向后，被压的一侧先丢技能拖时间。',
        '0:25 另外两个包点的人沿中路旋转，从侧面夹击进攻方。'
      ],
      tips: 'Haven 防守最大的错误是三个人都缩在包点里。中路只要没人，进攻方就能用一次假动作骗走整支队伍。'
    },
    {
      id: 'haven-defense-c', name: 'C 区重防 (C Stack)', side: 'defense', level: 2,
      comp: ['jett', 'breach', 'harbor', 'killjoy', 'cypher'],
      marks: ['def-c-long-wall', 'def-c-site-molly', 'def-mid-window-smoke', 'def-b-ult-breach'],
      summary: '三人压 C，用海神水墙把 C 长变成走廊，蜂群守包点，中路留一人给信息。',
      steps: [
        '0:00 海神把水墙预架在 C 长方向，奇乐蜂群放在包点正中。',
        '0:05 三人分别卡 C 长口、C 站右角、C 连接，形成交叉。',
        '0:12 听到 C 长脚步，海神推水墙，蜂群立刻落地。',
        '0:25 中路与 B 的队友从 C 连接回防夹击，不要从 C 长正面进。'
      ],
      tips: 'C 区被快打时，最重要的是不要一次把三个人都交代进去；留一个人退到 C 连接外面，就能等来队友。'
    }
  ]
};
