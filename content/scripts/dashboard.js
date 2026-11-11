/* Generated from src/pages/dashboard.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('dashboard', function (root) {
    const R = Runo, $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const I = R.icon, esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    const rng = (seed) => { let a = seed; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
    const $m = (n, d = 0) => '$' + R.fmt(n, d);
    const cnt = (v, o = {}) => `<span data-count="${v}" data-decimals="${o.d || 0}" data-prefix="${o.pre || ''}" data-suffix="${o.suf || ''}">${(o.pre || '') + R.fmt(v, o.d || 0) + (o.suf || '')}</span>`;
    const app = $('#dashboard-app'), stage = $('#dashboard-stage'), tip = $('#dashboard-tip');
    const NAMES = ['Overview', 'Cash Flow', 'Control', 'Operations', 'Payments', 'Scenario modelling', 'Copilot'];
    const SKY = [1, 0, 1, 0, 0, 0, 0];
    const TABMAP = { 0: 0, 1: 0, 4: 1, 3: 2, 2: 3 }; /* m01: Overview keeps the underline under Cash Flow */
    const S = { cur: -1, acct: 'Individual account ****1116', filter: 'ALL', runway: 'Forecast', sort: { k: 'metric', d: 1 }, opsFilter: null, method: 'BANK TRANSFER',
      country: 'France', approve: {}, pause: {}, amount: 10000, ptab: 'Runway', base: true, target: 0, shown: {}, attach: true, chat: [] };
  
    /* ================= data ================= */
    const OPS = [
      { id: 'stripe', total: 1200, rec: 'Stripe Ltd', type: 'Payout', due: 'Mar 07', freq: 'One-time', st: 'Scheduled' },
      { id: 'supplier', total: 1850, rec: 'Supplier Ltd', type: 'Invoice payment', due: 'Mar 08', freq: 'One-time', st: 'Scheduled' },
      { id: 'luna', total: 680, rec: 'Luna Ltd', type: 'Invoice payment', due: 'Mar 10', freq: 'Monthly', st: 'Scheduled' },
      { id: 'contractor', total: 3000, rec: 'Contractor', type: 'Transfer', due: 'Mar 10', freq: 'One-time', st: 'Scheduled' },
      { id: 'gads', total: 980, rec: 'Google Ads', type: 'Payment', due: 'Mar 11', freq: 'Weekly', st: 'Scheduled' },
      { id: 'payroll', total: 2400, rec: 'Payroll', type: 'Batch payout', due: 'Mar 15', freq: 'Monthly', st: 'Scheduled' },
    ];
    const ACTS = [
      { day: 'Yesterday', sub: '', items: [
        { cat: 'Internal transfer', t: 'Funds added', amt: '5,466.82 EUR', ic: 'download', ch: 'BANK TRANSFER' },
        { cat: 'Incoming transfer', t: 'Client payment', amt: '8,450.00 EUR', ic: 'sw', ch: 'SEPA' },
        { cat: 'Internal allocation', t: 'Funds moved', amt: '5,200.00 EUR', ic: 'sw', ch: 'BANK TRANSFER' } ] },
      { day: 'Monday,', sub: '5th of March', items: [
        { cat: 'Vendor payout', t: 'Stripe fees', amt: '1,180.00 EUR', ic: 'upload', ch: 'CARDS' },
        { cat: 'Outgoing transfer', t: 'Contractor payout', amt: '3,000.00 EUR', ic: 'sw', ch: 'SWIFT' } ] },
      { day: 'Thursday,', sub: '1st of March', items: [
        { cat: 'Subscription payment', t: 'AWS infrastructure', amt: '640.00 EUR', ic: 'sw', ch: 'SUBSCRIPTIONS' } ] },
    ];
    const ACCTS = [['Reserve account **1234', 25000, '3.7%'], ['Treasury account **9134', 42800.5, '4.1%'], ['Reserve account **5672', 53000, '5.1%']];
    const METRICS = [
      { metric: 'Cash runway', sub: 'Liquidity health', status: 'Optimal', val: 8.2, vt: '8.2 months', hi: '12.0', lo: '10', upd: '2025-03-09', ut: 'March 09, 2025', pos: .5 },
      { metric: 'Burn rate', sub: 'Spending velocity', status: 'Healthy', val: 12400, vt: '$12,400 / month', hi: '30k', lo: '5k', upd: '2025-03-09', ut: 'March 09, 2025', pos: .45 },
      { metric: 'Liquidity ratio', sub: 'Balance coverage', status: 'Optimal', val: 2.4, vt: '2.4', hi: '35', lo: '10', upd: '2025-03-09', ut: 'March 09, 2025', pos: .5 },
      { metric: 'Success rate', sub: 'Transaction reliability', status: 'Optimal', val: 98.6, vt: '98.6%', hi: '99%', lo: '90%', upd: '2025-03-06', ut: 'March 06, 2025', pos: .45 },
    ];
    const PENDING = [['Pending payouts', 14020, 'user'], ['Invoices awaiting approval', 9380, 'doc'], ['Recurring subscriptions', 2560, 'swap'], ['Operational fees', 160, 'wallet']];
    const DESC = 'Runway projection reflects how many months your business can operate with the current cash balance. It is calculated using your average burn rate, committed costs, and upcoming scheduled payments over the next period.';
  
    /* ================= shared helpers ================= */
    function hair(o) {
      const n = o.n, h = o.h, gap = o.gap || 4, w = o.w || 1.4, id = R.uid('dashboard-g');
      const grads = o.grads || [[o.c1, o.c2]];
      const defs = grads.map((g, k) => `<linearGradient id="${id}${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset="1" stop-color="${g[1]}" stop-opacity="${g[2] == null ? .4 : g[2]}"/></linearGradient>`).join('');
      let r = '';
      for (let i = 0; i < n; i++) {
        const hh = Math.max(.05, o.hs(i, n)) * h, gi = o.gi ? o.gi(i, n) : 0;
        r += `<g class="hbg" data-tip="${esc(o.tip ? o.tip(i, n) : '')}"><rect class="bar" style="--i:${i}" x="${i * gap}" y="${(h - hh).toFixed(1)}" width="${w}" height="${hh.toFixed(1)}" fill="url(#${id}${gi})"/><rect class="hit" x="${(i * gap - (gap - w) / 2).toFixed(1)}" y="0" width="${gap}" height="${h}"/></g>`;
      }
      return `<svg viewBox="0 0 ${n * gap} ${h}" preserveAspectRatio="none" width="100%" height="${o.px || h}" role="img" aria-label="${esc(o.label)}"><defs>${defs}</defs>${r}</svg>`;
    }
    const noise = (seed, lo = .3) => { const r = rng(seed), arr = []; let v = .6; for (let i = 0; i < 400; i++) { v += (r() - .5) * .35; v = Math.min(1, Math.max(lo, v)); arr.push(v); } return arr; };
    function ctrls(go) { return `<div class="d-ctrl"><button type="button" class="icon-btn" aria-label="More options" data-toast="More options">${I('dots')}</button><button type="button" class="icon-btn" aria-label="Open details" ${go != null ? `data-go="${go}"` : 'data-toast="Open details"'}>${I('arrow-ne')}</button></div>`; }
    function acctRow(cls) {
      return `<div class="d-row ${cls || ''}"><div class="d-acct" data-drop><button type="button" aria-haspopup="true" aria-expanded="false"><span data-acct>${S.acct}</span>${I('caret')}</button>
        <div class="d-drop" role="menu" aria-label="Switch account">${['Individual account ****1116'].concat(ACCTS.map((a) => a[0])).map((a) => `<button type="button" role="menuitem" data-acct-pick="${a}" ${a === S.acct ? 'aria-current="true"' : ''}>${a}</button>`).join('')}</div></div>
        ${cls === 'ctl' ? '' : '<button type="button" class="btn btn-steel d-btn" data-go="4">Transfer funds</button>'}</div>`;
    }
    const flag = (c) => {
      const rc = (x, y, w, h, f) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}"/>`;
      const V = (a) => a.map((f, i) => rc(i * 30 / a.length, 0, 30 / a.length + .1, 20, f)).join(''), H = (a) => a.map((f, i) => rc(0, i * 20 / a.length, 30, 20 / a.length + .1, f)).join('');
      const F = {
        France: () => V(['#1B3F9E', '#fff', '#E23B3B']), Italy: () => V(['#1F9A55', '#fff', '#D6303A']), Germany: () => H(['#111', '#DD2A2A', '#FFCE00']),
        Netherlands: () => H(['#C8363F', '#fff', '#2B4C9B']), Egypt: () => H(['#CE1126', '#fff', '#111']), Estonia: () => H(['#2F7DD1', '#111', '#fff']),
        Spain: () => rc(0, 0, 30, 20, '#C8333A') + rc(0, 5, 30, 10, '#F5C518'), Canada: () => rc(0, 0, 30, 20, '#fff') + rc(0, 0, 7.5, 20, '#D8362E') + rc(22.5, 0, 7.5, 20, '#D8362E') + '<path d="M15 4l2 4 3-1-1.500 4 2 .5-3.500 3 .5 2h-5l.5-2L9.500 11.500l2-.5L10 7l3 1z" fill="#D8362E"/>',
        Brazil: () => rc(0, 0, 30, 20, '#1E9E4E') + '<path d="M15 3l11 7-11 7L4 10z" fill="#F7D117"/><circle cx="15" cy="10" r="3.600" fill="#2A4DA0"/>',
        India: () => H(['#F0922F', '#fff', '#1F9A55']) + '<circle cx="15" cy="10" r="2.600" fill="none" stroke="#2A3F8F" stroke-width=".8"/>',
        Mexico: () => V(['#1F8A4C', '#fff', '#C8333A']) + '<circle cx="15" cy="10" r="2.200" fill="#9B7A3C"/>',
        Norway: () => rc(0, 0, 30, 20, '#C8333A') + rc(8, 0, 6, 20, '#fff') + rc(0, 7, 30, 6, '#fff') + rc(9.500, 0, 3, 20, '#233E86') + rc(0, 8.500, 30, 3, '#233E86'),
        Greece: () => { let s = ''; for (let i = 0; i < 9; i++) s += rc(0, i * 20 / 9, 30, 20 / 9 + .05, i % 2 ? '#fff' : '#2E64B5'); return s + rc(0, 0, 11.100, 11.100, '#2E64B5') + rc(4.500, 0, 2.200, 11.100, '#fff') + rc(0, 4.500, 11.100, 2.200, '#fff'); },
        USA: () => { let s = ''; for (let i = 0; i < 7; i++) s += rc(0, i * 20 / 7, 30, 20 / 7 + .05, i % 2 ? '#fff' : '#C8333A'); return s + rc(0, 0, 13, 10.800, '#2A3F8F'); },
      };
      return `<svg class="flag" viewBox="0 0 30 20" aria-hidden="true" preserveAspectRatio="none">${F[c]()}</svg>`;
    };
  
    /* ---- tooltips ---- */
    const hideTip = () => tip.classList.remove('show');
    const showTip = (t, x, y) => { tip.textContent = t; tip.classList.add('show'); const w = tip.offsetWidth; tip.style.left = Math.max(8, Math.min(innerWidth - w - 8, x + 12)) + 'px'; tip.style.top = Math.max(8, y - 38) + 'px'; };
    app.addEventListener('pointermove', (e) => { const t = e.target.closest && e.target.closest('[data-tip]'); const v = t && t.getAttribute('data-tip'); v ? showTip(v, e.clientX, e.clientY) : hideTip(); });
    app.addEventListener('pointerleave', hideTip);
    app.addEventListener('focusin', (e) => { const t = e.target.closest && e.target.closest('[data-tip]'); if (t && t.getAttribute('data-tip')) { const b = t.getBoundingClientRect(); showTip(t.getAttribute('data-tip'), b.left + b.width / 2 - 12, b.top); } });
    app.addEventListener('focusout', hideTip);
  
    /* ---- confirm toast ---- */
    const cf = $('#dashboard-confirm'); let cfFn = null, cfT;
    function confirmToast(msg, ok) { $('span', cf).textContent = msg; cfFn = ok; cf.classList.add('show'); clearTimeout(cfT); cfT = setTimeout(closeConfirm, 7000); }
    function closeConfirm() { cf.classList.remove('show'); cfFn = null; }
    cf.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; const fn = cfFn; closeConfirm(); if (b.dataset.act === 'yes' && fn) fn(); });
  
    /* ---- dropdowns ---- */
    let openDrop = null;
    function setDrop(wrap, v) {
      const b = $('button', wrap), m = $('.d-menu,.d-drop', wrap);
      if (v && openDrop && openDrop !== wrap) setDrop(openDrop, false);
      wrap.classList.toggle('open', v); b.setAttribute('aria-expanded', v); openDrop = v ? wrap : (openDrop === wrap ? null : openDrop);
      if (v) { const f = $('button[aria-current]', m) || $('button', m); setTimeout(() => f && f.focus({ preventScroll: true }), 30); }
    }
    function bindDrop(wrap) {
      const b = $('button', wrap), m = $('.d-menu,.d-drop', wrap);
      b.addEventListener('click', (e) => { e.stopPropagation(); setDrop(wrap, !wrap.classList.contains('open')); });
      m.addEventListener('keydown', (e) => {
        const items = $$('button', m), i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      });
    }
    env.on(document, 'click', (e) => { if (openDrop && !openDrop.contains(e.target)) setDrop(openDrop, false); });
    env.on(document, 'keydown', (e) => {
      if (!root.classList.contains('is-active')) return;
      if (e.key === 'Escape') { if (openDrop) { const w = openDrop; setDrop(w, false); $('button', w).focus(); } closeConfirm(); return; }
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (/^[1-7]$/.test(e.key)) go(+e.key - 1);
    });
  
    /* ---- tablist arrow keys ---- */
    function tabKeys(list, sel) {
      list.addEventListener('keydown', (e) => {
        const t = $$(sel, list), i = t.indexOf(document.activeElement); if (i < 0) return;
        let j = -1; if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % t.length; if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + t.length) % t.length;
        if (e.key === 'Home') j = 0; if (e.key === 'End') j = t.length - 1;
        if (j >= 0) { e.preventDefault(); t[j].focus(); t[j].click(); }
      });
    }
  
    /* ================= chrome: sky, rail, menu, tab ink ================= */
    (function sky() {
      let rings = '';
      [[110, '1 7', 0], [170, '', 1], [240, '3 9', 0], [320, '', 1], [410, '2 14', 0], [500, '', 1]].forEach(([r, d, rev], i) => {
        const len = 2 * Math.PI * r, arc = [.22, .3, .18, .26, .2, .15][i];
        rings += `<circle class="ring ${rev ? 'r' : ''}" cx="1180" cy="280" r="${r}" fill="none" stroke="#fff" stroke-opacity="${.7 - i * .06}" stroke-width="1" stroke-dasharray="${(len * arc).toFixed(0)} ${(len * (1 - arc)).toFixed(0)}"/>`;
        rings += `<circle class="ring ${rev ? '' : 'r'}" cx="1180" cy="280" r="${r + 28}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1" stroke-dasharray="${(len * .12).toFixed(0)} ${(len * .88).toFixed(0)}"/>`;
      });
      $('.d-sky').innerHTML = `<svg viewBox="0 0 1920 390" preserveAspectRatio="xMidYMin slice" aria-hidden="true">${rings}</svg>`;
    })();
    const TH = [
      { sky: 1, r: [[8, 34, 24, 20, '#fff'], [36, 34, 26, 20, '#fff'], [66, 34, 22, 20, '#fff'], [14, 10, 34, 5, '#fff', .6]] },
      { r: [[8, 8, 16, 8, '#F0F1F3'], [30, 8, 16, 8, '#F0F1F3'], [52, 8, 16, 8, '#F0F1F3'], [8, 22, 56, 10, '#BAD5F3'], [8, 36, 56, 16, '#F4F2EC'], [70, 8, 20, 44, '#F4F2EC']] },
      { sky: 1, r: [[8, 34, 20, 20, '#fff'], [32, 34, 20, 20, '#EEF1F5'], [56, 34, 32, 20, '#fff'], [14, 10, 40, 5, '#fff', .6]] },
      { r: [[8, 8, 18, 14, '#fff'], [8, 26, 18, 26, '#F0F1F3'], [30, 8, 24, 14, '#CFE0F8'], [58, 8, 30, 14, '#F0F1F3'], [30, 26, 24, 26, '#BAD5F3'], [58, 26, 30, 26, '#fff']] },
      { r: [[8, 8, 50, 44, '#fff'], [62, 8, 26, 10, '#F0F1F3'], [62, 22, 26, 10, '#F0F1F3'], [62, 36, 26, 10, '#F0F1F3'], [14, 14, 38, 6, '#F0F1F3'], [14, 26, 12, 8, '#BAD5F3']] },
      { r: [[24, 8, 48, 5, '#222'], [34, 18, 28, 4, '#bbb'], [26, 28, 44, 26, '#fff'], [30, 34, 36, 3, '#E9F8F4'], [30, 44, 36, 6, '#CFE0F8']] },
      { r: [[8, 8, 56, 44, '#DCE6F4'], [18, 30, 36, 12, '#fff'], [68, 8, 20, 44, '#fff'], [32, 14, 8, 8, '#BAD5F3']] },
    ];
    $('#dashboard-rail').innerHTML = NAMES.map((n, i) => {
      const t = TH[i];
      return `<button type="button" role="tab" id="dashboard-t${i}" aria-selected="false" aria-controls="dashboard-stage" tabindex="-1" data-go="${i}"><svg class="th" viewBox="0 0 96 60" role="img" aria-label="${n} thumbnail">${t.sky ? '<rect width="96" height="60" fill="#BFD4F0"/><rect y="30" width="96" height="30" fill="#EEF1F6"/>' : ''}${t.r.map((r) => `<rect x="${r[0]}" y="${r[1]}" width="${r[2]}" height="${r[3]}" rx="3" fill="${r[4]}" ${r[5] ? `opacity="${r[5]}"` : ''}/>`).join('')}</svg><span class="tn"><b>0${i + 1}</b>${n}</span></button>`;
    }).join('');
    tabKeys($('#dashboard-rail'), 'button');
    $('#dashboard-menu').innerHTML = NAMES.map((n, i) => `<button type="button" role="menuitem" data-go="${i}"><b>0${i + 1}</b>${n}</button>`).join('');
    bindDrop($('#dashboard-menuwrap'));
    const ink = $('.d-ink');
    function moveInk() {
      const bs = $$('#dashboard-tabs button'), i = TABMAP[S.cur]; bs.forEach((b, k) => k === i ? b.setAttribute('aria-current', 'page') : b.removeAttribute('aria-current'));
      if (i == null) { ink.style.opacity = 0; return; }
      const b = bs[i]; ink.style.opacity = 1; ink.style.width = b.offsetWidth + 'px'; ink.style.transform = `translateX(${b.offsetLeft}px)`;
      b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    addEventListener('resize', () => root.classList.contains('is-active') && moveInk());
  
    /* ================= router ================= */
    let token = 0;
    function go(n) {
      n = (n + 7) % 7; if (n === S.cur) return;
      const t = ++token; setDrop(openDrop || $('#dashboard-menuwrap'), false); closeConfirm(); hideTip();
      const apply = () => {
        if (t !== token) return;
        S.cur = n; app.dataset.sky = SKY[n]; stage.classList.remove('is-out', 'is-in');
        stage.innerHTML = ''; SCREENS[n](); R.scan(stage);
        void stage.offsetWidth; stage.classList.add('is-in');
        $$('#dashboard-rail button').forEach((b, k) => { b.setAttribute('aria-selected', k === n); b.tabIndex = k === n ? 0 : -1; });
        $$('#dashboard-menu button').forEach((b, k) => k === n ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current'));
        stage.setAttribute('aria-labelledby', 'dashboard-t' + n); moveInk();
      };
      if (S.cur < 0 || R.reduce) apply(); else { stage.classList.add('is-out'); setTimeout(apply, 170); }
    }
    root.addEventListener('click', (e) => {
      const g = e.target.closest('[data-go]'); if (g && root.contains(g)) { go(+g.dataset.go); return; }
      const ts = e.target.closest('[data-toast]'); if (ts) R.toast(ts.dataset.toast);
    });
    root.addEventListener('click', (e) => {
      const p = e.target.closest('[data-acct-pick]'); if (!p) return;
      S.acct = p.dataset.acctPick; $$('[data-acct]').forEach((x) => (x.textContent = S.acct));
      $$('[data-acct-pick]').forEach((b) => b.dataset.acctPick === S.acct ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current'));
      if (openDrop) { const w = openDrop; setDrop(w, false); $('button', w).focus(); } R.toast('Switched to ' + S.acct);
    });
  
    /* ================= 01 Overview ================= */
    function renderOverview() {
      const segs = [{ k: 'Card', p: 50, a: ['#CFE3F9', '#8FBCEB'] }, { k: 'Subscriptions', p: 20, a: ['#F6FFD8', '#CFE47A'] }, { k: 'Bank transfer', p: 30, a: ['#CEF5ED', '#78DCC4'] }];
      const rr = 84, C = 2 * Math.PI * rr; let start = -60, ci = '', labs = '';
      const id = R.uid('dashboard-d');
      const defs = segs.map((s, i) => `<linearGradient id="${id}${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${s.a[0]}"/><stop offset="1" stop-color="${s.a[1]}"/></linearGradient>`).join('');
      segs.forEach((s, i) => {
        const len = C * s.p / 100 - 5, mid = (start + s.p * 1.8) * Math.PI / 180;
        ci += `<circle class="seg" data-seg="${i}" tabindex="0" cx="100" cy="100" r="${rr}" stroke="url(#${id}${i})" stroke-dasharray="${len.toFixed(1)} ${C.toFixed(1)}" transform="rotate(${start - 90} 100 100)" style="--C:${C.toFixed(1)};--dl:${i * 160}ms" data-tip="${s.k} · ${s.p}% of $52,860 total spend" aria-label="${s.k} ${s.p} percent"/>`;
        labs += `<span class="pc" style="left:${50 + 44 * Math.sin(mid) * 1.0}%;top:${50 - 44 * Math.cos(mid)}%">${s.p}%</span>`;
        start += s.p * 3.6;
      });
      const months = ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY'], hs = [.22, .38, .62, .5, .85, .38];
      stage.innerHTML = `<div class="d-hero"><h2 class="d-welcome">Welcome back,<span>David Clark</span></h2></div>
        ${acctRow()}
        <div class="d-grid d-g1">
          <article class="d-card lift" aria-label="Spend controllability">
            <div class="d-top"><h3 class="d-lbl">Spend controllability</h3>${ctrls(1)}</div>
            <div class="d-donut" id="dashboard-donut"><svg viewBox="0 0 200 200" role="img" aria-label="Spend controllability donut: Card 50%, Subscriptions 20%, Bank transfer 30%"><defs>${defs}</defs><circle cx="100" cy="100" r="${rr}" fill="none" stroke="#F1F3F6" stroke-width="18"/>${ci}</svg>
              <div class="mid"><b>${cnt(52860, { pre: '$' })}</b><span class="d-lbl">Total spend</span></div>${labs}</div>
            <div class="d-leg"><button type="button" data-seg="2"><i style="background:#78DCC4"></i>Bank transfer</button><button type="button" data-seg="0"><i style="background:#8FBCEB"></i>Card</button><button type="button" data-seg="1"><i style="background:#CFE47A"></i>Subscriptions</button></div>
          </article>
          <article class="d-card lift" aria-label="Cash overview" style="padding-bottom:22px">
            <div class="d-cbars">${months.map((m, i) => `<div class="d-cb" tabindex="0" data-tip="${m} · cash movement, all accounts"><i style="height:${hs[i] * 100}%;--i:${i}"></i><span>${m}</span></div>`).join('')}</div>
            <div class="d-lbl d-mt">Cash overview</div>
            <p style="font-size:17px;line-height:1.25;margin:6px 0 14px;max-width:230px">Monitor your cash movement across all accounts</p>
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap"><span class="d-big" style="font-size:clamp(30px,3vw,42px)">${cnt(92345.67, { pre: '$', d: 2 })}</span><span class="d-chip up">${I('arrow-up')}+2.4%</span></div>
          </article>
          <article class="d-card" aria-label="Total balance">
            <div class="d-top"><div><div class="d-lbl">Total balance</div><div class="d-big" style="margin-top:4px">${cnt(92345.67, { pre: '$', d: 2 })}</div></div>${ctrls(1)}</div>
            <div class="d-rows">${ACCTS.map((a, i) => `<div class="d-bal"><span class="tile">${R.mark()}</span><div><b>${a[0]}</b><small>Yield optimization</small></div><div><b>${$m(a[1], 2)}</b></div><div><b>${a[2]}</b><small>APY</small></div><button type="button" class="btn btn-steel" data-top="${i}">Top Up</button></div>`).join('')}</div>
          </article>
        </div>`;
      const dn = $('#dashboard-donut'), setSeg = (i) => { dn.classList.toggle('hov', i != null); $$('circle.seg', dn).forEach((c) => c.classList.toggle('on', +c.dataset.seg === i)); $$('.d-leg button').forEach((b) => b.classList.toggle('on', +b.dataset.seg === i)); };
      $$('[data-seg]').forEach((el) => { el.addEventListener('pointerenter', () => setSeg(+el.dataset.seg)); el.addEventListener('pointerleave', () => setSeg(null)); el.addEventListener('focus', () => setSeg(+el.dataset.seg)); el.addEventListener('blur', () => setSeg(null)); });
      $$('[data-top]').forEach((b) => b.addEventListener('click', () => { const n = ACCTS[+b.dataset.top][0]; confirmToast('Top up ' + n + '?', () => R.toast('Top up requested for ' + n)); }));
      $$('[data-drop]').forEach(bindDrop);
    }
  
    /* ================= 02 Cash Flow ================= */
    function stripHTML(mode) {
      const n = 150, mk = [[.15, 'Core team', '$10,420'], [.52, 'Vendors', '$5,380'], [.72, 'Tools & infra', '$3,100']], r = noise(mode === 'Forecast' ? 11 : 29, .45);
      const seg = (i) => i < n * mk[0][0] ? -1 : i < n * mk[1][0] ? 0 : i < n * mk[2][0] ? 1 : 2;
      const hs = (i) => mode === 'Forecast' ? r[i] : (i > 104 ? .08 : r[i] * .85 + (i % 7 === 0 ? -.2 : 0));
      const svg = hair({ n, h: 46, gap: 4, w: 1.5, px: 46, label: 'Runway projection, ' + mode.toLowerCase(), grads: [['#2F6FB8', '#2F6FB8', .85], ['#4FA3F2', '#BAD5F3', .35]],
        gi: (i) => { const s = seg(i); if (s < 0) return 0; const base = [n * mk[0][0], n * mk[1][0], n * mk[2][0]][s], nx = [n * mk[1][0], n * mk[2][0], n][s]; return (i - base) / (nx - base) < .3 ? 0 : 1; },
        hs, tip: (i) => { const s = seg(i); return (s < 0 ? 'Runway · today' : mk[s][1] + ' · ' + mk[s][2]) + (mode === 'Actual' && i > 104 ? ' · not yet recorded' : ''); } });
      return `<div class="d-strip">${mk.map((m) => `<div class="d-mk" style="left:${m[0] * 100}%"><span>${m[1]}</span><b>${m[2]}</b></div>`).join('')}${svg}</div>`;
    }
    function actList() {
      const f = S.filter; let out = '', any = false;
      ACTS.forEach((g) => {
        const it = g.items.filter((x) => f === 'ALL' || x.ch === f); if (!it.length) return; any = true;
        out += `<div class="d-day-g"><div class="d-day">${g.day} <span>${g.sub}</span></div>${it.map((x) => `<div class="d-item"><span class="t">${x.ic === 'sw' ? `<svg class="d-sw" viewBox="0 0 26 14" aria-hidden="true"><rect width="26" height="14" rx="7" fill="#D5E3F5"/><circle cx="18.500" cy="7" r="5" fill="#6E8FB3"/></svg>` : I(x.ic)}</span><div><small>${x.cat}</small>${x.t}</div><em>${x.amt}</em></div>`).join('')}</div>`;
      });
      return any ? out : '<p class="d-empty">No activity in this channel.</p>';
    }
    function renderCashFlow() {
      const blocks = [['Contractor payouts', 8920, '#4FA3F2', '#BAD5F3', 3], ['Vendor invoices', 6740, '#19C2A0', '#CEF5ED', 7], ['Software & tools', 2560, '#C3E233', '#F6FFD8', 13]];
      const kp = [['Cash balance', 48320, '+3.2%'], ['Net flow', 6480, '-8%'], ['Monthly burn', 18900, '+4%']];
      const tabs = ['ALL', 'CARDS', 'BANK TRANSFER', 'SEPA', 'SWIFT', 'SUBSCRIPTIONS'];
      stage.innerHTML = `<div class="d-grid d-g2" style="padding-top:6px">
        <div style="min-width:0">
          <div class="d-kpis">${kp.map((k) => `<div class="d-kpi"><div class="d-lbl">${k[0]}</div><div class="d-big num">${cnt(k[1], { pre: '$' })}<span class="d-chip">${k[2]}</span></div></div>`).join('')}</div>
          <div class="d-blocks">${blocks.map((b, i) => `<div class="d-blk" style="--bc:${b[2]}"><div class="d-lbl">${b[0]}</div><div class="v num">${cnt(b[1], { pre: '$' })}</div><div data-blk="${i}"></div></div>`).join('')}</div>
          <div class="d-ftabs" role="tablist" aria-label="Filter activity by channel" id="dashboard-ftabs">${tabs.map((t) => `<button type="button" role="tab" aria-selected="${t === S.filter}" tabindex="${t === S.filter ? 0 : -1}" data-f="${t}">${t}${t === 'BANK TRANSFER' ? '<span class="dot" aria-hidden="true"></span>' : ''}</button>`).join('')}</div>
          <section class="d-run" aria-label="Runway projection">
            <div class="d-run-top"><div><h3 class="d-lbl" style="font-weight:400">Runway Projection</h3><div class="d-big" style="font-size:clamp(26px,2.4vw,34px);margin-top:4px">${cnt(4.6, { d: 1, suf: ' months' })}</div></div>
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><div class="d-seg" role="group" aria-label="Projection view">${['Forecast', 'Actual'].map((m) => `<button type="button" data-rw="${m}" aria-pressed="${m === S.runway}">${m}</button>`).join('')}</div>
                <button type="button" class="icon-btn" aria-label="Layers" data-toast="Layers">${I('layers')}</button><button type="button" class="icon-btn" aria-label="Download projection" data-toast="Download started">${I('download')}</button><button type="button" class="btn-go" aria-label="Open Scenario modelling" data-go="5">${I('arrow-ne')}</button></div></div>
            <div class="d-run-mid"><p>${DESC}</p><div class="d-run-fig"><div><span class="d-lbl">Current burn</span><b class="num">$18,900</b></div><div><span class="d-lbl">Committed</span><b class="num">$6,240</b></div></div></div>
            <div id="dashboard-strip">${stripHTML(S.runway)}</div>
          </section>
        </div>
        <aside aria-label="Recent activity"><div class="d-act-h"><h2 style="font-size:clamp(24px,2vw,30px);font-weight:400;letter-spacing:-.03em">Recent activity</h2><button type="button" class="d-link" data-toast="All activity">See all</button></div>
          <div class="d-act" id="dashboard-act" aria-live="polite">${actList()}</div></aside></div>`;
      blocks.forEach((b, i) => {
        const r = noise(40 + i * 9, .25), n = 70, sum = r.slice(0, n).reduce((a, c) => a + c, 0);
        $(`[data-blk="${i}"]`).innerHTML = hair({ n, h: 46, gap: 4, w: 1.4, px: 46, c1: b[2], c2: b[3], label: b[0] + ' by day', hs: (k) => r[k] * (i === 2 ? .8 : 1),
          tip: (k) => `${b[0]} · day ${k + 1} · ${$m(Math.round(b[1] * r[k] / sum))}` });
      });
      const ft = $('#dashboard-ftabs'); tabKeys(ft, 'button');
      ft.addEventListener('click', (e) => { const b = e.target.closest('[data-f]'); if (!b) return; S.filter = b.dataset.f; $$('button', ft).forEach((x) => { x.setAttribute('aria-selected', x === b); x.tabIndex = x === b ? 0 : -1; }); $('#dashboard-act').innerHTML = actList(); });
      $$('[data-rw]').forEach((b) => b.addEventListener('click', () => { S.runway = b.dataset.rw; $$('[data-rw]').forEach((x) => x.setAttribute('aria-pressed', x === b)); $('#dashboard-strip').innerHTML = stripHTML(S.runway); }));
    }
  
    /* ================= 03 Control ================= */
    function ctlTable() {
      const k = S.sort.k, d = S.sort.d, rows = METRICS.slice().sort((a, b) => { const x = k === 'metric' ? a.metric : k === 'status' ? a.status : k === 'value' ? a.val : a.upd, y = k === 'metric' ? b.metric : k === 'status' ? b.status : k === 'value' ? b.val : b.upd; return (x > y ? 1 : x < y ? -1 : 0) * d; });
      const th = (key, label) => `<th scope="col" aria-sort="${S.sort.k === key ? (d > 0 ? 'ascending' : 'descending') : 'none'}"><button type="button" data-sort="${key}">${label}<svg class="icon" style="width:11px;height:11px" aria-hidden="true" viewBox="0 0 16 16"><use href="#i-caret"/></svg></button></th>`;
      return `<table class="d-tbl"><thead><tr>${th('metric', 'Metric')}${th('status', 'Status')}<th scope="col">Value</th><th scope="col"><span class="sr-only">Range</span></th><th scope="col">Last updated</th></tr></thead><tbody>${rows.map((m, i) => `<tr class="bodyrow" style="--i:${i}"><td><div class="nm">${m.metric}</div><div class="sb">${m.sub}</div></td><td><span class="d-st"><i></i>${m.status}</span></td><td>${m.vt}</td>
        <td><svg class="d-rg" viewBox="0 0 160 40" width="150" height="38" role="img" aria-label="${m.metric} range ${m.lo} to ${m.hi}"><text x="0" y="9" font-size="9" fill="#6B7280">${m.hi}</text><text x="0" y="38" font-size="9" fill="#6B7280">${m.lo}</text><circle cx="28" cy="6" r="2.200" fill="#F08AA0"/><circle cx="28" cy="20" r="2.800" fill="#19C2A0"/><circle cx="28" cy="35" r="2.200" fill="#DDEB7A"/><line class="ln" pathLength="1" x1="36" y1="20" x2="156" y2="${(16 + m.pos * 4).toFixed(1)}" stroke="#19C2A0" stroke-width="2" stroke-linecap="round"/></svg></td><td>${m.ut}</td></tr>`).join('')}</tbody></table>`;
    }
    function renderControl() {
      const n = 44, r = noise(77, .12), inc = 14, mid = 30; let sIn = 0, sOut = 0; for (let i = 0; i < n; i++) i < inc ? (sIn += r[i]) : (sOut += r[i]);
      const gx = 4.4, gy = 3.4, rows = 32; let bg = '', cols = '';
      for (let c = 0; c < n; c++) for (let y = 0; y < rows; y++) bg += `M${(c * gx + 2).toFixed(1)} ${(y * gy + 2).toFixed(1)}h0`;
      for (let c = 0; c < n; c++) {
        const hgt = Math.max(2, Math.round(r[c] * (c < inc ? .6 : 1) * rows * .9)), col = c < inc ? '#19C2A0' : c < mid ? '#1B1C1F' : '#7FB0EA'; let d = '';
        for (let y = 0; y < hgt; y++) d += `M${(c * gx + 2).toFixed(1)} ${((rows - 1 - y) * gy + 2).toFixed(1)}h0`;
        const val = c < inc ? 'Incoming · ' + $m(Math.round(42100 * r[c] / sIn)) : 'Outgoing · ' + $m(Math.round(60740 * r[c] / sOut));
        cols += `<g class="col" style="--i:${c}" data-tip="${val}"><path d="${d}" stroke="${col}" stroke-width="2.3" stroke-linecap="round"/><rect x="${c * gx - .2}" y="0" width="${gx}" height="${rows * gy}" fill="transparent"/></g>`;
      }
      stage.innerHTML = `<div class="d-hero"><h2 class="d-ctl-title">Good morning Ellis,<br>here’s your control overview<br><span class="num">${cnt(122567.48, { d: 2 })}</span><span class="d-eur">€ EUR</span>under active management</h2></div>
        ${acctRow('ctl')}
        <div class="d-grid d-g3">
          <article class="d-card" aria-label="Outgoing activity"><div class="d-top"><div><div class="d-lbl">Outgoing activity</div><div class="d-big" style="margin-top:4px">${cnt(18640, { pre: '$' })}</div></div>${ctrls(3)}</div>
            <svg class="d-dots" viewBox="0 0 ${n * gx} ${rows * gy}" width="100%" role="img" aria-label="Incoming $42,100 versus outgoing $60,740, dotted column chart"><path d="${bg}" stroke="#E4E7EC" stroke-width="1.300" stroke-linecap="round"/>${cols}</svg>
            <div class="d-dots-l"><span>Incoming $42,100</span><span>Outgoing $60,740</span></div>
            <div class="d-list">${PENDING.map((p) => `<button type="button" class="d-li" data-go="3"><span class="ci">${I(p[2])}</span><span>${p[0]}</span><em>${$m(p[1])}</em></button>`).join('')}</div>
          </article>
          <article class="d-card d-review" aria-label="Operations awaiting review"><div class="d-lbl" style="position:relative">Operations awaiting review</div>
            <h3 class="d-h3" style="position:relative">Critical operations are pending confirmation</h3>
            <p style="position:relative">Scheduled payouts and high-value transfers. Reviewing these items ensures proper allocation of funds and prevents unintended execution delays.</p>
            <div><button type="button" class="btn btn-steel d-btn" data-go="3" style="position:relative">Review all activity</button></div></article>
          <article class="d-card" style="padding:12px 16px;background:transparent"><div class="d-scroll" id="dashboard-metrics">${ctlTable()}</div></article>
        </div>`;
      $$('[data-drop]').forEach(bindDrop);
      $('#dashboard-metrics').addEventListener('click', (e) => { const b = e.target.closest('[data-sort]'); if (!b) return; const k = b.dataset.sort; S.sort = { k, d: S.sort.k === k ? -S.sort.d : 1 }; $('#dashboard-metrics').innerHTML = ctlTable(); });
    }
  
    /* ================= 04 Operations ================= */
    const LAND = [
      [[-168, 66], [-160, 71], [-140, 70], [-120, 70], [-95, 72], [-80, 70], [-65, 62], [-56, 52], [-66, 45], [-70, 42], [-76, 36], [-81, 31], [-80, 26], [-83, 29], [-90, 30], [-97, 27], [-97, 21], [-90, 21], [-87, 16], [-83, 15], [-83, 10], [-78, 8], [-80, 7], [-85, 10], [-92, 14], [-96, 16], [-105, 20], [-110, 24], [-115, 30], [-117, 32], [-122, 37], [-124, 46], [-130, 55], [-140, 60], [-152, 59], [-165, 54], [-158, 58]],
      [[-55, 60], [-45, 60], [-20, 70], [-18, 80], [-40, 83], [-60, 82], [-70, 78], [-55, 68]],
      [[-78, 8], [-72, 12], [-62, 10], [-52, 5], [-50, 0], [-35, -6], [-39, -14], [-41, -22], [-48, -26], [-53, -34], [-58, -38], [-65, -42], [-68, -52], [-72, -52], [-74, -45], [-72, -30], [-70, -18], [-76, -14], [-81, -5], [-80, 0], [-77, 4]],
      [[-9, 37], [-9, 43], [-1, 46], [-4, 48], [2, 51], [8, 54], [10, 57], [8, 58], [5, 60], [5, 62], [15, 69], [25, 71], [40, 68], [60, 70], [80, 73], [100, 77], [115, 74], [140, 72], [160, 70], [180, 68], [180, 65], [170, 60], [162, 58], [156, 51], [142, 53], [140, 48], [135, 43], [129, 41], [126, 38], [126, 35], [122, 40], [118, 39], [121, 31], [119, 25], [110, 21], [107, 17], [109, 12], [105, 9], [100, 13], [100, 8], [103, 2], [100, 4], [98, 10], [97, 17], [92, 21], [88, 22], [80, 15], [78, 8], [73, 16], [72, 21], [67, 25], [58, 25], [56, 27], [50, 30], [48, 29], [51, 25], [56, 24], [59, 22], [52, 16], [43, 13], [39, 21], [35, 28], [34, 31], [36, 36], [30, 36], [27, 37], [26, 40], [23, 40], [22, 37], [19, 41], [13, 45], [16, 41], [16, 38], [12, 42], [8, 44], [3, 43], [0, 39], [-5, 36]],
      [[-17, 21], [-13, 28], [-6, 36], [10, 37], [11, 33], [20, 31], [32, 31], [34, 28], [43, 12], [51, 12], [40, -3], [40, -15], [35, -24], [32, -29], [26, -34], [18, -34], [12, -18], [13, -8], [9, -1], [9, 4], [-8, 4], [-15, 10], [-17, 15]],
      [[-5, 50], [2, 51], [0, 54], [-2, 58], [-6, 58], [-3, 54]], [[-10, 52], [-6, 52], [-6, 55], [-10, 54]],
      [[130, 32], [140, 36], [142, 41], [141, 45], [138, 38], [132, 34]],
      [[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [141, -38], [135, -34], [130, -32], [115, -34]],
      [[44, -25], [49, -15], [48, -13], [44, -17]], [[95, 5], [104, -2], [106, -6], [100, -1]], [[109, 1], [117, 7], [119, 1], [116, -4], [110, -3]], [[172, -34], [178, -38], [174, -41]],
    ];
    const inPoly = (x, y, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const a = p[i], b = p[j]; if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
    function worldMap() {
      const step = 3.2, W = 360, H = 180, sx = 3.2 * 100 / 360; let a = '', b = '', c = '';
      for (let lat = 78; lat > -58; lat -= step) for (let lon = -168; lon < 180; lon += step) {
        if (!LAND.some((p) => inPoly(lon, lat, p))) continue;
        const x = ((lon + 180) / W * 1000).toFixed(1), y = ((84 - lat) / H * 500 * 1.0).toFixed(1), pt = `M${x} ${y}h0`;
        /* highlighted regions as in m16: United States, Europe, South-East Asia + Australia */
        if ((lon > -125 && lon < -67 && lat > 25 && lat < 49) || (lon > -10 && lon < 32 && lat > 36 && lat < 62) || (lon > 95 && lon < 155 && lat > -40 && lat < 8)) b += pt; else a += pt;
      }
      return `<svg class="world" viewBox="0 0 1000 450" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Dotted world map with the United States, Europe and Asia-Pacific highlighted"><path d="${a}" stroke="#fff" stroke-opacity=".85" stroke-width="5.200" stroke-linecap="round"/><path d="${b}" stroke="#E6F29A" stroke-width="5.600" stroke-linecap="round"/></svg>`;
    }
    function opsRows() {
      const f = S.opsFilter, rows = OPS.filter((o) => !f || (f === 'Transfers' ? o.type === 'Transfer' : o.st === f));
      if (!rows.length) return `<tr><td colspan="5" class="d-empty">No ${f.toLowerCase()} operations.</td></tr>`;
      return rows.map((o, i) => `<tr class="bodyrow" style="--i:${i}"><td>${$m(o.total)}</td><td>${o.rec}</td><td>${o.type}</td><td>${o.due}</td><td>${o.freq}</td></tr>`).join('');
    }
    function renderOperations() {
      const nn = 40, r = noise(5, .2), pts = []; for (let i = 0; i < nn; i++) pts.push([i / (nn - 1) * 300, 70 - (Math.pow(i / (nn - 1), 1.8) * 48 + r[i] * 8)]);
      const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
      const chips = ['Transfers', 'Scheduled', 'Completed', 'Failed']; /* m16 filter chips */
      stage.innerHTML = `<div class="d-grid d-g4" style="padding-top:22px">
        <div class="d-date"><div><h2 class="d-lbl" style="font-weight:400;font-size:clamp(22px,2vw,30px);color:var(--ink);letter-spacing:-.03em">March</h2></div>
          <div class="d-day-tile"><b class="num">07</b><span class="d-lbl">Monday</span></div>
          <div class="d-card"><h3 class="d-h3" style="font-size:18px">Account Details</h3><dl class="d-det"><dt>Account #</dt><dd><span data-mask="1">****3487</span><button type="button" data-show="1" aria-pressed="false">show</button></dd><dt>Routing #</dt><dd><span data-mask="2">****3487</span><button type="button" data-show="2" aria-pressed="false">show</button></dd><dt>Pending approvals</dt><dd>$12,480</dd><dt>Active operations</dt><dd>7 running</dd></dl></div></div>
        <div style="min-width:0;display:grid;gap:clamp(12px,1.4vw,20px)">
          <div class="d-mini">
            <article class="d-card lift d-area"><div class="d-top"><div class="d-lbl">Available liquidity</div>${ctrls(1)}</div><div class="d-big" style="margin:4px 0 2px">${cnt(2140, { pre: '$' })}</div><div class="d-lbl" style="margin-bottom:6px">+15% vs last month</div>
              <svg viewBox="0 0 300 80" width="100%" height="92" preserveAspectRatio="none" role="img" aria-label="Available liquidity trend"><defs><linearGradient id="dashboard-ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FA3F2" stop-opacity=".35"/><stop offset="1" stop-color="#4FA3F2" stop-opacity="0"/></linearGradient></defs>
              <path d="${path} L300 80 L0 80Z" fill="url(#dashboard-ar)"/><path class="l" pathLength="1" d="${path}" fill="none" stroke="#4FA3F2" stroke-width="1.600" vector-effect="non-scaling-stroke"/>${pts.filter((_, i) => i % 3 === 0).map((p, i) => `<circle class="pt" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" data-tip="Week ${i + 1} · trending up"/>`).join('')}</svg></article>
            <article class="d-card lift"><div class="d-lbl">Across active operations</div><div class="d-h3" style="margin:6px 0 16px">${cnt(34, { suf: '%' })} of balance locked</div>
              ${hair({ n: 64, h: 40, gap: 4, w: 1.4, px: 40, label: '34% of balance locked', grads: [['#4FA3F2', '#BAD5F3'], ['#19C2A0', '#CEF5ED'], ['#C3E233', '#F6FFD8'], ['#F5B27A', '#FBE3CE'], ['#E98FA7', '#F7D3DD']], gi: (i) => Math.floor(i / 13) % 5, hs: (i) => .35 + .6 * Math.abs(Math.sin(i * .37) * Math.cos(i * .13)), tip: (i) => 'Locked balance · ' + ['Payout', 'Invoice payment', 'Transfer', 'Payment', 'Batch payout'][Math.floor(i / 13) % 5] })}</article></div>
          <div class="d-map" role="group" aria-label="Transaction distribution">${worldMap()}<div style="position:relative"><span class="lb"><i style="background:#E6F29A"></i>TRANSACTION DISTRIBUTION</span><div style="display:flex;align-items:baseline;gap:12px;margin-top:8px"><span class="big num">${cnt(74, { suf: '%' })}</span><span class="lb">United States</span></div><span class="lb" style="margin-top:14px">PRIMARY ACTIVITY REGIONS</span></div>
            <div><div class="sm"><div><span class="lb"><i style="background:#E6F29A"></i>ASIA</span><b>${cnt(16, { suf: '%' })}</b></div><div><span class="lb"><i style="background:#E6F29A"></i>EUROPE</span><b>${cnt(10, { suf: '%' })}</b></div></div><p class="ft">Most transactions are concentrated in the US and Europe, with growing activity in Asia. Distribution reflects active operational regions.</p></div></div>
          <section class="d-card" aria-label="Operations"><div class="d-top" style="margin-bottom:14px;align-items:center;flex-wrap:wrap"><h2 class="d-h3">Operations</h2><button type="button" class="btn btn-steel d-btn" id="dashboard-inv">${I('plus')}Create invoice</button></div>
            <div class="d-chips" role="group" aria-label="Filter by status" style="margin-bottom:12px">${chips.map((c) => `<button type="button" data-st="${c}" aria-pressed="${c === S.opsFilter}">${c}</button>`).join('')}</div>
            <div class="d-scroll"><table class="d-ops"><thead><tr><th scope="col">Total</th><th scope="col">Recipient</th><th scope="col">Type</th><th scope="col">Due</th><th scope="col">Frequency</th></tr></thead><tbody id="dashboard-ops">${opsRows()}</tbody></table></div></section>
        </div></div>`;
      $$('[data-show]').forEach((b) => b.addEventListener('click', () => { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); b.textContent = on ? 'hide' : 'show'; $(`[data-mask="${b.dataset.show}"]`).textContent = on ? '3487' : '****3487'; }));
      $$('[data-st]').forEach((b) => b.addEventListener('click', () => { S.opsFilter = S.opsFilter === b.dataset.st ? null : b.dataset.st; $$('[data-st]').forEach((x) => x.setAttribute('aria-pressed', x.dataset.st === S.opsFilter)); $('#dashboard-ops').innerHTML = opsRows(); }));
      $('#dashboard-inv').addEventListener('click', () => confirmToast('Create a new invoice?', () => R.toast('Invoice draft created')));
    }
  
    /* ================= 05 Payments ================= */
    const COUNTRIES = ['France', 'Spain', 'Brazil', 'Canada', 'Italy', 'India', 'Netherlands', 'Greece', 'USA', 'Egypt', 'Mexico', 'Norway', 'Estonia', 'Germany'];
    const EURO = ['France', 'Spain', 'Italy', 'Netherlands', 'Greece', 'Estonia', 'Germany'];
    function schedList() {
      const ap = Object.keys(S.approve).filter((k) => S.approve[k]).length, pa = Object.keys(S.pause).filter((k) => S.pause[k]).length;
      return `<p class="d-lbl" style="margin:4px 0 8px" aria-live="polite">${ap} approved · ${pa} paused</p>` + OPS.map((o) => `<div class="d-sched${S.pause[o.id] ? ' paused' : ''}"><div><b style="font-weight:400;font-size:14px">${o.rec}</b><small>${o.type} · ${o.freq} · due ${o.due}</small></div><div class="num" style="font-size:15px">${$m(o.total)}</div>
        <div style="display:flex;gap:10px"><button type="button" class="d-swb" role="switch" aria-checked="${!!S.approve[o.id]}" data-ap="${o.id}" aria-label="Approve ${o.rec}"><span class="tr"></span>Approve</button><button type="button" class="d-swb" aria-pressed="${!!S.pause[o.id]}" data-pa="${o.id}" aria-label="Pause ${o.rec}"><span class="tr"></span>Pause</button></div></div>`).join('');
    }
    function renderPayments() {
      stage.innerHTML = `<div class="d-grid d-g5" style="padding-top:28px">
        <section class="d-card" aria-label="International transfer"><h2 class="d-h3" style="margin-bottom:4px">International transfer</h2><p class="small" style="margin-bottom:18px">Choose the recipient country and how the money should travel.</p>
          <form class="d-form" id="dashboard-pform" novalidate>
            <div class="d-two"><label class="d-field">From account<select class="d-in" id="dashboard-from"><option>****1116</option>${ACCTS.map((a) => `<option>${a[0]}</option>`).join('')}</select></label>
              <label class="d-field">Amount (EUR)<input class="d-in" id="dashboard-amt" inputmode="decimal" placeholder="0.00" autocomplete="off"></label></div>
            <div><div class="d-field" id="dashboard-clbl">Recipient country</div><div class="d-pills" role="group" aria-labelledby="dashboard-clbl" style="margin-top:8px">${COUNTRIES.map((c) => `<button type="button" class="d-pill" data-c="${c}" aria-pressed="${c === S.country}">${flag(c)}${c}</button>`).join('')}</div></div>
            <div><div class="d-field" id="dashboard-mlbl">Method</div><div class="d-ftabs" role="tablist" aria-labelledby="dashboard-mlbl" id="dashboard-mtabs" style="margin-bottom:6px">${['CARDS', 'BANK TRANSFER', 'SEPA', 'SWIFT'].map((m) => `<button type="button" role="tab" data-m="${m}" aria-selected="${m === S.method}" tabindex="${m === S.method ? 0 : -1}">${m}</button>`).join('')}</div></div>
            <p class="d-note" id="dashboard-note" aria-live="polite"></p>
            <div style="display:flex;gap:10px;flex-wrap:wrap"><button type="submit" class="btn btn-steel d-btn">Review transfer</button><button type="button" class="btn btn-ghost d-btn" data-go="3">View operations</button></div>
          </form></section>
        <section class="d-card" aria-label="Scheduled payments"><div class="d-top" style="align-items:center"><h2 class="d-h3">Scheduled payments</h2>${ctrls(3)}</div><div id="dashboard-sched">${schedList()}</div></section></div>`;
      const note = () => { const eu = EURO.includes(S.country); $('#dashboard-note').textContent = S.method === 'SEPA' && !eu ? `SEPA covers euro-area countries. ${S.country} is not one — choose SWIFT or Bank transfer.` : `${S.method} to ${S.country} from ${$('#dashboard-from').value}.`; };
      note();
      $$('[data-c]').forEach((b) => b.addEventListener('click', () => { S.country = b.dataset.c; $$('[data-c]').forEach((x) => x.setAttribute('aria-pressed', x === b)); note(); }));
      const mt = $('#dashboard-mtabs'); tabKeys(mt, 'button');
      mt.addEventListener('click', (e) => { const b = e.target.closest('[data-m]'); if (!b) return; S.method = b.dataset.m; $$('button', mt).forEach((x) => { x.setAttribute('aria-selected', x === b); x.tabIndex = x === b ? 0 : -1; }); note(); });
      $('#dashboard-from').addEventListener('change', note);
      $('#dashboard-pform').addEventListener('submit', (e) => { e.preventDefault(); const v = parseFloat($('#dashboard-amt').value); if (!(v > 0)) { R.toast('Enter an amount to continue'); $('#dashboard-amt').focus(); return; } if (S.method === 'SEPA' && !EURO.includes(S.country)) { R.toast('SEPA is not available for ' + S.country); return; } confirmToast(`Send ${R.fmt(v, 2)} EUR to ${S.country} by ${S.method}?`, () => R.toast('Transfer submitted for approval')); });
      $('#dashboard-sched').addEventListener('click', (e) => {
        const a = e.target.closest('[data-ap]'), p = e.target.closest('[data-pa]'); if (!a && !p) return;
        if (a) { S.approve[a.dataset.ap] = !S.approve[a.dataset.ap]; R.toast((S.approve[a.dataset.ap] ? 'Approved ' : 'Approval removed for ') + OPS.find((o) => o.id === a.dataset.ap).rec); }
        else { S.pause[p.dataset.pa] = !S.pause[p.dataset.pa]; R.toast((S.pause[p.dataset.pa] ? 'Paused ' : 'Resumed ') + OPS.find((o) => o.id === p.dataset.pa).rec); }
        const f = document.activeElement && document.activeElement.dataset; const key = a ? 'ap' : 'pa', id = (a || p).dataset[key];
        $('#dashboard-sched').innerHTML = schedList(); const nb = $(`[data-${key}="${id}"]`); nb && nb.focus();
      });
    }
  
    /* ================= 06 Scenario modelling ================= */
    const runwayAt = (amt) => 4.6 + 0.8 * amt / 10000;
    function curve(amt, anim) {
      const f = Math.min(1.9, amt / 10000), W = 360, Hh = 200, base = 128, n = 60, pts = [];
      for (let i = 0; i <= n; i++) { const t = i / n, y = base + 7 * Math.sin(Math.min(1, t * 2.2) * Math.PI) - Math.pow(t, 2.3) * 108 * f; pts.push([t * W, Math.max(6, y)]); }
      const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
      let bars = '';
      pts.forEach((p, i) => { if (i < 2) return; const m = (i / n * 12), r = runwayAt(amt * 1) - 4.6; bars += `<g class="hg" data-tip="Month ${m.toFixed(0)} · ${(4.6 + r * Math.pow(i / n, 2.3) / 1).toFixed(1)} months runway${amt === 10000 ? '' : ' (projected)'}"><line class="bar" style="--i:${i}" x1="${p[0].toFixed(1)}" x2="${p[0].toFixed(1)}" y1="${(p[1] + 4).toFixed(1)}" y2="${Hh - 6}" stroke="#A8CCF1" stroke-width="1"/><rect class="hit" x="${(p[0] - 3).toFixed(1)}" y="0" width="6" height="${Hh}"/></g>`; });
      const basel = S.base ? `<line x1="0" x2="${W}" y1="${base}" y2="${base}" stroke="#B4B8BF" stroke-dasharray="3 5" stroke-width="1"/>` : '';
      return `<svg viewBox="0 0 ${W} ${Hh}" preserveAspectRatio="none" role="img" aria-label="Projected runway curve for ${R.fmt(amt, 0)} dollars allocated">${basel}${bars}<path class="cv" pathLength="1" d="${d}" fill="none" stroke="#8FBCEB" stroke-width="1.800" vector-effect="non-scaling-stroke"/></svg>`;
    }
    function scenFig() {
      const a = S.amount, pub = a === 10000, rw = runwayAt(a), dl = rw - 4.6;
      return { chip: pub ? '+0.8 months runway' : `+${dl.toFixed(1)} months runway (projected)`, rw: pub ? '5.4' : rw.toFixed(1), cap: pub ? 'Published scenario at $10,000.00.' : 'Projected: interpolated linearly from the published $10,000.00 scenario.' };
    }
    function scenPanel() {
      const a = S.amount, p = $('#dashboard-panel'), fg = scenFig();
      const amtBlock = `<div class="d-amt"><span class="l">Allocated amount</span><span class="v num" id="dashboard-av">${$m(Math.floor(a))}<i>.00</i><span class="d-coin" aria-hidden="true">$</span></span></div>
        <input class="d-rng" id="dashboard-rng" type="range" min="0" max="20000" step="500" value="${a}" aria-label="Allocated amount" aria-valuetext="${$m(a, 2)}" style="--p:${a / 200}%">`;
      if (S.ptab === 'Runway') {
        p.innerHTML = `<div class="d-scen"><div class="d-scen-top"><b>Scenario</b><span class="d-chip mint" id="dashboard-chip">${fg.chip}</span></div>${amtBlock}
          <div class="d-proj"><h3>Projected outcome</h3><div class="r"><span>Now →</span><span>+12 months</span></div><div class="r2"><span class="g">Runway: 4.6 →</span><span id="dashboard-rw">${fg.rw} months<span class="d-wave" aria-hidden="true">${I('spark')}</span></span></div>
          <div class="d-curve first" id="dashboard-curve">${curve(a, true)}</div><p class="d-cap" id="dashboard-cap" aria-live="polite">${fg.cap} ${a === 10000 ? '' : '<button type="button" class="d-reset" id="dashboard-reset">Reset to $10,000</button>'}</p></div></div>`;
      } else if (S.ptab === 'Allocation') {
        p.innerHTML = `<div class="d-scen"><div class="d-scen-top"><b>Allocation</b><span class="d-chip mint" id="dashboard-chip">${fg.chip}</span></div>${amtBlock}
          <div class="d-proj"><h3>Allocate to</h3><div class="d-acc" role="group" aria-label="Target account">${ACCTS.map((x, i) => `<button type="button" data-tg="${i}" aria-pressed="${S.target === i}"><span>${x[0]}<small>${$m(x[1], 2)}</small></span><span>${x[2]} APY</span></button>`).join('')}</div>
          <p class="d-cap">Moving ${$m(a, 2)} to ${ACCTS[S.target][0]}.</p><div style="text-align:center;margin-top:14px"><button type="button" class="btn btn-steel d-btn" id="dashboard-model">Model allocation</button></div></div></div>`;
        $$('[data-tg]', p).forEach((b) => b.addEventListener('click', () => { S.target = +b.dataset.tg; scenPanel(); }));
        $('#dashboard-model').addEventListener('click', () => confirmToast('Model this allocation?', () => R.toast('Allocation modelled · nothing was moved')));
      } else {
        p.innerHTML = `<div class="d-scen" style="max-width:720px"><div class="d-scen-top"><b>Forecasts</b><span class="d-chip mint" id="dashboard-chip">${fg.chip}</span></div>${amtBlock}
          <div class="d-run-fig" style="justify-content:flex-start;text-align:left;margin:6px 0"><div><span class="d-lbl">Current burn</span><b class="num">$18,900</b></div><div><span class="d-lbl">Committed</span><b class="num">$6,240</b></div></div>${stripHTML('Forecast')}<p class="d-cap">${fg.cap}</p></div>`;
      }
      const rg = $('#dashboard-rng'); if (!rg) return;
      rg.addEventListener('input', () => {
        S.amount = +rg.value; const f = scenFig(); rg.style.setProperty('--p', S.amount / 200 + '%'); rg.setAttribute('aria-valuetext', $m(S.amount, 2));
        $('#dashboard-av').innerHTML = `${$m(S.amount)}<i>.00</i><span class="d-coin" aria-hidden="true">$</span>`; $('#dashboard-chip').textContent = f.chip;
        if (S.ptab === 'Runway') { $('#dashboard-rw').firstChild.nodeValue = f.rw + ' months'; const c = $('#dashboard-curve'); c.classList.remove('first'); c.innerHTML = curve(S.amount, false); $('#dashboard-cap').innerHTML = f.cap + (S.amount === 10000 ? '' : ' <button type="button" class="d-reset" id="dashboard-reset">Reset to $10,000</button>'); }
        else { const cp = $('.d-cap', p); cp.textContent = S.ptab === 'Allocation' ? `Moving ${$m(S.amount, 2)} to ${ACCTS[S.target][0]}.` : f.cap; }
      });
      p.addEventListener('click', (e) => { if (e.target.id === 'dashboard-reset') { S.amount = 10000; scenPanel(); } });
    }
    function renderScenario() {
      stage.innerHTML = `<div class="d-scen-h"><h2>Model your next move<button type="button" class="d-tgl" role="switch" aria-pressed="${S.base}" aria-label="Show baseline on the curve" data-tip="Show baseline"></button><br>before it happens.</h2></div>
        <div class="d-ptabs" role="tablist" aria-label="Scenario type" id="dashboard-ptabs">${['Runway', 'Allocation', 'Forecasts'].map((t) => `<button type="button" role="tab" aria-selected="${t === S.ptab}" tabindex="${t === S.ptab ? 0 : -1}" data-pt="${t}">${t}</button>`).join('')}</div>
        <div id="dashboard-panel" role="group" aria-label="Scenario" aria-live="off"></div>`;
      const pt = $('#dashboard-ptabs'); tabKeys(pt, 'button');
      pt.addEventListener('click', (e) => { const b = e.target.closest('[data-pt]'); if (!b) return; S.ptab = b.dataset.pt; $$('button', pt).forEach((x) => { x.setAttribute('aria-selected', x === b); x.tabIndex = x === b ? 0 : -1; }); scenPanel(); });
      $('.d-tgl').addEventListener('click', (e) => { S.base = !S.base; e.currentTarget.setAttribute('aria-pressed', S.base); if (S.ptab === 'Runway') { const c = $('#dashboard-curve'); c.classList.remove('first'); c.innerHTML = curve(S.amount, false); } });
      scenPanel();
    }
  
    /* ================= 07 Copilot ================= */
    const SUGG = ['Review cash position', 'Manage outgoing payments', 'Review pending payments and approve transfers'];
    function replyFor(q, hadFile) {
      const s = q.toLowerCase();
      if (/cash position|cash/.test(s)) return 'Cash balance is $48,320 (+3.2%), monthly burn is $18,900 and runway is 4.6 months. Net flow is $6,480.';
      if (/outgoing/.test(s)) return 'Outgoing activity is $18,640. Pending payouts $14,020, invoices awaiting approval $9,380, recurring subscriptions $2,560 and operational fees $160.';
      if (/pending|approve|transfer|review/.test(s)) return 'Critical operations are pending confirmation. Their details are in the panel on the right. Nothing is approved until you confirm it.';
      if (hadFile) return 'Marketing_invoice_Feb.pdf is ready. Confirm and I will add it to your accounts.';
      return 'I can review your cash position, manage outgoing payments, or go through pending approvals. Which one first?';
    }
    function chatHTML() { return S.chat.map((m) => `<div class="d-msg ${m.r}">${m.think ? '<span class="d-think"><i></i><i></i><i></i></span>' : esc(m.t)}${m.act ? `<br><button type="button" class="btn btn-steel" data-addinv>Add to accounts</button>` : ''}</div>`).join(''); }
    function renderCopilot() {
      stage.innerHTML = `<div class="d-grid d-g6" style="padding-top:28px">
        <section class="d-cop" aria-label="Runo Copilot"><div class="d-orb" data-orb="150" id="dashboard-orb"></div><h2>How can I assist with your finances today?</h2>
          <div class="d-log" id="dashboard-log" aria-live="polite" ${S.chat.length ? '' : 'hidden'}>${chatHTML()}</div>
          <form class="d-prompt" id="dashboard-prompt" novalidate><div class="d-pr-in"><button type="button" class="d-plus" aria-label="Add attachment" data-toast="Attach a file">${I('plus')}</button>
            <input id="dashboard-q" type="text" aria-label="Ask Runo Copilot" autocomplete="off"><span class="d-ty" id="dashboard-ty" aria-hidden="true"><span data-type="Add this invoice to my accounts|Measure our market risk" data-loop></span></span></div>
            <div class="d-pr-bt">${S.attach ? `<button type="button" class="d-file" id="dashboard-file" aria-label="Remove attachment Marketing_invoice_Feb.pdf">${I('clip')}Marketing_invoice_Feb.pdf</button>` : '<span></span>'}<button type="submit" class="d-send" id="dashboard-send" aria-label="Send">${I('arrow-up')}</button></div></form>
          <div class="d-sugg" role="group" aria-label="Suggestions">${SUGG.map((t) => `<button type="button" data-sg="${esc(t)}">${t}</button>`).join('')}</div></section>
        <aside class="d-card d-ctx" aria-label="Context: pending operations"><div class="d-top"><div><div class="d-lbl">Context · from Control</div><h2 class="d-h3" style="margin-top:4px">Pending operations</h2></div>${ctrls(2)}</div>
          <p class="small" style="margin:10px 0 6px">Critical operations are pending confirmation.</p>
          ${PENDING.map((p, i) => `<div class="d-li"><span class="ci">${I(p[2])}</span><span><strong>${p[0]}</strong><small id="dashboard-s${i}">${$m(p[1])} · awaiting review</small></span><button type="button" class="btn btn-ghost d-btn" style="height:30px;font-size:12px;padding:0 12px" data-ask="${esc('Review ' + p[0].toLowerCase())}">Ask</button></div>`).join('')}
          <div style="margin-top:14px"><button type="button" class="btn btn-steel d-btn" data-go="3">Review all activity</button></div></aside></div>`;
      R.orb($('#dashboard-orb'), 150);
      const q = $('#dashboard-q'), ty = $('#dashboard-ty'), send = $('#dashboard-send'), log = $('#dashboard-log');
      const sync = () => { const has = q.value.trim().length > 0 || S.attach; ty.style.display = q.value || document.activeElement === q ? 'none' : ''; send.classList.toggle('ready', has); };
      q.addEventListener('input', sync); q.addEventListener('focus', sync); q.addEventListener('blur', sync); sync();
      const post = (text) => {
        const hadFile = S.attach && !text; text = text || (S.attach ? 'Add this invoice to my accounts' : ''); if (!text) return;
        S.chat.push({ r: 'me', t: text + (S.attach ? ' · Marketing_invoice_Feb.pdf' : '') }); const f = S.attach; S.attach = false; S.chat.push({ r: 'ai', think: 1 });
        q.value = ''; refresh(); const i = S.chat.length - 1;
        setTimeout(() => { S.chat[i] = { r: 'ai', t: replyFor(text, f), act: f && /invoice|account/i.test(text) }; if (S.cur === 6) refresh(); }, R.reduce ? 10 : 900);
      };
      function refresh() { const log = $('#dashboard-log'); if (!log) return; log.hidden = false; log.innerHTML = chatHTML(); log.scrollTop = log.scrollHeight; const fl = $('#dashboard-file'); if (fl && !S.attach) fl.remove(); sync(); }
      $('#dashboard-prompt').addEventListener('submit', (e) => { e.preventDefault(); post(q.value.trim()); });
      const fl = $('#dashboard-file'); fl && fl.addEventListener('click', () => { S.attach = false; fl.remove(); sync(); R.toast('Attachment removed'); });
      $$('[data-sg],[data-ask]').forEach((b) => b.addEventListener('click', () => { S.attach = false; post(b.dataset.sg || b.dataset.ask); }));
      log.addEventListener('click', (e) => { if (e.target.closest('[data-addinv]')) confirmToast('Add Marketing_invoice_Feb.pdf to your accounts?', () => R.toast('Invoice added to your accounts')); });
    }
  
    const SCREENS = [renderOverview, renderCashFlow, renderControl, renderOperations, renderPayments, renderScenario, renderCopilot];
    go(0);
  });
}
