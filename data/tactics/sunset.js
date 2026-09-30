window.TACTICS = window.TACTICS || {};
window.TACTICS['sunset'] = {
  slug: 'sunset',
  zh: '日落之城',
  en: 'Sunset',
  overview: '日落之城（Sunset）是一张以中路控制为核心的双点图。中庭（Mid Courtyard）与中格（Mid Tiles）把 A、B 两点串在一起，B 市场（B Market）与中庭之间只有一道可以开关的转门，中路归属直接决定进攻节奏。A 点（东侧）由 A 链接（A Link）与 A 肘区（A Elbow）构成近乎 50/50 的交叉枪线；B 点（西侧）依托 B 波霸（B Boba）高台与 B 主道（B Main）形成正面压力。整体偏防守方，进攻方必须用烟雾切开交叉后再进点。',
  markers: [
    {
      id: 'sunset-a-link-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'A链接烟',
      x: 86.5,
      y: 31,
      r: 7,
      from: { x: 83, y: 37 },
      aim: '站在 A 主道（A Main）北侧贴墙处，准星压在 A 链接（A Link）门框上沿，投出暗影烟封死整条链接走廊。',
      note: 'A 链接是中庭回防 A 点的最短路径，烟一落三人立刻从 A 主道进点，不要在门口停步。',
      tags: ['烟雾', 'A点', '进攻']
    },
    {
      id: 'sunset-a-elbow-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'A肘区烟',
      x: 92,
      y: 48.5,
      r: 7,
      from: { x: 82, y: 52 },
      aim: '站在 A 大厅（A Lobby）内，打开战术面板把烟幕放在 A 肘区（A Elbow）拐角正中，遮住深角架枪位。',
      note: '肘区烟要贴着包点方向放，给下包留出通道；对方有狙击时改成两颗烟分封链接与肘区。',
      tags: ['烟雾', 'A点', '切角']
    },
    {
      id: 'sunset-a-site-molly',
      side: 'attack',
      agent: 'raze',
      ability: 'molly',
      label: 'A点清角',
      x: 86.5,
      y: 40,
      r: 4.5,
      from: { x: 80, y: 43.7 },
      aim: '站在 A 主道出口，准星对准 A 点（A Site）默认包位后方的矮墙，绘画弹先弹墙一次再清包位。',
      note: '默认包位是日落之城 A 点最常架的位，清完立刻铺烟下包，别给对方 4 秒重新占位的时间。',
      tags: ['爆破', 'A点', '清点']
    },
    {
      id: 'sunset-a-elbow-flash',
      side: 'attack',
      agent: 'breach',
      ability: 'flash',
      label: 'A肘闪',
      x: 92,
      y: 48.5,
      r: 3,
      from: { x: 82.8, y: 52 },
      aim: '站在 A 大厅（A Lobby）墙后，准星贴住 A 肘区（A Elbow）外墙，闪光冲击穿墙致盲肘区守军。',
      note: '闪光落地后 1 秒内必须有人拉出去；闪光只对贴墙守军有效，远角交给烟雾处理。',
      tags: ['闪光', 'A肘区', '进攻']
    },
    {
      id: 'sunset-b-market-smoke',
      side: 'attack',
      agent: 'omen',
      ability: 'smoke',
      label: 'B市场烟',
      x: 34.4, y: 34.3,
      r: 7,
      from: { x: 39.1, y: 44 },
      aim: '站在中庭（Mid Courtyard）西侧贴墙处，准星对准 B 市场（B Market）门口上沿，投出暗影烟封住市场枪线。',
      note: '这颗烟同时封住转门方向的视线，配合中路队友夹击 B 点时价值最高，投完立刻切中路补枪。',
      tags: ['烟雾', 'B点', '中路']
    },
    {
      id: 'sunset-b-boba-smoke',
      side: 'attack',
      agent: 'brimstone',
      ability: 'smoke',
      label: 'B波霸烟',
      x: 34.4, y: 16.5,
      r: 7,
      from: { x: 21.5, y: 25 },
      aim: '站在 B 主道（B Main）北段，面板点选 B 波霸（B Boba）高台中心落烟，切断高台与包点的交叉。',
      note: '波霸高台能俯瞰整个 B 点，烟没落下前不要露头；烟落之后决斗者可以直接踩点。',
      tags: ['烟雾', 'B点', '高台']
    },
    {
      id: 'sunset-b-site-mosh',
      side: 'attack',
      agent: 'gekko',
      ability: 'molly',
      label: 'B点莫希特',
      x: 17,
      y: 36.5,
      r: 4.5,
      from: { x: 20, y: 42 },
      aim: '站在 B 主道内箱后，准星对准 B 点（B Site）默认包位右侧地面，投出莫希特覆盖包点。',
      note: '莫希特能同时逼走包位与 B 市场方向的守军，和市场烟一起打出 2 秒空窗，窗口一开立刻进。',
      tags: ['爆破', 'B点', '清点']
    },
    {
      id: 'sunset-mid-top-wall',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: '中顶毒幕',
      x: 49.5,
      y: 26.5,
      r: 8,
      from: { x: 50, y: 34 },
      aim: '站在中庭（Mid Courtyard）内，准星对准中顶（Mid Top）方向横向拉出毒幕，把中路切成两半。',
      note: '毒幕用来切断防守方中顶对中庭的支援；拉幕同时中路必须有人踩住中庭，别让对手绕 B 市场。',
      tags: ['毒幕', '中路', '封路']
    },
    {
      id: 'sunset-a-link-recon',
      side: 'defense',
      agent: 'sova',
      ability: 'recon',
      label: 'A链接侦查',
      x: 86.5,
      y: 31,
      r: 3,
      from: { x: 89, y: 33.9 },
      aim: '站在 A 点（A Site）北侧箱后，准星对准 A 链接（A Link）地面，一档力度射出侦查箭扫描链接与 A 主道。',
      note: '开局 5 秒内射出，箭落点覆盖链接走廊即可；扫到两人以上立刻叫 A 肘区队友回夹。',
      tags: ['侦查', 'A点', '防守']
    },
    {
      id: 'sunset-a-elbow-trap',
      side: 'defense',
      agent: 'cypher',
      ability: 'trap',
      label: 'A肘绊线',
      x: 92,
      y: 48.5,
      r: 3,
      from: { x: 90.7, y: 45 },
      aim: '站在 A 点内肘区（A Elbow）上方，把绊线一端贴墙、另一端贴箱角，拉成斜线封住肘区出口。',
      note: '绊线负责报信息，听到触发先丢囚笼再对枪；不要贴地放，对手跳蹲就能过去。',
      tags: ['陷阱', 'A点', '防守']
    },
    {
      id: 'sunset-b-market-trap',
      side: 'defense',
      agent: 'killjoy',
      ability: 'trap',
      label: 'B市场警报',
      x: 34.4, y: 34.3,
      r: 3,
      from: { x: 32.7, y: 43.8 },
      aim: '站在 B 市场（B Market）内，把警报机器人贴在转门内侧地面，朝向中庭方向。',
      note: '市场转门是中路打 B 的必经点，警报一响中庭守军立刻回夹；机器人别贴门太近，会被开门打掉。',
      tags: ['警报', 'B市场', '防守']
    },
    {
      id: 'sunset-mid-courtyard-molly',
      side: 'defense',
      agent: 'viper',
      ability: 'molly',
      label: '中庭毒咬',
      x: 51,
      y: 45,
      r: 4.5,
      from: { x: 53.1, y: 41 },
      aim: '站在中庭（Mid Courtyard）东北角，准星对准中庭地面中心，投出毒蛇咬噬封住中路推进。',
      note: '中庭毒液同时阻断中顶与 B 市场两个方向，投完立刻退回 A 点卡 A 链接。',
      tags: ['毒液', '中路', '拖延']
    },
    {
      id: 'sunset-b-site-strike',
      side: 'defense',
      agent: 'brimstone',
      ability: 'ult',
      label: 'B点轨道',
      x: 17,
      y: 36.5,
      r: 8,
      from: { x: 22, y: 43.7 },
      aim: '站在 B 主道（B Main）内安全位，面板点选 B 点（B Site）包位中心，落下轨道打击。',
      note: '残局或对方强下包时使用；落点偏向 B 波霸一侧，避免覆盖正在回防的队友。',
      tags: ['大招', 'B点', '残局']
    },
    {
      id: 'sunset-mid-tiles-cage',
      side: 'defense',
      agent: 'cypher',
      ability: 'smoke',
      label: '中格囚笼',
      x: 60.5,
      y: 59.5,
      r: 3,
      from: { x: 59.4, y: 56 },
      aim: '站在中格（Mid Tiles）自己的半场，准星对准格口中心，放出赛博囚笼遮挡整条视线。',
      note: '囚笼只用来拖时间，配合中庭毒液一起交；中路丢控后优先退守 A 链接与 B 市场。',
      tags: ['囚笼', '中路', '拖延']
    },
    {
      id: 'sunset-b-boba-turret',
      side: 'defense',
      agent: 'killjoy',
      ability: 'other',
      label: 'B波霸炮台',
      x: 34.4, y: 16.5,
      r: 3,
      from: { x: 27, y: 25 },
      aim: '站在 B 波霸（B Boba）高台侧面，把炮台架在台口斜角，射界覆盖 B 主道与包点北侧。',
      note: '炮台提供信息并拖慢 B 主道推进，架好后回 B 点卡交叉；对手有苏娃时先骗掉侦查箭。',
      tags: ['炮台', 'B点', '信息']
    }
  ],
  strats: [
    {
      id: 'sunset-a-main-execute',
      name: 'A 主道双烟进点 (A Main Execute)',
      side: 'attack',
      level: 4,
      comp: ['omen', 'brimstone', 'raze', 'breach', 'sova'],
      marks: ['sunset-a-link-smoke', 'sunset-a-elbow-smoke', 'sunset-a-site-molly', 'sunset-a-elbow-flash'],
      summary: '双烟切交叉，A 主道三人进点下包。',
      steps: [
        '0:00-0:12 五人沿 A 主道（A Main）贴墙推进到 A 大厅（A Lobby）集合，苏娃用侦查箭确认链接有没有人。',
        '0:12-0:22 欧门投出 A链接烟切断中庭支援，布史东把 A肘区烟放在拐角，形成两个方向的视野阻断。',
        '0:22-0:30 铁臂闪光冲击 A 肘区外墙，雷兹绘画弹清默认包位，三人从 A 主道切进 A 点。',
        '0:30-0:50 下包后两人退到 A 大厅卡 A 肘区回防，一人守 A 链接方向，烟雾到点自动补一颗。'
      ],
      tips: [
        '链接烟必须比肘区烟早一秒落，否则中庭支援会先到。',
        'A 点包位靠肘区一侧，下包时贴墙蹲下，避免被链接方向穿点。'
      ]
    },
    {
      id: 'sunset-b-market-split',
      name: 'B 市场中路夹击 (B Market Split)',
      side: 'attack',
      level: 4,
      comp: ['omen', 'brimstone', 'gekko', 'viper', 'skye'],
      marks: ['sunset-b-market-smoke', 'sunset-b-boba-smoke', 'sunset-b-site-mosh', 'sunset-mid-top-wall'],
      summary: '中路控图，双烟封市场与波霸后夹 B。',
      steps: [
        '0:00-0:15 两人从中路推上中庭（Mid Courtyard），三人堆在 B 主道（B Main），斯凯用引路明灯探波霸高台。',
        '0:15-0:27 毒蛇拉出中顶毒幕切断防守方支援，欧门投出 B市场烟封住市场与转门视线。',
        '0:27-0:35 布史东投出 B波霸烟遮住高台，盖可莫希特覆盖包位，两队同时从 B 主道与市场夹进 B 点。',
        '0:35-0:55 下包后中路一人守转门，两人架 B 波霸方向，毒幕留在市场口，防止中路回防。'
      ],
      tips: [
        '中路必须先踩稳再打市场，否则中路丢人整波夹击会变成单线强攻。',
        '波霸烟落下后不要急着开枪，等莫希特伤害跳出再进包点。'
      ]
    },
    {
      id: 'sunset-a-link-hold',
      name: 'A 链接肘区双封 (A Link Hold)',
      side: 'defense',
      level: 4,
      comp: ['sova', 'cypher', 'killjoy', 'viper', 'omen'],
      marks: ['sunset-a-link-recon', 'sunset-a-elbow-trap'],
      summary: '侦查开链接，绊线卡肘区死守 A 点。',
      steps: [
        '0:00-0:06 苏娃在 A 点北侧射出 A链接侦查，扫描 A 链接（A Link）与 A 主道（A Main）。',
        '0:06-0:22 赛菲在 A 肘区（A Elbow）拉出 A肘绊线，欧门留一颗烟在链接口，毒蛇挂纳米蜂群在中庭侧。',
        '0:22-0:45 一人站 A 点箱后卡主道，一人贴链接墙对枪；绊线触发先丢囚笼再夹击，不要单独拉出去。',
        '0:45-1:05 对方强攻时缩到包位后方，用毒液封主道出口，等中路队友从链接回夹。'
      ],
      tips: [
        'A 链接与 A 肘区必须由不同的人守，同一个人两边都会漏。',
        '侦查箭冷却一好就补，链接的信息价值高于任何单点对枪。'
      ]
    },
    {
      id: 'sunset-b-market-hold',
      name: 'B 市场警觉防线 (B Market Watch)',
      side: 'defense',
      level: 3,
      comp: ['killjoy', 'cypher', 'brimstone', 'sova', 'viper'],
      marks: ['sunset-b-market-trap', 'sunset-b-boba-turret', 'sunset-b-site-strike'],
      summary: '警报锁转门，炮台架高台，大招收残局。',
      steps: [
        '0:00-0:10 奇乐在 B 市场（B Market）转门内侧放 B市场警报，把 B波霸炮台架在台口斜角。',
        '0:10-0:30 赛菲在 B 主道（B Main）口挂绊线，苏娃侦查确认中路人数，布史东保留轨道打击。',
        '0:30-0:50 市场警报一响中路立刻回夹，市场内一人只报点不对枪；波霸炮台用来拖慢主道推进。',
        '0:50-1:10 对方下包后用 B点轨道覆盖包位，配合闪光反打，轨道落地前不要进包点。'
      ],
      tips: [
        '市场转门打开就是进攻信号，守军听到开门声直接交毒液。',
        '炮台不要架在能被远距离点掉的正对位，斜角才能活到第二波。'
      ]
    },
    {
      id: 'sunset-mid-courtyard-control',
      name: '中庭毒控消耗 (Mid Courtyard Control)',
      side: 'defense',
      level: 3,
      comp: ['viper', 'cypher', 'killjoy', 'omen', 'sova'],
      marks: ['sunset-mid-courtyard-molly', 'sunset-mid-tiles-cage'],
      summary: '毒液加囚笼，把中路变成消耗区。',
      steps: [
        '0:00-0:12 毒蛇站中庭（Mid Courtyard）东北角，赛菲站中格（Mid Tiles）半场，欧门把烟留给 A 链接。',
        '0:12-0:32 对方一旦推进中路，先丢中格囚笼再补中庭毒咬，两级道具叠加把对手卡在中格以外。',
        '0:32-0:55 中路消耗期间 A、B 两点各自保持交叉位，不要把中路人手抽空，控图靠道具不靠人。',
        '0:55-1:20 道具交完后主动放弃中庭，退守 A 链接与 B 市场两道门，用交叉火力收尾。'
      ],
      tips: [
        '中庭道具是用来换时间的，不是用来击杀，交完就要准备退。',
        '如果对方两人以上持续压中，立刻叫回防而不是加人硬守中路。'
      ]
    }
  ]
};
