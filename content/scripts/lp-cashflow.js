/* Generated from src/pages/lp-cashflow.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-cashflow', function (root) {
    const R = Runo, $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const NS = 'http://www.w3.org/2000/svg';
    const mix = (a, b, t) => { const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
    const rnd = (i, s) => { const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453; return x - Math.floor(x); };
    const IO = (el, fn, th = .25) => { const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { o.disconnect(); fn(); } }), { threshold: th }); o.observe(el); };

    /* ---------- hero: fix the fake "+" glyph and build live hairline blocks ---------- */
    const palettes = [['#2F7FD6', '#27C3C0'], ['#3F86D8', '#19C2A0'], ['#7FD0E8', '#D4EA6A']];
    const live = $$('[data-live]').map((el, k) => {
      const n = 64, h = 44, P = palettes[k], w = [];
      for (let i = 0; i < n; i++) w.push(.25 + .75 * rnd(i, k + 3));
      R.bars(el, { n, h, px: h, gap: 4, w: 1.4, fade: false, label: ['Contractor payouts', 'Vendor invoices', 'Software and tools'][k] + ' hairline chart', color: (i, nn) => mix(P[0], P[1], i / nn), heights: (i) => w[i] });
      const rects = $$('rect', el);
      rects.forEach((r, i) => { const hh = w[i] * h; r.style.y = (h - hh) + 'px'; r.style.height = hh + 'px'; r.style.transition = 'y .9s var(--ease),height .9s var(--ease)'; });
      return { rects, w, h };
    });
    const dash = $('#lp-cashflow-dash'), updEl = $('#lp-cashflow-upd');
    if (!R.reduce) {
      let tick = 0;
      setInterval(() => {
        if (!root.classList.contains('is-active')) return;
        tick++; live.forEach((L, k) => {
          for (let j = 0; j < 8; j++) { const i = Math.floor(Math.random() * L.rects.length); L.w[i] = .2 + .8 * Math.random(); const hh = L.w[i] * L.h; L.rects[i].style.y = (L.h - hh) + 'px'; L.rects[i].style.height = hh + 'px'; }
        });
        updEl.textContent = 'Updated ' + (tick % 2 ? 'just now' : '2s ago');
      }, 2400);
      addEventListener('scroll', () => { const y = Math.min(scrollY, 600); dash.style.translate = '0 ' + (-y * .07) + 'px'; }, { passive: true });
    }

    /* ---------- runway ---------- */
    const SEG = [
      { k: 'Core team', v: 10420, a: '#1F5FA8', b: '#7DB8F5' },
      { k: 'Vendors', v: 5380, a: '#3F86D8', b: '#9CCBF2' },
      { k: 'Tools & infra', v: 3100, a: '#4FA3F2', b: '#C5E3FA' },
    ];
    const TOT = SEG.reduce((s, x) => s + x.v, 0), N = 150, svg = $('#lp-cashflow-rwsvg'), mks = $('#lp-cashflow-mks');
    /* marker positions measured from m10 (chart width = 100%): Core team 14.9%, Vendors 51.7%, Tools & infra 71.5% */
    const POS = [.149, .517, .715, 1];
    SEG.forEach((s, q) => { s.s = Math.round(POS[q] * N); s.e = Math.round(POS[q + 1] * N); s.p = s.v / TOT; });
    const segOf = (i) => SEG.findIndex((s) => i >= s.s && i < s.e); /* -1 = lead-in bars before the first marker */
    const PRE = { s: 0, a: '#1F5FA8', b: '#5B93D6' };
    const fh = [], ah = [];
    for (let i = 0; i < N; i++) { const q = segOf(i); const first = q >= 0 && i === SEG[q].s; fh.push(first ? 1 : .45 + .55 * rnd(i, 1) * (.7 + .3 * Math.sin(i / 9))); ah.push(first ? 1 : .55 + .2 * Math.sin(i / 7) + .18 * rnd(i, 5)); }
    const rects = [];
    for (let i = 0; i < N; i++) {
      const q = segOf(i), s = q >= 0 ? SEG[q] : Object.assign({ e: SEG[0].s }, PRE), r = document.createElementNS(NS, 'rect');
      const t = (i - s.s) / Math.max(1, s.e - s.s), first = q >= 0 && i === s.s;
      r.setAttribute('x', i * (1000 / N)); r.setAttribute('width', first ? 2.4 : 1.6); r.setAttribute('fill', first ? s.a : mix(s.a, s.b, t));
      r.dataset.q = q; svg.appendChild(r); rects.push(r);
    }
    const paint = (mode) => rects.forEach((r, i) => { const hh = (mode === 'f' ? fh[i] : ah[i]) * 150; r.style.y = (170 - hh) + 'px'; r.style.height = hh + 'px'; });
    rects.forEach((r) => { r.style.y = '170px'; r.style.height = '0px'; });
    SEG.forEach((s, q) => {
      const m = document.createElement('div'); m.className = 'mk'; m.style.left = (s.s / N * 100) + '%'; m.dataset.q = q;
      m.innerHTML = s.k + '<b class="num">$' + R.fmt(s.v) + '</b>'; mks.appendChild(m);
      const c = document.createElement('button'); c.type = 'button'; c.className = 'cat'; c.setAttribute('aria-pressed', 'false'); c.dataset.q = q;
      c.innerHTML = '<small><i style="background:' + s.a + '"></i>' + s.k + '</small><b class="num">$' + R.fmt(s.v) + '</b>'; $('#lp-cashflow-cats').appendChild(c);
      const sh = document.createElement('i'); sh.style.flex = s.p; sh.style.background = 'linear-gradient(90deg,' + s.a + ',' + s.b + ')'; $('#lp-cashflow-share').appendChild(sh); s.sh = sh; s.mk = m; s.ct = c;
    });
    let focus = -1;
    const apply = () => { SEG.forEach((s, q) => { const dim = focus >= 0 && focus !== q; s.sh.style.opacity = dim ? .2 : 1; s.mk.style.opacity = dim ? .3 : 1; s.ct.setAttribute('aria-pressed', focus === q); }); rects.forEach((r) => { r.style.opacity = focus >= 0 && +r.dataset.q !== focus ? .15 : 1; }); };
    $$('.cat').forEach((c) => c.addEventListener('click', () => { const q = +c.dataset.q; focus = focus === q ? -1 : q; apply(); }));
    IO($('#lp-cashflow-rwc'), () => paint('f'), .3);
    const seg = $('#lp-cashflow-seg'), sb = $$('button', seg);
    const setMode = (b) => { sb.forEach((x) => { x.setAttribute('aria-selected', x === b); x.tabIndex = x === b ? 0 : -1; }); paint(b.dataset.m); };
    sb.forEach((b, i) => { b.addEventListener('click', () => setMode(b)); b.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const n = sb[(i + 1) % 2]; n.focus(); setMode(n); } }); });
    const chart = $('#lp-cashflow-rwc'), cur = $('#lp-cashflow-cur'), tip = $('#lp-cashflow-tip');
    chart.addEventListener('pointermove', (e) => {
      const b = chart.getBoundingClientRect(), f = Math.max(0, Math.min(.999, (e.clientX - b.left) / b.width)), i = Math.floor(f * N), q = segOf(i);
      chart.classList.add('hov'); cur.style.left = (f * 100) + '%'; tip.style.left = (f * 100) + '%';
      tip.textContent = q >= 0 ? SEG[q].k + ' · $' + R.fmt(SEG[q].v) : 'Runway Projection · 4.6 months';
    });
    chart.addEventListener('pointerleave', () => chart.classList.remove('hov'));
    $('#lp-cashflow-layers').addEventListener('click', () => { focus = -1; apply(); R.toast('Showing all categories'); });
    $('#lp-cashflow-dl').addEventListener('click', () => R.toast('Runway projection ready to export'));

    /* ---------- activity ---------- */
    const ACT = [
      { g: ['Yesterday', ''], rows: [['download', 'Internal transfer', 'Funds added', '5,466.82', 'BANK TRANSFER'], ['sw', 'Incoming transfer', 'Client payment', '8,450.00', 'SEPA'], ['sw', 'Internal allocation', 'Funds moved', '5,200.00', 'BANK TRANSFER']] },
      { g: ['Monday,', '5th of March'], rows: [['upload', 'Vendor payout', 'Stripe fees', '1,180.00', 'CARDS'], ['sw', 'Outgoing transfer', 'Contractor payout', '3,000.00', 'SWIFT']] },
      { g: ['Thursday,', '1st of March'], rows: [['sw', 'Subscription payment', 'AWS infrastructure', '640.00', 'SUBSCRIPTIONS']] },
    ];
    const feed = $('#lp-cashflow-feed'); let html = '';
    ACT.forEach((G) => { html += '<div class="grp"><h3>' + G.g[0] + (G.g[1] ? ' <span>' + G.g[1] + '</span>' : '') + '</h3>'; G.rows.forEach((r) => {
      html += '<div class="it" data-t="' + r[4] + '"><span class="ic">' + (r[0] === 'sw' ? '<span class="sw"></span>' : R.icon(r[0], 'icon')) + '</span><span class="t"><small>' + r[1] + '</small><span>' + r[2] + '</span></span><span class="a">' + r[3] + ' EUR</span></div>'; }); html += '</div>'; });
    feed.innerHTML = html + '<p class="empty" id="lp-cashflow-empty">No activity of this type in this period.</p>';
    const items = $$('.it', feed), grps = $$('.grp', feed); let ft = 'ALL', timers = [];
    const tabs = ['ALL', 'CARDS', 'BANK TRANSFER', 'SEPA', 'SWIFT', 'SUBSCRIPTIONS'], tb = $('#lp-cashflow-ftabs');
    tabs.forEach((t, i) => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === 0); b.tabIndex = i === 0 ? 0 : -1; b.textContent = t; b.dataset.t = t; tb.appendChild(b); });
    const stream = () => {
      timers.forEach(clearTimeout); timers = []; $('#lp-cashflow-sst').textContent = 'Streaming';
      items.forEach((it) => it.classList.remove('on'));
      const vis = items.filter((it) => !it.classList.contains('off'));
      vis.forEach((it, i) => timers.push(setTimeout(() => { it.classList.add('on'); if (i === vis.length - 1) $('#lp-cashflow-sst').textContent = 'Up to date'; }, R.reduce ? 0 : 350 + i * 520)));
      if (!vis.length) $('#lp-cashflow-sst').textContent = 'Up to date';
    };
    const filt = (t) => {
      ft = t; $$('button', tb).forEach((b) => { const on = b.dataset.t === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
      items.forEach((it) => it.classList.toggle('off', t !== 'ALL' && it.dataset.t !== t));
      grps.forEach((g) => { g.style.display = $$('.it:not(.off)', g).length ? '' : 'none'; });
      $('#lp-cashflow-empty').style.display = items.some((it) => !it.classList.contains('off')) ? 'none' : 'block'; stream();
    };
    $$('button', tb).forEach((b, i, all) => { b.addEventListener('click', () => filt(b.dataset.t)); b.addEventListener('keydown', (e) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { const n = all[(i + d + all.length) % all.length]; n.focus(); filt(n.dataset.t); } }); });
    $('#lp-cashflow-rep').addEventListener('click', stream);
    IO(feed, stream, .2);

    /* ---------- donut ---------- */
    const DS = [['Card', 50, '#8DBDF0'], ['Bank transfer', 30, '#8FE3D1'], ['Subscriptions', 20, '#DCEB8F']];
    const dsvg = $('#lp-cashflow-dsvg'), C = 2 * Math.PI * 44; let off = 0, dh = '';
    DS.forEach((d, i) => { const len = C * d[1] / 100 - 5; dh += '<circle class="seg-c" data-i="' + i + '" cx="60" cy="60" r="44" stroke="' + d[2] + '" style="--len:' + len + ';--dl:' + (i * .25) + 's" stroke-dashoffset="' + (-off) + '"/>'; off += C * d[1] / 100; });
    dsvg.innerHTML = dh;
    const dn = $('#lp-cashflow-donut'), lg = $('#lp-cashflow-legend');
    DS.forEach((d, i) => { const b = document.createElement('button'); b.type = 'button'; b.dataset.i = i; b.innerHTML = '<i style="background:' + d[2] + '"></i>' + d[0]; lg.appendChild(b); });
    const hv = (i) => { $$('circle.seg-c', dn).forEach((c) => c.classList.toggle('act', +c.dataset.i === i)); $$('button', lg).forEach((c) => c.classList.toggle('act', +c.dataset.i === i)); dn.classList.toggle('hv', i >= 0);
      $('#lp-cashflow-dm').textContent = i >= 0 ? DS[i][1] + '%' : '$52,860'; $('#lp-cashflow-ds').textContent = i >= 0 ? DS[i][0] : 'Total spend'; };
    $$('circle.seg-c', dn).forEach((c) => { c.addEventListener('pointerenter', () => hv(+c.dataset.i)); c.addEventListener('pointerleave', () => hv(-1)); });
    $$('button', lg).forEach((b) => { b.addEventListener('pointerenter', () => hv(+b.dataset.i)); b.addEventListener('pointerleave', () => hv(-1)); b.addEventListener('focus', () => hv(+b.dataset.i)); b.addEventListener('blur', () => hv(-1)); });
    IO(dn, () => dsvg.classList.add('go'), .3);

    /* ---------- impact curve ---------- */
    const W = 1700, H = 640, X0 = 120, X1 = 1640, YT = 70, YB = 540;
    const K = [[0, 1], [.126, 1], [.2, .93], [.283, .69], [.35, .42], [.42, .24], [.5, .32], [.61, .5], [.7, .4], [.795, .25], [.9, .23], [1, .19]];
    const dense = []; for (let k = 0; k < K.length - 1; k++) { const p0 = K[Math.max(0, k - 1)], p1 = K[k], p2 = K[k + 1], p3 = K[Math.min(K.length - 1, k + 2)];
      for (let s = 0; s < 24; s++) { const t = s / 24, t2 = t * t, t3 = t2 * t; const f = (a, b, c, d) => .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3); dense.push([Math.max(p1[0], Math.min(p2[0], f(p0[0], p1[0], p2[0], p3[0]))), f(p0[1], p1[1], p2[1], p3[1])]); } }
    dense.push(K[K.length - 1]);
    const yAt = (x) => { for (let i = 0; i < dense.length - 1; i++) if (x <= dense[i + 1][0]) { const a = dense[i], b = dense[i + 1], t = (x - a[0]) / Math.max(1e-6, b[0] - a[0]); return a[1] + (b[1] - a[1]) * t; } return dense[dense.length - 1][1]; };
    const px = (t) => X0 + t * (X1 - X0), py = (f) => YB - f * (YB - YT);
    const path = dense.map((d, i) => (i ? 'L' : 'M') + px(d[0]).toFixed(1) + ' ' + py(d[1]).toFixed(1)).join('');
    let cs = '<defs><linearGradient id="lp-cashflow-og" x1="0" x2="1"><stop offset="0" stop-color="#F5B27A"/><stop offset="1" stop-color="#BAD5F3"/></linearGradient></defs>';
    [0, .25, .5, .75, 1].forEach((g) => { cs += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + py(g) + '" y2="' + py(g) + '" stroke="#E7EBF1" stroke-width="1"/>'; });
    cs += '<path d="M' + (X0 - 40) + ' ' + YB + 'V30M' + (X0 - 46) + ' 42l6-12 6 12" stroke="#BAD5F3" fill="none"/><path d="M' + (X0 - 40) + ' ' + YB + 'H1690M1678 ' + (YB - 6) + 'l12 6-12 6" stroke="#BAD5F3" fill="none"/>';
    cs += '<text x="52" y="' + (YT + 160) + '" transform="rotate(-90 52 ' + (YT + 160) + ')" font-size="16" fill="#8A929E" text-anchor="middle" font-family="inherit">Operational friction</text>';
    const NS2 = 64;
    for (let i = 0; i < NS2; i++) { const t = i / (NS2 - 1), x = px(t), early = t < .2; cs += '<line class="stem" style="--i:' + i + '" x1="' + x.toFixed(1) + '" x2="' + x.toFixed(1) + '" y1="' + py(yAt(t)).toFixed(1) + '" y2="' + YB + '" stroke="' + (early ? '#F5B27A' : '#A9CDF7') + '" stroke-opacity="' + (early ? (1 - t * 2.4).toFixed(2) : .55) + '" stroke-width="1.4"/>'; }
    cs += '<path class="line" id="lp-cashflow-line" d="' + path + '" stroke="#C6DDF8" stroke-width="5" fill="none" stroke-linecap="round"/>';
    const cluster = (t, y) => [-2, -1, 0, 1, 2].map((k) => '<circle class="dotc" cx="' + (px(t) + k * 23) + '" cy="' + (py(yAt(t)) - (y || 0) - Math.abs(k) * 2) + '" r="12" fill="#8FC0FB"/>').join('');
    cs += cluster(0.012) + cluster(.2, 0) + cluster(.61);
    cs += '<g class="pin" id="lp-cashflow-pin" style="transform:translateX(' + px(.61) + 'px)"><line y1="' + py(yAt(.61)) + '" y2="' + YB + '" stroke="#6CB0F7" stroke-width="2"/><g class="pill" id="lp-cashflow-pill"><rect x="-52" y="' + (py(yAt(.61)) + 76) + '" width="104" height="52" rx="10" fill="#CFE2FA"/><text x="0" y="' + (py(yAt(.61)) + 110) + '" text-anchor="middle" font-size="26" fill="#6CB0F7" font-family="inherit">-60%</text></g></g>';
    cs += '<g transform="translate(1560 ' + (py(.33)) + ')"><circle r="38" fill="#CFE2FA"/><svg x="-17" y="-17" width="34" height="34" viewBox="0 0 362 360" fill="#fff"><use href="#runo-mark"/></svg></g>';
    const csvg = $('#lp-cashflow-csvg'); csvg.innerHTML = cs;
    const ln = $('#lp-cashflow-line'); ln.style.setProperty('--L', ln.getTotalLength ? Math.ceil(ln.getTotalLength()) : 4000);
    const ST = ['Intake', 'Setup', 'Accounts', 'Payments', 'Automation', 'Insights', 'Scale'];
    const TXT = ST.map((s, i) => i === 4 ? '-60% operational friction' : 'Operational friction');
    const stg = $('#lp-cashflow-stages'), pin = $('#lp-cashflow-pin'), pill = $('#lp-cashflow-pill');
    ST.forEach((s, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = s; b.setAttribute('aria-pressed', i === 4); b.dataset.i = i; stg.appendChild(b); });
    const setSt = (i) => { const t = i / 6; $$('button', stg).forEach((b, k) => b.setAttribute('aria-pressed', k === i)); pin.style.transform = 'translateX(' + px(t) + 'px)'; pin.firstChild.setAttribute('y1', py(yAt(t))); pill.querySelector('rect').setAttribute('y', py(yAt(t)) + 76); pill.querySelector('text').setAttribute('y', py(yAt(t)) + 110); pill.style.opacity = i === 4 ? 1 : 0; $('#lp-cashflow-rs').textContent = ST[i]; $('#lp-cashflow-rt').textContent = TXT[i]; };
    $$('button', stg).forEach((b) => b.addEventListener('click', () => setSt(+b.dataset.i)));
    csvg.addEventListener('pointermove', (e) => { const b = csvg.getBoundingClientRect(), f = (e.clientX - b.left) / b.width * W; setSt(Math.max(0, Math.min(6, Math.round((f - X0) / (X1 - X0) * 6)))); });
    IO($('#lp-cashflow-curve'), () => $('#lp-cashflow-curve').classList.add('go'), .25); setSt(4);

    /* ---------- metrics ---------- */
    const M = [['Cash runway', 'Liquidity health', 'Optimal', '8.2 months', '12.0', '10', .5, 'March 09, 2025'], ['Burn rate', 'Spending velocity', 'Healthy', '$12,400 / month', '30k', '5k', .62, 'March 09, 2025'], ['Liquidity ratio', 'Balance coverage', 'Optimal', '2.4', '35', '10', .3, 'March 09, 2025'], ['Success rate', 'Transaction reliability', 'Optimal', '98.6%', '99%', '90%', .45, 'March 06, 2025']];
    const tbl = $('#lp-cashflow-tbl');
    M.forEach((m) => { const r = document.createElement('div'); r.className = 'tr'; r.dataset.s = m[2]; r.dataset.n = m[0]; r.setAttribute('data-reveal', '');
      r.innerHTML = '<div class="m"><b>' + m[0] + '</b><small>' + m[1] + '</small></div><div><span class="st"><i></i>' + m[2] + '</span></div><div class="val num">' + m[3] + '</div><div class="rng"><svg viewBox="0 0 100 26" aria-hidden="true"><line x1="2" x2="98" y1="13" y2="13" stroke="#19C2A0" stroke-width="2" stroke-linecap="round"/><circle class="dt" cx="2" cy="13" r="4" fill="#19C2A0" data-x="' + (6 + m[6] * 88) + '"/></svg><span>' + m[4] + '<br>' + m[5] + '</span></div><div class="upl num">' + m[7] + '</div>'; tbl.appendChild(r); });
    const rowsEl = $$('.tr:not(.th)', tbl); let asc = true;
    const fl = $('#lp-cashflow-fl'); ['All', 'Optimal', 'Healthy'].forEach((t, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.setAttribute('aria-pressed', i === 0); b.addEventListener('click', () => { $$('button', fl).forEach((x) => x.setAttribute('aria-pressed', x === b)); rowsEl.forEach((r) => r.classList.toggle('hide', t !== 'All' && r.dataset.s !== t)); R.toast(t === 'All' ? 'Showing all metrics' : 'Showing ' + t.toLowerCase() + ' metrics'); }); fl.appendChild(b); });
    $('#lp-cashflow-sort').addEventListener('click', (e) => { asc = !asc; e.currentTarget.setAttribute('aria-label', 'Sort by metric, ' + (asc ? 'A to Z' : 'Z to A')); rowsEl.slice().sort((a, b) => asc ? a.dataset.n.localeCompare(b.dataset.n) : b.dataset.n.localeCompare(a.dataset.n)).forEach((r) => tbl.appendChild(r)); });
    IO(tbl, () => $$('.dt', tbl).forEach((d, i) => setTimeout(() => d.setAttribute('cx', d.dataset.x), 300 + i * 150)), .25);

    /* ---------- CTA wave ribbons ---------- */
    let wv = ''; for (let i = 0; i < 26; i++) { const o = i * 9; wv += '<path d="M-20 ' + (380 - o * .2) + ' C 260 ' + (120 + o) + ', 520 ' + (460 - o * .5) + ', 800 ' + (260 + o * .3) + ' S 1100 ' + (60 + o * .6) + ', 1240 ' + (200 + o * .4) + '" />'; }
    $('#lp-cashflow-wave').innerHTML = wv;
  });
}
