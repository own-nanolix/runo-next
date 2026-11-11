/* Generated from src/pages/mobile.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('mobile', function (root) {
    const R = Runo, $ = (s, r) => (r || root).querySelector(s), $$ = (s, r) => Array.from((r || root).querySelectorAll(s));
    const I = (n) => R.icon(n);
    const NAMES = ['Onboarding', 'Create account', 'Choose account', 'Home', 'Copilot', 'Create operation', 'International transfer'];

    /* ---------- flags (30x30, cropped to a circle) ---------- */
    const band = (cols, v) => cols.map((c, i) => v ? `<rect x="${i * 10}" width="10" height="30" fill="${c}"/>` : `<rect y="${i * 10}" width="30" height="10" fill="${c}"/>`).join('');
    const usF = () => { let s = ''; for (let i = 0; i < 13; i++) s += `<rect y="${(i * 30 / 13).toFixed(2)}" width="30" height="${(30 / 13 + .05).toFixed(2)}" fill="${i % 2 ? '#fff' : '#B22234'}"/>`; s += '<rect width="15" height="16.2" fill="#3C3B6E"/>'; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) s += `<circle cx="${2.2 + c * 3.5 + (r % 2) * 1.7}" cy="${2.4 + r * 3.6}" r=".7" fill="#fff"/>`; return s; };
    const euF = () => { let s = '<rect width="30" height="30" fill="#003399"/>'; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += `<circle cx="${(15 + 8 * Math.cos(a)).toFixed(2)}" cy="${(15 + 8 * Math.sin(a)).toFixed(2)}" r="1.3" fill="#FFCC00"/>`; } return s; };
    const grF = () => { let s = '<rect width="30" height="30" fill="#0D5EAF"/>'; [3.3, 10, 16.7, 23.3].forEach((y) => { s += `<rect y="${y}" width="30" height="3.4" fill="#fff"/>`; }); return s + '<rect width="16.7" height="16.7" fill="#0D5EAF"/><rect x="6.7" width="3.4" height="16.7" fill="#fff"/><rect y="6.7" width="16.7" height="3.4" fill="#fff"/>'; };
    const FL = {
      fr: band(['#002654', '#fff', '#CE1126'], 1),
      es: '<rect width="30" height="30" fill="#AA151B"/><rect y="7.5" width="30" height="15" fill="#F1BF00"/><rect x="6" y="11.5" width="4.5" height="7" rx="1" fill="#C8102E" opacity=".85"/>',
      br: '<rect width="30" height="30" fill="#1FA04B"/><path d="M15 4 27 15 15 26 3 15Z" fill="#FEDF00"/><circle cx="15" cy="15" r="5.2" fill="#1F3F8F"/><path d="M10 14.2q5-1.6 10 1.6" stroke="#fff" stroke-width="1" fill="none"/>',
      ca: '<rect width="30" height="30" fill="#fff"/><rect width="7.5" height="30" fill="#D52B1E"/><rect x="22.5" width="7.5" height="30" fill="#D52B1E"/><polygon points="15,8 16.5,11 19,10.2 18,15 20.5,13.5 20,15.5 16,18.5 16.4,20 15.4,19.8 15.4,22.5 14.6,22.5 14.6,19.8 13.6,20 14,18.5 10,15.5 9.5,13.5 12,15 11,10.2 13.5,11" fill="#D52B1E"/>',
      it: band(['#009246', '#fff', '#CE2B37'], 1),
      in: band(['#FF9933', '#fff', '#138808']) + '<circle cx="15" cy="15" r="3.6" fill="none" stroke="#000080" stroke-width=".9"/><circle cx="15" cy="15" r=".8" fill="#000080"/>',
      nl: band(['#AE1C28', '#fff', '#21468B']),
      gr: grF(), us: usF(),
      eg: band(['#CE1126', '#fff', '#000']) + '<circle cx="15" cy="15" r="2.2" fill="#C09300"/>',
      mx: band(['#006847', '#fff', '#CE1126'], 1) + '<circle cx="15" cy="15" r="2.4" fill="#8B5A2B"/>',
      no: '<rect width="30" height="30" fill="#BA0C2F"/><rect x="8" width="6.6" height="30" fill="#fff"/><rect y="11.5" width="30" height="7" fill="#fff"/><rect x="9.7" width="3.2" height="30" fill="#00205B"/><rect y="13.2" width="30" height="3.6" fill="#00205B"/>',
      ee: band(['#0072CE', '#000', '#fff']),
      de: band(['#000', '#DD0000', '#FFCE00']),
      eu: euF()
    };
    const flag = (c) => `<span class="m-flag" aria-hidden="true"><svg viewBox="0 0 30 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${FL[c]}</svg></span>`;
    const COUNTRIES = [['fr', 'France'], ['es', 'Spain'], ['br', 'Brazil'], ['ca', 'Canada'], ['it', 'Italy'], ['in', 'India'], ['nl', 'Netherlands'], ['gr', 'Greece'], ['us', 'USA'], ['eg', 'Egypt'], ['mx', 'Mexico'], ['no', 'Norway'], ['ee', 'Estonia'], ['de', 'Germany']];

    /* ---------- shared pieces ---------- */
    const sys = `<svg class="m-sys" viewBox="0 0 63 12" aria-hidden="true"><g fill="currentColor"><rect x="0" y="7.5" width="3" height="4" rx=".7"/><rect x="4.5" y="5.5" width="3" height="6" rx=".7"/><rect x="9" y="3" width="3" height="8.5" rx=".7"/><rect x="13.5" y=".5" width="3" height="11" rx=".7"/></g>
      <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20.5 4.6a9 9 0 0 1 13 0M23 7.3a5.4 5.4 0 0 1 8 0"/></g><circle cx="27" cy="10" r="1.3" fill="currentColor"/>
      <rect x="40" y="1" width="20" height="10" rx="3" fill="none" stroke="currentColor" stroke-opacity=".5"/><rect x="42" y="3" width="15" height="6" rx="1.5" fill="currentColor"/><rect x="61.2" y="4" width="1.4" height="4" rx=".7" fill="currentColor" fill-opacity=".5"/></svg>`;
    const rings = (cx, cy, rs, op) => rs.map((r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-opacity="${op}" stroke-width="1"/>`).join('');
    const arcsHd = `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${rings(210, 70, [40, 70, 100, 130, 160], .55)}</svg>`;

    function plane() {
      const u = R.uid('mobile-g');
      return `<svg viewBox="0 0 260 150" role="img" aria-label="Paper plane carrying a Runo coin and a dollar coin">
        <defs><radialGradient id="${u}a" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#EFE6B8"/><stop offset="1" stop-color="#B3A56A"/></radialGradient>
        <radialGradient id="${u}b" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#E4EEFA"/><stop offset="1" stop-color="#A9C6E8"/></radialGradient></defs>
        <ellipse cx="135" cy="140" rx="70" ry="5" fill="#9DB6D3" opacity=".25"/>
        <polygon points="8,66 124,76 116,104" fill="#CFE0F3"/>
        <polygon points="124,76 250,58 150,102" fill="#DCE8F6"/>
        <polygon points="116,104 124,76 150,102" fill="#B7CDE6"/>
        <g class="m-bob"><circle cx="118" cy="58" r="30" fill="url(#${u}a)" stroke="#9C8F57" stroke-opacity=".5"/><circle cx="118" cy="58" r="23" fill="none" stroke="#fff" stroke-opacity=".5"/>
          <svg x="102" y="43" width="32" height="30" viewBox="0 0 362 360" fill="#8F8450" fill-opacity=".85"><use href="#runo-mark"/></svg></g>
        <g class="m-bob b"><circle cx="172" cy="48" r="27" fill="url(#${u}b)" stroke="#8FB1D6" stroke-opacity=".6"/><circle cx="172" cy="48" r="20" fill="none" stroke="#fff" stroke-opacity=".6"/>
          <text x="172" y="58" text-anchor="middle" font-size="28" fill="#7DA3CF" font-family="inherit" aria-hidden="true">$</text></g>
        <polygon points="120,92 250,62 150,114" fill="#F2F7FC" opacity=".97"/>
        <polygon points="116,104 150,114 132,144" fill="#E4EDF8"/>
        <polygon points="124,76 120,92 116,104" fill="#C5D9EE"/></svg>`;
    }

    /* ---------- the 7 screens ---------- */
    const SCR = [
      () => `<button class="m-round" type="button" data-back aria-label="Close" style="width:2em;height:2em;background:none;box-shadow:none;align-self:flex-start;margin-left:-.4em">${I('close')}</button>
        <p class="m-title" style="margin-top:.5em">Direct your money flow</p>
        <p class="m-sub">Organise, move, and track your funds in one place</p>
        <div class="m-illus">${plane()}</div>
        <ul class="m-bul"><li><span class="m-bi">${I('wallet')}</span>Real-time visibility over your funds</li><li><span class="m-bi">${I('chart')}</span>Instant transfers and global access</li><li><span class="m-bi">${I('spark')}</span>Built for speed and control</li></ul>
        <button class="m-cta" type="button" data-cta>Get started</button>`,
      () => `<div class="m-pills" role="group" aria-label="Currency">
          <button class="m-pill" type="button" data-grp="cur" data-cur="USD" aria-pressed="true">${flag('us')}USD</button>
          <button class="m-pill" type="button" data-grp="cur" data-cur="EUR" aria-pressed="false">${flag('eu')}EUR</button></div>
        <div class="m-rings"><svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="color:#C9D3E2">${rings(150, 80, [34, 58, 84, 112, 142], .55)}</svg>
          <div class="m-disc" role="img" aria-label="US flag and dollar coin" data-disc><span data-flagslot>${flag('us')}</span><span class="m-coin" data-coin aria-hidden="true">$</span></div></div>
        <p class="m-title">Create your<br>Runo Business Account</p>
        <ul class="m-feat">
          <li><span class="m-fi" style="background:#8FB8EA">${I('chart')}</span><span><b>Full visibility over your cash flow</b><small>See your inflows, outflows, and runway at a glance</small></span></li>
          <li><span class="m-fi" style="background:#9D79E6">${I('spark')}</span><span><b>Control every payment before it moves</b><small>Approve, schedule, or pause transactions instantly</small></span></li>
          <li><span class="m-fi" style="background:#4F9A93">${I('card')}</span><span><b>Issue cards and track team spend</b><small>Create cards for your team and stay in control</small></span></li></ul>
        <p class="m-note" style="margin-top:auto">Built for founders and small teams</p>
        <button class="m-cta" type="button" data-cta>Create account</button>`,
      () => `<button class="m-round" type="button" data-back aria-label="Back" style="width:2em;height:2em;background:none;box-shadow:none;margin-left:-.4em;align-self:flex-start">${I('arrow-left')}</button>
        <p class="m-title">Choose your Runo account</p>
        <p class="m-sub">Manage your money with tools tailored to your needs. You can switch or add accounts anytime.</p>
        <button class="m-acct" type="button" data-grp="acct" aria-pressed="false"><span class="tick">${I('check')}</span>
          <span class="row"><span><span class="ico">${I('user')}</span><b>Runo Private</b><small>For personal finances, spending, and global access</small></span><span class="mini" data-card="sage"></span></span></button>
        <button class="m-acct" type="button" data-grp="acct" aria-pressed="false"><span class="tick">${I('check')}</span>
          <span class="row"><span><span class="ico">${I('wallet')}</span><b>Runo Business</b><small>For founders, startups, and international payments</small></span><span class="mini" data-card="ice"></span></span></button>
        <button class="m-cta" type="button" data-cta>Continue</button>`,
      () => {
        const hs = [.25, .45, .7, .55, 1, .45];
        const bars = hs.map((h, i) => `<rect x="${i * 20}" y="${(40 - h * 40).toFixed(1)}" width="16" height="${(h * 40).toFixed(1)}" rx="2" fill="${i === 4 ? '#BAD5F3' : '#DCE6F4'}"/>`).join('');
        const rows = [['Reserve account **1234', '$25,000.00', '3.7%'], ['Treasury account **9134', '$42,800.50', '4.1%'], ['Reserve account **5672', '$53,000.00', '5.1%']]
          .map((r) => `<li><span class="av">${R.mark()}</span><span class="n"><b>${r[0]}</b><small>Yield optimization</small></span><span class="v">${r[1]}<small>${r[2]} APY</small></span></li>`).join('');
        return `<div class="m-hd sky">${arcsHd}</div><div class="m-in">
          <p class="m-hi"><span>Welcome back,</span><span>David Clark</span></p>
          <p class="m-accno">Individual account ****1116</p>
          <div class="m-bal"><div class="l">Total balance</div><div class="a"><b>$92,345.67</b><span class="chip up">+2.4%</span></div>
            <svg class="bars" viewBox="0 0 116 40" preserveAspectRatio="none" role="img" aria-label="Monthly balance, December to May">${bars}</svg>
            <div class="m-mon"><span>DEC</span><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span></div></div>
          <div class="m-qa"><button class="p" type="button" data-cta>Transfer funds</button><button class="s" type="button" data-toast="Top Up">Top Up</button></div>
          <ul class="m-accts">${rows}</ul></div>`;
      },
      () => `<p class="m-title">How can I help you today?</p>
        <div class="m-cards">
          <button class="m-cx" type="button" data-fill="Review cash position"><b>Review cash position</b><small>See inflows, outflows and runway</small>
            <span class="viz"><svg viewBox="0 0 100 50" role="img" aria-label="Cash position sparkline" preserveAspectRatio="none" height="40"><defs><linearGradient id="${R.uid('mobile-sp')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FB6E6" stop-opacity=".5"/><stop offset="1" stop-color="#8FB6E6" stop-opacity="0"/></linearGradient></defs>
            <path d="M0 40 L10 34 L18 38 L28 26 L38 30 L48 14 L56 24 L66 20 L76 32 L88 28 L100 36 V50 H0Z" fill="#DCE8F7" opacity=".7"/>
            <path d="M0 40 L10 34 L18 38 L28 26 L38 30 L48 14 L56 24 L66 20 L76 32 L88 28 L100 36" fill="none" stroke="#6CA3E3" stroke-width="1.2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/><circle cx="48" cy="14" r="1.6" fill="#4F8FDB"/></svg></span>
            <span class="go">${I('arrow-right')}</span></button>
          <button class="m-cx" type="button" data-fill="Manage outgoing payments"><b>Manage outgoing payments</b><small>Vendors, contractors, subscriptions</small>
            <span class="viz" data-hair></span><span class="go">${I('arrow-right')}</span></button></div>
        <p class="m-type">Type or voice your option</p>
        <div class="m-orbwrap"><div data-orb="170"></div></div>
        <div class="m-bar">${I('plus')}<input type="text" placeholder="How can I help you?" aria-label="Ask Runo Copilot"><button class="m-send" type="button" data-cta aria-label="Send">${I('arrow-up')}</button></div>`,
      () => {
        let dates = '';
        for (let d = 19; d <= 27; d++) dates += `<button class="m-date" type="button" data-grp="date" data-d="${d}" style="--k:${d - 23}" aria-pressed="${d === 23}" aria-label="${d} March">${d}</button>`;
        return `<div class="m-top">${arcsHd}</div><div class="m-in">
          <div class="m-seg"><div class="m-segs" role="group" aria-label="Period"><button type="button" data-grp="seg" aria-pressed="true">This week</button><button type="button" data-grp="seg" aria-pressed="false">Scheduled</button></div>
            <div class="m-tb"><span class="m-round" aria-hidden="true">${I('doc')}</span><span class="m-round" aria-hidden="true">${I('grid')}</span></div></div>
          <p class="m-dtitle" data-dt aria-live="polite">23 March</p>
          <div class="m-dates" role="group" aria-label="Date, March">${dates}</div>
          <div class="m-flow"><div class="m-fl" role="group" aria-label="Direction"><button type="button" data-grp="flow" aria-pressed="false">Inflows</button><button type="button" data-grp="flow" aria-pressed="true">Outflows</button></div>
            <button class="m-wf" type="button" data-toast="Apply workflow">Apply workflow ${I('caret')}</button></div>
          <ul class="m-form">
            <li><span class="ic">${I('user')}</span><span class="lb">Name</span><span class="vl">AWS Europe</span></li>
            <li><span class="ic">${I('wallet')}</span><span class="lb">Amount</span><span class="vl">$14,020</span></li>
            <li><span class="ic">${I('grid')}</span><span class="lb">Type</span><span class="vl">Contractor</span></li>
            <li><span class="ic">${I('doc')}</span><span class="lb">Context / notes<small>Add context (optional)</small></span></li>
            <li><span class="ic">${I('swap')}</span><span class="lb">Save as workflow<small>Name this workflow</small></span><button class="m-sw" type="button" role="switch" aria-checked="true" aria-label="Save as workflow" data-sw></button></li></ul>
          <button class="m-cta" type="button" data-cta><span class="ok">${I('check')}</span><span class="t0">Create operation</span><span class="t1">Operation created</span></button></div>`;
      },
      () => `<p class="eb">International transfers</p>
        <p class="m-title">Finance that moves with your business, worldwide</p>
        <div class="m-ctry" role="group" aria-label="Countries">${COUNTRIES.map((c, i) => `<button class="m-cp" type="button" data-grp="ctry" data-cc="${c[0]}" data-cn="${c[1]}" aria-pressed="${i === 1}">${flag(c[0])}${c[1]}</button>`).join('')}</div>
        <div class="m-amt" data-amt><span data-amtflag>${flag('es')}</span><span class="nm"><b data-amtname>Spain</b></span><span class="nu">5,466.82<small>EUR</small></span></div>
        <button class="m-cta" type="button" data-cta>Get started</button>`
    ];
    const WRAP_CLASS = ['', '', '', 'm-s4', '', '', ''];
    const scr = (i, stat) => `<div class="m-scr m-s${i + 1}${stat ? ' is-static' : ''}" data-i="${i}">${SCR[i]()}</div>`;

    function phone(list, extra) {
      return `<div class="phone"${extra || ''}><span class="phone-island"></span><div class="phone-screen"><div class="m-stack">${list}</div>
        <div class="phone-status m-status"><span>9:41</span>${sys}</div><span class="phone-home"></span></div></div>`;
    }
    function hydrate(el) {
      $$('[data-card]', el).forEach((n) => { n.innerHTML = R.card(n.dataset.card); });
      $$('[data-orb]', el).forEach((n) => R.orb(n, +n.dataset.orb || 160));
      $$('[data-hair]', el).forEach((n) => {
        const hs = [.5, .8, .35, .9, .6, .4, .75, .5, .95, .3, .6, .45, .8, .55, .35, .7];
        const s = R.bars(n, { n: 16, h: 44, gap: 4, w: 1.6, color: '#7FAEE6', color2: '#DCE8F7', px: 56, heights: (i) => hs[i], label: 'Outgoing payments bars' });
        s.classList.add('in'); s.style.maxWidth = 'none';
      });
    }

    /* ---------- A) hero phone + stepper ---------- */
    const heroHost = $('#mobile-hero-phone');
    heroHost.innerHTML = phone(SCR.map((_, i) => scr(i)).join(''), ' data-hero id="mobile-hero-panel" role="tabpanel" aria-label="Interactive Runo app screen"');
    const heroPhone = $('.phone', heroHost); hydrate(heroPhone);
    $('#mobile-hero-rings').innerHTML = rings(300, 340, [120, 190, 260, 330, 400, 470], .5);
    $('#mobile-prev').innerHTML = I('arrow-left'); $('#mobile-next').innerHTML = I('arrow-right');
    $('#mobile-rprev').innerHTML = I('arrow-left'); $('#mobile-rnext').innerHTML = I('arrow-right');
    const stepsEl = $('#mobile-steps');
    stepsEl.innerHTML = NAMES.map((n, i) => `<button class="m-step" type="button" role="tab" id="mobile-tab${i}" aria-controls="mobile-hero-panel" aria-selected="false" tabindex="-1"><span>${String(i + 1).padStart(2, '0')}</span>${n}</button>`).join('');
    const tabs = $$('.m-step', stepsEl), screens = $$('.m-scr', heroPhone);
    let cur = -1, opTimer;
    function resetOp(s) { s.classList.remove('is-done'); }
    function go(n, focus) {
      n = Math.max(0, Math.min(6, n)); if (n === cur) return;
      const prevI = cur; cur = n;
      screens.forEach((s, i) => {
        s.classList.toggle('is-on', i === n); s.classList.toggle('is-before', i < n);
        s.inert = i !== n; s.setAttribute('aria-hidden', i !== n ? 'true' : 'false');
      });
      tabs.forEach((t, i) => { t.setAttribute('aria-selected', i === n); t.tabIndex = i === n ? 0 : -1; });
      $('#mobile-hero-panel').setAttribute('aria-labelledby', 'mobile-tab' + n);
      $('#mobile-prog').style.width = ((n + 1) / 7 * 100) + '%';
      $('#mobile-prev').disabled = n === 0; $('#mobile-next').disabled = n === 6;
      $('#mobile-live').textContent = `Screen ${n + 1} of 7: ${NAMES[n]}`;
      if (prevI === 5) resetOp(screens[5]);
      if (focus) tabs[n].focus();
    }
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    stepsEl.addEventListener('keydown', (e) => {
      const k = e.key; let n = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') n = cur + 1; else if (k === 'ArrowUp' || k === 'ArrowLeft') n = cur - 1;
      else if (k === 'Home') n = 0; else if (k === 'End') n = 6;
      if (n === null) return; e.preventDefault(); go(n, true);
    });
    $('#mobile-prev').addEventListener('click', () => go(cur - 1)); $('#mobile-next').addEventListener('click', () => go(cur + 1));
    go(0);

    /* ---------- B) row of seven ---------- */
    const row = $('#mobile-row');
    row.innerHTML = NAMES.map((n, i) => `<figure class="m-item"><div class="m-fl8" style="--fd:${(-i * 0.9).toFixed(1)}s">${phone(scr(i, true))}</div><figcaption><span>${String(i + 1).padStart(2, '0')}</span>${n}</figcaption></figure>`).join('');
    $$('.phone', row).forEach(hydrate);
    const rp = $('#mobile-rprev'), rn = $('#mobile-rnext');
    const stepW = () => { const it = $('.m-item', row); return it ? it.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || 32) : 280; };
    const upd = () => { rp.disabled = row.scrollLeft < 4; rn.disabled = row.scrollLeft > row.scrollWidth - row.clientWidth - 4; };
    rp.addEventListener('click', () => row.scrollBy({ left: -stepW() * (innerWidth > 900 ? 2 : 1), behavior: R.reduce ? 'auto' : 'smooth' }));
    rn.addEventListener('click', () => row.scrollBy({ left: stepW() * (innerWidth > 900 ? 2 : 1), behavior: R.reduce ? 'auto' : 'smooth' }));
    row.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
    let down = false, sx = 0, sl = 0, moved = 0;
    row.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('button,input,a,.m-ctry')) return;
      down = true; sx = e.clientX; sl = row.scrollLeft; moved = 0; row.classList.add('is-drag');
    });
    addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); row.scrollLeft = sl - dx; });
    addEventListener('pointerup', () => { if (!down) return; down = false; row.classList.remove('is-drag'); });
    row.addEventListener('click', (e) => { if (moved > 5) { e.stopPropagation(); e.preventDefault(); moved = 0; } }, true);
    row.addEventListener('keydown', (e) => {
      if (e.target !== row) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); rn.click(); } else if (e.key === 'ArrowLeft') { e.preventDefault(); rp.click(); }
    });

    /* ---------- C) 3D showcases ---------- */
    $$('[data-ph]').forEach((h) => { h.outerHTML = phone(scr(+h.dataset.ph, true)); });
    $$('.m-stage3d').forEach((st) => {
      hydrate(st);
      if (R.reduce) return;
      st.addEventListener('pointermove', (e) => {
        const r = st.getBoundingClientRect();
        st.style.setProperty('--tx', (((e.clientX - r.left) / r.width - .5) * 2).toFixed(3));
        st.style.setProperty('--ty', (((e.clientY - r.top) / r.height - .5) * 2).toFixed(3));
      });
      st.addEventListener('pointerleave', () => { st.style.setProperty('--tx', 0); st.style.setProperty('--ty', 0); });
    });

    /* ---------- screen interactions (every phone) ---------- */
    root.addEventListener('click', (e) => {
      const t = e.target;
      const g = t.closest('[data-grp]');
      if (g) {
        const s = g.closest('.m-scr');
        $$(`[data-grp="${g.dataset.grp}"]`, s).forEach((b) => b.setAttribute('aria-pressed', b === g ? 'true' : 'false'));
        if (g.dataset.d) $('[data-dt]', s).textContent = g.dataset.d + ' March';
        if (g.dataset.cur) {
          const eur = g.dataset.cur === 'EUR', d = $('[data-disc]', s);
          $('[data-flagslot]', d).innerHTML = flag(eur ? 'eu' : 'us'); $('[data-coin]', d).textContent = eur ? '€' : '$';
          d.setAttribute('aria-label', eur ? 'EU flag and euro coin' : 'US flag and dollar coin');
          d.classList.remove('swap'); void d.offsetWidth; d.classList.add('swap');
        }
        if (g.dataset.cc) { $('[data-amtflag]', s).innerHTML = flag(g.dataset.cc); $('[data-amtname]', s).textContent = g.dataset.cn; }
        return;
      }
      const sw = t.closest('[data-sw]'); if (sw) { sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') !== 'true'); return; }
      const f = t.closest('[data-fill]'); if (f) { const inp = $('input', f.closest('.m-scr')); inp.value = f.dataset.fill; inp.focus(); return; }
      const to = t.closest('[data-toast]'); if (to) { R.toast(to.dataset.toast); return; }
      const bk = t.closest('[data-back]'); if (bk) { if (bk.closest('[data-hero]')) go(cur - 1); return; }
      const cta = t.closest('[data-cta]'); if (!cta) return;
      const s = cta.closest('.m-scr'), i = +s.dataset.i, hero = !!cta.closest('[data-hero]');
      if (i === 5 && !s.classList.contains('is-done')) {
        s.classList.add('is-done');
        if (hero) { clearTimeout(opTimer); opTimer = setTimeout(() => { if (cur === 5) go(6); }, 1400); }
        return;
      }
      const nxt = i === 6 ? 0 : i + 1;
      go(nxt);
      if (!hero) $('.m-stage').scrollIntoView({ behavior: R.reduce ? 'auto' : 'smooth', block: 'center' });
    });
    $$('[data-grp="cur"]').forEach(() => {});
  });
}
