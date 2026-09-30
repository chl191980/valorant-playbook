window.TACTICS = window.TACTICS || {};
window.TACTICS['pearl'] = {
  slug: 'pearl',
  zh: '深海明珠',
  en: 'Pearl',
  overview: '双包点、零机关的对枪图，中路是全场唯一的快速转点通道，谁控制中路谁决定节奏，守方地形略占优。',
  markers: [
    {
      id: 'a-deep-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A 后场烟',
      x: 88, y: 25,
      r: 7,
      from: { x: 85, y: 45 },
      aim: '站在 A 大（A Main）中段贴右墙，准星抬到 A 包点后场高台檐口上方一指，站定原地投出黑障。',
      note: '封住 A 包点后场与 A 塔方向的直架，下包之后只需要盯 A Link 一个口。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-link-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A Link 烟',
      x: 72, y: 38,
      r: 7,
      from: { x: 85, y: 43 },
      aim: '站在 A 大出口右侧，准星对准 A Link 通道口上方的方形空调外机，原地投出黑障。',
      note: '切断中路经 A 艺术馆回防 A 的路线，A 区进攻就变成单向压力。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-dugout-molly',
      side: 'attack',
      agent: 'gekko',
      ability: 'molly',
      label: 'A 凹坑燃烧弹',
      x: 91, y: 33,
      r: 4.5,
      from: { x: 85, y: 41 },
      aim: '站在 A 大出口贴墙，准星压到 A 凹坑（A Dugout）边缘与地面的交线，蓄力满投莫洛托夫。',
      note: '把躲在 A 凹坑里的防守者逼出来，进点队友不用再分人看这个死角。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-main-smoke',
      side: 'attack',
      agent: 'viper',
      ability: 'smoke',
      label: 'A 大封口烟',
      x: 84, y: 40,
      r: 7,
      from: { x: 85, y: 60 },
      aim: '站在 A 大中段靠左墙，准星照到 A 包点入口正上方招牌的下沿，原地投出毒云。',
      note: '封住 A 大出口，掩护队友完成下包并转成守包站位。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-mid-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A Art 侦察箭',
      x: 72, y: 40,
      r: 8,
      from: { x: 86, y: 50 },
      aim: '站在 A 大中段，准星对准 A 艺术馆（A Art）与 A Link 之间的通道上空，蓄满力投出侦察箭。',
      note: '一箭同时扫到 A Art 与 A Link，判断对面是分推还是重防 A。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'b-tower-smoke',
      side: 'attack',
      agent: 'harbor',
      ability: 'smoke',
      label: 'B 塔烟',
      x: 21, y: 29,
      r: 7,
      from: { x: 8, y: 50 },
      aim: '站在 B 大（B Main）出口贴右墙，准星抬到 B 塔（B Tower）平台外沿上方半个身位，原地投出水罩。',
      note: '封住 B 塔高点，攻方可以从 B 坡两侧同时压进 B 包点。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'b-ramp-molly',
      side: 'attack',
      agent: 'brimstone',
      ability: 'molly',
      label: 'B 坡燃烧弹',
      x: 19, y: 44,
      r: 4.5,
      from: { x: 10, y: 52 },
      aim: '站在 B 大出口箱体后，准星照到 B 坡（B Ramp）地面与立柱的交线，蓄力投出燃烧弹。',
      note: '烧掉 B 坡口最常见的防守站位，逼对手退回包点深处。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-hall-wall',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'B 厅浪墙',
      x: 14, y: 28,
      r: 6,
      from: { x: 9, y: 48 },
      aim: '站在 B 大中段，准星对准 B 后厅（B Hall）通道口左侧墙沿，沿墙推出浪墙后原地引导。',
      note: '一条浪墙把 B Hall 的回防路线整段切掉，B 区进攻只剩正面一条线要打。',
      tags: ['B区', '进攻', '切割']
    },
    {
      id: 'b-link-smoke',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: 'B Link 烟',
      x: 30, y: 49,
      r: 7,
      from: { x: 56, y: 62 },
      aim: '站在中路靠 B 侧，准星对准 B Link 通道口上方的横梁，落星后原地引爆天星。',
      note: '封住中路进 B 的 B Link，防止防守方从 B Link 夹击下包的队友。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'mid-doors-smoke',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: '中门烟',
      x: 58, y: 27,
      r: 7,
      from: { x: 56, y: 60 },
      aim: '站在中路（Mid Plaza）南侧，准星对准中门（Mid Doors）洞口上方的横梁，落星后原地引爆天星。',
      note: '切断守方半场与中路的连接，攻方拿中路时不会被正面架枪打回。',
      tags: ['中路', '进攻', '烟']
    },
    {
      id: 'def-a-flowers-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A 花坛绊线',
      x: 80, y: 37,
      r: 4,
      from: { x: 85, y: 32 },
      aim: '防守方站在 A 包点靠花坛（A Flowers）一侧，准星对准 A 大出口地面，放置绊线后回到花坛后架枪。',
      note: '绊线卡住 A 大正面，配合花坛的架枪点把 A 区变成一个人的防线。',
      tags: ['A区', '防守', '陷阱']
    },
    {
      id: 'def-a-main-wall',
      side: 'defense',
      agent: 'viper',
      ability: 'wall',
      label: 'A 大毒幕',
      x: 86, y: 47,
      r: 6,
      from: { x: 88, y: 36 },
      aim: '站在 A 包点后场，准星对准 A 大中段左侧墙面，沿墙拉出毒幕后原地引导，覆盖整条 A 大。',
      note: '开局就切断 A 大的视野，逼进攻方改走 A Secret 或中路，提前暴露意图。',
      tags: ['A区', '防守', '切割']
    },
    {
      id: 'def-mid-turret',
      side: 'defense',
      agent: 'killjoy',
      ability: 'recon',
      label: '中路炮台',
      x: 46, y: 50,
      r: 5,
      from: { x: 50, y: 47 },
      aim: '站在中路广场北侧掩体后，准星对准中门方向的地面，放出炮台后立刻拉回掩体。',
      note: '炮台提供中路持续信息，让守方可以放心把两个人堆到 A 区。',
      tags: ['中路', '防守', '信息']
    },
    {
      id: 'def-b-hall-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'B 厅绊线',
      x: 13, y: 31,
      r: 4,
      from: { x: 18, y: 40 },
      aim: '站在 B 包点靠后厅一侧，准星对准 B 厅（B Hall）入口地面，放置绊线后回到包点架枪。',
      note: '绊线覆盖 B Hall，任何从守方半场绕过来的人都会先被标记。',
      tags: ['B区', '防守', '陷阱']
    },
    {
      id: 'def-b-main-molly',
      side: 'defense',
      agent: 'killjoy',
      ability: 'molly',
      label: 'B 大蜂群',
      x: 10, y: 45,
      r: 4.5,
      from: { x: 8, y: 52 },
      aim: '站在 B 包点靠 B 大一侧，准星压到 B 大入口正前方地面，投出纳米蜂群后回身架枪。',
      note: '蜂群卡住 B 大门口，配合 B 坡的架枪点拖慢 B 区第一波进攻。',
      tags: ['B区', '防守', '陷阱']
    }
  ],
  strats: [
    {
      id: 'pearl-a-split',
      name: 'A 区双路夹击 (A Split)',
      side: 'attack',
      level: 4,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'gekko'],
      marks: ['a-deep-smoke', 'a-link-smoke', 'a-dugout-molly', 'a-mid-recon'],
      summary: '中路先拿 A 艺术馆，再从 A Link 与 A 大同时压进 A 包点，让防守方在两个方向之间无站稳脚。',
      steps: [
        '0:00 开局捷风与奇乐控中路，猎枭在 A 大中段蓄力侦察箭，一发扫出 A Art 与 A Link；',
        '0:08 幽影在 A 大出口封 A 包点后场烟，把防守方的架枪点整个往后推；',
        '0:15 中路两人摸进 A 艺术馆，与 A 大的三人形成两个进点方向；',
        '0:22 幽影补一颗 A Link 烟，切断中路与守方半场的回防路线；',
        '0:30 两路同时进场，盖可的莫洛托夫先烧 A 凹坑，捷风踩上包点，四人交叉下包。'
      ],
      tips: '这套打法最怕中路被对面提前抢下来；如果中路开局就掉人，立刻改成 A 大单点强攻，把 A Link 交给猎枭的侦察箭去看。'
    },
    {
      id: 'pearl-b-rush',
      name: 'B 区快速强攻 (B Rush)',
      side: 'attack',
      level: 2,
      comp: ['raze', 'breach', 'harbor', 'killjoy', 'fade'],
      marks: ['b-tower-smoke', 'b-ramp-molly', 'b-hall-wall'],
      summary: '五人开局直冲 B 大，用烟封 B 塔、浪墙切 B 厅，抢在防守方轮转到位前完成下包。',
      steps: [
        '0:00 五人满道具从出生点直接走 B 大，只留一个人在 B 大外做视野；',
        '0:05 海神在 B 大出口封 B 塔烟，同时沿 B 厅口推出浪墙；',
        '0:08 铁臂在 B 大门口放震撼弹，雷兹的爆破包直接推进 B 坡；',
        '0:12 黑梦从 B 塔方向放噩梦清角，五人分散站进 B 包点；',
        '0:18 两人下包、两人卡 B 大、一人看 B Link，整套动作不超过 25 秒。'
      ],
      tips: 'B 大的长走廊对进攻方是有利的，但前提是 B 塔必须被封住；一旦第一颗烟没到位，就退回 B 大做默认，不要硬冲。'
    },
    {
      id: 'pearl-mid-control',
      name: '中路控图转 B (Mid Control)',
      side: 'attack',
      level: 3,
      comp: ['jett', 'sova', 'astra', 'cypher', 'brimstone'],
      marks: ['mid-doors-smoke', 'b-link-smoke', 'b-ramp-molly'],
      summary: '先用中门烟把守方半场与中路切断，再用 B Link 与 B 大做成夹击，最后决定打 B 还是回 A。',
      steps: [
        '0:00 开局星礈在中路落星封中门，零用摄像头守住中路北侧；',
        '0:10 猎枭的侦察箭扫中路广场，确认对面中路只留了一个人；',
        '0:20 星礈补一颗 B Link 烟，炼狱的燃烧弹烧 B 坡口，全队往 B 区转；',
        '0:30 中路两人从 B Link 进、B 大三人从正面进，同时踩进 B 包点；',
        '0:40 下包后星礈把中门烟续上，全队退到 B 大与 B Link 两个方向守包。'
      ],
      tips: '中路的胜负基本就是这一局的胜负：中门烟一断，防守方的转点时间会多出十秒以上，宁可多花一颗烟也不要让中路失守。'
    },
    {
      id: 'pearl-def-mid',
      name: '中路压制防守 (Mid Pressure)',
      side: 'defense',
      level: 4,
      comp: ['killjoy', 'cypher', 'viper', 'sova', 'jett'],
      marks: ['def-mid-turret', 'def-a-main-wall', 'def-b-hall-trap'],
      summary: '开局三个人压中路，用炮台与毒幕把中路钉死，逼进攻方只能去打两条大路。',
      steps: [
        '0:00 猎枭在中路广场后侧架枪，奇乐在中路北侧掩体后放出炮台；',
        '0:05 蝰蛇沿 A 大中段墙面拉出毒幕，把 A 大的长枪线整段切掉；',
        '0:12 零在 B 厅入口放绊线，捷风在中门（Mid Doors）附近做二次架枪；',
        '0:20 猎枭的侦察箭扫中路，确认对面是打 A 还是 B，喊出轮转方向；',
        '0:30 若对面强攻 A，蝰蛇毒幕保留收口，中路两人从中门回防，B 区只留奇乐一人。'
      ],
      tips: '中路一旦压出去就必须有人看中门，否则对面一颗烟就能把中路三个人关在里面；炮台是用来保命的，不是用来主动开团的。'
    },
    {
      id: 'pearl-def-b-anchor',
      name: 'B 区单点固守 (B Anchor)',
      side: 'defense',
      level: 3,
      comp: ['killjoy', 'cypher', 'omen', 'fade', 'jett'],
      marks: ['def-b-main-molly', 'def-b-hall-trap', 'def-a-flowers-trap'],
      summary: 'B 区用蜂群与绊线做成一个人的防线，其余四人全部堆到 A 区与中路。',
      steps: [
        '0:00 奇乐一个人守 B，在 B 大入口投纳米蜂群、在 B 厅口放绊线，自己退到 B 坡后架枪；',
        '0:06 剩下四人全部压到 A 区与中路，幽影在 A 大封烟，黑梦放噩梦扫 A 艺术馆；',
        '0:15 奇乐靠蜂群与炮台的报点判断 B 大是不是主攻，不是主攻就保持静默不露头；',
        '0:25 一旦确认 B 区强攻，A 区两人立刻从守方半场走 B Link 回防，中路一人卡 B 厅；',
        '0:35 回防时先清 B 坡再看包点，蜂群留给下包之后的第一波架枪点。'
      ],
      tips: '这套的重点是骗：如果对面开局就在 B 大丢烟丢闪，别急着回防，先用蜂群和绊线拖时间，从 B Link 回防永远比走 B 大快。'
    }
  ]
};
