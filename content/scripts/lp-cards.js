/* Generated from src/pages/lp-cards.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-cards', function (root) {
    var R = Runo, $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
    var NS = 'lp-cards-', k, i;
    root.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><clipPath id="lp-cards-fc"><circle cx="20" cy="20" r="20"/></clipPath></defs></svg>');
  
    /* ---- hero rings ---- */
    var rg = ''; for (k = 0; k < 7; k++) rg += '<circle cx="600" cy="560" r="' + (170 + k * 80) + '" fill="none" stroke="#fff" stroke-opacity="' + (.55 - k * .06).toFixed(2) + '" stroke-width="1" stroke-dasharray="' + (k % 2 ? '2 8' : '300 40 120 30') + '" style="transform-origin:600px 560px;animation:spin ' + (80 + k * 25) + 's linear infinite' + (k % 2 ? '' : ' reverse') + '"/>';
    $('#lp-cards-rings').innerHTML = rg;
  
    /* ---- 3D card stage ---- */
    var VAR = ['sage', 'ice', 'blue'], PAL = { sage: ['#D5DAD0', '#AEB7AB'], ice: ['#EEF3FB', '#D3E0F5'], blue: ['#86ABD6', '#5C88BB'] };
    var stage = $('#lp-cards-stage'), deck = $('#lp-cards-deck'), cds = $$('.cd', deck), front = 0, SL = [[0, 6, 90, 0, 1], [-38, -16, -40, -9, .9], [36, -20, -100, 8, .82]];
    var lines = function () { var s = ''; for (var n = 0; n < 9; n++) s += '<path d="M' + (120 + n * 9) + ' 210 V' + (150 - n * 4) + ' a' + (40 + n * 6) + ' ' + (40 + n * 6) + ' 0 0 1 ' + (40 + n * 6) + '-' + (40 + n * 6) + ' H340"/>'; for (n = 0; n < 6; n++) s += '<path d="M-10 ' + (150 + n * 9) + ' H' + (60 + n * 6) + ' l' + (70 - n * 4) + '-' + (120 - n * 6) + '"/>'; return s; };
    var backFace = function (v) { var u = R.uid('lp-cards-b');
      return '<svg viewBox="0 0 320 200" aria-hidden="true"><defs><linearGradient id="' + u + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + PAL[v][0] + '"/><stop offset="1" stop-color="' + PAL[v][1] + '"/></linearGradient><clipPath id="' + u + 'c"><rect width="320" height="200" rx="16"/></clipPath></defs>' +
        '<g clip-path="url(#' + u + 'c)"><rect width="320" height="200" fill="url(#' + u + ')"/><g fill="none" stroke="#fff" stroke-opacity=".5" stroke-width=".8">' + lines() + '</g><rect y="26" width="320" height="38" fill="#2A3340" opacity=".88"/><rect x="24" y="86" width="190" height="26" rx="4" fill="#fff" opacity=".7"/>' +
        '<svg x="262" y="140" width="34" height="34" viewBox="0 0 362 360" fill="#fff" opacity=".85"><use href="#runo-mark"/></svg><circle cx="40" cy="168" r="9" fill="#8C9197" opacity=".9"/><circle cx="52" cy="168" r="9" fill="#DADDE1" opacity=".85"/></g></svg>'; };
    $$('.face.back', deck).forEach(function (f, n) { f.innerHTML = backFace(VAR[n]); });
    var names = ['Card 1', 'Card 2', 'Card 3'], radios = $$('[data-s]', $('#lp-cards-selr'));
    function layout() {
      cds.forEach(function (c, n) { var rel = (n - front + 3) % 3, s = SL[rel];
        c.style.setProperty('--tx', s[0] + '%'); c.style.setProperty('--ty', s[1] + '%'); c.style.setProperty('--tz', s[2] + 'px'); c.style.setProperty('--rz', s[3] + 'deg'); c.style.setProperty('--sc', s[4]);
        c.setAttribute('aria-label', names[n] + '. ' + (rel === 0 ? 'Select to flip.' : 'Select to bring forward.')); });
      radios.forEach(function (b, n) { b.setAttribute('aria-checked', n === front); b.tabIndex = n === front ? 0 : -1; });
    }
    function setFront(n) { front = n; layout(); }
    function flip(n) { cds[n].classList.toggle('flipped'); }
    cds.forEach(function (c, n) {
      var act = function () { if (n !== front) setFront(n); else flip(n); };
      c.addEventListener('click', act); c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
    });
    radios.forEach(function (b, n) { b.addEventListener('click', function () { setFront(n); });
      b.addEventListener('keydown', function (e) { var j = /ArrowRight|ArrowDown/.test(e.key) ? (n + 1) % 3 : /ArrowLeft|ArrowUp/.test(e.key) ? (n + 2) % 3 : -1; if (j > -1) { e.preventDefault(); setFront(j); radios[j].focus(); } }); });
    $('#lp-cards-flipb').addEventListener('click', function () { flip(front); });
    layout(); setTimeout(function () { stage.classList.add('fan'); }, 350);
    var px = 0, py = 0, cx = 0, cy = 0;
    if (!R.reduce) {
      stage.addEventListener('pointermove', function (e) { var b = stage.getBoundingClientRect(); px = ((e.clientX - b.left) / b.width - .5) * 2; py = ((e.clientY - b.top) / b.height - .5) * 2; });
      stage.addEventListener('pointerleave', function () { px = 0; py = 0; });
      (function loop() { if (!root.isConnected) return; if (root.offsetParent !== null) { cx += (px - cx) * .08; cy += (py - cy) * .08; deck.style.transform = 'rotateX(' + (-cy * 11).toFixed(2) + 'deg) rotateY(' + (cx * 18).toFixed(2) + 'deg)'; } requestAnimationFrame(loop); })();
    }
  
    /* ---- choose account ---- */
    var FEAT = [['Full visibility over your cash flow', 'Control every payment before it moves', 'Real-time visibility over your funds', 'Instant transfers and global access'],
      ['Instant transfers and global access', 'Issue cards and track team spend', 'Built-in AI Copilot', 'Multi-Account Sync', 'Runway Forecasting']], AN = ['Runo Private', 'Runo Business'];
    var opts = $$('.opt', $('#lp-cards-opts'));
    $$('.ic', root).slice(0, 2).forEach(function (el, n) { el.innerHTML = R.icon(n ? 'wallet' : 'user'); });
    function pickAcct(n) {
      opts.forEach(function (o, m) { o.setAttribute('aria-checked', m === n); o.tabIndex = m === n ? 0 : -1; });
      $('#lp-cards-af').innerHTML = FEAT[n].map(function (t, m) { return '<li style="--d:' + (m * 70) + 'ms">' + R.icon('check') + '<span>' + t + '</span></li>'; }).join('');
      $('#lp-cards-ac').textContent = 'Continue with ' + AN[n];
    }
    opts.forEach(function (o, n) { o.addEventListener('click', function () { pickAcct(n); });
      o.addEventListener('keydown', function (e) { if (/Arrow/.test(e.key)) { e.preventDefault(); var j = 1 - n; pickAcct(j); opts[j].focus(); } }); });
    pickAcct(0);
  
    /* ---- onboarding phone ---- */
    var FUS = (function () { var s = ''; for (var n = 0; n < 7; n++) s += '<rect y="' + (n * 40 / 7).toFixed(2) + '" width="40" height="' + (40 / 7 + .3).toFixed(2) + '" fill="' + (n % 2 ? '#fff' : '#B22234') + '"/>'; s += '<rect width="20" height="22.9" fill="#3C3B6E"/>';
      for (var r = 0; r < 3; r++) for (var c = 0; c < 4; c++) s += '<circle cx="' + (3 + c * 4.6) + '" cy="' + (4 + r * 6.2) + '" r="1" fill="#fff"/>'; return s; })();
    var FEU = (function () { var s = '<rect width="40" height="40" fill="#003399"/>'; for (var n = 0; n < 12; n++) { var a = n / 12 * Math.PI * 2; s += '<circle cx="' + (20 + 11 * Math.sin(a)).toFixed(1) + '" cy="' + (20 - 11 * Math.cos(a)).toFixed(1) + '" r="1.8" fill="#FFCC00"/>'; } return s; })();
    $('#lp-cards-fus').innerHTML = FUS; $('#lp-cards-feu').innerHTML = FEU; $('#lp-cards-fbig').innerHTML = FUS;
    $$('.cur button', root).forEach(function (b) { b.addEventListener('click', function () {
      var eu = b.dataset.k === 'EUR'; $$('.cur button', root).forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      $('#lp-cards-fbig').innerHTML = eu ? FEU : FUS; $('#lp-cards-coin').textContent = eu ? '€' : '$';
      var f = $('.fl2', root); f.style.transform = 'rotateY(180deg) scale(.9)'; setTimeout(function () { f.style.transform = ''; }, 350);
    }); });
    var ROWS = [['Full visibility over your cash flow', 'See your inflows, outflows, and runway at a glance', '#CFE0F8', '#2F6FB8', 'chart'],
      ['Control every payment before it moves', 'Approve, schedule, or pause transactions instantly', '#DDD2F9', '#6B4FC8', 'spark'], ['Issue cards and track team spend', 'Create cards for your team and stay in control', '#BFE0DB', '#1F6B63', 'card']];
    $('#lp-cards-rows').innerHTML = ROWS.map(function (r) { return '<div class="rw"><span class="t" style="background:' + r[2] + ';color:' + r[3] + '">' + R.icon(r[4]) + '</span><span><b>' + r[0] + '</b><small>' + r[1] + '</small></span></div>'; }).join('');
    $('#lp-cards-steps').innerHTML = ROWS.map(function (r, n) { return '<button type="button" class="st" aria-pressed="' + (n === 0) + '"><span>0' + (n + 1) + '</span><span style="padding:0"><b>' + r[0] + '</b><p>' + r[1] + '</p></span></button>'; }).join('');
    var sts = $$('.st', root), rws = $$('.rw', root), cur = 0, hold = false;
    var setStep = function (n) { cur = n; sts.forEach(function (s, m) { s.setAttribute('aria-pressed', m === n); }); rws.forEach(function (r, m) { r.classList.toggle('on', m === n); }); };
    sts.forEach(function (s, n) { s.addEventListener('click', function () { setStep(n); }); ['mouseenter', 'focus'].forEach(function (ev) { s.addEventListener(ev, function () { hold = true; setStep(n); }); }); ['mouseleave', 'blur'].forEach(function (ev) { s.addEventListener(ev, function () { hold = false; }); }); });
    setStep(0); if (!R.reduce) setInterval(function () { if (!hold && root.isConnected && root.offsetParent !== null) setStep((cur + 1) % 3); }, 3200);
  
    /* ---- team cards ---- */
    var TC = [['****1116', 'Individual account', 'sage'], ['**1234', 'Reserve account', 'ice'], ['**9134', 'Treasury account', 'blue'], ['**5672', 'Reserve account', 'sage']];
    var list = $('#lp-cards-list');
    list.innerHTML = TC.map(function (c, n) { return '<div class="tr"><div class="th">' + R.card(c[2]) + '</div><div><b>Card ' + c[0] + '</b><small>' + c[1] + '</small></div><div class="tg"><span class="st-l">Active</span><button type="button" class="sw" role="switch" aria-checked="false" aria-label="Freeze card ' + c[0] + '"></button></div></div>'; }).join('');
    var upd = function () { var n = $$('.tr:not(.frz)', list).length; $('#lp-cards-act').textContent = n + ' of 4 active'; };
    $$('.sw', list).forEach(function (b) { b.addEventListener('click', function () {
      var on = b.getAttribute('aria-checked') !== 'true', row = b.closest('.tr'); b.setAttribute('aria-checked', on); row.classList.toggle('frz', on); $('.st-l', row).textContent = on ? 'Frozen' : 'Active'; upd();
      R.toast(on ? 'Card frozen' : 'Card unfrozen');
    }); });
  
    /* ---- donut ---- */
    var SEG = [['Card', 50, '#BAD5F3', '#7FB0EA'], ['Bank transfer', 30, '#CEF5ED', '#19C2A0'], ['Subscriptions', 20, '#F6FFD8', '#C9E96F']], C = 2 * Math.PI * 80, acc = 0;
    var dn = $('#lp-cards-dn'), arcsS = '', defs = '';
    SEG.forEach(function (s, n) {
      var len = C * s[1] / 100 - 7; defs += '<linearGradient id="lp-cards-dg' + n + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + s[2] + '"/><stop offset="1" stop-color="' + s[3] + '"/></linearGradient>';
      arcsS += '<circle class="sg" tabindex="0" role="img" aria-label="' + s[1] + '% ' + s[0] + '" data-n="' + n + '" cx="110" cy="110" r="80" stroke="url(#lp-cards-dg' + n + ')" style="--len:' + len.toFixed(1) + ';--off:' + (-acc).toFixed(1) + ';--dl:' + (n * 160) + 'ms"/>'; acc += C * s[1] / 100;
    });
    dn.innerHTML = '<svg viewBox="0 0 220 220" role="group" aria-label="Spend controllability"><defs>' + defs + '</defs><circle cx="110" cy="110" r="80" fill="none" stroke="#F2F3F5" stroke-width="22"/><g transform="rotate(-90 110 110)">' + arcsS + '</g>' +
      '<text x="110" y="112" text-anchor="middle" font-size="26" letter-spacing="-1" fill="#0B0B0C" id="lp-cards-dv"><tspan data-count="52860" data-prefix="$">$52,860</tspan></text><text x="110" y="132" text-anchor="middle" font-size="10" fill="#6B7280" id="lp-cards-dl">Total spend</text></svg>';
    $('#lp-cards-lg').innerHTML = SEG.map(function (s, n) { return '<button type="button" data-n="' + n + '"><i style="background:' + s[3] + '"></i><span>' + s[0] + '</span><span class="p num">' + s[1] + '%</span></button>'; }).join('');
    var dv = $('#lp-cards-dv'), dl = $('#lp-cards-dl'), tot = dv.innerHTML;
    var hov = function (n) {
      dn.classList.toggle('hov', n !== null); $$('.sg', dn).forEach(function (c) { c.classList.toggle('on', +c.dataset.n === n); }); $$('#lp-cards-lg button').forEach(function (b) { b.classList.toggle('on', +b.dataset.n === n); });
      if (n === null) { dv.innerHTML = tot; dl.textContent = 'Total spend'; } else { dv.textContent = SEG[n][1] + '%'; dl.textContent = SEG[n][0]; }
    };
    $$('.sg, #lp-cards-lg button').forEach(function (el) { var n = +el.dataset.n;
      el.addEventListener('mouseenter', function () { hov(n); }); el.addEventListener('mouseleave', function () { hov(null); }); el.addEventListener('focus', function () { hov(n); }); el.addEventListener('blur', function () { hov(null); }); });
  
    /* ---- card material close-up ---- */
    var big = $('#lp-cards-big'), mv = 'sage', wl = '';
    for (k = 0; k < 42; k++) { var y = -30 + k * 6.2, a = 14 * Math.sin(k * .35), b = 22 * Math.cos(k * .27); wl += '<path d="M-10 ' + y.toFixed(1) + ' C70 ' + (y + a).toFixed(1) + ' 120 ' + (y + b).toFixed(1) + ' 190 ' + (y + a * .5).toFixed(1) + ' S290 ' + (y - b).toFixed(1) + ' 330 ' + (y + 8).toFixed(1) + '"/>'; }
    var allL = wl + lines();
    big.innerHTML = '<svg viewBox="0 0 320 200" role="img" aria-label="Runo card close-up with contour lines"><defs><linearGradient id="lp-cards-mg" x1="0" y1="0" x2="1" y2="1"><stop id="lp-cards-m0" offset="0" stop-color="#D5DAD0"/><stop id="lp-cards-m1" offset="1" stop-color="#AEB7AB"/></linearGradient>' +
      '<linearGradient id="lp-cards-sh" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="60"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<radialGradient id="lp-cards-gl" gradientUnits="userSpaceOnUse" cx="160" cy="100" r="120"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><clipPath id="lp-cards-mc"><rect width="320" height="200" rx="16"/></clipPath></defs>' +
      '<g clip-path="url(#lp-cards-mc)"><rect width="320" height="200" fill="url(#lp-cards-mg)"/><g fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".5">' + allL + '</g><g fill="none" stroke="url(#lp-cards-sh)" stroke-width="1.1">' + allL + '</g><rect width="320" height="200" fill="url(#lp-cards-gl)" id="lp-cards-glr"/><rect width="320" height="1.2" fill="#fff" opacity=".6"/></g>' +
      '<g transform="translate(34 78)"><rect width="40" height="30" rx="6" fill="#EDE6D6" stroke="rgba(0,0,0,.18)" stroke-width=".6"/><path d="M0 10h13M0 20h13M27 10h13M27 20h13M13 0v30M27 0v30" stroke="rgba(0,0,0,.22)" stroke-width=".6" fill="none"/></g>' +
      '<svg x="262" y="22" width="30" height="30" viewBox="0 0 362 360" fill="#fff" opacity=".85"><use href="#runo-mark"/></svg><circle cx="262" cy="160" r="13" fill="#8C9197" opacity=".9"/><circle cx="279" cy="160" r="13" fill="#DADDE1" opacity=".85"/><text x="270" y="186" text-anchor="middle" font-size="7" fill="#fff" opacity=".85">mastercard</text></svg>';
    var sh = $('#lp-cards-sh'), gl = $('#lp-cards-gl'), glr = $('#lp-cards-glr'), mx = .5, my = .5, mtx = .5, mty = .5, inside = false;
    var MP = { sage: ['#D5DAD0', '#AEB7AB'], ice: ['#EEF3FB', '#D3E0F5'], blue: ['#86ABD6', '#5C88BB'] };
    $$('.sws button').forEach(function (b) { b.addEventListener('click', function () {
      $$('.sws button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); $('#lp-cards-m0').setAttribute('stop-color', MP[b.dataset.v][0]); $('#lp-cards-m1').setAttribute('stop-color', MP[b.dataset.v][1]);
    }); });
    var stg = $('#lp-cards-mstg');
    stg.addEventListener('pointermove', function (e) { var r = stg.getBoundingClientRect(); mtx = (e.clientX - r.left) / r.width; mty = (e.clientY - r.top) / r.height; inside = true; });
    stg.addEventListener('pointerleave', function () { inside = false; });
    (function mloop(now) {
      if (!root.isConnected) return;
      if (root.offsetParent !== null) {
        if (!inside && !R.reduce) { mtx = .5 + .5 * Math.sin(now / 1800); mty = .5 + .3 * Math.cos(now / 2300); }
        mx += (mtx - mx) * .1; my += (mty - my) * .1;
        var X = mx * 320, Y = my * 200;
        sh.setAttribute('x1', X - 90); sh.setAttribute('y1', Y - 50); sh.setAttribute('x2', X + 90); sh.setAttribute('y2', Y + 50); gl.setAttribute('cx', X); gl.setAttribute('cy', Y);
        big.style.transform = 'rotateY(' + ((mx - .5) * 16).toFixed(2) + 'deg) rotateX(' + ((.5 - my) * 12).toFixed(2) + 'deg)';
      }
      requestAnimationFrame(mloop);
    })(0);
  
    /* ---- paper plane + coins ---- */
    $('#lp-cards-plane').innerHTML = '<defs><linearGradient id="lp-cards-pg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6F9FD"/><stop offset="1" stop-color="#D9E6F5"/></linearGradient><linearGradient id="lp-cards-pg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C5D8EE"/><stop offset="1" stop-color="#E4EEF9"/></linearGradient>' +
      '<radialGradient id="lp-cards-cg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#F2E7B4"/><stop offset=".7" stop-color="#CDBB7C"/><stop offset="1" stop-color="#A8965C"/></radialGradient><radialGradient id="lp-cards-cb" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#E4EEFB"/><stop offset="1" stop-color="#9DBBE3"/></radialGradient></defs>' +
      '<ellipse cx="210" cy="292" rx="150" ry="14" fill="#2A4468" opacity=".18"/><g class="pl">' +
      '<g class="cn" id="lp-cards-c1"><ellipse cx="168" cy="112" rx="38" ry="42" fill="#A8965C" transform="rotate(-8 168 112)"/><ellipse cx="166" cy="110" rx="36" ry="40" fill="url(#lp-cards-cg)" transform="rotate(-8 166 110)"/><svg x="148" y="90" width="38" height="38" viewBox="0 0 362 360" fill="#fff" opacity=".85"><use href="#runo-mark"/></svg></g>' +
      '<g class="cn" id="lp-cards-c2"><ellipse cx="238" cy="104" rx="36" ry="40" fill="#8EAED8" transform="rotate(6 238 104)"/><ellipse cx="236" cy="102" rx="34" ry="38" fill="url(#lp-cards-cb)" transform="rotate(6 236 102)"/><text x="236" y="114" text-anchor="middle" font-size="34" fill="#fff" opacity=".9">$</text></g>' +
      '<path d="M30 140L370 96 250 214z" fill="url(#lp-cards-pg1)"/><path d="M30 140L250 214 196 282z" fill="url(#lp-cards-pg2)"/><path d="M370 96L250 214 270 262z" fill="#B7CCE5"/><path d="M30 140L250 214" stroke="#9FB8D6" stroke-width="1.2" fill="none"/><path d="M250 214L196 282M250 214L270 262" stroke="#9FB8D6" stroke-width="1" fill="none"/></g>';
    var mfv = $('#lp-cards-mfv'), pls = $('#lp-cards-plane');
    if (!R.reduce) { mfv.addEventListener('pointermove', function (e) { var r = mfv.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; pls.style.transform = 'translate(' + (x * 24) + 'px,' + (y * 18) + 'px) rotate(' + (x * 4) + 'deg)'; });
      mfv.addEventListener('pointerleave', function () { pls.style.transform = ''; }); }
    $$('.cn', mfv).forEach(function (c) { c.addEventListener('click', function () { c.classList.add('sp'); setTimeout(function () { c.classList.remove('sp'); }, 800); }); });
    R.scan(root);
  });
}
