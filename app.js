/* ═══════════ 无畏契约 · 战术板 ═══════════ */
(function () {
  'use strict';

  const CORE = window.CORE || { maps: [], agents: [] };
  const TACTICS = window.TACTICS || {};
  const CALLOUTS = window.CALLOUTS || {};
  const LS_KEY = 'valorant-playbook/v1';

  /* ───────── 常量 ───────── */
  const AGENT_COLOR = {
    jett: '#8fd6ea', phoenix: '#ff9b3f', sage: '#37d3b8', sova: '#4a80d8',
    viper: '#2fc46b', cypher: '#cfc6ae', reyna: '#a24bd6', killjoy: '#f5d84d',
    breach: '#df7038', omen: '#7b6bd6', brimstone: '#d4553a', raze: '#ff7a2f',
    skye: '#57c98a', yoru: '#4f6bd6', astra: '#a86bd6', kayo: '#6f8ad6',
    chamber: '#d4b86a', neon: '#3fd0ff', fade: '#6b5ad6', harbor: '#2fa8a8',
    gekko: '#7fd44f', deadlock: '#b0c0d6', iso: '#d6c14f', clove: '#d64f8f',
    vyse: '#c0504e', tejo: '#d68a4f', miks: '#8f6bd6', veto: '#5fd6a8',
    waylay: '#5fd0d6'
  };

  const ABILITY = {
    smoke: { zh: '烟雾', short: '烟', icon: 'assets/abilities/omen-grenade.png', r: 7 },
    molly: { zh: '燃烧 / 毒液', short: '燃', icon: 'assets/abilities/brimstone-ability1.png', r: 4.5 },
    flash: { zh: '闪光', short: '闪', icon: 'assets/abilities/kayo-ability1.png', r: 3.5 },
    recon: { zh: '侦查 / 信息', short: '侦', icon: 'assets/abilities/sova-ability2.png', r: 5 },
    wall: { zh: '墙 / 封锁', short: '墙', icon: 'assets/abilities/harbor-ability1.png', r: 9 },
    trap: { zh: '陷阱 / 警报', short: '线', icon: 'assets/abilities/cypher-ability1.png', r: 3.5 },
    ult: { zh: '终极技能', short: '大', icon: 'assets/abilities/sova-ultimate.png', r: 8 },
    other: { zh: '其他道具', short: '具', icon: 'assets/abilities/sova-grenade.png', r: 4.5 }
  };

  const ABILITY_ORDER = ['smoke', 'molly', 'flash', 'recon', 'wall', 'trap', 'ult'];

  /* ───────── 状态 ───────── */
  const store = loadStore();
  const state = {
    map: CORE.maps[0] ? CORE.maps[0].slug : 'ascent',
    side: 'all',
    offAgents: new Set(),      // 被关掉的特工（默认全开）
    selectedId: null,
    activeStrat: null,
    edit: false,
    showRadius: true,
    showArrows: true,
    showLabels: true,
    showCallouts: false,
    tab: 'markers',
    palette: { agent: 'omen', ability: 'smoke' },
    search: ''
  };

  /* ───────── 持久化 ───────── */
  function loadStore() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return { custom: {}, overrides: {} };
      const p = JSON.parse(raw);
      return { custom: p.custom || {}, overrides: p.overrides || {} };
    } catch (e) { return { custom: {}, overrides: {} }; }
  }
  function saveStore() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {}
  }

  /* ───────── 工具 ───────── */
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const agentOf = (slug) => CORE.agents.find((a) => a.slug === slug) || { slug: slug, zh: slug, en: slug, role: '', icon: '' };
  const colorOf = (slug) => AGENT_COLOR[slug] || '#9aa7b0';
  const coreMap = (slug) => CORE.maps.find((m) => m.slug === slug) || { slug: slug, zh: slug, en: '', icon: '' };
  const tacticsOf = (slug) => TACTICS[slug] || { markers: [], strats: [], zh: coreMap(slug).zh, en: coreMap(slug).en, overview: '' };
  const abilityOf = (k) => ABILITY[k] || ABILITY.other;

  function hexA(hex, a) {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  /* 合并「内置点位 + 用户覆盖 + 用户自定义」 */
  function allMarkers(slug) {
    const t = tacticsOf(slug);
    const ov = store.overrides[slug] || {};
    const out = [];
    for (const m of t.markers || []) {
      const o = ov[m.id];
      if (o && o.hidden) continue;
      out.push(o && (o.x != null) ? Object.assign({}, m, { x: o.x, y: o.y }) : Object.assign({}, m));
    }
    for (const c of store.custom[slug] || []) out.push(Object.assign({}, c));
    return out;
  }
  function visibleMarkers(slug) {
    return allMarkers(slug).filter((m) => {
      if (state.side !== 'all' && m.side !== state.side && m.side !== 'both') return false;
      if (state.offAgents.has(m.agent)) return false;
      return true;
    });
  }

  /* ═══════════ 渲染 ═══════════ */
  function render() {
    renderMapList();
    renderHeader();
    renderBoard();
    renderLegend();
    renderMarkerPanel();
    renderStratPanel();
    renderDetail();
  }

  function renderHeader() {
    const t = tacticsOf(state.map);
    const cm = coreMap(state.map);
    $('mapTitle').innerHTML = esc(t.zh || cm.zh) + ' <small>' + esc(t.en || cm.en) + '</small>';
    $('mapOverview').textContent = t.overview || '（该地图战术数据尚未录入）';
  }

  function renderMapList() {
    const q = state.search.trim().toLowerCase();
    const ul = $('mapList');
    ul.innerHTML = CORE.maps.filter((m) =>
      !q || m.zh.includes(q) || m.en.toLowerCase().includes(q)
    ).map((m) => {
      const n = allMarkers(m.slug).length;
      const ready = (TACTICS[m.slug] && TACTICS[m.slug].markers || []).length;
      return '<li class="map-item' + (m.slug === state.map ? ' on' : '') + '" data-map="' + m.slug + '">' +
        '<img src="' + m.icon + '" alt="" loading="lazy" />' +
        '<div class="mi-txt"><div class="mi-zh">' + esc(m.zh) + '</div>' +
        '<div class="mi-en">' + esc(m.en.toUpperCase()) + '</div></div>' +
        '<span class="mi-dot">' + (n ? '●' + n : (ready ? '' : '…')) + '</span></li>';
    }).join('') || '<li class="empty">没有匹配的地图</li>';

    ul.querySelectorAll('.map-item').forEach((li) => {
      li.onclick = () => {
        state.map = li.dataset.map;
        state.selectedId = null; state.activeStrat = null;
        render();
      };
    });
  }

  const ABILITY_COLOR = {
    smoke: '#a9bccd', molly: '#ff7a2f', flash: '#ffd84d', recon: '#4ad6ff',
    wall: '#5a8ce0', trap: '#cfc6ae', ult: '#c86bff', other: '#8ba0ad'
  };

  function renderLegend() {
    const all = allMarkers(state.map);
    $('legend').innerHTML = ABILITY_ORDER.concat(['other']).map((k) => {
      const n = all.filter((m) => m.ability === k).length;
      if (!n && k === 'other') return '';
      return '<span class="' + (n ? '' : 'off') + '">' +
        '<i style="background:' + (ABILITY_COLOR[k] || '#8ba0ad') + '"></i>' +
        abilityOf(k).zh + (n ? ' <b>' + n + '</b>' : '') + '</span>';
    }).join('');
  }

  /* 地名层：把官方 Wiki 的 callout 名字标在地图上（由 tools/build-callouts.js 生成 data/callouts.js） */
  function renderCallouts() {
    const host = $('callouts');
    const data = CALLOUTS[state.map];
    const list = (data && (data.callouts || data)) || [];
    /* 没有该图的地名数据时，把「地名」开关整个藏起来，避免出现点了没反应的死按钮 */
    const has = list.length > 0;
    const box = $('tgCallouts');
    const wrap = box && box.parentNode;
    if (wrap && wrap.classList && wrap.classList.contains('chk')) wrap.style.display = has ? '' : 'none';
    if (box) box.checked = has && !!state.showCallouts;
    if (!has) state.showCallouts = false;
    if (!state.showCallouts || !list.length) {
      host.innerHTML = '';
      host.style.display = 'none';
      return;
    }
    host.style.display = '';
    host.innerHTML = list.map((c) => {
      const isSite = /Site|包点/i.test(String(c.cat || '') + c.name);
      return '<span class="cal' + (isSite ? ' site' : '') + '" style="left:' + c.x + '%;top:' + c.y + '%">' +
        esc(c.zh || c.name) + '</span>';
    }).join('');
  }

  function renderBoard() {
    const cm = coreMap(state.map);
    $('mapImg').src = cm.icon;
    const vis = visibleMarkers(state.map);
    const ann = activeAnnotations();

    /* ── SVG：范围圈 + 站位连线 ── */
    let svg = '';
    if (state.showArrows) {
      for (const m of vis) {
        if (!m.from) continue;
        const c = colorOf(m.agent);
        const solid = ann && ann.has(m.id);
        svg += '<line x1="' + m.from.x + '" y1="' + m.from.y + '" x2="' + m.x + '" y2="' + m.y +
          '" stroke="' + hexA(c, solid ? .95 : .45) + '" stroke-width="' + (solid ? .7 : .45) +
          '" stroke-dasharray="1.6 1.2" />' +
          '<circle cx="' + m.from.x + '" cy="' + m.from.y + '" r="0.9" fill="' + hexA(c, .9) + '" />' +
          '<circle cx="' + m.from.x + '" cy="' + m.from.y + '" r="1.9" fill="none" stroke="' + hexA(c, .5) + '" stroke-width=".28" />';
      }
    }
    if (state.showRadius) {
      for (const m of vis) {
        const r = m.r != null ? m.r : abilityOf(m.ability).r;
        const c = colorOf(m.agent);
        const solid = ann && ann.has(m.id);
        svg += '<circle cx="' + m.x + '" cy="' + m.y + '" r="' + r + '" fill="' + hexA(c, solid ? .22 : .10) +
          '" stroke="' + hexA(c, solid ? .95 : .5) + '" stroke-width="' + (solid ? .5 : .3) +
          '" stroke-dasharray="' + (solid ? '0' : '1.2 1') + '" />';
      }
    }
    $('overlay').innerHTML = svg;

    /* ── 标记点 ── */
    const host = $('markers');
    host.innerHTML = vis.map((m) => {
      const c = colorOf(m.agent);
      const ab = abilityOf(m.ability);
      const off = ann && !ann.has(m.id);
      const a = agentOf(m.agent);
      return '<div class="mk' + (m.id === state.selectedId ? ' sel' : '') + (off ? ' dim' : '') +
        (ann && ann.has(m.id) ? ' hl' : '') + '" data-id="' + esc(m.id) + '" style="left:' + m.x + '%;top:' + m.y + '%">' +
        '<div class="ring" style="--c:' + c + '"></div>' +
        '<div class="dot" style="background:' + c + ';--c-70:' + hexA(c, .7) + '" title="' + esc(m.label) + '">' +
        '<img src="' + ab.icon + '" alt="" /></div>' +
        (state.showLabels ? '<div class="tag">' + esc(m.label) + '</div>' : '') +
        (state.showLabels && m.from ? '<div class="side-pin">站位</div>' : '') +
        '<button class="del" data-del="' + esc(m.id) + '" title="删除">×</button>' +
        '<span hidden>' + esc(a.zh) + '</span></div>';
    }).join('');

    bindMarkerEvents(host);
    renderCallouts();
    $('boardHint').style.display = vis.length ? 'none' : 'block';
  }

  function bindMarkerEvents(host) {
    host.querySelectorAll('.mk').forEach((el) => {
      const id = el.dataset.id;
      el.querySelector('.dot').addEventListener('mousedown', (e) => {
        if (!state.edit) return;
        e.preventDefault(); e.stopPropagation();
        startDrag(id, e);
      });
      el.querySelector('.dot').addEventListener('click', (e) => {
        e.stopPropagation();
        if (dragged) { dragged = false; return; }
        state.selectedId = id;
        state.tab = 'markers'; setTab('markers');
        render();
        focusList(id);
      });
      const del = el.querySelector('.del');
      if (del) del.addEventListener('click', (e) => { e.stopPropagation(); removeMarker(id); });
    });
  }

  function activeAnnotations() {
    if (!state.activeStrat) return null;
    const t = tacticsOf(state.map);
    const s = (t.strats || []).find((x) => x.id === state.activeStrat);
    if (!s) return null;
    return new Set(s.marks || []);
  }

  /* ═══════════ 右侧面板 ═══════════ */
  function setTab(tab) {
    state.tab = tab;
    $('tabs').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
    $('tabMarkers').hidden = tab !== 'markers';
    $('tabStrats').hidden = tab !== 'strats';
  }

  function renderMarkerPanel() {
    const all = allMarkers(state.map);
    const vis = visibleMarkers(state.map);
    $('cntMarkers').textContent = vis.length;
    $('cntStrats').textContent = (tacticsOf(state.map).strats || []).length;

    /* 特工过滤条 */
    const used = Array.from(new Set(all.map((m) => m.agent)));
    used.sort((a, b) => agentOf(a).role.localeCompare(agentOf(b).role) || a.localeCompare(b));
    $('agentFilter').innerHTML = used.map((s) => {
      const a = agentOf(s);
      return '<button data-agent="' + s + '" class="' + (state.offAgents.has(s) ? '' : 'on') +
        '" title="' + esc(a.zh + ' / ' + a.en) + '"><img src="' + a.icon + '" alt="" /></button>';
    }).join('') || '<span class="mk-sub">—</span>';
    $('agentFilter').querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        const s = b.dataset.agent;
        if (state.offAgents.has(s)) state.offAgents.delete(s); else state.offAgents.add(s);
        render();
      };
    });

    /* 点位列表 */
    const list = vis.slice().sort((a, b) => {
      const sa = a.side === 'defense' ? 1 : 0, sb = b.side === 'defense' ? 1 : 0;
      if (sa !== sb) return sa - sb;
      return ABILITY_ORDER.indexOf(a.ability) - ABILITY_ORDER.indexOf(b.ability);
    });
    $('markerList').innerHTML = list.map((m) => {
      const a = agentOf(m.agent), ab = abilityOf(m.ability);
      return '<li class="mk-row' + (m.id === state.selectedId ? ' on' : '') + '" data-id="' + esc(m.id) + '">' +
        '<div class="mk-ico" style="background:' + colorOf(m.agent) + '"><img src="' + ab.icon + '" alt="" /></div>' +
        '<div class="mk-body"><div class="mk-title">' + esc(m.label) +
        '<span class="badge ' + (m.side || 'both') + '">' + (m.side === 'attack' ? '进攻' : m.side === 'defense' ? '防守' : '通用') + '</span></div>' +
        '<div class="mk-sub">' + esc(a.zh) + ' · ' + ab.zh + '</div></div></li>';
    }).join('') || '<li class="empty">当前筛选下没有点位<br />试试切换「全部 / 进攻 / 防守」</li>';

    $('markerList').querySelectorAll('.mk-row').forEach((li) => {
      li.onclick = () => {
        state.selectedId = li.dataset.id;
        render();
        focusList(li.dataset.id);
      };
    });
  }

  function focusList(id) {
    const el = $('markerList').querySelector('[data-id="' + CSS.escape(id) + '"]');
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function renderStratPanel() {
    const t = tacticsOf(state.map);
    $('stratList').innerHTML = (t.strats || []).map((s) => {
      const on = s.id === state.activeStrat;
      return '<li class="strat' + (on ? ' on' : '') + '" data-id="' + esc(s.id) + '">' +
        '<h4>' + esc(s.name) +
        '<span class="badge ' + s.side + '">' + (s.side === 'attack' ? '进攻' : '防守') + '</span>' +
        '<span class="lvl">难度 ' + '★'.repeat(s.level || 1) + '☆'.repeat(Math.max(0, 5 - (s.level || 1))) + '</span></h4>' +
        '<div class="sum">' + esc(s.summary) + '</div>' +
        '<div class="comp"><span class="nm">推荐阵容</span>' + (s.comp || []).map((c) => {
          const a = agentOf(c);
          return '<img src="' + a.icon + '" title="' + esc(a.zh + ' / ' + a.en) + '" alt="" />';
        }).join('') + '</div>' +
        (on ? '<ol>' + (s.steps || []).map((x) => '<li>' + esc(x) + '</li>').join('') + '</ol>' +
          (s.tips ? '<div class="tips">💡 ' + esc(s.tips) + '</div>' : '') : '') +
        '<div class="open-here"><button class="link" data-strat="' + esc(s.id) + '">' +
        (on ? '取消高亮关联点位' : '在地图上高亮关联点位 (' + (s.marks || []).length + ')') + '</button></div>' +
        '</li>';
    }).join('') || '<li class="empty">该地图的打法还没录入</li>';

    $('stratList').querySelectorAll('.strat').forEach((li) => {
      li.querySelector('h4').onclick = () => {
        state.activeStrat = state.activeStrat === li.dataset.id ? null : li.dataset.id;
        state.side = 'all';
        syncSideButtons();
        render();
      };
      const b = li.querySelector('[data-strat]');
      if (b) b.onclick = (e) => {
        e.stopPropagation();
        state.activeStrat = state.activeStrat === li.dataset.id ? null : li.dataset.id;
        state.side = 'all';
        syncSideButtons();
        render();
      };
    });
  }

  function renderDetail() {
    const box = $('detail');
    const m = allMarkers(state.map).find((x) => x.id === state.selectedId);
    if (!m) { box.hidden = true; box.innerHTML = ''; return; }
    const a = agentOf(m.agent), ab = abilityOf(m.ability);
    box.hidden = false;
    box.innerHTML =
      '<h3><span class="mk-ico" style="background:' + colorOf(m.agent) + ';width:22px;height:22px">' +
      '<img src="' + ab.icon + '" style="width:12px" alt="" /></span>' + esc(m.label) +
      '<span class="badge ' + (m.side || 'both') + '">' + (m.side === 'attack' ? '进攻' : m.side === 'defense' ? '防守' : '通用') + '</span></h3>' +
      '<div class="who"><img class="av" src="' + a.icon + '" alt="" />' +
      '<div><div class="wt">' + esc(a.zh) + ' · ' + esc(ab.zh) + '</div>' +
      '<div class="ws">' + esc(a.en) + ' / ' + esc(ab.zh) + '</div></div></div>' +
      (m.aim ? '<div class="kv aim"><b>瞄准 / 投掷</b>' + esc(m.aim) + '</div>' : '') +
      (m.note ? '<div class="kv"><b>战术价值</b>' + esc(m.note) + '</div>' : '') +
      (m.tags && m.tags.length ? '<div class="kv"><b>标签</b>' + m.tags.map(esc).join(' · ') + '</div>' : '') +
      '<div class="coords">落点 ' + m.x.toFixed(1) + ', ' + m.y.toFixed(1) +
      (m.from ? '　站位 ' + m.from.x.toFixed(1) + ', ' + m.from.y.toFixed(1) : '') + '</div>' +
      '<div class="acts"><button class="btn ghost small" id="btnFocus">居中查看</button>' +
      '<button class="btn ghost small danger" id="btnDelMk">删除该点位</button></div>';
    $('btnDelMk').onclick = () => removeMarker(m.id);
    $('btnFocus').onclick = () => {
      const el = $('markers').querySelector('.mk[data-id="' + CSS.escape(m.id) + '"]');
      if (el) el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    };
  }

  /* ═══════════ 编辑 ═══════════ */
  let dragged = false;

  function boardPct(clientX, clientY) {
    const r = $('board').getBoundingClientRect();
    // 地图是 1:1 且 object-fit: contain，board 也是 1:1，因此直接线性换算
    const x = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    const y = Math.max(0, Math.min(100, ((clientY - r.top) / r.height) * 100));
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  }

  function startDrag(id, e) {
    dragged = false;
    const move = (ev) => {
      const p = boardPct(ev.clientX, ev.clientY);
      dragged = true;
      const m = allMarkers(state.map).find((x) => x.id === id);
      if (!m) return;
      m.x = p.x; m.y = p.y;
      const el = $('markers').querySelector('.mk[data-id="' + CSS.escape(id) + '"]');
      if (el) el.style.cssText = 'left:' + p.x + '%;top:' + p.y + '%';
      persistPosition(id, p);
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      if (dragged) { state.selectedId = id; render(); }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }

  function persistPosition(id, p) {
    const builtin = (tacticsOf(state.map).markers || []).some((m) => m.id === id);
    if (builtin) {
      store.overrides[state.map] = store.overrides[state.map] || {};
      const o = store.overrides[state.map][id] || {};
      o.x = p.x; o.y = p.y;
      store.overrides[state.map][id] = o;
    } else {
      const list = store.custom[state.map] || [];
      const m = list.find((x) => x.id === id);
      if (m) { m.x = p.x; m.y = p.y; }
    }
    saveStore();
  }

  function removeMarker(id) {
    const builtin = (tacticsOf(state.map).markers || []).some((m) => m.id === id);
    if (builtin) {
      store.overrides[state.map] = store.overrides[state.map] || {};
      const o = store.overrides[state.map][id] || {};
      o.hidden = true;
      store.overrides[state.map][id] = o;
    } else {
      store.custom[state.map] = (store.custom[state.map] || []).filter((x) => x.id !== id);
    }
    state.selectedId = null;
    saveStore(); render();
  }

  function addMarkerAt(p) {
    const ab = state.palette.ability;
    const id = 'my-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e4).toString(36);
    const m = {
      id: id, side: state.side === 'all' ? 'attack' : state.side,
      agent: state.palette.agent, ability: ab,
      label: '自定义 ' + abilityOf(ab).short + '点',
      x: p.x, y: p.y, r: abilityOf(ab).r,
      aim: '', note: '', tags: ['自定义'], custom: true
    };
    store.custom[state.map] = store.custom[state.map] || [];
    store.custom[state.map].push(m);
    state.selectedId = id;
    saveStore(); render();
    setTab('markers');
  }

  /* ═══════════ 事件绑定 ═══════════ */
  function syncSideButtons() {
    $('sideFilter').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.side === state.side));
  }

  function bindUI() {
    $('sideFilter').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      state.side = b.dataset.side; state.activeStrat = null; syncSideButtons(); render();
    });
    $('mapSearch').addEventListener('input', (e) => { state.search = e.target.value; renderMapList(); });
    $('tabs').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return; setTab(b.dataset.tab);
    });
    $('tgRadius').onchange = (e) => { state.showRadius = e.target.checked; renderBoard(); };
    $('tgArrows').onchange = (e) => { state.showArrows = e.target.checked; renderBoard(); };
    $('tgLabels').onchange = (e) => { state.showLabels = e.target.checked; renderBoard(); };
    $('tgCallouts').onchange = (e) => { state.showCallouts = e.target.checked; renderBoard(); };
    $('btnAllAgents').onclick = () => {
      const used = new Set(allMarkers(state.map).map((m) => m.agent));
      if (state.offAgents.size) state.offAgents.clear();
      else used.forEach((s) => state.offAgents.add(s));
      render();
    };
    $('btnClearSel').onclick = () => { state.selectedId = null; state.activeStrat = null; render(); };
    $('btnReset').onclick = () => {
      if (!confirm('恢复该地图的默认点位？你自己新增和移动过的点位会被清空。')) return;
      delete store.custom[state.map];
      delete store.overrides[state.map];
      state.selectedId = null; saveStore(); render();
    };

    /* 编辑模式 */
    $('btnEdit').onclick = () => {
      state.edit = !state.edit;
      $('btnEdit').classList.toggle('on', state.edit);
      $('btnEdit').textContent = state.edit ? '✓ 退出编辑' : '✎ 编辑模式';
      $('palette').hidden = !state.edit;
      $('board').classList.toggle('editing', state.edit);
    };

    /* 调色板 */
    const controllers = CORE.agents.slice();
    $('agentStrip').innerHTML = controllers.map((a) =>
      '<button data-agent="' + a.slug + '" title="' + esc(a.zh) + '" class="' + (a.slug === state.palette.agent ? 'on' : '') + '">' +
      '<img src="' + a.icon + '" alt="" /></button>').join('');
    $('agentStrip').querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        state.palette.agent = b.dataset.agent;
        $('agentStrip').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      };
    });
    $('abilityStrip').innerHTML = ABILITY_ORDER.concat(['other']).map((k) =>
      '<button data-ab="' + k + '" class="' + (k === state.palette.ability ? 'on' : '') + '">' +
      '<img src="' + abilityOf(k).icon + '" alt="" />' + abilityOf(k).zh + '</button>').join('');
    $('abilityStrip').querySelectorAll('button').forEach((b) => {
      b.onclick = () => {
        state.palette.ability = b.dataset.ab;
        $('abilityStrip').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      };
    });

    /* 板上点击 → 新增点位 */
    $('board').addEventListener('click', (e) => {
      if (!state.edit) {
        if (!e.target.closest('.mk')) { state.selectedId = null; render(); }
        return;
      }
      if (e.target.closest('.mk')) return;
      addMarkerAt(boardPct(e.clientX, e.clientY));
    });

    /* 键盘 */
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { state.selectedId = null; render(); }
      if ((e.key === 'Delete' || e.key === 'Backspace') && state.selectedId &&
          !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault(); removeMarker(state.selectedId);
      }
    });

    $('btnExportJson').onclick = exportJson;
    $('importFile').onchange = importJson;
    $('btnExportPng').onclick = exportPng;
  }

  /* ═══════════ 导入 / 导出 ═══════════ */
  function download(name, content, type) {
    const blob = content instanceof Blob ? content : new Blob([content], { type: type || 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  function exportJson() {
    download('valorant-playbook-' + new Date().toISOString().slice(0, 10) + '.json',
      JSON.stringify({ v: 1, exportedAt: new Date().toISOString(), custom: store.custom, overrides: store.overrides }, null, 2));
  }

  function importJson(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const p = JSON.parse(r.result);
        if (!p.custom && !p.overrides) throw new Error('格式不正确');
        store.custom = Object.assign(store.custom, p.custom || {});
        store.overrides = Object.assign(store.overrides, p.overrides || {});
        saveStore(); render();
        alert('导入成功：已合并自定义点位与位置调整。');
      } catch (err) { alert('导入失败：' + err.message); }
      e.target.value = '';
    };
    r.readAsText(f);
  }

  function loadImg(src) {
    return new Promise((res, rej) => {
      const i = new Image();
      i.onload = () => res(i); i.onerror = rej; i.src = src;
    });
  }

  async function exportPng() {
    const S = 1500;
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#0a1014'; ctx.fillRect(0, 0, S, S);
    try {
      const img = await loadImg(coreMap(state.map).icon);
      ctx.drawImage(img, 0, 0, S, S);
    } catch (err) {}

    const vis = visibleMarkers(state.map);
    const ann = activeAnnotations();
    for (const m of vis) {
      const c = colorOf(m.agent);
      const k = ann ? (ann.has(m.id) ? 1 : 0.25) : 1;
      const px = m.x / 100 * S, py = m.y / 100 * S;
      const r = (m.r != null ? m.r : abilityOf(m.ability).r) / 100 * S;
      ctx.globalAlpha = k;
      ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = hexA(c, .16); ctx.fill();
      ctx.strokeStyle = hexA(c, .8); ctx.lineWidth = 2.5;
      ctx.setLineDash([9, 7]); ctx.stroke(); ctx.setLineDash([]);
      if (m.from) {
        const fx = m.from.x / 100 * S, fy = m.from.y / 100 * S;
        ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(px, py);
        ctx.strokeStyle = hexA(c, .5); ctx.lineWidth = 2; ctx.setLineDash([7, 6]); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.arc(fx, fy, 7, 0, Math.PI * 2); ctx.fillStyle = hexA(c, .95); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(px, py, 13, 0, Math.PI * 2);
      ctx.fillStyle = c; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.stroke();

      ctx.font = '600 22px "Microsoft YaHei", sans-serif';
      const w = ctx.measureText(m.label).width;
      ctx.fillStyle = 'rgba(9,16,20,.88)';
      roundRect(ctx, px - w / 2 - 9, py - 48, w + 18, 28, 7); ctx.fill();
      ctx.fillStyle = '#e7eef2'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(m.label, px, py - 34);
      ctx.globalAlpha = 1;
    }

    /* 标题条 */
    const t = tacticsOf(state.map);
    ctx.fillStyle = 'rgba(9,16,20,.86)';
    roundRect(ctx, 24, 24, 470, 74, 10); ctx.fill();
    ctx.fillStyle = '#ff4655'; ctx.fillRect(24, 24, 6, 74);
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#e7eef2'; ctx.font = '700 30px "Microsoft YaHei", sans-serif';
    ctx.fillText((t.zh || '') + '  ' + (t.en || ''), 46, 64);
    ctx.fillStyle = '#8ba0ad'; ctx.font = '400 18px "Microsoft YaHei", sans-serif';
    const sideTxt = state.side === 'attack' ? '进攻方道具' : state.side === 'defense' ? '防守方道具' : '全部道具';
    ctx.fillText(sideTxt + ' · 共 ' + vis.length + ' 个点位' + (state.activeStrat ? ' · 打法：' + (t.strats.find((s) => s.id === state.activeStrat) || {}).name : ''), 46, 90);

    cv.toBlob((b) => download('valorant-' + state.map + '-' + Date.now() + '.png', b), 'image/png');
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  /* ═══════════ 启动 ═══════════ */
  bindUI();
  setTab('markers');
  syncSideButtons();
  render();
})();
