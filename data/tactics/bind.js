window.TACTICS = window.TACTICS || {};
window.TACTICS['bind'] = {
  slug: 'bind',
  zh: '源工重镇',
  en: 'Bind',
  overview: '源工重镇（Bind）没有中路，A、B 两点通过房间与传送门直接相连，是典型的高强度对枪图。A 点（东侧）由 A 塔楼（A Tower）与 A 浴室（A Bath）构成高低位交叉，A 大厅（A Lobby）是进攻方的集结区；B 点（西侧）依托 B 长道（B Long）、B 窗口（B Window）与 B 花园（B Garden）形成三角枪线。控图核心是抢下 A 短（A Short）与 B 短（B Short），再用传送门完成三秒转点。',
  markers: [
    {
      id: 'bind-a-tower-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A塔烟',
      x: 70.5,
      y: 19.5,
      r: 7,
      from: { x: 67, y: 26 },
      aim: '站在 A 点东北角浴室外侧，准星抬到 A 塔楼（A Tower）屋顶上沿一格，长按左键投出暗影烟，让烟幕罩住塔楼正面。',
      note: 'A 塔楼是全图最高的架枪位，队伍露头前 10 秒必须落下；对方有狙击手时先投烟，再让决斗者切进 A 浴室。',
      tags: ['烟雾', 'A点', '进攻']
    },
    {
      id: 'bind-a-exit-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'A出口烟',
      x: 84,
      y: 41.5,
      r: 7,
      from: { x: 74, y: 36 },
      aim: '站在 A 浴室（A Bath）石柱后，打开战术面板把烟幕点放在 A 出口（A Exit）通道正中，封死东侧回防视线。',
      note: 'A 出口是防守方从 A 塔楼绕后的唯一通道，封住之后包点只需要面朝 A 短一个方向。',
      tags: ['烟雾', 'A点', '断后']
    },
    {
      id: 'bind-a-short-molly',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'A短毒咬',
      x: 54.6, y: 44,
      r: 4.5,
      from: { x: 63, y: 50 },
      aim: '站在 A 大厅北侧贴墙处，准星对准 A 短道（A Short）地面与墙面交线，投出毒蛇咬噬覆盖整段短道。',
      note: 'A 短连接中路与 A 点，是防守方最主要的回防路线；毒液落下后 3 秒内必须有人进点。',
      tags: ['毒液', 'A点', '封路']
    },
    {
      id: 'bind-a-site-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A点清角',
      x: 69,
      y: 27,
      r: 4.5,
      from: { x: 74, y: 33 },
      aim: '站在 A 浴室出口，准星对准 A 点（A Site）默认包位后方的三角箱，绘画弹先弹墙一次再炸开包位。',
      note: '优先清左后角与包点箱后，清完立刻由队友下包；不要和 A 短毒咬同一秒投出，避免浪费伤害。',
      tags: ['爆破', 'A点', '清点']
    },
    {
      id: 'bind-a-teleport-flash',
      side: 'attack',
      agent: 'breach',
      ability: 'flash',
      label: 'A传送闪',
      x: 55,
      y: 41,
      r: 3,
      from: { x: 61, y: 47 },
      aim: '站在 A 大厅与传送门之间，准星贴住 A 传送门（A Teleporter）房间外墙上沿，闪光冲击穿墙致盲门内外守军。',
      note: '闪光落地后立刻跟枪，传送门房间常放哨卫道具；先闪再进，注意别闪到贴门的队友。',
      tags: ['闪光', 'A短', '进攻']
    },
    {
      id: 'bind-b-window-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'B窗烟',
      x: 25,
      y: 43,
      r: 7,
      from: { x: 18, y: 49 },
      aim: '站在 B 花园（B Garden）入口，准星压住 B 窗口（B Window）窗口下沿，投出暗影烟封住窗口枪线。',
      note: 'B 窗口是 B 长道推进时唯一的正面威胁，烟一落全队贴右墙进入 B 点，不要给窗口二次开镜机会。',
      tags: ['烟雾', 'B点', '进攻']
    },
    {
      id: 'bind-b-garden-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'B园烟',
      x: 19.5,
      y: 43,
      r: 7,
      from: { x: 17.4, y: 52 },
      aim: '站在 B 长道（B Long）内，面板点选 B 花园正中央落烟，切断花园与 B 窗口之间的交叉火力。',
      note: '花园一断，B 点守军只剩正面枪线，配合 B 点莫希特直接踩点；两颗烟间隔不要超过 2 秒。',
      tags: ['烟雾', 'B点', '切枪线']
    },
    {
      id: 'bind-b-site-mosh',
      side: 'attack',
      agent: 'gekko',
      ability: 'molly',
      label: 'B点莫希特',
      x: 26,
      y: 32,
      r: 4.5,
      from: { x: 21, y: 39 },
      aim: '站在 B 窗口外的箱后，准星对准 B 点（B Site）默认包位右侧墙面，投出莫希特覆盖包点。',
      note: '莫希特落地后 4 秒内必须有人踩点，否则守军会重新占位；投掷前先确认窗口已被烟封住。',
      tags: ['爆破', 'B点', '清点']
    },
    {
      id: 'bind-b-long-wall',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'B长毒幕',
      x: 9.8, y: 53,
      r: 8,
      from: { x: 9.8, y: 62 },
      aim: '站在 B 长道南端，准星对准长道中段横向拉出毒幕，把整条 B 长道切成前后两段。',
      note: '毒幕用来阻断 B 传送门方向的补防，推进时贴幕左侧走；幕内视野对敌方同样致命，别在幕里停。',
      tags: ['毒幕', 'B点', '封路']
    },
    {
      id: 'bind-a-tower-recon',
      side: 'defense',
      agent: 'sova',
      ability: 'recon',
      label: 'A塔侦查',
      x: 69,
      y: 27,
      r: 3,
      from: { x: 70.5, y: 19.5 },
      aim: '站在 A 塔楼（A Tower）上，准星对准 A 点包位地面，一档力度射出侦查箭，扫描 A 浴室与 A 短两个入口。',
      note: '开局 5 秒内射出即可，箭落点覆盖包点；扫描到两人以上立刻叫 A 浴室队友后撤，改打交叉。',
      tags: ['侦查', 'A点', '防守']
    },
    {
      id: 'bind-a-bath-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A浴绊线',
      x: 77.5,
      y: 34,
      r: 3,
      from: { x: 75.5, y: 31 },
      aim: '站在 A 点内浴室外侧，把绊线一端贴门框、另一端贴对面立柱，拉到与胸口同高。',
      note: '绊线只用来获取信息，不要贴地放（对手跳蹲就能过）；听到触发立刻和 A 点队友夹击。',
      tags: ['陷阱', 'A点', '防守']
    },
    {
      id: 'bind-a-short-cage',
      side: 'defense',
      agent: 'cypher',
      ability: 'smoke',
      label: 'A短笼',
      x: 54.6, y: 44,
      r: 3,
      from: { x: 56, y: 41.2 },
      aim: '站在 A 短道（A Short）自己的半场，准星对准短道拐角，放出赛博囚笼挡住整条走廊。',
      note: '囚笼用来拖延而不是硬挡，配合绊线一起用；确认对方没有闪现型决斗者再前压。',
      tags: ['囚笼', 'A短', '拖延']
    },
    {
      id: 'bind-b-window-trap',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'B窗警报',
      x: 25,
      y: 43,
      r: 3,
      from: { x: 24, y: 39 },
      aim: '站在 B 点内窗口（B Window）下方，把警报机器人放在窗口楼梯口，朝向 B 长道方向。',
      note: '警报一响就代表长道来人，立刻叫 B 花园队友回夹；不要放在能被远距离一枪点掉的位置。',
      tags: ['警报', 'B点', '防守']
    },
    {
      id: 'bind-b-long-molly',
      side: 'defense',
      agent: 'viper',
      ability: 'molly',
      label: 'B长毒咬',
      x: 9.8, y: 53,
      r: 4.5,
      from: { x: 15, y: 45 },
      aim: '站在 B 肘区（B Elbow）上方，准星对准 B 长道中段地面，投出毒蛇咬噬封住推进路线。',
      note: '听到长道脚步立刻投，毒液能拖住 4 秒，足够 B 点队友完成换位；毒液未散时不要出去对枪。',
      tags: ['毒液', 'B长', '拖延']
    },
    {
      id: 'bind-b-site-strike',
      side: 'defense',
      agent: 'brimstone',
      ability: 'ult',
      label: 'B点轨道',
      x: 26,
      y: 32,
      r: 8,
      from: { x: 18, y: 48 },
      aim: '站在 B 花园（B Garden）内的安全位，面板点选 B 点（B Site）包位中心，落下轨道打击。',
      note: '轨道打击留给 3v3 以下残局或对方强下包时使用；落点靠 A 侧一点，避免覆盖回防队友。',
      tags: ['大招', 'B点', '残局']
    },
    {
      id: 'bind-b-hall-turret',
      side: 'defense',
      agent: 'killjoy',
      ability: 'other',
      label: 'B厅炮台',
      x: 27,
      y: 22,
      r: 3,
      from: { x: 28, y: 26 },
      aim: '站在 B 厅（B Hall）侧面，把炮台架在厅口斜角，射界覆盖 B 点北侧与厅口整条走廊。',
      note: '炮台负责拖时间并提供信息，架好后立刻回 B 点卡交叉；对方有苏娃时先骗一发侦查箭再架。',
      tags: ['炮台', 'B点', '信息']
    }
  ],
  strats: [
    {
      id: 'bind-a-three-lane',
      name: 'A 点三线夹击 (A Three-Lane)',
      side: 'attack',
      level: 4,
      comp: ['omen', 'breach', 'raze', 'viper', 'skye'],
      marks: ['bind-a-tower-smoke', 'bind-a-short-molly', 'bind-a-site-molly', 'bind-a-teleport-flash'],
      summary: '烟封塔楼，三路同时压 A 点包位。',
      steps: [
        '0:00-0:12 五人沿右侧墙贴到 A 大厅（A Lobby）集合，斯凯用引路明灯确认 A 短道是否有人卡点。',
        '0:12-0:22 欧门在 A 点东北角投出 A塔烟封住 A 塔楼，毒蛇同时往 A 短道灌毒，切断防守方的交叉火力。',
        '0:22-0:30 铁臂闪光冲击 A 传送门房间，雷兹绘画弹清包点左后角，三人从 A 浴室切进 A 点。',
        '0:30-0:50 下包后两人退回 A 浴室外侧卡 A 出口（A Exit），毒蛇把毒幕重新拉在 A 短道口防回防。'
      ],
      tips: [
        'A 塔烟必须在队伍露头前落下，否则塔上一发就能换掉一个。',
        '如果 A 短道有人前压，先原地对枪再决定是否改打 B，不要硬着头皮进点。'
      ]
    },
    {
      id: 'bind-b-long-push',
      name: 'B 长道强推 (B Long Push)',
      side: 'attack',
      level: 3,
      comp: ['omen', 'brimstone', 'gekko', 'viper', 'sova'],
      marks: ['bind-b-window-smoke', 'bind-b-garden-smoke', 'bind-b-site-mosh', 'bind-b-long-wall'],
      summary: '毒幕切长道，双烟封窗口与花园后进 B。',
      steps: [
        '0:00-0:15 全队堆到 B 长道（B Long）南端，苏娃用侦查箭确认长道与 B 窗口有没有前压。',
        '0:15-0:25 毒蛇拉出 B 长毒幕把长道切成两段，欧门与布史东分别投出 B窗烟、B园烟。',
        '0:25-0:35 盖可投莫希特覆盖 B 点默认包位，三人沿右墙进入 B 点，一人留长道卡 B 传送门方向。',
        '0:35-0:55 下包后两人架 B 窗口楼梯口，一人守 B 长道，毒幕不要提前关，留着挡回防。'
      ],
      tips: [
        '两颗烟要同时落，窗口与花园任何一个漏掉都会被打成背身。',
        '若对方 B 点只放一人，第一波闪光后直接压 B 窗口，不要等包点清干净。'
      ]
    },
    {
      id: 'bind-a-hold-crossfire',
      name: 'A 点高低交叉 (A Tower Crossfire)',
      side: 'defense',
      level: 4,
      comp: ['sova', 'cypher', 'killjoy', 'viper', 'omen'],
      marks: ['bind-a-tower-recon', 'bind-a-bath-trap', 'bind-a-short-cage'],
      summary: '塔楼侦查配合浴室绊线死守 A 点。',
      steps: [
        '0:00-0:05 苏娃站上 A 塔楼（A Tower）射出 A塔侦查，扫描 A 浴室与 A 短两个入口。',
        '0:05-0:20 赛菲在 A 浴室（A Bath）门框拉出 A浴绊线，奇乐把纳米蜂群挂在 A 短道口，欧门留一颗烟备用。',
        '0:20-0:40 塔楼一人架 A 浴室远角，另一人站包位箱后卡 A 短；听到绊线触发先丢 A短笼再夹击。',
        '0:40-1:00 若对方五人压 A，塔楼立刻退 A 出口（A Exit）等传送门支援，不要在没有烟雾时硬拼。'
      ],
      tips: [
        'A 塔楼只架第一枪，打完换位，别在同一格连续开镜。',
        'A 浴室绊线被打掉就是进攻信号，语音必须立刻报点。'
      ]
    },
    {
      id: 'bind-b-hold-window',
      name: 'B 点窗口防线 (B Window Line)',
      side: 'defense',
      level: 4,
      comp: ['killjoy', 'viper', 'brimstone', 'cypher', 'sova'],
      marks: ['bind-b-window-trap', 'bind-b-long-molly', 'bind-b-site-strike'],
      summary: '警报卡窗口，毒咬拖长道，轨道收残局。',
      steps: [
        '0:00-0:10 奇乐在 B 窗口（B Window）楼梯口放 B窗警报，赛菲在 B 花园（B Garden）口挂绊线。',
        '0:10-0:30 毒蛇站 B 肘区上方，听到长道脚步立刻投 B长毒咬；布史东留轨道打击给残局。',
        '0:30-0:50 窗口一人卡长道视线，一人守 B 点正面；警报触发后花园队友立刻回夹，别单独拉出去。',
        '0:50-1:10 对方强下包时用 B点轨道覆盖包位，再配合闪光反打，轨道落下前不要进包点。'
      ],
      tips: [
        'B 窗口的守军不要站死，听到毒液落地后立刻换成斜角位。',
        '长道毒咬和警报不要同时交，留一个给对方的第二波推进。'
      ]
    },
    {
      id: 'bind-rotate-teleport',
      name: '传送门快速回防 (Teleport Rotate)',
      side: 'defense',
      level: 3,
      comp: ['omen', 'cypher', 'killjoy', 'brimstone', 'sova'],
      marks: ['bind-b-hall-turret', 'bind-a-bath-trap'],
      summary: '传送门把回防时间压缩到三秒以内。',
      steps: [
        '0:00-0:15 B 侧两人正常卡 B 厅（B Hall）与 B 窗口，奇乐先架好 B厅炮台再退到交叉位。',
        '0:15-0:35 苏娃侦查确认 A 侧无人，欧门留一颗烟在 B 长道口，全队保持一人在传送门附近待命。',
        '0:35-0:55 A 点报点后，B 侧守军立刻从 B 传送门（B Teleporter）转到 A 侧，落地直接贴 A 短（A Short）夹击。',
        '0:55-1:15 回防完成后由赛菲补 A浴绊线，A 塔楼一人重新架枪，防止对方二次强攻。'
      ],
      tips: [
        '传送门只能走一人，转点前必须先确认身后没有敌人跟枪。',
        '回防要带一颗烟或一颗毒液，空手落到 A 短等于送人头。'
      ]
    }
  ]
};
