window.TACTICS = window.TACTICS || {};
window.TACTICS['icebox'] = {
  slug: 'icebox',
  zh: '森寒冬港',
  en: 'Icebox',
  overview: '森寒冬港双包点：上方的 B 点集装箱区易守难攻，右下的 A 点带天台与横向索道。中路管道、锅炉房与上升绳把三点串成一张网，进攻方吃信息，防守方吃枪位。',
  markers: [
    {
      id: 'a-wall-rafters',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'A 天台毒幕',
      x: 72.5, y: 78.5, r: 13,
      from: { x: 58.7, y: 77.8 },
      aim: '站在 A 管道口贴左侧混凝土墙，准星对准 A 天台铁架最高一层横梁的下沿，原地蓄力半秒再拉出毒幕，幕布会沿着天台正面横着铺开。',
      note: '一次切开 A 天台和 A 屏风两条架枪线，队友可以从 A 管道正面无伤进包点。',
      tags: ['A区', '进攻', '毒幕']
    },
    {
      id: 'a-molly-default',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'A 默认位毒吻',
      x: 71.5, y: 84.5, r: 4.5,
      from: { x: 52.3, y: 81.4 },
      aim: '站在 A 巢口贴右墙，准星压到 A 包点集装箱顶棚与天台立柱之间的缝隙上方两指，跳投蛇吻，毒液刚好落在默认下包位上。',
      note: '提前把毒铺在默认位，逼拆包的防守方不敢原地站桩，也给队友争取落包时间。',
      tags: ['A区', '进攻', '炸后']
    },
    {
      id: 'a-molly-screen',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'A 屏风毒吻',
      x: 68.5, y: 70.5, r: 4.5,
      from: { x: 58.7, y: 77.8 },
      aim: '站在 A 管道口原地不动，准星对准 A 屏风平台最外沿那道白线的上缘，直接原地投出蛇吻，毒液落点在屏风脚下。',
      note: '把 A 屏风上架枪的防守方逼走，进场的人就不会被高台的侧身打死。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-viper-pit',
      side: 'attack',
      agent: 'viper',
      ability: 'ult',
      label: 'A 毒幕领域',
      x: 71, y: 83, r: 11,
      from: { x: 58.7, y: 77.8 },
      aim: '站在 A 管道口，准星抬到包点上空铁架的高度，向前丢出毒幕领域，让毒云中心落在 A 默认位与天台之间。',
      note: '残局上包后用大招把整个包点泡进毒里，拆包的人只能盲拆，队友在毒里近身收人。',
      tags: ['A区', '进攻', '大招']
    },
    {
      id: 'a-smoke-harbor',
      side: 'attack',
      agent: 'harbor',
      ability: 'smoke',
      label: 'A 巢水罩',
      x: 66, y: 79.5, r: 6.5,
      from: { x: 52.3, y: 81.4 },
      aim: '站在 A 巢口贴左墙，准星对准 A 包点西侧地面的接缝，原地丢出水罩，水面落在包点西口挡住 A 天台方向的对枪。',
      note: '水罩替毒幕补上西侧缺口，队友从 A 管道进场时不会被天台的人平枪打死。',
      tags: ['A区', '进攻', '水罩']
    },
    {
      id: 'a-recon-sova',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 包侦察箭',
      x: 70.5, y: 82.5, r: 6,
      from: { x: 58.7, y: 77.8 },
      aim: '站在 A 管道口贴右墙，准星对准 A 包点上空集装箱的右侧面，满蓄力射侦察箭，箭会在箱面上反弹扫到整个包点。',
      note: '一发箭同时清 A 包点、A 天台和 A 屏风，让队伍知道该从哪条线压进去。',
      tags: ['A区', '进攻', '侦察']
    },
    {
      id: 'b-wall-main',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'B 区毒幕',
      x: 56.5, y: 15.5, r: 13,
      from: { x: 44.8, y: 35.0 },
      aim: '站在 B 绿箱通道口贴左墙，准星对准 B 包点上空雪人方向的天线底部，原地拉出毒幕，幕布从绿箱口一直铺到包点顶层。',
      note: '把 B 雪人、B 包点上层的枪线一次切掉，队友从绿箱和 B 管道两路同时压进。',
      tags: ['B区', '进攻', '毒幕']
    },
    {
      id: 'b-molly-default',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'B 默认位毒吻',
      x: 60, y: 19.5, r: 4.5,
      from: { x: 56.9, y: 38.8 },
      aim: '站在 B 橙箱后贴右墙，准星对准 B 包点上层集装箱顶棚的角，原地跳投蛇吻，毒液落在默认下包位上。',
      note: '炸后拖延的核心道具，B 点掩体多，没有毒的话拆包方可以贴着箱子轻松拆。',
      tags: ['B区', '进攻', '炸后']
    },
    {
      id: 'b-molly-yellow',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'B 黄箱毒吻',
      x: 46.5, y: 16.5, r: 4.5,
      from: { x: 44.8, y: 35.0 },
      aim: '站在 B 绿箱口贴右墙，准星对准 B 黄箱集装箱上沿的正中间，原地投出蛇吻，毒液盖住黄箱后面的死角。',
      note: '黄箱后面是防守方最爱的贴脸卡点，先铺毒再进场可以少掉一个人的血。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-recon-sova',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'B 包侦察箭',
      x: 58.5, y: 21.5, r: 6,
      from: { x: 56.9, y: 38.8 },
      aim: '站在 B 橙箱后，准星对准 B 包点中央悬挂的钢梁下缘，满蓄力射箭，箭反弹一次后扫出包点全景。',
      note: 'B 点面积大，一发侦察箭就能确认包点里到底站了几个人。',
      tags: ['B区', '进攻', '侦察']
    },
    {
      id: 'd-b-return-wall',
      side: 'defense',
      agent: 'viper',
      ability: 'wall',
      label: 'B 区回防毒幕',
      x: 58, y: 20.5, r: 12,
      from: { x: 81.3, y: 24.2 },
      aim: '站在 B 后方贴最里面的墙，准星对准 B 黄箱方向集装箱的边角，原地拉出毒幕，幕布贴着包点前沿从右往左铺开。',
      note: '防守开局先拉一道幕，进攻方进 B 时正面全是毒，只能贴墙走，方便队友站交叉火力。',
      tags: ['B区', '防守', '毒幕']
    },
    {
      id: 'd-a-pipes-molly',
      side: 'defense',
      agent: 'viper',
      ability: 'molly',
      label: 'A 管道毒吻',
      x: 57.5, y: 78, r: 4.5,
      from: { x: 68.9, y: 68.9 },
      aim: '站在 A 屏风后贴墙，准星对准 A 管道口上方那道门槛的正中，原地投出蛇吻，毒液把管道口整个封住。',
      note: 'A 管道是进攻方最舒服的入口，一发毒就能拖掉他们八秒的进攻时间。',
      tags: ['A区', '防守']
    },
    {
      id: 'd-mid-recon',
      side: 'defense',
      agent: 'sova',
      ability: 'recon',
      label: '中路侦察箭',
      x: 43, y: 53, r: 6,
      from: { x: 67.6, y: 55.7 },
      aim: '站在中路锅炉房门口，准星对准中路蓝箱的上方空隙，满蓄力射侦察箭，箭穿过中路扫到蓝箱和 B 车库一带。',
      note: '中路是森寒冬港的命门，开局用一发箭确认进攻方有没有抢中路和索道。',
      tags: ['中路', '防守', '侦察']
    },
    {
      id: 'd-a-rafters-turret',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'A 天台炮台',
      x: 76.5, y: 81, r: 5,
      from: { x: 76.7, y: 82.4 },
      aim: '站在 A 天台边上，把炮台放在天台前沿的栏杆缺口处，炮口朝 A 管道和 A 包点的方向。',
      note: '炮台替天台的人看住包点西口，A 管道一有人露头就会先吃一梭子。',
      tags: ['A区', '防守']
    },
    {
      id: 'd-b-tube-smoke',
      side: 'defense',
      agent: 'astra',
      ability: 'smoke',
      label: 'B 管道星云',
      x: 54.5, y: 47.5, r: 6,
      from: { x: 63.9, y: 43.2 },
      aim: '站在 B 雪堆后贴墙，把星提前放到 B 管道口，听到管道脚步再原地引爆星云封住管道。',
      note: 'B 管道是防守方最容易被偷的侧身，星云一爆就能把这条路彻底堵死。',
      tags: ['B区', '防守', '星云']
    }
  ],
  strats: [
    {
      id: 'icebox-a-execute',
      name: 'A 区天台强攻 (A Execute)',
      side: 'attack',
      level: 3,
      comp: ['viper', 'harbor', 'sova', 'jett', 'killjoy'],
      marks: ['a-wall-rafters', 'a-molly-screen', 'a-smoke-harbor', 'a-recon-sova'],
      summary: '毒幕横切 A 天台与屏风，海神水罩遮巢口，五人从中路管道一波压上包点。',
      steps: [
        '0:00 蝰蛇在 A 管道口拉出毒幕，把 A 天台和 A 屏风一起切开，挡住两条架枪线；',
        '0:03 海神把水罩丢到 A 巢口，遮住包点西侧和 A 天台的回防视线；',
        '0:06 猎枭在 A 管道反弹侦察箭，清 A 包点、A 屏风和 A 天台，报出防守人数；',
        '0:10 奇乐在 A 传送带放炮台断后，捷风带两人贴 A 管道右墙进场；',
        '0:18 默认位下包，蝰蛇补一发蛇吻封 A 大回防口，全队转 A 巢架守。'
      ],
      tips: '毒幕要等侦察箭的信息再拉；A 天台上有人时先用蛇吻把人逼下平台，再让捷风进场。'
    },
    {
      id: 'icebox-b-split',
      name: 'B 区绿箱夹击 (B Split)',
      side: 'attack',
      level: 4,
      comp: ['viper', 'sova', 'jett', 'kayo', 'killjoy'],
      marks: ['b-wall-main', 'b-molly-yellow', 'b-molly-default', 'b-recon-sova'],
      summary: '绿箱与管道两线同时压 B，毒幕从雪人铺到厨房，切断 B 后方回防。',
      steps: [
        '0:00 蝰蛇站在 B 绿箱通道口拉出毒幕，幕布从包点顶层一直铺到 B 厨房；',
        '0:04 猎枭从 B 橙箱后反弹侦察箭，清 B 黄箱、B 包点和 B 雪人；',
        '0:08 K/O 用闪光封 B 大厅，捷风从 B 绿箱贴左墙进场；',
        '0:12 蝰蛇把蛇吻丢在 B 黄箱口，逼走箱后贴脸架枪的人；',
        '0:20 默认位下包，剩下两人从 B 管道绕后，卡住 B 雪堆方向的回防路线。'
      ],
      tips: 'B 点面积大，毒幕一定要拉到厨房那一侧，否则 B 大厅的回防会从侧翼直接打进来。'
    },
    {
      id: 'icebox-mid-control',
      name: '中路控图转 B (Mid Control)',
      side: 'attack',
      level: 2,
      comp: ['viper', 'sova', 'jett', 'harbor', 'killjoy'],
      marks: ['b-recon-sova', 'b-molly-default', 'b-wall-main'],
      summary: '先抢中路锅炉房和蓝箱，逼防守方收缩中路，再从中路管道转 B 打点。',
      steps: [
        '0:00 蝰蛇用毒幕封中路蓝箱，猎枭射侦察箭清锅炉房；',
        '0:06 捷风从中路占下锅炉房，奇乐在中路木板放炮台看住 B 管道；',
        '0:14 海神在 B 管道口丢水罩，两人从中路绕进管道做前置；',
        '0:20 蝰蛇在 B 橙箱后补毒幕切开包点，五个人从中路一起转 B；',
        '0:28 下包后卡 B 黄箱和 B 厨房两个口，等防守方来拆。'
      ],
      tips: '中路控住之后一定要留一个人在锅炉房看中路回防，别五个人全钻进管道。'
    },
    {
      id: 'icebox-defense-a',
      name: 'A 区标准防守 (A Setup)',
      side: 'defense',
      level: 3,
      comp: ['viper', 'killjoy', 'sova', 'jett', 'harbor'],
      marks: ['d-a-pipes-molly', 'd-a-rafters-turret', 'd-mid-recon'],
      summary: '奇乐守 A 天台，蝰蛇用蛇吻卡管道，猎枭侦察箭盯中路，等回防两路夹击。',
      steps: [
        '0:00 奇乐在 A 天台架炮台，覆盖 A 包点和 A 管道出口；',
        '0:03 蝰蛇把蛇吻留在 A 屏风后，管道一有脚步就丢到 A 管道口；',
        '0:08 猎枭从锅炉房射侦察箭到中路蓝箱，确认中路有没有人过；',
        '0:15 A 管道被封后，捷风贴 A 巢前压，海神在 A 传送带留水罩等回防；',
        '0:25 一旦包点被下，全员从 A 天台和 A 巢两路夹回，奇乐大招开在 A 默认位。'
      ],
      tips: 'A 点两条上升绳是回防的核心，A 天台的人不要轻易下平台，守住高台就守住了包点。'
    },
    {
      id: 'icebox-defense-b',
      name: 'B 区重防与回防 (B Retake)',
      side: 'defense',
      level: 4,
      comp: ['viper', 'astra', 'sova', 'killjoy', 'jett'],
      marks: ['d-b-return-wall', 'd-b-tube-smoke', 'd-mid-recon'],
      summary: '星礈封管道与黄箱，蝰蛇毒幕横在包点前沿，逼进攻方空手进点。',
      steps: [
        '0:00 星礈把两颗星放到 B 管道和 B 黄箱口，先不引爆；',
        '0:05 蝰蛇站在 B 后方拉出毒幕，幕布从 B 雪人一直拉到 B 车库方向；',
        '0:10 奇乐在 B 雪堆放炮台，猎枭从 B 厨房射侦察箭看 B 管道；',
        '0:18 听到管道脚步就爆星云，同时毒幕前压，把进攻方挤在 B 橙和 B 管道里；',
        '0:30 如果包点丢了，蝰蛇大招封 B 默认位，全员从 B 后方和 B 小屋一起夹回。'
      ],
      tips: 'B 区防守最怕被 B 管道偷侧身，星礈永远要留一颗星给管道口。'
    }
  ]
};
