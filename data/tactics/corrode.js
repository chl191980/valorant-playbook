window.TACTICS = window.TACTICS || {};
window.TACTICS['corrode'] = {
  slug: 'corrode',
  zh: '盐海矿镇',
  en: 'Corrode',
  overview: '双包点上下分列：A 点在图上方的 A Yard / A Pocket 高地一侧，B 点在下方 B Arch / B Tower 一带；进攻方从右侧出生点出发，中路 Mid Stairs 是贯穿全图的主轴，谁先站住它谁就能自由选 A 或 B。A Crane 与 B Elbow 是两条绕后线，A Link / B Link 则是防守方中段回防的必经通道。',
  markers: [
    {
      id: 'a-yard-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A Yard 烟',
      x: 48, y: 23,
      r: 7,
      from: { x: 61, y: 23.6 },
      aim: '站在 A 大（A Main）出口贴左墙（61, 23.6），准星抬到 A Yard 平台檐口再往上约一个身位，原地投出黑瘴。',
      note: 'A Yard 正对 A 大出口，封掉它以后 A 区进攻方才有第一步落脚的地方。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-pocket-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'A Pocket 烟',
      x: 46.7, y: 13,
      r: 7,
      from: { x: 61, y: 23.6 },
      aim: '在 A 大同一贴墙位（61, 23.6）打开天降烟面板，把圆圈套在 A Pocket 洞口正上方（46.7, 13），一次投放。',
      note: 'A Pocket 的防守者能斜着看穿整个 A 包点，这团烟是 A 区进点前最不能省的一颗。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-elbow-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A Elbow 燃烧弹',
      x: 37, y: 11.5,
      r: 4.5,
      from: { x: 48.5, y: 22 },
      aim: '走到 A Yard 平台边（48.5, 22），准星压低到 A Elbow 拐角地面与墙根的交线，蓄满力投出彩雷飞溅。',
      note: 'A Elbow 是防守方绕后与包点夹枪的常用点，一颗燃烧弹就能把它清干净。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-site-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 区侦察箭',
      x: 39.3, y: 20,
      r: 8,
      from: { x: 61, y: 23.6 },
      aim: '站在 A 大出口（61, 23.6），准星对准 A 包点中央立柱上方的横梁缺口，蓄满力射出寻敌箭，箭落在包点中段。',
      note: '一箭同时扫到 A 包点和 A Pocket 下方，落地前就能判断对面是重防 A 还是只留一个人。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-link-wall',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'A Link 浪墙',
      x: 44.5, y: 40,
      r: 6,
      from: { x: 55.4, y: 28 },
      aim: '站在 A 大中段右侧（55.4, 28），准星对准 A Link 通道口左墙沿，沿墙推出狂潮后原地引导，把整条通道盖住。',
      note: '一条浪墙切断 A 包点经 A Link 回中路的路线，A 区进攻就只剩正面一条线要打。',
      tags: ['A区', '进攻', '切割']
    },
    {
      id: 'b-arch-smoke',
      side: 'attack',
      agent: 'viper',
      ability: 'smoke',
      label: 'B Arch 毒幕',
      x: 18, y: 81,
      r: 7,
      from: { x: 40, y: 78 },
      aim: '站在 B 包点前沿（40, 78），准星抬到 B Arch 拱门顶部再往上两个身位，点出毒幕球后直接引爆。',
      note: 'B Arch 是防守方最深的架点，毒幕一落 B 点的整个后场就变成单向视野。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'b-tower-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'B Tower 燃烧弹',
      x: 29, y: 74,
      r: 4.5,
      from: { x: 40, y: 78 },
      aim: '站在 B 包点前沿同一位置（40, 78），准星压到 B Tower 塔基与地面的交线，蓄满力投出彩雷飞溅。',
      note: 'B Tower 是 B 区最高的架点，燃烧弹把它清掉之后进点队友就不用再抬头找人。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-site-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'B 区侦察箭',
      x: 40, y: 77,
      r: 8,
      from: { x: 52.8, y: 78.3 },
      aim: '站在 B 大（B Main）出口（52.8, 78.3），准星对准 B 包点地面与后墙的交线，蓄满力射出寻敌箭。',
      note: '扫出 B 包点与 B Tower 两个常用守点，决定是直接压进还是先做假动作。',
      tags: ['B区', '进攻', '信息']
    },
    {
      id: 'b-link-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'B Link 烟',
      x: 40, y: 61,
      r: 7,
      from: { x: 47, y: 68 },
      aim: '站在 B 大与 B Lobby 之间（47, 68），准星对准 B Link 通道口上沿，原地投出黑瘴。',
      note: 'B Link 是防守方从中路抄回 B 点最快的路，烟住它可以让下包后的残局少一个方向要盯。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'mid-stairs-smoke',
      side: 'attack',
      agent: 'clove',
      ability: 'smoke',
      label: '中路楼梯烟',
      x: 54.3, y: 49.3,
      r: 7,
      from: { x: 71.6, y: 49.4 },
      aim: '站在 Mid Bottom（71.6, 49.4），准星抬到 Mid Stairs 楼梯上沿，原地投出烟雾。',
      note: '中路楼梯是这张图唯一的中轴，把它烟住中路队伍才能安全摸到 Mid Top 拿视野。',
      tags: ['中路', '进攻', '烟']
    },
    {
      id: 'mid-top-recon',
      side: 'attack',
      agent: 'fade',
      ability: 'recon',
      label: '中路侦察眼',
      x: 38.7, y: 50.2,
      r: 6,
      from: { x: 54, y: 49.5 },
      aim: '站在 Mid Stairs 顶端（54, 49.5），准星抬到 Mid Top 上方约两个身位，投出黑梦之眼让它在空中展开。',
      note: '一颗眼同时看住 Mid Top 与 Mid Window，中路是单防还是双防一眼就能看出来。',
      tags: ['中路', '进攻', '信息']
    },
    {
      id: 'def-a-link-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A Link 绊线',
      x: 44.5, y: 40,
      r: 4,
      from: { x: 40, y: 25 },
      aim: '防守方站在 A 包点西侧（40, 25），准星对准 A Link 通道口地面（44.5, 40）拉一道绊线，随后退回 A Yard 后侧架枪。',
      note: 'A Link 是进攻方从 A 点转中路的唯一通道，绊线一响就能判断对面是回防还是想打中段。',
      tags: ['A区', '防守', '信息']
    },
    {
      id: 'def-b-elbow-trap',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'B Elbow 警报',
      x: 31.8, y: 88.1,
      r: 4,
      from: { x: 40, y: 79 },
      aim: '防守方从 B 包点后场（40, 79）走到 B Elbow 拐角，准星对准拐角地面（31.8, 88.1）放置警报机器人，再退回 B Arch 架枪。',
      note: 'B Elbow 能直接绕过 B 点正面从侧翼捅进来，警报一响防守方就有一整个身位的时间补枪。',
      tags: ['B区', '防守', '信息']
    },
    {
      id: 'def-b-main-smoke',
      side: 'defense',
      agent: 'astra',
      ability: 'smoke',
      label: 'B 大封口星云',
      x: 52.8, y: 78.3,
      r: 7,
      from: { x: 46, y: 77 },
      aim: '防守方站在 B 包点西北侧（46, 77），把星云落在 B 大出口地面（52.8, 78.3）并引爆。',
      note: '人数劣势时把 B 大口封住，等于把进攻方堵在门外十几秒，足够中路队友从 B Link 抄回来。',
      tags: ['B区', '防守', '烟']
    },
    {
      id: 'def-a-yard-smoke',
      side: 'defense',
      agent: 'viper',
      ability: 'smoke',
      label: 'A Yard 防守毒幕',
      x: 48, y: 23,
      r: 7,
      from: { x: 42, y: 20 },
      aim: '防守方站在 A 包点西侧（42, 20），准星对准 A Yard 平台入口上方一个身位，点出毒幕球直接引爆。',
      note: 'A Yard 是 A 大的必经落点，封住它防守方就能逼进攻方在没有落脚点的情况下硬冲。',
      tags: ['A区', '防守', '烟']
    },
    {
      id: 'def-mid-window-smoke',
      side: 'defense',
      agent: 'omen',
      ability: 'smoke',
      label: '中窗防守烟',
      x: 31.6, y: 50.4,
      r: 7,
      from: { x: 30.3, y: 50 },
      aim: '防守方站在 Mid Window 内侧（30.3, 50），准星对准中窗外沿上方一个身位，原地投出黑瘴封住窗口。',
      note: '开局先把中路视角切断，防守方就能用最少的人手看住 Mid Stairs 与 Mid Top 两条推进线。',
      tags: ['中路', '防守', '烟']
    }
  ],
  strats: [
    {
      id: 'corrode-a-split',
      name: 'A 区上下分手爆点 (A Split)',
      side: 'attack',
      level: 4,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['a-yard-smoke', 'a-pocket-smoke', 'a-elbow-molly', 'a-site-recon', 'a-link-wall'],
      summary: '双烟盖住 A Yard 与 A Pocket，两组人从 A 大和 A Link 同时进点，把 A 区夹成一个口袋。',
      steps: [
        '0:00 幽影封 A Yard 烟，炼狱式天降烟同步落在 A Pocket，两处架点同时瞎掉。',
        '0:03 雷兹把燃烧弹丢进 A Elbow，逼走绕后的防守者；猎枭射侦察箭扫 A 包点与 A Pocket 下方。',
        '0:06 海神沿 A 包点东侧推出浪墙，把 A Link 这条回防通道整条切断。',
        '0:09 捷风从 A 大先手踩上包点，第二组人从 A Link 侧翼同时压进，形成上下交叉。',
        '0:18 下包后两人退到 A Main 方向看 A 大，一人守 A Link，K/O 的闪光弹留给对面回防的第一波人。'
      ],
      tips: '这张图的 A 区最怕葫芦娃式一个个进。两组人必须在同一个两秒窗口里同时出现，防守方才来不及转身。'
    },
    {
      id: 'corrode-b-rush',
      name: 'B 区正面灌点 (B Rush)',
      side: 'attack',
      level: 2,
      comp: ['raze', 'kayo', 'viper', 'sova', 'brimstone'],
      marks: ['b-arch-smoke', 'b-tower-molly', 'b-site-recon', 'b-link-smoke'],
      summary: '毒幕盖 B Arch，燃烧弹清 B Tower，五个人从 B 大一波灌进 B 点。',
      steps: [
        '0:00 蝰蛇在 B 包点前沿点出毒幕球封住 B Arch，B 区后场的视线同时被切掉。',
        '0:02 雷兹把燃烧弹丢到 B Tower 塔基，把最高的那个架点清空。',
        '0:05 猎枭射侦察箭确认 B 点人数，K/O 的闪光弹走 B 大右墙上方翻进包点。',
        '0:07 五人贴 B 大左墙同步进场，第一顺位直接踩包点，第二顺位补 B Link 方向的夹角。',
        '0:16 下包后幽影式烟位封住 B Link，其余人分散到 B Arch 与 B Lobby 两个方向守拆包。'
      ],
      tips: 'B 区的场地比 A 区窄，五个人挤在同一个门口反而会被一颗道具串糖葫芦。进场时前后拉开三到四个身位。'
    },
    {
      id: 'corrode-mid-control',
      name: '中路楼梯控制 (Mid Control)',
      side: 'attack',
      level: 3,
      comp: ['fade', 'astra', 'jett', 'cypher', 'kayo'],
      marks: ['mid-stairs-smoke', 'mid-top-recon', 'def-mid-window-smoke', 'a-link-wall'],
      summary: '用烟雾和侦察眼拿下 Mid Stairs，站住中轴之后再决定是走 A Link 夹 A 还是回头打 B。',
      steps: [
        '0:00 星礈把烟雾球放在 Mid Stairs 上沿，切掉楼梯口的交叉枪线。',
        '0:03 黑梦往 Mid Top 上方投出黑梦之眼，一颗道具看住 Mid Top 与 Mid Window 两个位置。',
        '0:08 捷风带一人压到 Mid Stairs 顶端占位，猎枭式信息位负责报出对面中路是单防还是双防。',
        '0:14 中路是单防就沿 A Link 与 A 大同时夹 A，海神式浪墙切断 A 区中段的回防路线。',
        '0:22 中路是重防就立刻退回 Mid Bottom 转 B 大，用人数优势把 B 区一波带走。'
      ],
      tips: '中路控制打法的价值在于「可转」。控住 Mid Stairs 之后 10 秒内必须做出打 A 还是打 B 的决定，否则对面回防就位这套就白打了。'
    },
    {
      id: 'corrode-defense-split',
      name: 'A/B 上下分区防守 (Split Defense)',
      side: 'defense',
      level: 3,
      comp: ['killjoy', 'cypher', 'omen', 'viper', 'sova'],
      marks: ['def-a-link-trap', 'def-b-elbow-trap', 'def-b-main-smoke', 'def-a-yard-smoke'],
      summary: '上下包点各两人、中路一人给信息，靠绊线与封口烟把两个点都守成「一个人也能拖住」的窄道。',
      steps: [
        '0:00 零在 A Link 通道口拉绊线，奇乐走到 B Elbow 拐角放警报机器人，两条侧翼通道同时被锁。',
        '0:06 幽影封中窗烟切断中路视角，猎枭在中路射侦察箭，用一个道具换对面中路全部动向。',
        '0:14 蝰蛇留在 A 包点西侧，一旦 A Yard 出现多人立即引爆防守毒幕，把进攻方堵在平台外。',
        '0:22 星礈把星云留在 B 大出口，A 区与 B 区各两人交叉架枪，中路的人负责听脚步报数。',
        '0:35 对面若重压一侧，中路的人第一时间回防，另一侧留一个人和一颗封口烟拖时间。'
      ],
      tips: '这张图的中路是平的，两边包点又分上下，回防路线很长。防守方一定要主动用道具换信息，不能等对面进点才知道打哪。'
    },
    {
      id: 'corrode-mid-push',
      name: '中路窗前压反清 (Mid Push)',
      side: 'defense',
      level: 4,
      comp: ['sova', 'omen', 'raze', 'chamber', 'kayo'],
      marks: ['def-mid-window-smoke', 'mid-stairs-smoke', 'def-a-link-trap'],
      summary: '开局用烟切断中路视线，两人从 Mid Window 前压到 Mid Stairs，把中路控制权提前抢过来。',
      steps: [
        '0:00 幽影先封中窗烟，猎枭立刻往 Mid Stairs 方向射侦察箭，确认对面中路有没有人。',
        '0:05 侦察箭扫到人就不压，扫不到就让尚勃勒和雷兹从 Mid Window 摸出去，抢下 Mid Stairs 顶端。',
        '0:12 拿到中路之后在 Mid Top 插一个摄像头式预警位，整条中轴的动静都能提前两秒知道。',
        '0:20 中路有优势就顺势压到 Mid Bottom，配合 A Link 的绊线把进攻方的中路出生点出口堵死。',
        '0:30 一旦对面五人抱团反清中路，立刻退回中窗用烟雾断后，把中路让出去换一个完整的防守阵型。'
      ],
      tips: '前压反清是高风险高回报的打法，只建议在开局第一波枪械优势或者对面明显在打默认控图时使用。'
    }
  ]
};
