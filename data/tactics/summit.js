window.TACTICS = window.TACTICS || {};
window.TACTICS['summit'] = {
  slug: 'summit',
  zh: '天枢云阙',
  en: 'Summit',
  overview: '双包点地图：A 点在右侧，被 A Art / A Cave 两处高地俯瞰；B 点在左侧 B Tower / B Gym 的下沉区，进点必须走 B Main 这条窄道。中路 Mid Fountain 与 Mid Tiles 是贯穿全图的天井，另有 A / Mid / B 三道可降下的墙（Droppable Wall）与 B Gym 升降台，控住中路等于同时掐住两条大路。',
  markers: [
    {
      id: 'a-art-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A Art 烟',
      x: 79.5, y: 25,
      r: 7,
      from: { x: 74.5, y: 56.9 },
      aim: '站在 A 大（A Main）中段贴左墙（74.5, 56.9），准星抬到 A Art 平台外沿再往上约一个身位，按住原地投出黑瘴。',
      note: 'A Art 是整张图最凶的架点，封掉它 A 大的队伍才能不交第二颗道具直接踩进包点。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-cave-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'A Cave 烟',
      x: 95.5, y: 25,
      r: 7,
      from: { x: 74.5, y: 56.9 },
      aim: '在 A 大同一贴墙位（74.5, 56.9）打开天降烟面板，把圆圈套在 A Cave 洞口正上方（95.5, 25），一次投放。',
      note: 'A Cave 的防守者能直接看穿整个包点，烟一落 A 区进攻就只剩正面一条枪线。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-garden-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A Garden 燃烧弹',
      x: 78, y: 36,
      r: 4.5,
      from: { x: 74.5, y: 56.9 },
      aim: '站在 A 大中段（74.5, 56.9），准星压低到 A Garden 花坛石沿与地面的交线，蓄满力投出彩雷飞溅。',
      note: '把蹲在 A Garden 等高地对枪的防守者逼出来，进点队友不用再分一个人看这个夹角。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-site-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 区侦察箭',
      x: 88, y: 43,
      r: 8,
      from: { x: 75, y: 55 },
      aim: '站在 A 大出口右侧（75, 55），准星对准 A 包点中央立柱上方的横梁缺口，蓄满力射出寻敌箭，箭落在包点中段。',
      note: '一箭同时扫到 A 包点和 A Art 下方，落地前就能判断对面是重防 A 还是只留一个人。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-link-wall',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'A Link 浪墙',
      x: 66, y: 38,
      r: 6,
      from: { x: 85, y: 44 },
      aim: '站在 A 包点东侧贴墙（85, 44），准星对准 A Link 通道口左墙沿，沿墙推出狂潮后原地引导，把整条通道盖住。',
      note: '一条浪墙切断 A 包点经 A Link 回中路的路线，A 区进攻就只剩下正面一条线要打。',
      tags: ['A区', '进攻', '切割']
    },
    {
      id: 'b-tower-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'B Tower 烟',
      x: 14.6, y: 22,
      r: 7,
      from: { x: 12.5, y: 49 },
      aim: '站在 B 大（B Main）中段贴右墙（12.5, 49），准星抬到 B Tower 塔顶外沿再往上半个身位，原地投出黑瘴。',
      note: 'B Tower 是 B 区最高的架点，烟住它之后 B 大的队伍才能安全走到 B 点入口。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'b-gym-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'B Gym 燃烧弹',
      x: 25, y: 18,
      r: 4.5,
      from: { x: 13, y: 50 },
      aim: '站在 B 大中段（13, 50），准星压到 B Gym 升降台口下沿与地面的交线，蓄满力投出彩雷飞溅。',
      note: 'B Gym 是防守方最常用的前压出口，一颗燃烧弹就能逼停他们的节奏、顺带拿到信息。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-site-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'B 区侦察箭',
      x: 13, y: 30,
      r: 8,
      from: { x: 12.5, y: 49 },
      aim: '在 B 大同一贴墙位（12.5, 49），准星对准 B 包点地面与后墙的交线，蓄满力射出寻敌箭。',
      note: '扫出 B 包点与 B Trophy 两个常用守点，决定是直接压进还是先做假动作。',
      tags: ['B区', '进攻', '信息']
    },
    {
      id: 'b-drop-smoke',
      side: 'attack',
      agent: 'viper',
      ability: 'smoke',
      label: 'B Drop 毒幕',
      x: 6, y: 25,
      r: 7,
      from: { x: 13, y: 48 },
      aim: '站在 B 大中段（13, 48），准星对准 B Drop 跳台正上方约两个身位，点出毒幕球再引爆。',
      note: 'B Drop 能直接绕过 B 大正面跳进包点侧翼，这团毒幕让防守方不敢再从这里偷人。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'mid-fountain-smoke',
      side: 'attack',
      agent: 'clove',
      ability: 'smoke',
      label: '中路天井烟',
      x: 51, y: 54,
      r: 7,
      from: { x: 52.7, y: 68 },
      aim: '站在 Mid Top（52.7, 68），准星抬到 Mid Fountain 天井上沿，原地投出烟雾。',
      note: '把中路天井的交叉枪线切掉，中路队伍才有机会摸到 Mid Window 拿到转点的主动权。',
      tags: ['中路', '进攻', '烟']
    },
    {
      id: 'mid-window-molly',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'Mid 窗燃烧毒液',
      x: 48, y: 33,
      r: 4.5,
      from: { x: 45.2, y: 42.8 },
      aim: '站在 Mid Bottom（45.2, 42.8），准星压到 Mid Window 窗台与地面的交线，原地投出蛇吻。',
      note: 'Mid Window 是防守方看中路的眼睛，烧掉它中路前压和转点都轻松一半。',
      tags: ['中路', '进攻', '清点']
    },
    {
      id: 'def-a-art-trap',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'A Art 警报',
      x: 80, y: 28,
      r: 4,
      from: { x: 88, y: 45 },
      aim: '防守方站在 A 包点靠 A Cave 一侧（88, 45），准星对准 A Art 平台边缘地面（80, 28）放置警报机器人，然后退回 A Yard 架枪。',
      note: 'A Art 是 A 区侧翼的必经点，警报一响就能判断对面是打 A 还是只做假动作。',
      tags: ['A区', '防守', '信息']
    },
    {
      id: 'def-b-gym-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'B Gym 绊线',
      x: 14, y: 24.5,
      r: 4,
      from: { x: 16, y: 30 },
      aim: '防守方从 B 包点走到 B Gym 升降台口（16, 30），准星对准升降台内侧地面（14, 24.5）拉一道绊线，再退回 B Tower 架枪。',
      note: 'B Gym 是防守方自己最常用的前压口，绊线既防对面从升降台摸上来，也给自己留了预警。',
      tags: ['B区', '防守', '陷阱']
    },
    {
      id: 'def-b-drop-trap',
      side: 'defense',
      agent: 'vyse',
      ability: 'trap',
      label: 'B Drop 荆棘',
      x: 7.1, y: 21.3,
      r: 4,
      from: { x: 11, y: 29 },
      aim: '防守方在 B 包点北侧（11, 29），准星对准 B Drop / Silent drop 落点的地面（7.1, 21.3）放下荆棘藤蔓，随后回到 B Tower 后架枪。',
      note: '同时盖住 B Drop 与静音落地两个口子，B 区一个人就能守住侧翼两个门。',
      tags: ['B区', '防守', '陷阱']
    },
    {
      id: 'def-mid-window-smoke',
      side: 'defense',
      agent: 'omen',
      ability: 'smoke',
      label: '中窗防守烟',
      x: 48, y: 32,
      r: 7,
      from: { x: 54.1, y: 26 },
      aim: '防守方站在 Mid Window 内侧（54.1, 26），准星对准中窗外沿上方一个身位，原地投出黑瘴封住窗口。',
      note: '开局先把中路视角切断，防守方就能用最少的人手看住 Mid Tiles 与 Mid Fountain 两条推进线。',
      tags: ['中路', '防守', '烟']
    },
    {
      id: 'def-a-main-smoke',
      side: 'defense',
      agent: 'viper',
      ability: 'smoke',
      label: 'A 大封口毒幕',
      x: 74.5, y: 56.9,
      r: 7,
      from: { x: 83.6, y: 47 },
      aim: '防守方站在 A 包点西侧（84, 47），准星对准 A 大出口地面（74.5, 56.9），点出毒幕球直接引爆。',
      note: '残局或人数劣势时把 A 大口封住，等于把 A 区进攻方堵在门外十几秒，足够队友回防。',
      tags: ['A区', '防守', '烟']
    }
  ],
  strats: [
    {
      id: 'summit-a-execute',
      name: 'A 区高台爆点 (A Execute)',
      side: 'attack',
      level: 3,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['a-art-smoke', 'a-cave-smoke', 'a-garden-molly', 'a-site-recon', 'a-link-wall'],
      summary: '双烟盖住 A Art 与 A Cave 两处高地，燃烧弹清 A Garden，再从 A 大正面压进包点。',
      steps: [
        '0:00 幽影在 A 大封 A Art 烟，炼狱式天降烟同步落在 A Cave，两处高地同时瞎掉。',
        '0:03 雷兹把燃烧弹丢进 A Garden，逼走对枪的防守者；猎枭射侦察箭扫 A 包点与 A Art 下方。',
        '0:06 海神沿 A 包点东侧推出浪墙，把 A Link 这条回防通道整条切断。',
        '0:09 捷风先手进场占 A Yard，其余人贴墙跟进，落地后立刻散成 A Art 与 A Cave 两个方向的交叉枪线。',
        '0:18 下包后两人退到 A Lobby 方向看 A 大，一人守 A Link，等对面拆包道具再决定是收枪还是硬换。'
      ],
      tips: '职业队打这张图几乎必带一个能封 A Cave 的控场。对面如果在 A Art 架双人，前 10 秒一定不要硬冲，等烟自然消散的第二个窗口再进。'
    },
    {
      id: 'summit-b-rush',
      name: 'B 区升降台强攻 (B Gym Rush)',
      side: 'attack',
      level: 2,
      comp: ['raze', 'kayo', 'viper', 'sova', 'omen'],
      marks: ['b-tower-smoke', 'b-gym-molly', 'b-drop-smoke', 'b-site-recon'],
      summary: '烟住 B Tower，燃烧弹逼停 B Gym 前压，五个人从 B 大一波灌进 B 点。',
      steps: [
        '0:00 幽影封 B Tower 烟，蝰蛇在 B Drop 落点引爆毒幕，两个架点同时被压住。',
        '0:02 雷兹把燃烧弹丢到 B Gym 升降台口，逼防守方不能从这里前压。',
        '0:05 猎枭射侦察箭确认 B 包点人数，K/O 的闪光弹从 B 大正面走天花板翻进去。',
        '0:07 五人贴 B 大右墙同步进场，第一顺位直接踩上包点，第二顺位补 B Trophy 夹角。',
        '0:15 下包后一人前压 B Lobby 卡回防，其余人分散到 B Tower 与 B Drop 两个方向守拆包。'
      ],
      tips: '这套打法的关键是节奏，五个人必须在 8 秒内全部进点，慢一秒对面中路的人就会从 B Link 抄回来。'
    },
    {
      id: 'summit-mid-control',
      name: '中路天井控制 (Mid Control)',
      side: 'attack',
      level: 4,
      comp: ['sova', 'astra', 'jett', 'cypher', 'kayo'],
      marks: ['mid-fountain-smoke', 'mid-window-molly', 'a-link-wall', 'def-mid-window-smoke'],
      summary: '先用天井烟与燃烧弹拿下中路，再从 Mid Window 与 A Link 同时夹 A，逼防守方两头跑。',
      steps: [
        '0:00 星礈把烟雾球放在 Mid Fountain 天井上沿，切掉中路的交叉枪线。',
        '0:04 蝰蛇式燃烧弹丢进 Mid Window，把防守方看中路的眼睛烧掉。',
        '0:08 捷风带一人压到 Mid Bottom 占住位置，猎枭用侦察箭确认对面中路是单防还是双防。',
        '0:14 如果中路是单防，海神式浪墙直接切断 A Link，中路与 A 大同时启动夹 A。',
        '0:22 如果对面中路重防，立刻退回天井转 B 大，用人数优势把 B 区一波带走。'
      ],
      tips: '中路控制打法的价值在于「可转」。千万别在中路跟对面耗时间，控住之后 10 秒内必须做出打 A 还是打 B 的决定。'
    },
    {
      id: 'summit-defense-a',
      name: 'A 区高地重防 (A Stack)',
      side: 'defense',
      level: 3,
      comp: ['killjoy', 'omen', 'viper', 'sova', 'jett'],
      marks: ['def-a-art-trap', 'def-a-main-smoke', 'def-mid-window-smoke'],
      summary: '三人重防 A 区，靠 A Art 与 A Cave 的高低差架枪，中路只留一个人给信息。',
      steps: [
        '0:00 奇乐在 A Art 平台边缘放警报机器人，占住整条侧翼通道。',
        '0:05 幽影封中窗烟切断中路视角，猎枭在中路射侦察箭，用一个道具换对面中路全部动向。',
        '0:12 蝰蛇留在 A 包点西侧，一旦 A 大出现多人立即引爆封口毒幕，把对面堵在门外。',
        '0:20 A Art 与 A Cave 两人交叉架枪，捷风负责 A Link 一侧，听到警报立刻侧移补枪。',
        '0:30 如果对面全部转 B，中路的人第一时间报数，A 区两人沿中窗快速回防，蝰蛇的毒幕留作断后。'
      ],
      tips: 'A Art 和 A Cave 必须一人一处，两个人挤在同一个高地对枪是最常见的送分方式。'
    },
    {
      id: 'summit-defense-b',
      name: 'B 区道具锁点 (B Lockdown)',
      side: 'defense',
      level: 4,
      comp: ['cypher', 'vyse', 'viper', 'omen', 'raze'],
      marks: ['def-b-gym-trap', 'def-b-drop-trap', 'def-a-main-smoke'],
      summary: 'B 点用绊线与荆棘同时锁住 B Gym 与 B Drop，把 B 区变成只要一个人就能守住的窄道。',
      steps: [
        '0:00 零从 B 包点走到 B Gym 升降台口拉绊线，顺手在 B 大方向补一个摄像头。',
        '0:06 维斯在 B 包点北侧放下荆棘，同时盖住 B Drop 与静音落地两个口子。',
        '0:12 蝰蛇把毒幕留给 B 大出口，幽影把烟雾留作残局封口，两人都站到 B Tower 后侧架枪。',
        '0:20 B 大一旦出现脚步声，零先收绊线信息，雷兹的燃烧弹直接丢进 B 大逼对面提前交道具。',
        '0:35 残局阶段如果 A 区被破，A 大封口毒幕交给蝰蛇引爆，B 区两人从中路抄回防。'
      ],
      tips: 'B 区是所有地图里最怕被拖时间的地方。防守方要主动用道具换信息，宁可提前引爆毒幕也不要在 B 点里跟对面拼残局。'
    }
  ]
};
