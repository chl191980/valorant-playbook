window.TACTICS = window.TACTICS || {};
window.TACTICS['breeze'] = {
  slug: 'breeze',
  zh: '微风岛屿',
  en: 'Breeze',
  overview: '微风岛屿是全场最开阔的地图，双包点相距极远，中路木门与自动门串起 A、B 两区。A 点有金字塔和超长的后方枪线，B 点植物区掩体多，进攻全靠拉幕和烟雾切开开阔地。',
  markers: [
    {
      id: 'a-wall-main',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'A 大毒幕',
      x: 87.5, y: 40.5, r: 13,
      from: { x: 76.4, y: 66.7 },
      aim: '站在 A 商店门口贴右侧石墙，准星对准 A 后方墙上最高那块砖的上沿，原地拉出毒幕，幕布会从包点左沿一直铺到右沿。',
      note: '一次封掉 A 后方和 A 桥两条长枪线，队友可以沿 A 金字塔正面直插包点。',
      tags: ['A区', '进攻', '毒幕']
    },
    {
      id: 'a-molly-plant',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'A 包点毒吻',
      x: 89, y: 45.5, r: 4.5,
      from: { x: 83.9, y: 50.1 },
      aim: '站在 A 金字塔右侧贴墙，准星压在包点中央默认下包位的白色描线正上方两指，原地跳投蛇吻，毒液正好盖住包点中心。',
      note: '毒提前铺在默认位，拆包的防守方不敢原地站桩，给队友争取落包时间。',
      tags: ['A区', '进攻', '炸后']
    },
    {
      id: 'a-molly-backsite',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'A 后方毒吻',
      x: 91, y: 39.5, r: 4.5,
      from: { x: 83.9, y: 50.1 },
      aim: '站在 A 金字塔顶端贴左墙，准星对准 A 后方石柱与墙壁的交角，蓄力半秒后跳投，毒液落在后方掩体上。',
      note: '把 A 后方架枪的哨卫逼出来，队友从 A 大厅方向压进时不会被侧身打死。',
      tags: ['A区', '进攻']
    },
    {
      id: 'a-recon-sova',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'A 包侦察箭',
      x: 88, y: 44, r: 6,
      from: { x: 83.9, y: 50.1 },
      aim: '站在 A 金字塔后贴墙，准星对准 A 后方矮墙上方的天空，满蓄力射侦察箭，箭落地前会扫过整个 A 包点。',
      note: 'A 区太开阔，一发侦察箭就能确认包点、后方和 A 桥到底站了几个人。',
      tags: ['A区', '进攻', '侦察']
    },
    {
      id: 'a-smoke-astra',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: 'A 后方星云',
      x: 90.5, y: 40.5, r: 7,
      from: { x: 66.2, y: 79.8 },
      aim: '在 A 大厅按出星体形态，把星放到 A 后方掩体的正上方，等队友报进场就原地引爆星云。',
      note: '星云补掉毒幕没盖到的那个角，没有海神时也能让 A 大的正面视野全部消失。',
      tags: ['A区', '进攻', '星云']
    },
    {
      id: 'a-wall-harbor',
      side: 'attack',
      agent: 'harbor',
      ability: 'wall',
      label: 'A 大涌潮',
      x: 87, y: 43.5, r: 12,
      from: { x: 83.9, y: 50.1 },
      aim: '站在 A 金字塔后，准星压低对准包点的地面接缝，向前推进涌潮，让水墙沿着 A 包点正面一路压过去。',
      note: '涌潮会跟着队伍移动，比固定毒幕更适合 A 大这种长通道，推进节奏更快。',
      tags: ['A区', '进攻', '水墙']
    },
    {
      id: 'b-wall-main',
      side: 'attack',
      agent: 'viper',
      ability: 'wall',
      label: 'B 主道毒幕',
      x: 17, y: 33, r: 12,
      from: { x: 14.2, y: 50.3 },
      aim: '站在 B 主道出口贴右墙，准星对准 B 墙最高处的墙沿，原地拉出毒幕，幕布顺着包点正面从左铺到右。',
      note: '进 B 前先拉幕，直接切掉 B 后方和 B 窗两条枪线，队友可以贴着 B 墙翻进包点。',
      tags: ['B区', '进攻', '毒幕']
    },
    {
      id: 'b-molly-default',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'B 默认位毒吻',
      x: 16.5, y: 30.5, r: 4.5,
      from: { x: 14.2, y: 50.3 },
      aim: '站在 B 主道贴左墙，准星对准 B 包点中央立柱顶端的白线，原地跳投蛇吻，毒液落在默认下包位上。',
      note: 'B 点掩体多，没有毒的话拆包方可以绕着立柱轻松拆包，这一发能拖满整段时间。',
      tags: ['B区', '进攻', '炸后']
    },
    {
      id: 'b-molly-tunnel',
      side: 'attack',
      agent: 'viper',
      ability: 'molly',
      label: 'B 隧道毒吻',
      x: 33, y: 31, r: 4.5,
      from: { x: 42.1, y: 22.8 },
      aim: '站在中路巢口贴左墙，准星对准 B 隧道口门框的右上角，原地投出蛇吻，毒液顺着隧道口铺开。',
      note: '中路控住以后先铺隧道，把卡在里面的防守方逼走，B 区侧翼就干净了。',
      tags: ['B区', '进攻']
    },
    {
      id: 'b-recon-sova',
      side: 'attack',
      agent: 'sova',
      ability: 'recon',
      label: 'B 包侦察箭',
      x: 20, y: 28.5, r: 6,
      from: { x: 14.2, y: 50.3 },
      aim: '站在 B 主道贴右墙，准星对准 B 包点上空的天线顶端，满蓄力射箭，箭会扫到 B 后方和 B 墙后。',
      note: 'B 点纵深很长，侦察箭先清后方，队友才不会在进点后被 B 后方的人从背身打死。',
      tags: ['B区', '进攻', '侦察']
    },
    {
      id: 'mid-smoke-astra',
      side: 'attack',
      agent: 'astra',
      ability: 'smoke',
      label: '中路木门星云',
      x: 63.8, y: 47, r: 6.5,
      from: { x: 47.8, y: 64 },
      aim: '站在中路底贴右墙，把星放到中路木门的正上方，队友报过门之后再原地引爆星云。',
      note: '木门被烟封住，防守方就看不到中路推上来的人，中路可以安全前压到 A 大厅。',
      tags: ['中路', '进攻', '星云']
    },
    {
      id: 'd-a-main-wall',
      side: 'defense',
      agent: 'viper',
      ability: 'wall',
      label: 'A 主道毒幕',
      x: 62, y: 58, r: 12,
      from: { x: 64, y: 34.7 },
      aim: '站在 A 斜坡贴左墙，准星对准 A 大厅上方那根吊灯线，原地拉出毒幕，幕布沿 A 主道一路向前压到 A 商店。',
      note: '防守时把 A 主道整条切成两段，进攻方只能贴墙推进，节奏至少被拖慢八秒。',
      tags: ['A区', '防守', '毒幕']
    },
    {
      id: 'd-b-site-wall',
      side: 'defense',
      agent: 'viper',
      ability: 'wall',
      label: 'B 区回防毒幕',
      x: 22, y: 27, r: 12,
      from: { x: 4.9, y: 30.9 },
      aim: '站在 B 后方贴最里面的墙，准星对准 B 植物区立柱的顶端，原地拉出毒幕，幕布顺着包点前沿横铺到 B 墙。',
      note: '开局先在 B 点前拉一道幕，进攻方进点正面全是毒，队友可以站在植物区立柱后打交叉。',
      tags: ['B区', '防守', '毒幕']
    },
    {
      id: 'd-mid-recon',
      side: 'defense',
      agent: 'sova',
      ability: 'recon',
      label: '中路侦察箭',
      x: 47.8, y: 64, r: 6,
      from: { x: 63.3, y: 57.5 },
      aim: '站在中路大厅贴右墙，准星对准中路顶拱门的上沿，满蓄力射箭，箭穿过中路底扫到整个中路。',
      note: '微风岛屿的中路直接连着 A 大厅和 B 隧道，一发箭就能知道进攻方是打 A 还是打 B。',
      tags: ['中路', '防守', '侦察']
    },
    {
      id: 'd-mid-smoke-astra',
      side: 'defense',
      agent: 'astra',
      ability: 'smoke',
      label: '中路自动门星云',
      x: 58.2, y: 56.4, r: 6.5,
      from: { x: 63.8, y: 47 },
      aim: '站在中路木门后，把星放到中路自动门的门框上方，听到门声就原地引爆星云，把中路底封死。',
      note: '自动门是进攻方判断中路有没有人的关键，星云一爆他们就只能改打别的路。',
      tags: ['中路', '防守', '星云']
    },
    {
      id: 'd-a-loop-molly',
      side: 'defense',
      agent: 'viper',
      ability: 'molly',
      label: 'A 主道毒吻',
      x: 70, y: 72, r: 4.5,
      from: { x: 76.4, y: 66.7 },
      aim: '站在 A 商店门口贴右墙，准星对准 A 大厅与 A 商店之间那段地面的接缝，原地投出蛇吻。',
      note: '开局一发丢到 A 主道，拖慢进攻方的 A 大节奏，也顺便确认有没有人踩点。',
      tags: ['A区', '防守']
    }
  ],
  strats: [
    {
      id: 'breeze-a-execute',
      name: 'A 区金字塔强攻 (A Execute)',
      side: 'attack',
      level: 3,
      comp: ['viper', 'harbor', 'sova', 'jett', 'killjoy'],
      marks: ['a-wall-main', 'a-molly-backsite', 'a-recon-sova', 'a-smoke-astra'],
      summary: '毒幕切开 A 后方，涌潮跟着队伍推包点，五人从金字塔正面一波上 A。',
      steps: [
        '0:00 蝰蛇在 A 商店口拉出毒幕，从包点左沿铺到右沿，封掉 A 后方和 A 桥；',
        '0:04 星礈把星云放到 A 后方，补掉毒幕没有盖到的那个角；',
        '0:07 猎枭从 A 金字塔反弹侦察箭，清包点、A 后方和 A 大厅的回防；',
        '0:12 海神从 A 金字塔后推涌潮，捷风跟着水墙正面进场，奇乐在 A 大厅放炮台断后；',
        '0:20 默认位下包，蝰蛇补蛇吻盖住 A 后方掩体，全队退到 A 金字塔架回防。'
      ],
      tips: 'A 桥方向的回防来得最快，毒幕要等猎枭确认桥上没人之后再拉。'
    },
    {
      id: 'breeze-b-execute',
      name: 'B 主道强攻 (B Execute)',
      side: 'attack',
      level: 3,
      comp: ['viper', 'sova', 'astra', 'jett', 'killjoy'],
      marks: ['b-wall-main', 'b-molly-default', 'b-molly-tunnel', 'b-recon-sova'],
      summary: 'B 主道拉幕切断 B 后方，中路同步封 B 隧道，一路从 B 墙翻进包点。',
      steps: [
        '0:00 蝰蛇在 B 主道出口拉出毒幕，把 B 包点正面的枪线全部切掉；',
        '0:05 星礈把星放到 B 隧道口，压制防守方从侧翼绕出来的路线；',
        '0:08 猎枭从 B 主道射侦察箭，清 B 包点、B 后方和 B 墙；',
        '0:13 蝰蛇丢蛇吻盖住默认下包位，捷风带两人从 B 墙侧翻进场；',
        '0:22 下包后卡 B 主道和 B 隧道两个口，奇乐在 B 主道放炮台看拆包。'
      ],
      tips: 'B 点位大而且后方很深，拉幕之后一定要有人专门看 B 隧道的侧身。'
    },
    {
      id: 'breeze-mid-push',
      name: '中路前压转 A (Mid Push)',
      side: 'attack',
      level: 4,
      comp: ['viper', 'astra', 'sova', 'neon', 'killjoy'],
      marks: ['mid-smoke-astra', 'a-wall-main', 'a-molly-plant', 'a-recon-sova'],
      summary: '先抢中路木门与中路柱，逼防守方收缩中路，再从木门转 A 大厅打 A。',
      steps: [
        '0:00 蝰蛇用毒幕封中路柱，星礈把星放到中路木门上方；',
        '0:06 猎枭射侦察箭清中路底，霓虹开滑动从木门压上中路柱；',
        '0:12 确认中路没人后引爆星云封木门，全队从木门转 A 大厅；',
        '0:20 蝰蛇在 A 商店口拉毒幕，五个人沿 A 金字塔一波进包点；',
        '0:28 下包后奇乐在中路木门放炮台，卡住防守方从中路绕后的路线。'
      ],
      tips: '中路前压必须让猎枭的箭开路，被 B 隧道的人从侧身打到就是白送一波节奏。'
    },
    {
      id: 'breeze-defense-a',
      name: 'A 区标准防守 (A Setup)',
      side: 'defense',
      level: 3,
      comp: ['viper', 'sova', 'killjoy', 'jett', 'harbor'],
      marks: ['d-a-main-wall', 'd-a-loop-molly', 'd-mid-recon'],
      summary: '蝰蛇毒幕横切 A 主道，蛇吻卡 A 大节奏，猎枭侦察箭盯中路，等回防夹击。',
      steps: [
        '0:00 蝰蛇在 A 斜坡拉出毒幕，把 A 主道从 A 商店到 A 大厅切成两段；',
        '0:04 蝰蛇把蛇吻留在 A 商店后，听到 A 主道脚步就丢到主道口；',
        '0:10 猎枭从中路大厅射侦察箭到中路底，确认中路有没有人过 B 隧道；',
        '0:18 奇乐在 A 大厅放炮台看 A 大，捷风从 A 桥前压到 A 斜坡；',
        '0:30 包点被下就全员从 A 后方和 A 桥两路夹回，海神水罩盖住包点正面。'
      ],
      tips: 'A 区的回防有 A 后方和 A 桥两条路，不要五个人全挤在 A 后方一起送。'
    },
    {
      id: 'breeze-defense-b',
      name: 'B 区重防与回防 (B Retake)',
      side: 'defense',
      level: 3,
      comp: ['viper', 'astra', 'killjoy', 'sova', 'jett'],
      marks: ['d-b-site-wall', 'd-mid-smoke-astra', 'd-mid-recon'],
      summary: '蝰蛇毒幕横在 B 植物区前沿，星礈封中路自动门，逼进攻方空手进点。',
      steps: [
        '0:00 蝰蛇站在 B 后方拉出毒幕，幕布从 B 墙一直铺到 B 隧道口；',
        '0:04 星礈把两颗星放到中路自动门和 B 主道口，先不引爆；',
        '0:10 奇乐在 B 植物区立柱后放炮台，猎枭射侦察箭看 B 主道；',
        '0:18 听到 B 主道脚步就引爆星云，毒幕同时前压，把进攻方挤在 B 主道里；',
        '0:30 包点丢了就用毒幕封 B 默认位，全员从 B 后方和 B 墙一起夹回。'
      ],
      tips: 'B 植物区的立柱是回防的支点，守的时候星礈要留一颗星给 B 隧道。'
    }
  ]
};
