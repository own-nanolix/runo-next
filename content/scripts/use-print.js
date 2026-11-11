/* Generated from src/pages/use-print.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('use-print', function (root) {
    const R = Runo, $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const MAIL = 'hello@runo.finance', TEL = '1800 123 4567', WEB = 'runo.finance';
    const M = (c = '') => `<svg class="mk ${c}" viewBox="0 0 362 360" aria-hidden="true"><use href="#runo-mark"/></svg>`;
    /* contour motif: nested blobs (d = 0 gives clean rings) */
    const blob = (cx, cy, n, step, ph = 0, d = 1) => {
      let o = '';
      for (let i = 1; i <= n; i++) {
        let p = '';
        for (let a = 0; a <= 90; a++) {
          const t = a / 90 * Math.PI * 2, k = i * step * (1 + d * (.1 * Math.sin(3 * t + ph + i * .12) + .05 * Math.sin(5 * t + ph * 2)));
          p += (a ? 'L' : 'M') + (cx + k * Math.cos(t)).toFixed(1) + ' ' + (cy + k * Math.sin(t)).toFixed(1);
        }
        o += `<path d="${p}Z"/>`;
      }
      return o;
    };
    const CT = (vb, inner, style = '') => `<svg class="ct" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="${style}">${inner}</svg>`;
    const foot = `<span>${MAIL}</span><span>${TEL}</span><span>${WEB}</span>`;
    /* friction curve from the case study (plateau, drop, small bump, tail) */
    const CV = [[0, .95], [.14, .95], [.2, .9], [.38, .1], [.45, .09], [.62, .3], [.7, .3], [.84, .1], [1, .07]];
    const curve = (t) => { for (let i = 1; i < CV.length; i++) if (t <= CV[i][0]) { const a = CV[i - 1], b = CV[i], u = (t - a[0]) / (b[0] - a[0] || 1); return a[1] + (b[1] - a[1]) * (1 - Math.cos(u * Math.PI)) / 2; } return .07; };
    const bodyBars = (ws) => `<div class="lh-body">${ws.map((w) => `<i style="width:${w}%${w ? '' : ';visibility:hidden'}"></i>`).join('')}</div>`;

    /* ---------- 01 business cards ---------- */
    const bcBack = (dark) => `<div class="bc-f bk ${dark ? 'dk' : 'lt'}">${CT('0 0 85 55', blob(90, 64, 9, 6.5, 1.2), `color:${dark ? '#fff' : '#9CC3EE'};opacity:${dark ? .16 : .8}`)}${M('bc-mk')}
      <div class="bc-t"><b>David Clark</b><span>${MAIL}</span><span>${TEL}</span><span>${WEB}</span></div></div>`;
    const t01 = `<div class="o bc" style="--k0:.46;--sm:1.55">
      <div class="bc-c a"><div class="bc-f a">${CT('0 0 85 55', blob(-6, 62, 8, 7, .4), 'color:#fff;opacity:.6')}${M()}</div>${bcBack(false)}</div>
      <div class="bc-c b"><div class="bc-f b">${CT('0 0 85 55', blob(88, -6, 8, 7, 2), 'color:#fff;opacity:.16')}${M()}</div>${bcBack(true)}</div></div>`;

    /* ---------- 02 letterhead ---------- */
    const t02 = `<div class="o lh" style="--k0:.2;--sm:1.7">
      <div class="sh lh-bk"><div class="hr" style="top:44em"></div>${M('lh-mk')}</div>
      <div class="sh lh-fr">${CT('0 0 100 100', blob(100, 100, 9, 9, .8), 'left:auto;top:auto;right:0;bottom:0;width:100em;height:100em;color:#9CC3EE;opacity:.7')}
        ${M('lh-mk')}<div class="up-bars b-lh" style="right:20em;top:20em;width:62em;height:10em"></div><div class="hr" style="top:44em"></div>
        <div class="lh-body" style="top:62em"><i style="width:34%"></i><i style="width:28%"></i><i style="width:24%"></i></div>
        ${bodyBars([100, 97, 100, 92, 58, 0, 100, 98, 94, 100, 96, 40, 0, 100, 90, 54]).replace('class="lh-body"', 'class="lh-body" style="top:112em;gap:3.2em"')}
        <div class="hr" style="bottom:28em"></div><div class="lh-foot">${foot}</div></div></div>`;

    /* ---------- 03 envelopes ---------- */
    const env = (k, label) => `<div class="env ${k}"><div class="env-b">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 100L50 46L100 100M0 0L50 54L100 0" fill="none" stroke="rgba(20,34,58,.12)" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>
        <div class="env-in"></div></div>
      <div class="fl-sh"><i></i></div>
      <div class="fl"><div class="fl-f fr">${M()}</div><div class="fl-f li"><b>${CT('0 0 100 60', blob(50, 0, 8, 9, 0, 0), 'color:#fff')}</b></div></div></div>`;
    const t03 = `<div class="o ev" style="--k0:.19" role="img" aria-label="C5 and DL envelopes, flaps closed and open">${env('c5')}${env('dl')}</div>`;

    /* ---------- 04 notebook ---------- */
    const t04 = `<div class="o nb" style="--k0:.24;--sm:1.15"><div class="nb-pg">${M()}</div>
      <div class="nb-cv"><div class="nb-cf"><div class="nb-dm">${M('lit')}${M('dark')}</div><div class="nb-band"></div></div><div class="nb-cb">${CT('0 0 148 210', blob(20, 200, 10, 12, 1, 1), 'color:#BAD5F3;opacity:.8')}</div></div></div>`;

    /* ---------- 05 folder ---------- */
    const t05 = `<div class="o fd" style="--k0:.15;--sm:1.3"><div class="fd-p l">${CT('0 0 220 310', blob(30, 330, 16, 15, .6), 'color:#fff;opacity:.2')}${M()}<div class="fd-dom"><span>${WEB}</span></div></div>
      <div class="fd-p r"><div class="fd-sheet">${M()}${bodyBars([100, 94, 100, 70, 0, 100, 92])}</div><div class="fd-pkw"><div class="fd-pk"></div></div>
        <div class="fd-card">${M()}</div><div class="fd-slit a"><i></i></div><div class="fd-slit b"><i></i></div></div></div>`;

    /* ---------- 06 invoice ---------- */
    const rows = [['Contractor payouts', '$8,920'], ['Vendor invoices', '$6,740'], ['Software &amp; tools', '$2,560']];
    const t06 = `<div class="o lh" style="--k0:.2;--sm:1.7">
      <div class="sh lh-bk"><div class="hr" style="top:44em"></div></div>
      <div class="sh lh-fr">${M('lh-mk')}<div class="iv-h"><b>Invoice</b><span>23 March</span></div><div class="hr" style="top:44em"></div>
        <div class="iv-to"><span class="lbl">Billed to</span><b>David Clark</b></div>
        <div class="iv-tb"><div class="iv-r hd"><span>Description</span><span>Amount</span></div>
          ${rows.map((r, i) => `<div class="iv-r" style="--d:${i * .12}s"><span>${r[0]}</span><span class="num">${r[1]}</span></div>`).join('')}
          <div class="iv-r tot"><span>Total</span><span class="num">$18,220</span></div></div>
        <div class="iv-ch"><div class="up-bars b-iv" style="position:relative;height:30em"></div></div>
        <div class="iv-lg"><span><i style="background:#4FA3F2"></i>Contractor payouts</span><span><i style="background:#A7B8CD"></i>Vendor invoices</span><span><i style="background:#F5B27A"></i>Software &amp; tools</span></div>
        <div class="hr" style="bottom:28em"></div><div class="lh-foot">${foot}</div></div></div>`;

    /* ---------- 07 slides ---------- */
    const t07 = `<div class="o deck" style="--k0:.3;--sm:1.15" role="group" aria-roledescription="carousel" aria-label="Presentation slides">
      <div class="sl sky" data-s="cur" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">${CT('0 0 254 143', blob(220, 170, 9, 17, 0, 0), 'color:#fff;opacity:.85')}
        <div class="sl-top">${M()}<span>Runo.</span></div>
        <div class="sl-w" style="top:42em;width:62%"><p class="sl-h">A new standard for financial control, <em>meet Runo.</em></p></div></div>
      <div class="sl" data-s="next" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3"><div class="sl-top"><span class="lbl" style="font-size:3.4em">// The measurable shift</span><span class="sl-tag"><i></i>New Standard</span></div>
        <div class="hr" style="top:34em;left:17em;right:17em"></div>
        <div class="sl-w" style="top:60em;width:82%"><p class="sl-h" style="font-size:14.6em">81% of financial workflows remain <mark>invisible outside your awareness</mark></p></div>
        <div style="position:absolute;right:17em;bottom:14em;width:44em"><p style="margin:0;font-size:3.5em;color:var(--ink-3)">At this stage, Runo surface invisible system gaps and translate them into actionable clarity</p></div></div>
      <div class="sl" data-s="next2" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3"><div class="sl-top"><span class="lbl" style="font-size:3.4em">Impact overview</span>${M()}</div>
        <div class="sl-w" style="top:30em;width:90%"><p class="sl-h" style="font-size:11em">Reduce <em>operational friction,</em> unlock <em>financial clarity</em> across payments, and business accounts.</p></div>
        <div class="up-bars b-sl" style="left:17em;right:17em;bottom:14em;height:36em"></div></div></div>`;
    const ctl07 = `<div class="dk-ctl"><button class="icon-btn" type="button" data-prev aria-label="Previous slide">${R.icon('arrow-left')}</button><span data-count-lbl aria-live="polite">1 / 3</span><button class="icon-btn" type="button" data-next aria-label="Next slide">${R.icon('arrow-right')}</button></div>`;

    /* ---------- 08 posters ---------- */
    const t08 = `<div class="o ps" style="--k0:.062">
      <div class="po sky" role="img" aria-label="Poster: Control, simplified. Have you?">${CT('0 0 500 700', blob(250, 780, 14, 54, 0, 0), 'color:#fff;opacity:.85')}
        <div class="po-t"><p>Control,</p><p>simplified.</p><p class="q">Have you?</p></div><div class="po-f">${M()}<span>${WEB}</span></div></div>
      <div class="po" style="background:var(--sand)" role="img" aria-label="Poster: 86.3% of financial operations remain dependent on outdated workflows, limiting speed and clarity.">
        <div class="po-tag"><span><i></i>New Standard</span></div>
        <div class="up-bars po-bars b-p2"></div><div class="po-big"><span>86.3%</span></div>
        <div class="po-s"><p><span>Of financial operations remain</span> dependent on outdated workflows, limiting speed and clarity.</p></div>
        <div class="po-f">${M()}<span>${WEB}</span></div></div>
      <div class="po" style="background:#FAFAFA" role="img" aria-label="Poster: friction curve, minus 60 percent"><div class="po-y"><span>Operational friction</span></div>
        <div class="up-bars po-ch b-p3"></div><div class="po-ax" aria-hidden="true"><span>Intake</span><span>Setup</span><span>Accounts</span><span>Payments</span><span>Automation</span><span>Insights</span><span>Scale</span></div>
        <div class="po-f">${M()}<span>${WEB}</span></div></div></div>`;

    /* ---------- 09 welcome card + slip ---------- */
    const t09 = `<div class="o wc" style="--k0:.3;--sm:1.25" role="img" aria-label="Compliment slip and welcome card">
      <div class="wc-slip">${M()}<div class="up-bars b-wc"></div><div class="wc-sc">${foot}</div></div>
      <div class="wc-card sky">${CT('0 0 148 105', blob(142, 118, 9, 12, 0, 0), 'color:#fff;opacity:.85')}<div class="wc-tx"><p>Financial control starts with a single setup.</p></div><div class="wc-f">${M()}<span>${WEB}</span></div></div></div>`;

    /* ---------- 10 stickers ---------- */
    /* [left, top, w, h, shape, art background, art colour, content] — mm on a 260 × 180 sheet */
    const STK = [
      [14, 14, 68, 68, 'disc', 'var(--blue)', '#000', CT('0 0 68 68', blob(34, 34, 7, 5.2, .5, 1), 'color:#fff;opacity:.75') + M()],
      [104, 18, 52, 52, '', '#FAFAFA', '#000', M(), 13],
      [166, 28, 82, 32, 'pill', '#000', '#fff', '<span style="font-size:12em;letter-spacing:-.03em">Runo.</span>'],
      [20, 104, 56, 56, 'disc', '#000', '#fff', M()],
      [96, 110, 44, 44, 'disc', 'var(--lime)', '#000', M()],
      [152, 96, 96, 32, 'pill', 'var(--mint)', '#0B3B34', `<span style="font-size:4.4em">${WEB}</span>`],
      [156, 140, 38, 28, '', 'var(--steel)', '#000', M(), 4.6],
      [206, 140, 42, 28, '', 'var(--sand)', '#000', M(), 4.6],
    ];
    const t10 = `<div class="o ss" style="--k0:.26;--sm:1.3" role="img" aria-label="Sticker and seal sheet: Runo mark seals, Runo. and runo.finance pills">
      ${STK.map(([x, y, w, h, sh, bg, c, inner, r]) => `<div class="stk ${sh}" style="left:${x}em;top:${y}em;width:${w}em;height:${h}em;--rr:${Math.min(w, h) / 2}em${r ? `;--r:${r}em` : ''}"><div class="sa" style="background:${bg};color:${c}">${inner}</div></div>`).join('')}</div>`;

    const items = [
      { n: '01', name: 'Business cards', spec: '85 × 55 mm · Soft Blue and Deep Black stock', st: 'st-sand', html: t01, hint: 'flip the cards' },
      { n: '02', name: 'Letterhead', spec: 'A4 · 210 × 297 mm · Uncoated white stock', st: 'mist', html: t02, hint: 'lift the sheet' },
      { n: '03', name: 'Envelopes', spec: 'C5 229 × 162 mm and DL 220 × 110 mm · Sky-gradient liner', st: 'sky-soft', html: t03, wide: 1, hint: 'open the flaps' },
      { n: '04', name: 'Notebook', spec: 'A5 · 148 × 210 mm · Deep Black cover, Soft Blue page edge', st: 'st-page', html: t04, hint: 'open the cover' },
      { n: '05', name: 'Presentation folder', spec: 'A4 · 220 × 310 mm · Deep Black and Surface Sand board', st: 'steel-grad', html: t05, hint: 'lift the contents' },
      { n: '06', name: 'Invoice / statement', spec: 'A4 · 210 × 297 mm · Uncoated white stock', st: 'st-blue', html: t06, hint: 'highlight the rows' },
      { n: '07', name: 'Presentation slides', spec: '16:9 · 1920 × 1080 px', st: 'st-black st-deck', html: t07, extra: ctl07, hint: 'step the slides; arrow keys go back and forth' },
      { n: '08', name: 'Poster series', spec: 'B2 · 500 × 700 mm · Matt stock, three posters', st: 'st-sky2', html: t08, wide: 1, hint: 'lift the posters' },
      { n: '09', name: 'Welcome card and compliment slip', spec: 'A6 148 × 105 mm and DL 210 × 99 mm', st: 'sky', html: t09, hint: 'fan the cards' },
      { n: '10', name: 'Stickers and seals', spec: '260 × 180 mm sheet · Die-cut matt vinyl', st: 'st-sand', html: t10, hint: 'peel the stickers' },
    ];
    $('[data-grid]').innerHTML = items.map((it, i) => `<article class="card up-tile${it.wide ? ' up-wide' : ''}" tabindex="0" role="group" aria-label="${it.n} ${it.name}. Hover, or press Enter, to ${it.hint}." data-reveal data-delay="${(i % 2) * 110}">
      <div class="up-stage ${it.st}"><div class="up-tilt">${it.html}</div>${it.extra || ''}</div>
      <div class="up-cap"><span class="up-n">${it.n}</span><h2 class="up-name">${it.name}</h2><p class="up-spec">${it.spec}</p></div></article>`).join('');

    /* ---------- hairline bars ---------- */
    const bars = (sel, o, fill) => {
      const el = $(sel); if (!el) return;
      R.bars(el, o);
      if (fill) $$('rect', el).forEach((r, i) => r.setAttribute('fill', fill(i, o.n)));
    };
    bars('.b-lh', { n: 44, h: 12, gap: 4, color: '#4FA3F2', color2: '#BAD5F3', label: 'Hairline bar motif', heights: (i, n) => .3 + .7 * (i / n) * (.65 + .35 * Math.abs(Math.sin(i * .7))) });
    /* one hairline per ~$250, split in the three amounts (as the Cash Flow screen does), a gap between groups */
    const seg = (i, n) => (i < n * .49 ? '#4FA3F2' : i < n * .86 ? '#A7B8CD' : '#F5B27A');
    const cut = (i, n) => [Math.round(n * .49), Math.round(n * .86)].includes(i);
    bars('.b-iv', { n: 74, h: 30, gap: 4, label: 'Contractor payouts $8,920, vendor invoices $6,740, software and tools $2,560', heights: (i, n) => cut(i, n) ? 0 : .86 + .14 * Math.abs(Math.sin(i * 1.7)) }, (i, n) => cut(i, n) ? 'transparent' : seg(i, n));
    bars('.b-sl', { n: 90, h: 36, gap: 4, label: 'Operational friction falling by 60%', heights: (i, n) => curve(i / (n - 1)) }, (i, n) => i < 9 ? `rgba(245,178,122,${1 - i * .07})` : '#8DBDF1');
    /* the m15 chart reduced to its two bars: 86.3% tall field of hairlines, 13.7% low step */
    bars('.b-p2', { n: 60, h: 200, gap: 7, w: 1.2, label: '86.3 percent against 13.7 percent', heights: (i) => i < 52 ? .863 : .137 }, (i) => i < 52 ? '#8DBDF1' : '#B4B8BF');
    bars('.b-wc', { n: 40, h: 9, gap: 4, label: 'Hairline bar motif', color: '#4FA3F2', color2: '#BAD5F3', heights: (i, n) => .35 + .65 * Math.abs(Math.sin(i * .5)) });
    (() => {
      const el = $('.b-p3'); if (!el) return; const n = 90, h = 300, g = 4;
      R.bars(el, { n, h, gap: g, label: 'Operational friction falls by 60% from intake to scale', heights: (i) => curve(i / (n - 1)) });
      $$('rect', el).forEach((r, i) => r.setAttribute('fill', i < 9 ? `rgba(245,178,122,${1 - i * .07})` : '#BAD5F3'));
      let d = ''; for (let i = 0; i < n; i++) d += (i ? 'L' : 'M') + (i * g + .7).toFixed(1) + ' ' + (h - curve(i / (n - 1)) * h).toFixed(1);
      el.insertAdjacentHTML('beforeend', `<svg class="cv" viewBox="0 0 ${n * g} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${d}"/></svg>`);
      const dots = [0, 1, 2, 3, 4, 9, 10, 56, 57, 58, 59, 60].map((i) => `<i class="dot" style="left:${(i / (n - 1) * 100).toFixed(1)}%;bottom:${(curve(i / (n - 1)) * 100).toFixed(1)}%"></i>`).join('');
      el.insertAdjacentHTML('beforeend', dots + '<span class="po-chip">-60%</span>');
    })();

    /* ---------- deck stepping (07) ---------- */
    const t7 = $$('.up-tile')[6], sls = $$('.sl', t7), lbl = $('[data-count-lbl]', t7); let cur = 0;
    const setDeck = (i) => {
      cur = (i + sls.length) % sls.length;
      sls.forEach((s, k) => { const p = (k - cur + sls.length) % sls.length; s.dataset.s = ['cur', 'next', 'next2'][p]; s.setAttribute('aria-hidden', p ? 'true' : 'false'); });
      lbl.textContent = (cur + 1) + ' / ' + sls.length;
    };
    setDeck(0);
    $('[data-next]', t7).addEventListener('click', () => setDeck(cur + 1));
    $('[data-prev]', t7).addEventListener('click', () => setDeck(cur - 1));
    t7._act = () => setDeck(cur + 1);
    t7._key = (e) => { if (e.key === 'ArrowRight') setDeck(cur + 1); if (e.key === 'ArrowLeft') setDeck(cur - 1); };

    /* ---------- tile interaction: one state class (.on) — mouse hover sets it, Enter/Space or a tap toggles it,
       leaving the tile (focus or pointer) clears it. The deck (07) steps instead of toggling. ---------- */
    $$('.up-tile').forEach((t) => {
      const st = $('.up-stage', t), tl = $('.up-tilt', t), set = (v) => t.classList.toggle('on', v);
      t.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') set(true); });
      t.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !t.contains(document.activeElement)) set(false); });
      t.addEventListener('focusout', (e) => { if (!t.contains(e.relatedTarget) && !t.matches(':hover')) set(false); });
      t.addEventListener('keydown', (e) => {
        if (e.target !== t) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t._act ? t._act() : set(!t.classList.contains('on')); }
        if (t._key) t._key(e);
      });
      t.addEventListener('click', (e) => { if (e.pointerType !== 'mouse' && e.detail && !t._act && !e.target.closest('button,a')) set(!t.classList.contains('on')); });
      if (R.reduce) return;
      st.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        tl.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg'); tl.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
      });
      st.addEventListener('pointerleave', () => { tl.style.setProperty('--ry', '0deg'); tl.style.setProperty('--rx', '0deg'); });
    });
  });
}
