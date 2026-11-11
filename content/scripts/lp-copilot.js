/* Generated from src/pages/lp-copilot.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-copilot', function (root) {
    const R = Runo, $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const NS = 'http://www.w3.org/2000/svg';
    const IO = (el, fn, th = .3) => { const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { o.disconnect(); fn(); } }), { threshold: th }); o.observe(el); };
    const fine = matchMedia('(pointer:fine)').matches && !R.reduce;

    /* ---------- hero: orb follows the pointer, mic pill toggles listening ---------- */
    const hero = $('#lp-copilot-hero'), orb = $('#lp-copilot-orb');
    if (fine) hero.addEventListener('pointermove', (e) => { const b = hero.getBoundingClientRect(); const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; orb.style.transform = 'translate(' + (x * 30) + 'px,' + (y * 22) + 'px)'; });
    hero.addEventListener('pointerleave', () => { orb.style.transform = ''; });
    const mic = $('#lp-copilot-mic'); mic.addEventListener('click', () => { const on = mic.getAttribute('aria-pressed') !== 'true'; mic.setAttribute('aria-pressed', on); mic.classList.toggle('rec', on); R.toast(on ? 'Listening…' : 'Voice input off'); });

    /* ---------- prompt demo ---------- */
    const P = [
      { t: 'Add this invoice to my accounts', c: 'Marketing_invoice_Feb.pdf', i: 'clip' },
      { t: 'Measure our market risk', c: 'Quick Action', i: 'spark' },
      { t: 'Review pending payments and approve transfers', c: '' },
      { t: 'Review cash position', c: '' },
      { t: 'Manage outgoing payments', c: '' },
    ];
    const txt = $('#lp-copilot-txt'), chip = $('#lp-copilot-chip'), chipt = $('#lp-copilot-chipt'), send = $('#lp-copilot-send'), sugs = $('#lp-copilot-sugs');
    const steps = $$('.step', $('#lp-copilot-steps')), plan = $$('#lp-copilot-plan div'), xb = $('.xbtn'), m1 = $('#lp-copilot-m1'), m1c = $('#lp-copilot-m1c');
    let tok = 0, cur = 0, timers = [];
    const later = (fn, ms) => { const id = setTimeout(fn, R.reduce ? Math.min(ms, 30) : ms); timers.push(id); return id; };
    P.forEach((p, i) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'sug'; b.textContent = p.t; b.setAttribute('aria-pressed', i === 0); b.dataset.i = i; sugs.appendChild(b); });
    const setChip = (p) => { chip.classList.toggle('hid', !p.c); if (p.c) { chipt.textContent = p.c; $('use', chip).setAttribute('href', '#i-' + p.i); } m1c.style.display = p.c ? '' : 'none'; m1c.textContent = p.c; };
    const setStep = (n) => { steps.forEach((s, i) => { s.classList.toggle('on', i === n); s.classList.toggle('go', i === n && n === 2); const pr = $('.prog i', s); pr.style.transition = 'none'; pr.style.width = i < n ? '100%' : '0'; if (i === n) { void pr.offsetWidth; pr.style.transition = 'width 1.6s linear'; pr.style.width = '100%'; } });
      plan.forEach((d, i) => d.classList.toggle('d', n >= 2 || (n === 1 && false))); if (n < 1) plan.forEach((d) => d.classList.remove('d')); };
    const idle = () => { steps.forEach((s) => { s.classList.remove('on', 'go'); const pr = $('.prog i', s); pr.style.width = '0'; }); plan.forEach((d) => d.classList.remove('d')); xb.querySelector('span').textContent = 'Execute'; };
    const play = (i) => {
      tok++; const my = tok; timers.forEach(clearTimeout); timers = []; cur = i; const p = P[i];
      $$('.sug', sugs).forEach((s, k) => s.setAttribute('aria-pressed', k === i)); idle(); setChip(p); send.classList.remove('rdy'); txt.textContent = ''; m1.textContent = '';
      let k = 0; const type = () => { if (my !== tok) return; if (R.reduce) k = p.t.length; else k++; txt.textContent = p.t.slice(0, k); m1.textContent = p.t.slice(0, k);
        if (k < p.t.length) { later(type, 34 + Math.random() * 40); return; }
        send.classList.add('rdy'); later(() => {
          if (my !== tok) return; setStep(0); later(() => { if (my !== tok) return; setStep(1); plan.forEach((d, n) => later(() => { if (my === tok) d.classList.add('d'); }, 450 + n * 650));
            later(() => { if (my !== tok) return; setStep(2); xb.querySelector('span').textContent = 'Execute'; later(() => { if (my === tok) { xb.querySelector('span').textContent = 'Done'; R.toast('Executed in one step'); } }, 1100); }, 2700); }, 1800); }, 500); };
      type();
    };
    sugs.addEventListener('click', (e) => { const b = e.target.closest('.sug'); if (b) play(+b.dataset.i); });
    send.addEventListener('click', () => play(cur));
    steps.forEach((s, n) => s.addEventListener('click', () => { tok++; timers.forEach(clearTimeout); timers = []; setStep(n); plan.forEach((d) => d.classList.toggle('d', n >= 1)); xb.querySelector('span').textContent = n === 2 ? 'Done' : 'Execute'; }));
    IO($('.demo'), () => play(0), .25);

    /* ---------- flow ---------- */
    const cells = $$('.cell', $('#lp-copilot-cells')), FN = ['Payment sources → Accounts', 'Smart routing → Optimize', 'Execution → Send'];
    let fi = 0, ft;
    const setCell = (i, user) => { fi = i; cells.forEach((c, k) => { c.classList.remove('on'); if (k === i) { void c.offsetWidth; c.classList.add('on'); } }); $('#lp-copilot-fn').textContent = FN[i]; clearTimeout(ft); if (!R.reduce && !user) ft = setTimeout(() => setCell((fi + 1) % 3), 2400); };
    cells.forEach((c, i) => c.addEventListener('click', () => { setCell(i, true); }));
    IO($('#lp-copilot-cells'), () => setCell(0), .3);

    /* ---------- phone ---------- */
    const ph = $('#lp-copilot-ph'), phw = $('#lp-copilot-phw');
    if (fine) { phw.addEventListener('pointermove', (e) => { const b = phw.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; ph.style.setProperty('--ry', (-16 + x * 14) + 'deg'); ph.style.setProperty('--rx', (6 - y * 12) + 'deg'); });
      phw.addEventListener('pointerleave', () => { ph.style.removeProperty('--ry'); ph.style.removeProperty('--rx'); }); }
    R.bars($('#lp-copilot-sp2'), { n: 14, h: 40, px: 50, gap: 7, w: 2, color: '#9CC6F3', color2: '#E4EEFC', heights: (i) => [.3, .55, .8, .5, .9, .6, .75, .4, .7, .5, .85, .45, .6, .35][i] });
    const sp = $('#lp-copilot-sp1'); sp.style.strokeDasharray = 160; sp.style.strokeDashoffset = 160; sp.style.transition = 'stroke-dashoffset 2s var(--ease)'; IO(ph, () => { sp.style.strokeDashoffset = 0; }, .3);
    const OP = ['Review cash position', 'Manage outgoing payments'], pin = $('#lp-copilot-pin');
    const selOpt = (o) => { $$('[data-o]', root).forEach((b) => b.setAttribute('aria-pressed', +b.dataset.o === o)); pin.textContent = OP[o]; };
    $$('[data-o]', root).forEach((b) => b.addEventListener('click', () => selOpt(+b.dataset.o)));

    /* ---------- +74% chart ---------- */
    const W = 1000, H = 420, Y0 = 20, X0 = 40, X1 = 990, yy = (v) => Y0 + (1 - v) * (H - Y0 - 40);
    const xx = (t) => X0 + t * (X1 - X0);
    const SIG = [[0, .08], [.125, .08], [.21, .3], [.46, .3], [.56, .52], [.74, .52], [.9, .96], [1, .96]];
    const STA = [[0, .025], [.17, .025], [.38, .45], [.62, .45], [.7, .18], [.86, .18], [.91, .3], [1, .3]];
    const val = (S, t) => { for (let i = 0; i < S.length - 1; i++) if (t <= S[i + 1][0]) { const a = S[i], b = S[i + 1]; return a[1] + (b[1] - a[1]) * ((t - a[0]) / Math.max(1e-6, b[0] - a[0])); } return S[S.length - 1][1]; };
    const pth = (S) => S.map((p, i) => (i ? 'L' : 'M') + xx(p[0]).toFixed(1) + ' ' + yy(p[1]).toFixed(1)).join('');
    let g = '';
    [0, .25, .5, .75, 1].forEach((v) => { g += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + yy(v) + '" y2="' + yy(v) + '" stroke="#ECEEF2"/>'; });
    g += '<g class="ser" id="lp-copilot-ser1">';
    for (let i = 0; i < 96; i++) { const t = i / 95, h = val(STA, t), early = t < .17 || t > .9; g += '<line class="stm" style="--i:' + i + '" x1="' + xx(t).toFixed(1) + '" x2="' + xx(t).toFixed(1) + '" y1="' + yy(h).toFixed(1) + '" y2="' + yy(0) + '" stroke="' + (early ? '#F5B27A' : '#A9CDF7') + '" stroke-opacity="' + (early ? .7 : .6) + '" stroke-width="1.2"/>'; }
    g += '<path class="ln" id="lp-copilot-l1" d="' + pth(STA) + '" stroke="#A9CDF7" style="stroke-width:2.5"/></g>';
    g += '<g class="ser" id="lp-copilot-ser0"><path class="ln" id="lp-copilot-l0" d="' + pth(SIG) + '" stroke="#5FA0E3"/></g>';
    g += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + yy(0) + '" y2="' + yy(0) + '" stroke="#BAD5F3" stroke-width="1.5"/>';
    [0, 25, 50, 75, 100].forEach((v) => { g += '<text x="0" y="' + (yy(v / 100) + 5) + '" font-size="15" fill="#6B7280" font-family="inherit">' + v + '%</text>'; });
    g += '<g id="lp-copilot-cur" style="opacity:0;transition:opacity .2s"><line id="lp-copilot-curl" y1="' + yy(1) + '" y2="' + yy(0) + '" stroke="#000" stroke-opacity=".35"/><circle id="lp-copilot-c0" r="6" fill="#5FA0E3" stroke="#fff" stroke-width="2"/><circle id="lp-copilot-c1" r="6" fill="#A9B3C4" stroke="#fff" stroke-width="2"/></g>';
    const csv = $('#lp-copilot-csv'); csv.innerHTML = g.replace(/<text x="0"/g, '<text x="-6" text-anchor="end"').replace(/X0/g, X0);
    csv.setAttribute('viewBox', '-60 0 1060 ' + H);
    ['lp-copilot-l0', 'lp-copilot-l1'].forEach((id) => { const l = document.getElementById(id) || $('#' + id); l.style.setProperty('--L', Math.ceil(l.getTotalLength())); });
    const cw = $('#lp-copilot-cw'); IO(cw, () => cw.classList.add('go'), .3);
    const lgd = $('#lp-copilot-lgd'); const SERS = [['Signal Detection', '#5FA0E3'], ['Static Reporting', '#A9B3C4']];
    SERS.forEach((s, i) => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-pressed', 'true'); b.style.setProperty('--lc', s[1]); b.innerHTML = '<i></i>' + s[0]; b.addEventListener('click', () => { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); $('#lp-copilot-ser' + i).classList.toggle('off', !on); }); lgd.appendChild(b); });
    const ctip = $('#lp-copilot-ct'), crossG = $('#lp-copilot-cur'), STG = ['Input', 'Processing', 'Adaptation', 'Response'];
    cw.addEventListener('pointermove', (e) => { const b = cw.getBoundingClientRect(), fx = (e.clientX - b.left) / b.width * 1060 - 60, t = Math.max(0, Math.min(1, (fx - X0) / (X1 - X0)));
      cw.classList.add('hov'); crossG.style.opacity = 1; const x = xx(t); $('#lp-copilot-curl').setAttribute('x1', x); $('#lp-copilot-curl').setAttribute('x2', x); $('#lp-copilot-c0').setAttribute('cx', x); $('#lp-copilot-c0').setAttribute('cy', yy(val(SIG, t))); $('#lp-copilot-c1').setAttribute('cx', x); $('#lp-copilot-c1').setAttribute('cy', yy(val(STA, t)));
      ctip.style.left = ((x + 60) / 1060 * 100) + '%'; ctip.textContent = STG[Math.min(3, Math.floor(t * 4))]; });
    cw.addEventListener('pointerleave', () => { cw.classList.remove('hov'); crossG.style.opacity = 0; });

    /* ---------- 81% selection ---------- */
    const WORDS = '81% of financial workflows remain invisible outside your awareness'.split(' ');
    const sel = $('#lp-copilot-sel'); sel.innerHTML = WORDS.map((w, i) => '<span class="wd" data-i="' + i + '">' + w + '</span>').join(' ');
    const wds = $$('.wd', sel); let a = 5, b = 8, drag = false;
    const showSel = (lo, hi) => { wds.forEach((w, i) => { w.classList.toggle('sel-on', lo >= 0 && i >= lo && i <= hi); w.classList.toggle('s0', i === lo); w.classList.toggle('s1', i === hi); }); };
    const at = (e) => { const el = document.elementFromPoint(e.clientX, e.clientY); const w = el && el.closest && el.closest('.wd'); return w ? +w.dataset.i : -1; };
    sel.addEventListener('pointerdown', (e) => { const i = at(e); if (i < 0) return; drag = true; a = b = i; showSel(a, b); });
    addEventListener('pointermove', (e) => { if (!drag) return; const i = at(e); if (i < 0) return; b = i; showSel(Math.min(a, b), Math.max(a, b)); });
    addEventListener('pointerup', () => { drag = false; });
    $('#lp-copilot-sa').addEventListener('click', () => showSel(0, WORDS.length - 1));
    $('#lp-copilot-sr').addEventListener('click', () => showSel(5, 8));
    IO(sel, () => { showSel(-1, -1); wds.slice(5).forEach((w, k) => setTimeout(() => { w.classList.add('sel-on'); w.classList.toggle('s0', k === 0); }, R.reduce ? 0 : 500 + k * 280)); setTimeout(() => showSel(5, 8), R.reduce ? 0 : 500 + 4 * 280 + 50); }, .5);
    const cnt = document.createElement('span'); cnt.dataset.count = 81; cnt.dataset.suffix = '%'; cnt.textContent = '81%'; wds[0].textContent = ''; wds[0].appendChild(cnt); R.scan(sel);

    /* ---------- feature rows ---------- */
    const TG = [['Cash Visibility', 'blue', 18, 40, -22], ['Financial Insights', '', 42, 12, 8], ['AI Financial Copilot', 'ice', 28, 36, 8], ['Expense Control', 'blue', 54, 36, 10], ['Multi-Account Sync', 'mint', 6, 56, -17], ['Runway Forecasting', '', 36, 52, 8], ['Smart Payments', '', 22, 68, 14], ['Payments', '', 70, 62, 20], ['Automated Workflows', 'ice', 4, 82, 0], ['Decision Layer', 'mint', 40, 80, 0]];
    const cl = $('#lp-copilot-cloud'); TG.forEach((t, i) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'tg ' + t[1]; b.textContent = t[0]; b.style.cssText = 'left:' + t[2] + '%;top:' + t[3] + '%;--r:' + t[4] + 'deg;--d:' + (i * 90) + 'ms'; b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', () => b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')); cl.appendChild(b); });
    IO(cl, () => $$('.tg', cl).forEach((t) => t.classList.add('in')), .3);
    const sw = $('#lp-copilot-sw'); sw.addEventListener('click', () => sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') !== 'true'));
    const mk = $('#lp-copilot-mk'), mkt = $('#lp-copilot-mkt');
    mk.addEventListener('click', () => { if (mk.classList.contains('run')) return; mk.classList.remove('ok'); mk.classList.add('run'); mkt.textContent = 'Creating…'; setTimeout(() => { mk.classList.remove('run'); mk.classList.add('ok'); mkt.textContent = 'Operation created'; R.toast(sw.getAttribute('aria-checked') === 'true' ? 'Operation created and saved as workflow' : 'Operation created'); setTimeout(() => { mk.classList.remove('ok'); mkt.textContent = 'Create operation'; }, 2400); }, R.reduce ? 50 : 1400); });

    /* ---------- coin CTA ---------- */
    const coinSvg = (id, ridged, blur) => '<svg viewBox="0 0 200 200" aria-hidden="true"><defs><radialGradient id="lp-copilot-cg' + id + '" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#F3EEE4"/><stop offset=".6" stop-color="#CFC4B2"/><stop offset="1" stop-color="#9F937F"/></radialGradient>' + (blur ? '<filter id="lp-copilot-b' + id + '"><feGaussianBlur stdDeviation="' + blur + '"/></filter>' : '') + '</defs><g' + (blur ? ' filter="url(#lp-copilot-b' + id + ')"' : '') + '><ellipse cx="100" cy="104" rx="92" ry="92" fill="#8E826E" opacity=".5"/><circle cx="100" cy="100" r="92" fill="url(#lp-copilot-cg' + id + ')"/><circle cx="100" cy="100" r="80" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2"/>' + (ridged ? '<circle cx="100" cy="100" r="88" fill="none" stroke="#8E826E" stroke-opacity=".5" stroke-width="5" stroke-dasharray="1 2.6"/>' : '') + '<svg x="62" y="62" width="76" height="76" viewBox="0 0 362 360" fill="#E9E2D6" stroke="#9F937F" stroke-width="3"><use href="#runo-mark"/></svg></g></svg>';
    const CN = [[8, 8, 20, 0, 9, 0, 0], [66, -6, 24, 1, 11, -2, 0], [82, 52, 16, 2, 10, -4, 4], [-4, 60, 22, 3, 12, -1, 6], [40, 66, 14, 4, 8, -5, 7]];
    $('#lp-copilot-coins').innerHTML = CN.map((c, i) => '<div class="cn" data-d="' + (i % 2 ? -1 : 1) + '" style="left:' + c[0] + '%;top:' + c[1] + '%;width:' + c[2] + '%;--t:' + c[4] + 's;--d:' + c[5] + 's">' + coinSvg(i, c[6] < 5, c[6]) + '</div>').join('');
    const coin = $('#lp-copilot-coin'); if (fine) coin.addEventListener('pointermove', (e) => { const b = coin.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; $$('.cn', coin).forEach((c) => { const d = +c.dataset.d; c.style.translate = (x * 30 * d) + 'px ' + (y * 24 * d) + 'px'; }); });
  });
}
