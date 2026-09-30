/* 用 CDP 驱动无头 Chrome：截图 + 收集控制台错误 + 执行交互脚本
   用法: node tools/shoot.js <out.png> [--w 1680] [--h 1050] [--url ...] [--js "表达式"] [--wait 1500]
                          [--click "选择器"] [--seq "a|b|c"]  (a=click选择器, e=eval表达式, s=休眠ms, w=等待) */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
].find((p) => fs.existsSync(p));

const argv = process.argv.slice(2);
const out = argv[0] || path.resolve(__dirname, '..', '_shot', 'shot.png');
function flag(name, def) {
  const i = argv.indexOf('--' + name);
  return i >= 0 ? argv[i + 1] : def;
}

const W = Number(flag('w', 1680));
const H = Number(flag('h', 1050));
const URL_ = flag('url', 'http://127.0.0.1:8099/');
const JS = flag('js', null);
const CLICK = flag('click', null);
const SEQ = flag('seq', null);
const WAIT = Number(flag('wait', 1800));
const PORT = 9333 + Math.floor(Math.random() * 400);

const profile = path.join(os.tmpdir(), 'dsh-cdp-' + Date.now());

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--hide-scrollbars', '--mute-audio', '--force-device-scale-factor=1',
  '--window-size=' + W + ',' + H,
  '--user-data-dir=' + profile,
  '--remote-debugging-port=' + PORT,
  'about:blank'
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getTarget() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch('http://127.0.0.1:' + PORT + '/json/list');
      const list = await r.json();
      const t = list.find((x) => x.type === 'page');
      if (t && t.webSocketDebuggerUrl) return t.webSocketDebuggerUrl;
    } catch (e) {}
    await sleep(250);
  }
  throw new Error('chrome 未就绪');
}

(async () => {
  const wsUrl = await getTarget();
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const logs = [];
  const errors = [];

  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { res, rej } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
    } else if (msg.method === 'Runtime.consoleAPICalled') {
      logs.push(msg.params.type + ': ' + msg.params.args.map((a) => a.value !== undefined ? a.value : (a.description || a.type)).join(' '));
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails;
      errors.push((d.exception && (d.exception.description || d.exception.value)) || d.text);
    } else if (msg.method === 'Log.entryAdded') {
      const e = msg.params.entry;
      if (e.level === 'error' || e.level === 'warning') logs.push('[' + e.level + '] ' + e.text + (e.url ? ' @' + e.url : ''));
    }
  };

  const send = (method, params) => new Promise((res, rej) => {
    const mid = ++id;
    pending.set(mid, { res, rej });
    ws.send(JSON.stringify({ id: mid, method, params: params || {} }));
  });

  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + ((r.exceptionDetails.exception || {}).description || ''));
    return r.result.value;
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: URL_ });
  await sleep(WAIT);

  if (SEQ) {
    for (const step of SEQ.split('|')) {
      const cmd = step[0], arg = step.slice(1);
      if (cmd === 's') await sleep(Number(arg));
      else if (cmd === 'e') logs.push('eval> ' + JSON.stringify(await evaluate(arg)));
      else if (cmd === 'c') await evaluate('document.querySelector(' + JSON.stringify(arg) + ').click()');
    }
    await sleep(700);
  }
  if (CLICK) { await evaluate('document.querySelector(' + JSON.stringify(CLICK) + ').click()'); await sleep(700); }

  let value;
  if (JS) { value = await evaluate(JS); }

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));

  if (value !== undefined) console.log('RESULT ' + JSON.stringify(value, null, 1));
  console.log('CONSOLE ' + (logs.length || 0));
  logs.slice(0, 25).forEach((l) => console.log('  ' + l));
  console.log('ERRORS ' + (errors.length || 0));
  errors.slice(0, 15).forEach((l) => console.log('  ! ' + l));
  console.log('SHOT ' + out + ' (' + fs.statSync(out).size + ' bytes)');

  ws.close();
  chrome.kill();
  process.exit(0);
})().catch((e) => { console.error('FAIL ' + e.message); try { chrome.kill(); } catch (x) {} process.exit(1); });
