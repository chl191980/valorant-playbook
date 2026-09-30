window.TACTICS = window.TACTICS || {};
window.TACTICS['abyss'] = {
  slug: 'abyss',
  zh: '幽邃地窟',
  en: 'Abyss',
  overview: '双包点高低差地图，A 区是顶部开阔平台、B 区纵深塔楼，一条长中路横穿全图；地图没有边界，走位失误会直接坠落。',
  markers: [
    {
      id: 'a-tower-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A 塔楼烟',
      x: 49.2, y: 26.1,
      r: 7,
      from: { x: 63.2, y: 12.1 },
      aim: '站 A 大出口贴左墙，准星抬到 A 塔楼窗口上沿与远处山体的交点，暗影笼罩满蓄力后原地投放。',
      note: '盖掉 A 塔楼对 A 包点的高点视野，从 A 大正面进点时不会被塔楼先手点名。',
      tags: ['A区', '进攻', '高点']
    },
    {
      id: 'a-security-smoke',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: 'A 安全区烟',
      x: 26.4, y: 11.7,
      r: 7,
      from: { x: 63.2, y: 12.1 },
      aim: '在 A 大角落进入星界形态，把星云星体放在 A 安全区门框内侧的地砖上，退出星界后按技能引爆。',
      note: '封住 A 安全区与 A 后场的补位路线，进攻方在 A 包点只需要面对 A 塔楼一个方向。',
      tags: ['A区', '进攻', '切枪线']
    },
    {
      id: 'a-link-wall',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'A 连接水墙',
      x: 30, y: 28,
      r: 10,
      from: { x: 63.2, y: 12.1 },
      aim: '在 A 大贴墙开水墙平板，把墙体从 A 连接门框起沿纵向拉满，推出去之后立刻贴墙跟进。',
      note: '把中路进 A 的连接整条切掉，A 包点被拿下后防守方无法从 A 连接反打。',
      tags: ['A区', '进攻', '切枪线']
    },
    {
      id: 'a-main-recon',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 大侦查箭',
      x: 40.4, y: 4.6,
      r: 6,
      from: { x: 63.2, y: 12.1 },
      aim: '站 A 大出口的箱子后，准星抬到 A 包点上方平台边缘再高半个身位，满蓄力射侦查箭（可跳投）。',
      note: '一发照出 A 包点、A 天桥与 A 塔楼三条线，决定这一波是硬打还是转点。',
      tags: ['A区', '进攻', '信息']
    },
    {
      id: 'a-main-flash',
      side: 'attack',
      agent: 'kayo',
      ability: 'flash',
      label: 'A 大闪光',
      x: 42, y: 11,
      r: 3,
      from: { x: 63.2, y: 12.1 },
      aim: '贴 A 大左墙，准星对准 A 包点前沿立柱的顶端，原地抛出闪光驱动（左键短闪）。',
      note: '闪住 A 包点正面与天桥上的防守方，给决斗位制造进点窗口。',
      tags: ['A区', '进攻', '进点']
    },
    {
      id: 'a-default-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A 默认位漆弹',
      x: 40.4, y: 6,
      r: 4.5,
      from: { x: 63.2, y: 12.1 },
      aim: '从 A 大探半步，准星压到 A 包点默认下包位的地砖中心，原地抛漆弹。',
      note: '把蹲在默认位后箱子的防守方逼出来，配合塔楼烟可以无伤占点。',
      tags: ['A区', '进攻', '清点']
    },
    {
      id: 'b-tower-wall',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'B 塔楼毒幕',
      x: 31, y: 81,
      r: 12,
      from: { x: 62.4, y: 76.2 },
      aim: '在 B 大贴右墙开毒幕平板，把墙线从 B 塔楼脚下一路拉过 B 包点纵深，开墙后队伍贴墙跟进。',
      note: 'B 塔楼是 B 区最强的高点，一条毒幕能把它彻底隔离，进攻方只需要面对包点正面。',
      tags: ['B区', '进攻', '高点']
    },
    {
      id: 'b-link-smoke',
      side: 'attack',
      agent: 'viper',
      ability: 'smoke',
      label: 'B 连接烟',
      x: 31.2, y: 66.8,
      r: 7,
      from: { x: 62.4, y: 76.2 },
      aim: '站 B 大出口，准星对准 B 连接门框上沿再高半个身位，满蓄力抛毒云。',
      note: '切断中路与 B 连接的快速补位，B 包点被打开后不会立刻被反打。',
      tags: ['B区', '进攻', '切枪线']
    },
    {
      id: 'b-main-recon',
      side: 'attack',
      agent: 'fade',
      ability: 'recon',
      label: 'B 大诡眼',
      x: 39.6, y: 86.4,
      r: 6,
      from: { x: 62.4, y: 76.2 },
      aim: '站 B 大出口，准星抬到 B 包点后墙顶端，原地抛诡眼后立刻跟枪。',
      note: '照出 B 包点、B 巢与 B 连接三处站位，决定是打点还是转中路。',
      tags: ['B区', '进攻', '信息']
    },
    {
      id: 'b-main-flash',
      side: 'attack',
      agent: 'skye',
      ability: 'flash',
      label: 'B 大引路之光',
      x: 44, y: 84,
      r: 3,
      from: { x: 62.4, y: 76.2 },
      aim: '贴 B 大左墙，操控引路之光沿左路弯进 B 包点，落点定在包点前沿再引爆。',
      note: 'B 区进点闪，配合毒幕可以把防守方全部压在包点后半区。',
      tags: ['B区', '进攻', '进点']
    },
    {
      id: 'b-default-molly',
      side: 'attack',
      agent: 'brimstone',
      ability: 'molly',
      label: 'B 默认位燃烧弹',
      x: 38.5, y: 85,
      r: 4.5,
      from: { x: 62.4, y: 76.2 },
      aim: '在 B 大贴左墙，准星压到 B 包点默认下包位的地砖缝，原地投燃烧弹。',
      note: '逼走默认下包位的防守方，配合闪光可以直接踩包点。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'b-nest-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'B 巢漆弹',
      x: 67.7, y: 90.7,
      r: 4.5,
      from: { x: 62.4, y: 76.2 },
      aim: '站 B 大出口内侧，准星对准 B 巢上沿的墙线，轻抛漆弹清 B 巢。',
      note: 'B 巢是防守方最爱蹲的反打位，进点前先烧掉可以避免被背后偷人。',
      tags: ['B区', '进攻', '清点']
    },
    {
      id: 'def-a-link-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A 连接绊线',
      x: 29.9, y: 28.3,
      r: 5,
      from: { x: 33, y: 31 },
      aim: '贴 A 连接内侧左墙，把绊线从门框拉到对面墙裙，高度压到第二格。',
      note: '中路摸 A 的第一道预警，配合 A 塔楼的架枪可以白拿一个人头。',
      tags: ['A区', '防守', '预警']
    },
    {
      id: 'def-a-security-alarmbot',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'A 安全区警报',
      x: 26.4, y: 11.7,
      r: 5,
      from: { x: 24, y: 14 },
      aim: '蹲在 A 安全区门内，把警报机器人贴地放在门框右侧的阴影处，准星一直贴着地面放。',
      note: '封住防守方出生点侧被摸的后路，触发即可呼叫 A 区合围。',
      tags: ['A区', '防守', '预警']
    },
    {
      id: 'def-b-main-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'B 大绊线',
      x: 62.4, y: 76.2,
      r: 5,
      from: { x: 60, y: 73 },
      aim: '贴 B 大门内侧右墙，把绊线拉到对面箱角，高度压到第一格，不要贴地。',
      note: 'B 区强攻的第一道保险，配合 B 塔楼高点至少能换掉一个进点的人。',
      tags: ['B区', '防守', '预警']
    },
    {
      id: 'def-mid-recon',
      side: 'defense',
      agent: 'fade',
      ability: 'recon',
      label: '中路诡眼',
      x: 45.1, y: 53.4,
      r: 6,
      from: { x: 31, y: 44.9 },
      aim: '站中路靠防守方一侧的箱子上，准星朝中路图书馆方向抬到二层墙沿，原地抛诡眼。',
      note: '开图看中路图书馆与中路的动向，判断对手是打 A、打 B 还是先抢中路。',
      tags: ['中路', '防守', '信息']
    }
  ],
  strats: [
    {
      id: 'abyss-a-execute',
      name: 'A 区标准进攻 (A Execute)',
      side: 'attack',
      level: 3,
      comp: ['jett', 'sova', 'omen', 'cypher', 'kayo'],
      marks: ['a-tower-smoke', 'a-security-smoke', 'a-main-recon', 'a-main-flash', 'a-default-molly'],
      summary: '抢下 A 大后先封 A 塔楼与 A 安全区，再从正面两拍进 A 包点。',
      steps: [
        '0:00 五人从进攻方出生点走 A 大厅，控场在 A 大角落先架好 A 塔楼烟与 A 安全区烟。',
        '0:08 侦查箭射进 A 包点开图，确认塔楼与天桥是否有人，决斗位同时贴 A 大左墙待命。',
        '0:13 闪光先出、决斗位踩 A 包点前沿，先锋跟进补枪，控场留在 A 大负责补烟。',
        '0:20 清点后下包，哨卫把陷阱放在 A 连接口，全队按 A 塔楼与 A 安全区两个方向架枪。',
        '0:28 对手从 A 连接强打回来时，直接用道具把连接口封死，拖到爆能器时间结束。'
      ],
      tips: 'A 区最大的风险是 A 塔楼与 A 天桥的高点，两个烟没落地之前不要进点。拆包位优先留给带位移的决斗位。'
    },
    {
      id: 'abyss-b-execute',
      name: 'B 区毒幕强攻 (B Execute)',
      side: 'attack',
      level: 4,
      comp: ['raze', 'fade', 'viper', 'killjoy', 'skye'],
      marks: ['b-tower-wall', 'b-link-smoke', 'b-main-recon', 'b-main-flash', 'b-default-molly', 'b-nest-molly'],
      summary: '五人从 B 大推进，先用毒幕隔离 B 塔楼，再一波清掉包点纵深。',
      steps: [
        '0:00 五人走 B 大厅进 B 大，控场贴右墙把毒幕从 B 塔楼脚下一路拉满，先不开墙。',
        '0:07 诡眼抛进 B 包点开图，确认 B 巢与 B 连接是否有人，同时燃烧弹烧默认下包位。',
        '0:12 毒幕开墙，队伍贴墙推进；引路之光先弯进包点，决斗位跟闪进场踩前沿。',
        '0:19 漆弹清 B 巢，确保背后没有反打位，清点后立刻下包。',
        '0:26 控场把毒云补在 B 连接口，全队分 B 大与 B 巢两个方向守包。'
      ],
      tips: 'B 区纵深长、塔楼高，毒幕的走向决定这一波能不能打。毒幕拉偏了就退回 B 大厅重开一波，不要在 B 大门口硬换人头。'
    },
    {
      id: 'abyss-mid-control',
      name: '中路控制转点 (Mid Control)',
      side: 'attack',
      level: 4,
      comp: ['jett', 'sova', 'astra', 'cypher', 'breach'],
      marks: ['a-security-smoke', 'b-link-smoke', 'a-tower-smoke'],
      summary: '开局三人抢中路图书馆，把中路做成自己的，再按对手站位决定打 A 还是打 B。',
      steps: [
        '0:00 三人从中路推进，控场先用星云把中路图书馆与中路转角封住，先锋用侦查箭开图。',
        '0:08 拿到中路控制后两人留在中路图书馆架枪，第三人回身贴 A 连接或 B 连接。',
        '0:15 对手把重兵放在 B 塔楼时，从中路转 A 安全区直接打 A 包点，A 连接由中路的人负责封。',
        '0:22 对手 A 区人多时，则从中路贴 B 连接进 B 包点，B 大的人同步压上形成夹击。',
        '0:30 无论打哪边，下包后中路必须留一个人卡回防，Abyss 的中路转点是全图最快的。'
      ],
      tips: 'Abyss 长中路的枪线极远，抢中路一定要带烟带闪。中路拿到之后不要贪推，站住图书馆就够全队转点用了。'
    },
    {
      id: 'abyss-defense-a-stack',
      name: 'A 区三人重防 (A Stack)',
      side: 'defense',
      level: 3,
      comp: ['chamber', 'cypher', 'omen', 'sova', 'raze'],
      marks: ['def-a-link-trap', 'def-a-security-alarmbot', 'a-tower-smoke'],
      summary: '三人压 A 区，用塔楼高点加双陷阱把 A 大出口封成死路。',
      steps: [
        '0:00 三人守 A：一人站 A 塔楼架 A 大出口，一人在 A 包点看 A 安全区，一人卡 A 天桥。',
        '0:07 A 连接绊线与 A 安全区警报机器人先放好，A 大出口的烟留到听到脚步再开。',
        '0:15 B 区两人只做拖延，B 大门口放一道陷阱，其余时间贴 B 塔楼报点，不主动对枪。',
        '0:25 A 大打起来之后，B 区两人立刻从 B 连接回防，中路交给 A 塔楼的人看。',
        '0:35 反清时先清 A 天桥再清包点，Abyss 的高点永远比包点里的人更危险。'
      ],
      tips: 'A 区三人守的好处是前两拍能直接吃掉 A 大强攻，坏处是 B 区被打穿就救不回来，所以中路信息必须准时报。'
    },
    {
      id: 'abyss-defense-mid-aggro',
      name: '中路前压反清 (Mid Aggro)',
      side: 'defense',
      level: 4,
      comp: ['viper', 'cypher', 'killjoy', 'fade', 'jett'],
      marks: ['def-mid-recon', 'def-b-main-trap', 'b-tower-wall'],
      summary: '开局两人前压中路图书馆，抢在进攻方铺开之前先吃掉落单。',
      steps: [
        '0:00 两人从防守方出生点前压中路，一人上中路图书馆，一人贴中路转角。',
        '0:06 诡眼抛向中路图书馆与 B 大方向，确认对手中路投入人数后再决定压哪边。',
        '0:12 中路只有一人时，配合 B 塔楼的人直接夹掉他，然后把毒幕沿 B 大入口拉满。',
        '0:20 前压得手就把 B 大的绊线往前推到 B 大厅，让对手的 B 区进攻晚一拍。',
        '0:28 前压失败立刻从中路退回，B 塔楼与中路图书馆是唯二的掩体，别在开阔地上硬拼。'
      ],
      tips: 'Abyss 的中路前压一旦成功收益极高，但回撤路线很长。只在前两回合用，抓到人就要立刻收手。'
    }
  ]
};
