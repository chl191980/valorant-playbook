window.TACTICS = window.TACTICS || {};
window.TACTICS['lotus'] = {
  slug: 'lotus',
  zh: '莲华古城',
  en: 'Lotus',
  overview: '三包点地图，A/B/C 由两道旋转石门与一面可破坏墙相连；攻方靠三条大路分推拉扯，守方要用道具同时锁死石门与三条回防通道。',
  markers: [
    {
      id: 'a-top-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A 高台烟',
      x: 88, y: 22.5,
      r: 7,
      from: { x: 81.1, y: 43.2 },
      aim: '站在 A 大中段贴右墙（81.1, 43.2），准星抬到 A 高台（A Top）檐口最外沿再往上半个身位，站定原地投出黑瘴。',
      note: '封住 A 高台俯视包点的直架，A 大正面可以不用再交第二颗道具直接踩上包点。',
      tags: ['A区', '进攻', '烟']
    },
    {
      id: 'a-hut-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A Hut 燃烧弹',
      x: 83.8, y: 32.9,
      r: 4.5,
      from: { x: 81.1, y: 43.2 },
      aim: '站在 A 大中段同一贴墙位（81.1, 43.2），准星压到 A Hut 木箱左上角与地面的那条交线，蓄满力投出彩雷飞溅。',
      note: '把蹲在 A Hut 箱后的防守者逼出来，进点队友不用再分一个人看包点中央的夹角。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'a-link-wall',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'A Link 浪墙',
      x: 66, y: 45.5,
      r: 6,
      from: { x: 86, y: 45.5 },
      aim: '站在 A 大东侧贴墙（86, 45.5），准星对准 A Link 通道口左侧墙沿，沿墙推出狂潮后原地引导，把整条通道盖住。',
      note: '一条浪墙切断 A 包点经 A Link 回 B 的路线，A 区进攻就只剩下正面一条线要打。',
      tags: ['A区', '进攻', '切割']
    },
    {
      id: 'a-site-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 区侦察箭',
      x: 88, y: 30,
      r: 8,
      from: { x: 82, y: 47 },
      aim: '站在 A 大出口右侧（82, 47），准星对准 A 包点中央立柱上方的横梁缺口，蓄满力投出寻敌箭，箭落在包点中段。',
      note: '一箭扫出 A 包点与 A 高台，落地前就能判断对面是重防 A 还是只留一个人。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'def-a-link-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A Link 绊线',
      x: 79.8, y: 31.6,
      r: 4,
      from: { x: 86, y: 29 },
      aim: '防守方站在 A 包点后场靠高台一侧（86, 29），准星对准 A Link 通道口地面（79.8, 31.6），放置绊线后立刻退回包点后架枪。',
      note: '绊线卡住 A Link 这个侧门，配合高台的架枪点把 A 区变成一个人的防线。',
      tags: ['A区', '防守', '陷阱']
    },
    {
      id: 'def-a-main-smoke',
      side: 'defense',
      agent: 'omen',
      ability: 'smoke',
      label: 'A 大封口烟',
      x: 85.5, y: 45,
      r: 7,
      from: { x: 89, y: 34 },
      aim: '防守方站在 A 包点后场（89, 34），准星对准 A 大出口（85.5, 45）正上方的檐口再抬一指，站定原地投出黑瘴。',
      note: '开局一颗烟封住 A 大，逼进攻方改走 A Link 或把节奏慢下来，A 区的防守压力只剩两个方向。',
      tags: ['A区', '防守', '烟']
    },
    {
      id: 'b-main-flash',
      side: 'attack',
      agent: 'kayo',
      ability: 'flash',
      label: 'B 大进场闪',
      x: 45, y: 42,
      r: 3,
      from: { x: 44.6, y: 52.4 },
      aim: '站在 B 大出口贴左墙（44.6, 52.4），准星抬到 B 包点中央上空的高处，跳投，闪在包点中段（45, 42）炸开。',
      note: '进点前一颗闪压制 B 柱与后场的架枪，正面两个人可以踩着闪直接上包点。',
      tags: ['B区', '进攻', '闪']
    },
    {
      id: 'b-pillars-molly',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'B 柱燃烧弹',
      x: 43, y: 41,
      r: 4.5,
      from: { x: 45, y: 54 },
      aim: '站在 B 大中段箱体后（45, 54），准星照到 B 石柱根部与地面的交线，蓄力投出蛇吻。',
      note: '烧掉贴在 B 柱后的防守站位，配合烟把 B 包点切成两半，进点的人只需要看一半的角。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-upper-smoke',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: 'B 上层烟',
      x: 58, y: 33,
      r: 7,
      from: { x: 46, y: 50 },
      aim: '站在 B 大出口内侧（46, 50），准星对准 B 上层（B Upper）通道口上方的横梁，落星后原地引爆星云。',
      note: '封住 B 上层这条守方回防与架枪的主通道，B 区进攻的侧翼就只剩 C Mound 一个方向要盯。',
      tags: ['B区', '进攻', '烟']
    },
    {
      id: 'def-b-hall-trap',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'B 大警报机器人',
      x: 46.5, y: 45.5,
      r: 4,
      from: { x: 44.6, y: 52.4 },
      aim: '防守方开局压到 B 大出口贴左墙（44.6, 52.4），准星压到 B 包点入口地面与左侧立柱的交线，放出自动哨兵后立刻退回 B 柱后架枪。',
      note: '机器人报点配合 B 柱的架枪，一个人就能把 B 大这条窄走廊整段拖住。',
      tags: ['B区', '防守', '陷阱']
    },
    {
      id: 'c-waterfall-molly',
      side: 'attack',
      agent: 'brimstone',
      ability: 'molly',
      label: 'C 瀑布燃烧弹',
      x: 6.5, y: 44.9,
      r: 4.5,
      from: { x: 12, y: 52 },
      aim: '站在 C 大出口靠土堆一侧（12, 52），准星照到 C 瀑布（6.5, 44.9）水面与岩壁的交线，蓄力投出燃烧榴弹。',
      note: '烧掉贴瀑布站位的防守者，这个角是 C 包点最难清、也最容易被反打的位置。',
      tags: ['C区', '进攻', '清点']
    },
    {
      id: 'c-link-smoke',
      side: 'attack',
      agent: 'clove',
      ability: 'smoke',
      label: 'C Link 烟',
      x: 18, y: 38,
      r: 7,
      from: { x: 20, y: 53 },
      aim: '站在 C 大中段（20, 53），准星对准 C Link 通道口（18, 38）上方的石梁，站定原地投出霞染。',
      note: '切断守方从出生点经 C Link 进 C Hall 的回防路线，下包之后守方只能从 C 大正面硬推进来。',
      tags: ['C区', '进攻', '烟']
    },
    {
      id: 'c-site-flash',
      side: 'attack',
      agent: 'skye',
      ability: 'flash',
      label: 'C 进场闪',
      x: 14, y: 47,
      r: 3,
      from: { x: 20, y: 54 },
      aim: '站在 C 大出口贴右墙（20, 54），准星抬到 C 包点平台上方半个身位，放出引路之隼并往右上引导，闪光在包点上空炸开。',
      note: 'C 包点是抬高的平台，闪光必须在上空炸才能同时压住平台与 C Bend 两个角。',
      tags: ['C区', '进攻', '闪']
    },
    {
      id: 'def-c-mound-molly',
      side: 'defense',
      agent: 'killjoy',
      ability: 'molly',
      label: 'C 土堆蜂群',
      x: 24, y: 54,
      r: 4.5,
      from: { x: 16, y: 47 },
      aim: '防守方站在 C 包点靠瀑布一侧（16, 47），准星压到 C 土堆（24, 54）与 C 大出口之间的地面交线，投出纳米蜂群后回身架枪。',
      note: '蜂群卡在 C 土堆口，C 大整条进攻线都会被拖慢，也给守方多出十秒的轮转时间。',
      tags: ['C区', '防守', '陷阱']
    },
    {
      id: 'def-c-main-smoke',
      side: 'defense',
      agent: 'omen',
      ability: 'smoke',
      label: 'C 大封口烟',
      x: 16, y: 52,
      r: 7,
      from: { x: 13, y: 48 },
      aim: '防守方站在 C 包点后场（13, 48），准星对准 C 大出口（16, 52）正上方的檐口，站定原地投出黑瘴。',
      note: '开局把 C 大整条视野切掉，守方可以放心只留一个人看 C，其余人先去中路开信息。',
      tags: ['C区', '防守', '烟']
    }
  ],
  strats: [
    {
      id: 'lotus-a-split',
      name: 'A 区双点夹击 (A Split)',
      side: 'attack',
      level: 4,
      comp: ['jett', 'sova', 'omen', 'killjoy', 'kayo'],
      marks: ['a-top-smoke', 'a-hut-molly', 'a-link-wall', 'a-site-recon'],
      summary: 'A 大与 A Link 两路同时压进，先用烟封 A 高台、浪墙切 A Link，再烧掉 A Hut 的夹角，让守方在两个方向之间站不住脚。',
      steps: [
        '0:00 捷风与奇乐先控中路，猎枭在 A 大出口右侧蓄力侦察箭，一箭扫出 A 包点与 A 高台；',
        '0:08 幽影在 A 大中段封 A 高台烟，把守方的俯视视角整个切掉；',
        '0:14 雷兹的燃烧弹落到 A Hut，把蹲在包点中央箱后的防守者逼出来；',
        '0:20 海神沿 A Link 推出浪墙，切断 B 区与守方半场经 A Link 回防 A 的路线；',
        '0:28 两路同时进场，捷风踩上 A 包点，四人交叉架枪后由一人贴 A Default 下包。'
      ],
      tips: '这套最怕 A Link 被对面提前卡死；一旦浪墙没封到 A Link 口，立刻改成 A 大单点强攻，把侧翼交给猎枭的侦察箭去看。'
    },
    {
      id: 'lotus-b-rush',
      name: 'B 区快速强攻 (B Rush)',
      side: 'attack',
      level: 2,
      comp: ['raze', 'kayo', 'viper', 'killjoy', 'breach'],
      marks: ['b-main-flash', 'b-pillars-molly', 'b-upper-smoke'],
      summary: '五人开局直冲 B 大，用闪和烟抢在守方从 B 上层与 C Mound 轮转到位之前踩进 B 包点并完成下包。',
      steps: [
        '0:00 五人满道具从出生点直接走 B 大，只留一个人在 B 大外做视野；',
        '0:05 蝰蛇在 B 大出口内侧封 B 上层烟，把守方从 B Hall 方向的架枪点整段切掉；',
        '0:08 K/O 在 B 大出口贴左墙跳投进场闪，闪在包点中段炸开；',
        '0:12 蝰蛇的蛇吻落到 B 柱，烧掉贴柱的防守站位，雷兹与铁臂同时踩进包点；',
        '0:20 两人下包、两人卡 B 大、一人看 C Mound 方向，整套动作不超过 25 秒。'
      ],
      tips: 'B 大是条窄走廊，进攻方最怕被一颗烟关在里面；如果 0:05 之前烟和闪都还没交出去，就退回 B 大做默认，不要硬冲。'
    },
    {
      id: 'lotus-c-default',
      name: 'C 区默认控图 (C Default)',
      side: 'attack',
      level: 3,
      comp: ['jett', 'skye', 'clove', 'killjoy', 'brimstone'],
      marks: ['c-link-smoke', 'c-site-flash', 'c-waterfall-molly'],
      summary: '先用 C Link 烟把守方的回防路线切断，再从 C 大与 C 土堆稳着推进，拿到包点后立刻转成守包站位。',
      steps: [
        '0:00 开局斯凯在 C 大外放引路之隼探 C Link，确认守方是重防 C 还是只留了一个人；',
        '0:08 暮蝶在 C 大中段落 C Link 烟，把守方从 C Hall 方向进 C 的路线整段切断；',
        '0:16 炼狱的燃烧榴弹落到 C 瀑布，把贴瀑布站位的防守者逼出死角；',
        '0:24 斯凯在 C 大出口交闪光，全队从 C 大与 C 土堆两侧同时踩上包点平台；',
        '0:34 下包后退到 C 土堆与 C Bend 两个方向守包，烟位留着续 C Link。'
      ],
      tips: 'C 包点是抬高的平台，进点前一定要有人把 C Bend 的信息拿到；如果对面在 C 土堆口架枪架得太死，就先用烟逼走他再进，别用身体换角度。'
    },
    {
      id: 'lotus-def-spread',
      name: '三区分散防守 (3-Site Spread)',
      side: 'defense',
      level: 4,
      comp: ['killjoy', 'cypher', 'omen', 'sova', 'jett'],
      marks: ['def-a-link-trap', 'def-a-main-smoke', 'def-b-hall-trap', 'def-c-mound-molly', 'def-c-main-smoke'],
      summary: '三个包点各用道具锁住一条主路，靠中路与 B 上层的信息判断主攻方向，绝不做三个人的无意义追假动作。',
      steps: [
        '0:00 零守 A、奇乐守 B 与 C 之间的 C Mound、幽影站中路靠 A 侧，猎枭与捷风分列中路两端；',
        '0:04 零在 A Link 放绊线后回到 A 包点后场，幽影在 A 大出口封一颗烟；',
        '0:10 奇乐在 B 大放警报机器人，同时把纳米蜂群预留在 C 土堆口；',
        '0:16 猎枭的侦察箭扫 B 上层与 C Link，确认主攻方向后捷风与幽影从中路快速补位；',
        '0:24 判断是假打就保持站位不追，等对面真人露头再决定是压出去还是用旋转石门锁门。'
      ],
      tips: '三包点图最怕单点强攻打穿信息链，所以中路两个人里必须有一个能主动开信息；宁可放掉一个包点的下包，也不要三个人追同一个假动作。'
    },
    {
      id: 'lotus-def-c-aggro',
      name: 'C 区前压 (C Aggro)',
      side: 'defense',
      level: 3,
      comp: ['jett', 'fade', 'omen', 'killjoy', 'kayo'],
      marks: ['def-c-mound-molly', 'def-c-main-smoke', 'def-b-hall-trap'],
      summary: '开局两人从 C 土堆方向前压抢信息，配合蜂群与封口烟把 C 区第一波进攻直接掐死在 C 大里。',
      steps: [
        '0:00 捷风与 K/O 从 C 土堆方向贴墙前压到 C 大出口附近；',
        '0:05 黑梦在中路放诡眼探 C Link，确认 C 大外没有成组的脚步；',
        '0:09 一旦确认 C 区主攻，奇乐立刻在 C 土堆投纳米蜂群封住 C 大出口；',
        '0:14 幽影在 C 包点后场封烟，把 C 大与 C Link 之间的视野切干净；',
        '0:20 前压的两人从 C 瀑布方向绕回包点，与守包的队友形成正反两个枪线。'
      ],
      tips: '前压只在前两回合和对面经济局用；一旦对面开始固定卡 C 大出口，就退回 C 土堆后打标准防守，别用命换信息。'
    }
  ]
};
