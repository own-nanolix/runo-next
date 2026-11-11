/* Generated from src/pages/social.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('social', function (root) {
    const $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const I = (n) => Runo.icon(n);
    let N = 0; const U = () => 'social-' + (++N) + '-';
    const FM = { ig: { n: 'Instagram', r: '4:5', s: '1080 × 1350', ar: 4 / 5 }, st: { n: 'Story', r: '9:16', s: '1080 × 1920', ar: 9 / 16 }, li: { n: 'LinkedIn', r: '1.91:1', s: '1200 × 627', ar: 1.91 }, x: { n: 'X', r: '16:9', s: '1600 × 900', ar: 16 / 9 } };
    const label = (f) => `${FM[f].n} · ${FM[f].r} · ${FM[f].s} px`;
    const MARK = (s, st = '') => `<svg viewBox="0 0 362 360" aria-hidden="true" style="width:${s}cqw;height:${s}cqw;fill:currentColor;${st}"><use href="#runo-mark"/></svg>`;
    const lerp = (pts, x, cos) => { for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const a = pts[i - 1], b = pts[i], t = (x - a[0]) / (b[0] - a[0] || 1), e = cos ? (1 - Math.cos(Math.PI * t)) / 2 : t; return a[1] + (b[1] - a[1]) * e; } return pts[pts.length - 1][1]; };
    /* hairline bars as raw SVG: fn(x01) -> 0..1, col(x01) -> colour */
    const hair = (u, W, H, n, fn, col, w = 1.6) => { let r = ''; for (let i = 0; i < n; i++) { const x = i / (n - 1), h = Math.max(.02, fn(x)) * H; r += `<rect class="br" style="--i:${i}" x="${(i * W / n).toFixed(1)}" y="${(H - h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}" fill="${col(x)}"/>`; } return r; };
    const barsSvg = (u, n, h, fn, c1 = '#4FA3F2', c2 = '#BAD5F3') => `<svg viewBox="0 0 ${n * 4} ${h}" preserveAspectRatio="none" style="width:100%;height:100%"><defs><linearGradient id="${u}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}" stop-opacity=".35"/></linearGradient></defs>${hair(u, n * 4, h, n, fn, () => `url(#${u}bg)`)}</svg>`;
    const sc = (n) => `style="font-size:${n}cqw"`;

    /* ---------- simple SVG flags (circle crops) ---------- */
    const R3 = (a, b, c, v) => v ? `<rect width="10" height="20" fill="${a}"/><rect x="10" width="10" height="20" fill="${b}"/><rect x="20" width="10" height="20" fill="${c}"/>` : `<rect width="30" height="7" fill="${a}"/><rect y="7" width="30" height="6.2" fill="${b}"/><rect y="13.2" width="30" height="6.8" fill="${c}"/>`;
    const FLAGS = {
      France: R3('#002654', '#fff', '#ED2939', 1), Italy: R3('#009246', '#fff', '#CE2B37', 1), Germany: R3('#000', '#DD0000', '#FFCE00'), Netherlands: R3('#AE1C28', '#fff', '#21468B'), Estonia: R3('#0072CE', '#000', '#fff'),
      Spain: '<rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/><rect x="6" y="7.5" width="4" height="5" rx="1" fill="#AA151B"/>',
      Brazil: '<rect width="30" height="20" fill="#229E45"/><polygon points="15,2 27,10 15,18 3,10" fill="#F8E509"/><circle cx="15" cy="10" r="4.6" fill="#2B3990"/>',
      Canada: '<rect width="30" height="20" fill="#fff"/><rect width="7.5" height="20" fill="#D52B1E"/><rect x="22.5" width="7.5" height="20" fill="#D52B1E"/><polygon points="15,3 16.8,7.5 21,6.5 18.8,10.5 21,13 16,12.5 15,17 14,12.5 9,13 11.2,10.5 9,6.5 13.2,7.5" fill="#D52B1E"/>',
      India: '<rect width="30" height="7" fill="#FF9933"/><rect y="7" width="30" height="6.2" fill="#fff"/><rect y="13.2" width="30" height="6.8" fill="#138808"/><circle cx="15" cy="10" r="2.3" fill="none" stroke="#000080" stroke-width=".7"/>',
      Greece: '<rect width="30" height="20" fill="#0D5EAF"/>' + [2.2, 6.6, 11.1, 15.5].map((y) => `<rect y="${y}" width="30" height="2.2" fill="#fff"/>`).join('') + '<rect width="11" height="11.1" fill="#0D5EAF"/><rect x="4.4" width="2.2" height="11.1" fill="#fff"/><rect y="4.4" width="11" height="2.2" fill="#fff"/>',
      USA: '<rect width="30" height="20" fill="#fff"/>' + [0, 1, 2, 3, 4, 5, 6].map((i) => `<rect y="${(i * 3.08).toFixed(2)}" width="30" height="1.54" fill="#B22234"/>`).join('') + '<rect width="13" height="10.8" fill="#3C3B6E"/>' + [1.6, 5, 8.4, 11.4].flatMap((x) => [1.6, 4.4, 7.2, 9.6].map((y) => `<circle cx="${x}" cy="${y}" r=".5" fill="#fff"/>`)).join(''),
      Egypt: '<rect width="30" height="7" fill="#CE1126"/><rect y="7" width="30" height="6.2" fill="#fff"/><rect y="13.2" width="30" height="6.8" fill="#000"/><circle cx="15" cy="10" r="1.8" fill="#C09300"/>',
      Mexico: R3('#006847', '#fff', '#CE1126', 1) + '<circle cx="15" cy="10" r="2.2" fill="#8A6B2F"/>',
      Norway: '<rect width="30" height="20" fill="#BA0C2F"/><rect x="8" width="5" height="20" fill="#fff"/><rect y="7.5" width="30" height="5" fill="#fff"/><rect x="9.3" width="2.4" height="20" fill="#00205B"/><rect y="8.8" width="30" height="2.4" fill="#00205B"/>',
    };
    const flagPill = (n) => `<span style="display:inline-flex;align-items:center;gap:1.6cqw;height:7.4cqw;padding:0 3cqw 0 .8cqw;border-radius:999px;background:#fff;box-shadow:0 .6cqw 2cqw -1.2cqw rgba(40,60,90,.3);font-size:2.5cqw;white-space:nowrap;flex:none"><span style="width:5.8cqw;height:5.8cqw;border-radius:50%;overflow:hidden;display:block;box-shadow:inset 0 0 0 .2cqw rgba(0,0,0,.08)"><svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%" aria-hidden="true">${FLAGS[n]}</svg></span>${n}</span>`;

    /* ---------- SVG coins ---------- */
    const coins = (u) => {
      const one = (cx, cy, r, rot, f, op, d) => `<g class="fl" style="--d:${d}" opacity="${op}" ${f ? `filter="url(#${u}f${f})"` : ''}><g transform="translate(${cx} ${cy}) rotate(${rot})"><ellipse cx="0" cy="${r * .1}" rx="${r}" ry="${r * .8}" fill="#A99F8E"/><ellipse rx="${r}" ry="${r * .8}" fill="url(#${u}cg)"/><ellipse rx="${r * .86}" ry="${r * .68}" fill="none" stroke="#B7AD9B" stroke-width=".6" stroke-dasharray=".8 .8"/><ellipse rx="${r * .78}" ry="${r * .62}" fill="url(#${u}cf)"/>
        <g transform="translate(${-r * .5} ${-r * .45}) scale(${r / 400 * 1.1})" fill="#8F8573" opacity=".55"><use href="#runo-mark" width="362" height="360"/></g></g></g>`;
      return `<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" class="abs" style="width:100%;height:100%" aria-hidden="true"><defs>
        <linearGradient id="${u}cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F1EBDD"/><stop offset="1" stop-color="#BDB3A1"/></linearGradient>
        <linearGradient id="${u}cf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E7DFCF"/><stop offset="1" stop-color="#CFC6B4"/></linearGradient>
        <filter id="${u}f1" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation=".9"/></filter><filter id="${u}f2" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3.2"/></filter></defs>
        ${one(22, 84, 24, -28, 2, .55, 0)}${one(80, 98, 19, 22, 2, .5, 2)}${one(70, 52, 18, 8, 1, .8, 1)}${one(30, 14, 17, -18, 0, 1, 3)}${one(76, 10, 20, 12, 0, 1, 4)}</svg>`;
    };
    const arcs = (u, cx, cy, op = .75) => `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" class="abs" style="width:100%;height:100%;overflow:visible" aria-hidden="true"><g class="spin" fill="none" stroke="#fff" stroke-opacity="${op}" stroke-width=".22">${[12, 20, 28, 36, 44, 52, 62].map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" stroke-dasharray="${60 + i * 14} ${20 + i * 6}"/>`).join('')}</g></svg>`;
    const pillTry = (t = 'Try Runo') => `<span class="try2"><span class="pill">${t}</span><b>${I('arrow-ne')}</b></span>`;
    const prompt = (typ) => `<div style="background:#fff;border-radius:3cqw;padding:3.2cqw 3.6cqw;box-shadow:0 2cqw 5cqw -3cqw rgba(40,70,110,.35);display:grid;gap:3cqw">
      <div style="display:flex;gap:2.4cqw;align-items:center;font-size:3.4cqw"><span style="color:var(--ink-3)">${I('plus')}</span><span class="caret" data-typ="${typ}">${typ.split('|')[0]}</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center"><span style="display:inline-flex;align-items:center;gap:1.2cqw;height:5.4cqw;padding:0 2.2cqw;border-radius:999px;background:#F2F3F5;font-size:2.3cqw;color:var(--ink-2)">${I('clip')}Marketing_invoice_Feb.pdf</span><span style="width:5.6cqw;height:5.6cqw;border-radius:50%;background:#F2F3F5;display:grid;place-items:center;color:var(--ink-2)">${I('arrow-up')}</span></div></div>`;

    /* ---------- the posts ---------- */
    const TAG4 = [['Cash Visibility', 30, 20, -20, 'blue'], ['Financial Insights', 67, 24, 8, ''], ['AI Financial Copilot', 44, 33, 4, 'ice'], ['Expense Control', 69, 43, 6, 'blue'], ['Multi-Account Sync', 30, 47, -20, 'mint'],
      ['Runway Forecasting', 52, 57, 8, ''], ['Smart Payments', 30, 68, 20, ''], ['Payments', 76, 69, 22, ''], ['Automated Workflows', 32, 82, 0, 'ice'], ['Decision Layer', 69, 84, 0, 'mint']];
    const tagPile = (arr) => arr.map(([t, x, y, r, c], i) => `<span class="tag dr ${c}" style="--x:${x}%;--y:${y}%;--r:${r}deg;--i:${i}">${t}</span>`).join('');
    const listRows = (on) => ['Understand', 'Plan actions', 'Execute in one step'].map((t, i) => `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:2.2cqw 0;border-top:.25cqw solid #E7E8EB;font-size:5.4cqw;letter-spacing:-.025em;${i === on ? '' : 'color:#B4B8BF'}"><span>${t}</span><span style="font-size:2.6cqw;color:var(--ink-3)">0${i + 1}</span></div>`).join('');

    const POSTS = [
      { id: 'stat', fmt: 'ig', title: '86.3% of financial operations', render: (u) => `<div class="abs" style="background:#F0EFEC"></div>
        <div style="position:absolute;left:0;top:0;padding:3.4cqw 4.4cqw;background:#fff;border-radius:0 0 3cqw 0;font-size:3.1cqw;color:var(--ink-3)"><span style="display:inline-block;width:1.4cqw;height:1.4cqw;background:#B4B8BF;margin-right:1.6cqw"></span>New Standard</div>
        <div style="position:absolute;left:8cqw;right:8cqw;bottom:9cqw"><div class="num" style="font-size:22cqw;line-height:1;letter-spacing:-.05em"><span data-cnt="86.3" data-dec="1" data-suf="%">86.3%</span></div>
        <p style="font-size:4.3cqw;line-height:1.3;margin-top:6cqw"><span style="color:var(--ink-3)">Of financial operations remain</span><br>dependent on outdated workflows, limiting speed and clarity.</p></div>` },
      { id: 'p74', fmt: 'ig', title: '+74% Faster pattern recognition', render: (u) => {
        const sig = [[0, .08], [.12, .08], [.27, .29], [.47, .29], [.6, .5], [.75, .5], [.93, .95], [1, .95]], st = [[0, .03], [.2, .03], [.42, .43], [.62, .43], [.75, .22], [.9, .22], [.94, .3], [1, .3]];
        const X = (x) => 100 + x * 880, Y = (p) => 480 - p * 460;
        const sp = sig.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ');
        return `<div style="position:absolute;left:7cqw;right:7cqw;top:8cqw"><div class="num" style="font-size:19cqw;line-height:.95;letter-spacing:-.045em"><span data-cnt="74" data-pre="+" data-suf="%">+74%</span></div>
          <p style="font-size:4.2cqw;margin-top:2cqw">Faster pattern recognition</p>
          <div style="display:flex;gap:4cqw;font-size:2.8cqw;margin-top:3.4cqw"><span><i style="display:inline-block;width:1.6cqw;height:1.6cqw;background:#5BA3F0;margin-right:1.4cqw"></i>Signal Detection</span><span style="color:var(--ink-3)"><i style="display:inline-block;width:1.6cqw;height:1.6cqw;background:#B4B8BF;margin-right:1.4cqw"></i>Static Reporting</span></div></div>
        <svg viewBox="0 0 1000 560" style="position:absolute;left:5cqw;right:5cqw;bottom:6cqw;width:90cqw;height:50cqw" aria-hidden="true">
          ${[0, 25, 50, 75, 100].map((p) => `<path d="M100 ${Y(p / 100)}H980" stroke="#EFEFF1" stroke-width="2"/><text x="0" y="${Y(p / 100) + 9}" font-size="26" fill="#6B7280" font-family="inherit">${p}%</text>`).join('')}
          ${hair(u, 880, 460, 72, (x) => lerp(st, x), (x) => x < .2 || x > .92 ? '#F5B27A' : '#9CC6F5', 2.4).replace(/x="([\d.]+)"/g, (m, a) => `x="${(+a + 100).toFixed(1)}"`).replace(/y="([\d.]+)"/g, (m, a) => `y="${(+a + 20).toFixed(1)}"`)}
          <path class="dl" pathLength="1" d="${sp}" fill="none" stroke="#5BA3F0" stroke-width="4" stroke-linejoin="round"/>
          ${['Input', 'Processing', 'Adaptation', 'Response'].map((t, i) => `<text x="${[100, 400, 690, 980][i]}" y="548" font-size="26" fill="#6B7280" text-anchor="${i === 3 ? 'end' : i ? 'middle' : 'start'}" font-family="inherit">${t}</text>`).join('')}</svg>`; } },
      { id: 'assist', fmt: 'ig', title: 'Intelligent Assistant', render: () => `<div class="abs" style="background:#CCDFFB"></div>
        <div class="orbw" data-orb-s style="position:absolute;left:50%;top:44%;width:66cqw;translate:-50% -50%"></div>
        <div style="position:absolute;left:50%;bottom:14cqw;translate:-50% 0;display:inline-flex;align-items:center;gap:2cqw;height:10.5cqw;padding:0 4.4cqw;border-radius:2.2cqw;background:#E3EDFC;color:#2F6FB8;font-size:5.6cqw;white-space:nowrap">${I('mic').replace('class="icon"', 'class="icon" style="width:5.4cqw;height:5.4cqw"')}Intelligent Assistant</div>` },
      { id: 'coins', fmt: 'ig', title: 'Take full control of your financial operations', render: (u) => `<div class="abs" style="background:linear-gradient(180deg,#E4DBCC,#D6CBBA 60%,#CFC4B2)"></div>${coins(u)}
        <div style="position:absolute;left:0;right:0;top:46%;text-align:center;color:#fff;font-size:9.4cqw;line-height:1.12;letter-spacing:-.035em;padding:0 8cqw;text-shadow:0 .4cqw 3cqw rgba(110,95,75,.25)">Take full control of your financial operations</div>
        <div style="position:absolute;left:0;right:0;bottom:11cqw;text-align:center"><span class="pill">Get started</span></div>` },
      { id: 'control', fmt: 'ig', title: 'Control, simplified. Have you?', render: (u) => `<div class="abs" style="background:linear-gradient(180deg,#A9C7EE 0%,#CFE0F5 46%,#F3F5F7 100%)"></div>${arcs(u, 78, 98)}
        <div style="position:absolute;left:8cqw;right:8cqw;top:10cqw;font-size:12.4cqw;line-height:1.04;letter-spacing:-.04em"><span>Control, simplified.</span><br><span class="hl" style="color:#fff"><span class="typ">Have you?</span></span></div>
        <div style="position:absolute;left:8cqw;bottom:9cqw">${pillTry()}</div>` },
      { id: 'tags', fmt: 'ig', title: 'Feature tags', render: () => `<div class="abs" style="background:#fff"></div><p class="k" style="position:absolute;left:6cqw;top:6cqw">Everything in one place</p><div class="abs">${tagPile(TAG4)}</div>` },
      { id: 'car', fmt: 'ig', carousel: 3, title: 'Understand, Plan actions, Execute in one step', render: (u) => `<div class="sl-track">
        <div class="sl"><div style="position:absolute;left:8cqw;right:8cqw;top:9cqw">${listRows(0)}</div><div style="position:absolute;left:6cqw;right:6cqw;bottom:14cqw;height:38cqw">${barsSvg(u + 's0', 60, 80, (x) => .2 + .75 * Math.pow(x, 1.3) * (.8 + .2 * Math.sin(x * 22)))}</div></div>
        <div class="sl"><div style="position:absolute;left:8cqw;right:8cqw;top:9cqw">${listRows(1)}</div><div style="position:absolute;left:0;right:0;bottom:14cqw;height:38cqw">${tagPile([['Cash Visibility', 28, 24, -12, 'blue'], ['Expense Control', 66, 36, 6, 'blue'], ['Runway Forecasting', 40, 62, 8, ''], ['Decision Layer', 74, 82, 0, 'mint']])}</div></div>
        <div class="sl"><div style="position:absolute;left:8cqw;right:8cqw;top:9cqw">${listRows(2)}</div><div class="abs" style="top:40%;display:grid;place-items:center">${pillTry('Get started')}</div></div></div>` },
      { id: 'model', fmt: 'st', title: 'Model your next move before it happens.', render: (u) => `<div class="abs" style="background:linear-gradient(180deg,#A9C7EE 0%,#CFE0F5 46%,#F3F5F7 100%)"></div>
        <h3 style="position:absolute;left:9cqw;right:9cqw;top:14cqw;font-size:11.2cqw;line-height:1.06;letter-spacing:-.04em;font-weight:400">Model your next move before it happens.</h3>
        <div class="orbw" data-orb-s style="position:absolute;left:50%;top:55%;width:62cqw;translate:-50% -50%"></div>
        <div style="position:absolute;left:7cqw;right:7cqw;bottom:13cqw">${prompt('Measure our market risk|Add this invoice to my accounts')}</div>` },
      { id: 'logo', fmt: 'st', title: 'Runo logo on sky', render: (u) => `<div class="abs" style="background:linear-gradient(180deg,#A9C7EE 0%,#CFE0F5 46%,#F3F5F7 100%)"></div>${arcs(u, 50, 50, .85)}
        <div class="abs" style="display:grid;place-items:center"><div class="fl" style="width:30cqw;height:30cqw;border-radius:23%;background:#fff;display:grid;place-items:center;box-shadow:0 8cqw 12cqw -7cqw rgba(40,70,110,.4)">${MARK(14)}</div></div>
        <p style="position:absolute;left:10cqw;right:10cqw;bottom:12cqw;text-align:center;font-size:4.6cqw;line-height:1.3;color:#27425F">A new standard for financial control, meet Runo.</p>` },
      { id: 'setup', fmt: 'st', title: 'Financial control starts with a single setup.', render: (u) => `<div class="abs" style="background:#FAFAFA"></div>
        <h3 style="position:absolute;left:9cqw;right:9cqw;top:14cqw;font-size:11cqw;line-height:1.06;letter-spacing:-.04em;font-weight:400">Financial control starts with a single setup.</h3>
        <div style="position:absolute;left:0;right:0;bottom:0;height:62cqw">${barsSvg(u, 70, 100, (x) => .12 + .85 * Math.pow(Math.sin(x * Math.PI * .9), 1.5))}</div>` },
      { id: 'sel', fmt: 'li', title: '81% of financial workflows remain invisible', render: () => `<div style="position:absolute;left:4cqw;right:4cqw;top:5.4cqw;display:flex;justify-content:space-between;align-items:center;padding-bottom:3.6cqw;border-bottom:.2cqw solid #E7E8EB;font-size:1.9cqw"><span class="k" style="font-size:1.9cqw">// The measurable shift <i style="display:inline-block;width:.8cqw;height:.8cqw;background:var(--accent);margin-left:1cqw"></i></span><span style="background:#A7B8CD;color:#0B0B0C;padding:1.4cqw 1.8cqw;font-size:1.9cqw"><i style="display:inline-block;width:.7cqw;height:.7cqw;background:#fff;margin-right:1cqw"></i>New Standard</span></div>
        <div style="position:absolute;left:4cqw;bottom:6.4cqw;font-size:6.1cqw;line-height:1.3;letter-spacing:-.035em">81% of financial workflows<br>remain <span class="mk a">invisible</span><br><span class="mk b">outside your awareness</span></div>
        <p style="position:absolute;right:4cqw;bottom:6.4cqw;width:19cqw;font-size:1.3cqw;line-height:1.45;color:var(--ink-3);letter-spacing:-.01em">At this stage, Runo surface invisible system gaps and translate them into actionable clarity</p>` },
      { id: 'curve', fmt: 'li', title: '-60% operational friction', render: (u) => {
        const pts = [[0, 1], [.19, 1], [.43, .12], [.62, .5], [.78, .17], [.88, .1], [1, .07]], W = 1000, H = 250, n = 54, X0 = 40, X1 = 960;
        const f = (x) => lerp(pts, x, true);
        let d = ''; for (let i = 0; i <= 80; i++) { const x = i / 80; d += (i ? 'L' : 'M') + (X0 + x * (X1 - X0)).toFixed(1) + ' ' + (H - f(x) * (H - 16)).toFixed(1); }
        let bars = ''; for (let i = 0; i < n; i++) { const x = i / (n - 1), h = f(x) * (H - 16); bars += `<rect class="br" style="--i:${i}" x="${(X0 + x * (X1 - X0)).toFixed(1)}" y="${(H - h).toFixed(1)}" width="1.6" height="${h.toFixed(1)}" fill="${x < .22 ? '#F5B27A' : '#BAD5F3'}" opacity="${x < .22 ? .9 - x * 1.4 : .9}"/>`; }
        const dots = [0, .02, .04, .06, .08, .16, .18, .2, .56, .58, .6, .62, .64].map((x) => `<circle class="pop" cx="${(X0 + x * (X1 - X0)).toFixed(1)}" cy="${(H - f(x) * (H - 16)).toFixed(1)}" r="6" fill="#8FC1FB"/>`).join('');
        return `<p class="k" style="position:absolute;left:4.6cqw;top:4.6cqw;font-size:1.6cqw">Impact overview</p>
          <h3 style="position:absolute;left:4.6cqw;top:8.4cqw;font-size:3.6cqw;line-height:1.2;letter-spacing:-.03em;font-weight:400;right:6cqw">Reduce <span class="hl">operational friction,</span> unlock<br><span class="hl">financial clarity</span> across payments, and business accounts.</h3>
          <svg viewBox="0 0 ${W} ${H + 44}" style="position:absolute;left:0;right:0;bottom:2cqw;width:100cqw;height:30cqw" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
            <path d="M${X0} 0V${H}H${W - 20}" fill="none" stroke="#BAD5F3" stroke-width="1.6"/>${bars}<path class="dl" pathLength="1" d="${d}" fill="none" stroke="#BAD5F3" stroke-width="4" stroke-linejoin="round"/>${dots}
            <g class="pop"><rect x="${X0 + .62 * (X1 - X0) - 36}" y="${H - .5 * (H - 16) + 40}" width="72" height="32" rx="7" fill="#CFE0F8"/><text x="${X0 + .62 * (X1 - X0)}" y="${H - .5 * (H - 16) + 62}" text-anchor="middle" font-size="19" fill="#2F6FB8" font-family="inherit">-60%</text></g>
            ${['Intake', 'Setup', 'Accounts', 'Payments', 'Automation', 'Insights', 'Scale'].map((t, i) => `<text x="${X0 + 20 + i * 142}" y="${H + 30}" font-size="16" fill="#6B7280" text-anchor="middle" font-family="inherit">${t}</text>`).join('')}
            <text transform="translate(${X0 - 12} 175) rotate(-90)" font-size="15" fill="#6B7280" font-family="inherit">Operational friction</text></svg>
          <div style="position:absolute;right:9cqw;bottom:16cqw;width:5.4cqw;height:5.4cqw;border-radius:50%;background:#D7E6FA;color:#fff;display:grid;place-items:center">${MARK(2.4)}</div>`; } },
      { id: 'flags', fmt: 'li', title: 'Finance that moves with your business, worldwide', render: () => {
        const r1 = ['France', 'Spain', 'Brazil', 'Canada', 'Italy', 'India', 'Netherlands'], r2 = ['Greece', 'USA', 'Egypt', 'Mexico', 'Norway', 'Estonia', 'Germany'];
        const row = (a, cls, off) => `<div style="position:absolute;left:0;right:0;overflow:hidden;top:${off}cqw;height:8cqw"><div class="mq ${cls}" style="display:flex;gap:2cqw;width:max-content;${cls ? 'transform:translateX(-50%);' : ''}padding-left:${cls ? 0 : 2}cqw">${a.concat(a).map(flagPill).join('')}</div></div>`;
        return `<div class="abs" style="background:linear-gradient(180deg,#FAFAFA,#F2EFEA)"></div>
          <p class="k" style="position:absolute;left:0;right:0;top:5cqw;text-align:center;color:#2F6FB8;font-size:1.9cqw">International transfers</p>
          <h3 style="position:absolute;left:0;right:0;top:9.6cqw;text-align:center;font-size:4.4cqw;font-weight:400;letter-spacing:-.035em">Finance that moves with your business, worldwide</h3>${row(r1, '', 28)}${row(r2, 'rv', 38.6)}`; } },
      { id: 'cards', fmt: 'x', title: 'Designed for teams that manage money at scale', render: () => `<div class="abs" style="background:linear-gradient(135deg,#E8EEF8,#D6E4F6)"></div>
        <h3 style="position:absolute;left:6cqw;top:8cqw;width:36cqw;font-size:4.4cqw;line-height:1.12;font-weight:400;letter-spacing:-.035em">Designed for teams that manage money at scale</h3>
        <div class="fl" style="--d:0;position:absolute;left:44cqw;top:5cqw;width:32cqw;rotate:-8deg;filter:drop-shadow(0 2cqw 3cqw rgba(40,70,110,.25))">${Runo.card('ice')}</div>
        <div class="fl" style="--d:1;position:absolute;left:62cqw;top:24cqw;width:32cqw;rotate:7deg;filter:drop-shadow(0 2cqw 3cqw rgba(40,70,110,.25))">${Runo.card('sage')}</div>
        <div class="fl" style="--d:2;position:absolute;left:38cqw;top:32cqw;width:30cqw;rotate:-3deg;filter:drop-shadow(0 2cqw 3cqw rgba(40,70,110,.3))">${Runo.card('blue')}</div>` },
      { id: 'bars', fmt: 'x', title: '86.3% and 13.7%', render: (u) => {
        const base = 470, s = 340; let hs = ''; for (let i = 0; i < 44; i++) hs += `<rect class="br" style="--i:${i}" x="${456 + i * 7.4}" y="${base - .137 * s}" width="1.3" height="${.137 * s}" fill="#BAD5F3"/>`;
        return `<div class="abs" style="background:#FAFAFA"></div>
          <p style="position:absolute;left:4cqw;top:5cqw;width:26cqw;font-size:1.9cqw;line-height:1.3;color:var(--ink-3)">Automation replaces fragmented decision-making across financial systems</p>
          <svg viewBox="0 0 800 560" style="position:absolute;left:1cqw;top:8cqw;width:62cqw;height:43.4cqw" aria-hidden="true">
            <rect class="grow" x="120" y="${base - .863 * s}" width="330" height="${.863 * s}" fill="#F2F3F5"/><path d="M120 ${base - .863 * s}H450" stroke="#7DA0D0" stroke-width="2"/><rect class="pop" x="279" y="${base - .863 * s - 5}" width="10" height="10" fill="#7DA0D0"/>
            ${hs}<path d="M450 ${base - .137 * s}H790" stroke="#7DA0D0" stroke-width="2"/><rect class="pop" x="615" y="${base - .137 * s - 5}" width="10" height="10" fill="#7DA0D0"/>
            <path d="M100 ${base}H800" stroke="#BAD5F3" stroke-width="2"/>
            <text x="285" y="${base - .863 * s - 22}" text-anchor="middle" font-size="40" fill="#000" font-family="inherit">86.3%</text><text x="620" y="${base - .137 * s - 22}" text-anchor="middle" font-size="40" fill="#000" font-family="inherit">13.7%</text>
            <text x="285" y="${base + 40}" text-anchor="middle" font-size="22" fill="#6B7280" font-family="inherit">Adaptive Systems</text><text x="620" y="${base + 40}" text-anchor="middle" font-size="22" fill="#6B7280" font-family="inherit">Static Operations</text>
            <text transform="translate(60 ${base - 60}) rotate(-90)" font-size="20" fill="#6B7280" font-family="inherit">System Inefficiency</text></svg>
          <div style="position:absolute;right:3cqw;top:7cqw;bottom:5cqw;width:30cqw;background:#F0EFEC"><div style="position:absolute;left:0;top:-3.6cqw;background:#FAFAFA;padding:1cqw 2cqw 1cqw 1.6cqw;font-size:1.7cqw;color:var(--ink-3)"><span style="display:inline-block;width:.7cqw;height:.7cqw;background:#B4B8BF;margin-right:1cqw"></span>New Standard</div>
            <div style="position:absolute;left:2.4cqw;right:2cqw;bottom:2.6cqw"><div class="num" style="font-size:7.6cqw;line-height:1;letter-spacing:-.05em"><span data-cnt="86.3" data-dec="1" data-suf="%">86.3%</span></div><p style="font-size:1.9cqw;line-height:1.35;margin-top:2cqw"><span style="color:var(--ink-3)">Of financial operations remain</span><br>dependent on outdated workflows, limiting speed and clarity.</p></div></div>`; } },
      { id: 'ask', fmt: 'x', title: 'How can I assist with your finances today?', render: () => `<div class="abs" style="background:linear-gradient(180deg,#DDE6F3,#EEF1F7)"></div>
        <h3 style="position:absolute;left:0;right:0;top:15cqw;text-align:center;font-size:3.6cqw;font-weight:400;letter-spacing:-.03em">How can I assist with your finances today?</h3>
        <div style="position:absolute;left:50%;top:25cqw;width:46cqw;translate:-50% 0">${prompt('Add this invoice to my accounts|Measure our market risk').replace(/3\.4cqw/, '2.6cqw')}</div>` },
    ];

    /* ---------- play / rest hooks ---------- */
    const hooks = {
      start(pc) {
        pc._t = []; pc._r = [];
        $$('[data-cnt]', pc).forEach((el) => {
          const to = +el.dataset.cnt, d = +(el.dataset.dec || 0), pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = performance.now();
          const tick = (t) => { const p = Math.min(1, (t - t0 - 300) / 1400), e = p <= 0 ? 0 : 1 - Math.pow(1 - p, 4); el.textContent = pre + Runo.fmt(to * e, d) + suf; if (p < 1 && pc.classList.contains('play')) pc._r.push(requestAnimationFrame(tick)); };
          pc._r.push(requestAnimationFrame(tick));
        });
        $$('[data-typ]', pc).forEach((el) => {
          const list = el.dataset.typ.split('|'); let i = 0;
          const run = () => { const s = list[i++ % list.length]; let k = 0; const step = () => { if (!pc.classList.contains('play')) return; el.textContent = s.slice(0, ++k); if (k < s.length) pc._t.push(setTimeout(step, 45 + Math.random() * 45)); else pc._t.push(setTimeout(run, 2200)); }; step(); };
          run();
        });
      },
      stop(pc) {
        (pc._t || []).forEach(clearTimeout); (pc._r || []).forEach(cancelAnimationFrame);
        $$('[data-cnt]', pc).forEach((el) => { el.textContent = (el.dataset.pre || '') + Runo.fmt(+el.dataset.cnt, +(el.dataset.dec || 0)) + (el.dataset.suf || ''); });
        $$('[data-typ]', pc).forEach((el) => { el.textContent = el.dataset.typ.split('|')[0]; });
      },
    };
    const play = (pc) => { hooks.stop(pc); pc.classList.remove('play'); void pc.offsetWidth; pc.classList.add('play'); if (!Runo.reduce) hooks.start(pc); };
    const rest = (pc) => { pc.classList.remove('play'); hooks.stop(pc); };
    const map = new WeakMap();
    const io = new IntersectionObserver((es) => es.forEach((e) => { const pc = map.get(e.target); if (!pc) return; if (e.isIntersecting) { if (!pc.classList.contains('play')) play(pc); } else rest(pc); }), { threshold: 0.35 });
    const attach = (frame, pc) => {
      if (Runo.reduce) { pc.classList.add('play'); return; }
      map.set(frame, pc); io.observe(frame);
      frame.addEventListener('pointerenter', () => play(pc)); frame.addEventListener('focusin', () => { if (!pc.classList.contains('play')) play(pc); });
    };
    const makePC = (p, cls) => {
      const pc = document.createElement('div'); pc.className = 'pc ' + (cls || p.fmt); pc.innerHTML = p.render(U());
      $$('[data-orb-s]', pc).forEach((e) => Runo.orb(e, 300));
      return pc;
    };

    /* ---------- carousel controls (wall + lightbox) ---------- */
    const mountCarousel = (frame, pc, n) => {
      const track = $('.sl-track', pc); let i = 0, x0 = null; frame._mv = false;
      const bar = document.createElement('div'); bar.className = 'sc-car';
      bar.innerHTML = `<button type="button" aria-label="Previous slide">${I('arrow-left')}</button>${Array.from({ length: n }, () => '<i></i>').join('')}<button type="button" aria-label="Next slide">${I('arrow-right')}</button>`;
      const go = (d) => { i = Math.max(0, Math.min(n - 1, i + d)); track.style.setProperty('--i', i); $$('i', bar).forEach((e, k) => e.classList.toggle('on', k === i)); };
      const [pv, nx] = $$('button', bar); pv.addEventListener('click', () => go(-1)); nx.addEventListener('click', () => go(1)); go(0);
      frame.addEventListener('pointerdown', (e) => { x0 = e.clientX; frame._mv = false; });
      frame.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 8) frame._mv = true; if (dx < -40) go(1); else if (dx > 40) go(-1); });
      frame.append(bar);
    };

    /* ---------- wall ---------- */
    const wall = $('#social-wall'), tiles = [];
    POSTS.forEach((p, k) => {
      const t = document.createElement('figure'); t.className = 'sc-tile'; t.dataset.fmt = p.fmt;
      const fr = document.createElement('div'); fr.className = 'sc-frame';
      const b = document.createElement('button'); b.type = 'button'; b.className = 'sc-open'; b.setAttribute('aria-label', `Open preview: ${p.title}. ${label(p.fmt)}`);
      const pc = makePC(p); pc.setAttribute('aria-hidden', 'true'); b.append(pc); fr.append(b);
      if (p.carousel) mountCarousel(fr, pc, p.carousel);
      t.append(fr); t.insertAdjacentHTML('beforeend', `<figcaption><span>${label(p.fmt)}</span><span>${String(k + 1).padStart(2, '0')}</span></figcaption>`);
      b.addEventListener('click', () => { if (fr._mv) { fr._mv = false; return; } openLB(p, b); });
      wall.append(t); tiles.push(t); attach(fr, pc); p._tile = t;
    });

    /* ---------- filter ---------- */
    const FL = [['all', 'All'], ['ig', 'Instagram 4:5'], ['st', 'Story 9:16'], ['li', 'LinkedIn 1.91:1'], ['x', 'X 16:9']];
    const fb = $('#social-filter');
    fb.innerHTML = FL.map(([k, t], i) => `<button type="button" data-f="${k}" aria-pressed="${i === 0}">${t}</button>`).join('') + '<span class="sc-count" id="social-count" role="status"></span>';
    const applyF = (k) => { let c = 0; tiles.forEach((t) => { const show = k === 'all' || t.dataset.fmt === k; t.hidden = !show; if (show) c++; }); $('#social-count').textContent = `${c} ${c === 1 ? 'post' : 'posts'}`; };
    fb.addEventListener('click', (e) => { const b = e.target.closest('button[data-f]'); if (!b) return; $$('button[data-f]', fb).forEach((x) => x.setAttribute('aria-pressed', x === b)); applyF(b.dataset.f); });
    applyF('all');

    /* ---------- lightbox ---------- */
    const lb = document.createElement('div'); lb.className = 'sc-lb'; lb.id = 'social-lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Post preview');
    lb.innerHTML = `<div class="sc-lb-back"></div><div class="sc-lb-card"><div class="sc-lb-h"><span class="appicon">${Runo.mark()}</span><b>runo.finance</b>${I('dots')}</div><div class="sc-lb-st" id="social-lbst"></div>
      <div class="sc-lb-f"><div class="ac" aria-hidden="true">${I('swap')}${I('doc')}${I('upload')}${I('clip')}</div><p id="social-lbcap"></p></div></div>
      <button type="button" class="sc-lb-btn sc-lb-x" aria-label="Close preview">${I('close')}</button><button type="button" class="sc-lb-btn sc-lb-p" aria-label="Previous post">${I('arrow-left')}</button><button type="button" class="sc-lb-btn sc-lb-n" aria-label="Next post">${I('arrow-right')}</button>`;
    root.append(lb);
    let cur = null, opener = null;
    const fill = (p) => {
      cur = p; const st = $('#social-lbst', lb); st.innerHTML = ''; st.style.setProperty('--arn', FM[p.fmt].ar);
      const pc = makePC(p); st.append(pc); if (p.carousel) mountCarousel(st, pc, p.carousel);
      $('#social-lbcap', lb).textContent = `${p.title} · ${label(p.fmt)}`; lb.setAttribute('aria-label', `Post preview: ${p.title}`);
      play(pc);
    };
    const vis = () => POSTS.filter((p) => !p._tile.hidden);
    const nav = (d) => { const v = vis(), i = v.indexOf(cur); if (!v.length) return; fill(v[(i + d + v.length) % v.length]); };
    function openLB(p, from) { opener = from; fill(p); lb.classList.add('open'); setTimeout(() => $('.sc-lb-x', lb).focus(), 60); }
    const closeLB = () => { lb.classList.remove('open'); $('#social-lbst', lb).innerHTML = ''; if (opener) opener.focus({ preventScroll: true }); };
    $('.sc-lb-x', lb).addEventListener('click', closeLB); $('.sc-lb-back', lb).addEventListener('click', closeLB);
    $('.sc-lb-p', lb).addEventListener('click', () => nav(-1)); $('.sc-lb-n', lb).addEventListener('click', () => nav(1));
    env.on(document, 'keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') { e.stopPropagation(); closeLB(); }
      else if (e.key === 'ArrowRight' && !e.shiftKey && !/BUTTON/.test(document.activeElement.tagName)) nav(1);
      else if (e.key === 'ArrowLeft' && !e.shiftKey && !/BUTTON/.test(document.activeElement.tagName)) nav(-1);
      else if (e.key === 'Tab') {
        const f = $$('button', lb).filter((b) => b.getClientRects().length); if (!f.length) return;
        const a = document.activeElement, first = f[0], last = f[f.length - 1];
        if (!lb.contains(a)) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
      }
    }, true);

    /* ---------- profile grid (3 × 3) ---------- */
    const by = (id) => POSTS.find((p) => p.id === id);
    const pg = $('#social-pgrid');
    ['control', 'stat', 'assist', 'tags', 'coins', 'p74', 'logo', 'car', 'model'].forEach((id) => {
      const p = by(id), c = document.createElement('div'); c.className = 'sc-cell' + (p.fmt === 'st' ? ' crop' : ''); c.setAttribute('role', 'img'); c.setAttribute('aria-label', p.title);
      const pc = makePC(p); pc.setAttribute('aria-hidden', 'true'); if (p.carousel) { $$('.sl:not(:first-child)', pc).forEach((s) => s.remove()); }
      c.append(pc); pg.append(c); attach(c, pc);
    });

    /* ---------- highlight covers ---------- */
    const COV = [['Brand', 'background:linear-gradient(180deg,#A9C7EE,#F3F5F7)', Runo.mark()], ['Product', '', I('chart'), 'steel-grad'], ['Copilot', 'background:#CCDFFB', ''], ['Payments', 'background:var(--mint)', I('globe')],
      ['Cards', 'background:#F0EFEC', I('card')], ['Impact', 'background:#fff', '']];
    const cv = $('#social-cov');
    cv.innerHTML = COV.map(([t, st, ic, cls], i) => `<li><div class="rg"><div class="in ${cls || ''}" style="${st}">${i === 2 ? '<span data-orb-c style="width:150%;display:block"></span>' : i === 5 ? '<span data-bars-c style="width:100%;display:block;padding:0 12px"></span>' : ic}</div></div>${t}</li>`).join('');
    Runo.orb($('[data-orb-c]', cv), 60); $('[data-orb-c]', cv).firstElementChild.setAttribute('style', 'width:100%;height:auto;overflow:visible');
    const bc = $('[data-bars-c]', cv); Runo.bars(bc, { n: 12, h: 40, px: 40, gap: 4, w: 1.4, color: '#4FA3F2', color2: '#BAD5F3', heights: (i, n) => .2 + .75 * Math.abs(Math.sin(i / 2.4)), label: 'Impact' }); bc.classList.add('in');

    /* ---------- avatars + banners ---------- */
    const BAN = [
      ['LinkedIn cover · 1584 × 396 px', 'bn4', (u) => `<div class="abs" style="background:linear-gradient(180deg,#A9C7EE 0%,#CFE0F5 55%,#F3F5F7 100%)"></div>${arcs(u, 86, 70, .8)}
        <div style="position:absolute;left:5cqw;top:50%;translate:0 -50%;display:flex;align-items:center;gap:2cqw;font-size:3.2cqw;color:#27425F;letter-spacing:-.025em"><span style="color:#000">${MARK(3.6)}</span>A new standard for financial control, meet Runo.</div>
        <div style="position:absolute;right:4cqw;bottom:0;width:30cqw;height:11cqw">${barsSvg(u, 64, 60, (x) => .15 + .8 * Math.pow(x, 1.2) * (.8 + .2 * Math.sin(x * 20)), '#fff', '#fff')}</div>`],
      ['X header · 1500 × 500 px', 'bn3', (u) => `<div class="abs mist"></div>${arcs(u, 78, 50, .55)}
        <div style="position:absolute;left:6cqw;top:50%;translate:0 -50%;font-size:10cqw;letter-spacing:-.035em;color:#fff;text-shadow:0 .4cqw 2cqw rgba(80,110,150,.3)">Runo.</div>`],
    ];
    $('#social-ban').innerHTML = '';
    BAN.forEach(([cap, cls, fn]) => {
      const f = document.createElement('figure'), fr = document.createElement('div'); fr.className = 'sc-frame'; fr.style.borderRadius = '16px';
      const pc = makePC({ render: fn, fmt: cls }, cls); pc.setAttribute('role', 'img'); pc.setAttribute('aria-label', cap); fr.append(pc); f.append(fr); f.insertAdjacentHTML('beforeend', `<figcaption class="small">${cap}</figcaption>`);
      $('#social-ban').append(f); attach(fr, pc);
    });
    Runo.scan(root);
  });
}
