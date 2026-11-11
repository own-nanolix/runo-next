/* Generated from src/pages/brand-kit.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('brand-kit', function (root) {
    const $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const watch = (el, fn, thr = 0.25) => { const o = new IntersectionObserver((es) => es.forEach((e) => fn(e.isIntersecting, e.target)), { threshold: thr }); o.observe(el); return o; };
    const replay = (el) => { el.classList.remove('in', 'drop'); void el.offsetWidth; el.classList.add(el.dataset.cls || 'in'); };
    const onceIn = (el, cls = 'in') => watch(el, (v) => { if (v) el.classList.add(cls); });
    const I = (n) => Runo.icon(n);

    /* ---------- sticky section nav ---------- */
    const SECS = [['board', 'Board'], ['colour', 'Colour'], ['type', 'Typography'], ['components', 'Components'], ['dataviz', 'Data-viz'], ['icons', 'Icons'], ['tokens', 'Tokens'], ['motion', 'Motion']];
    const nav = $('#brand-kit-nav');
    nav.innerHTML = SECS.map(([id, t], i) => `<button type="button" data-s="${id}" aria-current="${i === 0}">${t}</button>`).join('');
    nav.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; $('#brand-kit-s-' + b.dataset.s).scrollIntoView({ behavior: Runo.reduce ? 'auto' : 'smooth', block: 'start' }); });
    const spy = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) $$('button', nav).forEach((b) => b.setAttribute('aria-current', 'brand-kit-s-' + b.dataset.s === e.target.id)); }), { rootMargin: '-30% 0px -60% 0px' });
    SECS.forEach(([id]) => spy.observe($('#brand-kit-s-' + id)));

    /* ---------- 1 · board interactions ---------- */
    $$('[data-hex]').forEach((b) => b.addEventListener('click', () => Runo.copy(b.dataset.hex)));
    $('#brand-kit-steel').addEventListener('click', () => Runo.copy('linear-gradient(100deg, #6F8AAA 0%, #A7B8CD 50%, #D9DFEC 100%)'));
    const spec = $('#brand-kit-spec'), typ = $('#brand-kit-type');
    const setW = (m) => { spec.classList.toggle('med', m); typ.classList.toggle('med', m); $$('.t1 button', typ).forEach((x, j) => { x.classList.toggle('on', m ? j === 1 : j === 0); x.setAttribute('aria-pressed', m ? j === 1 : j === 0); }); };
    spec.addEventListener('click', () => setW(!spec.classList.contains('med')));
    $$('.t1 button', typ).forEach((s, i) => s.addEventListener('click', () => setW(i === 1)));

    /* ---------- 2 · colour cards ---------- */
    const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const lum = (a) => 0.2126 * lin(a[0]) + 0.7152 * lin(a[1]) + 0.0722 * lin(a[2]);
    const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
    const grade = (r) => r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA large' : 'Fails';
    const PAL = [['Steel Layer', '#A7B8CD', '--steel'], ['Soft Blue', '#BAD5F3', '--blue'], ['Mint Layer', '#CEF5ED', '--mint'], ['Signal Lime', '#F6FFD8', '--lime'],
      ['Surface Sand', '#F4F2EC', '--sand'], ['Base White', '#FFFFFF', '--white'], ['Text Subtle', '#F2F3F5', '--subtle'], ['Deep Black', '#000000', '--black']];
    $('#brand-kit-cards').innerHTML = PAL.map(([n, h, t], i) => {
      const c = rgb(h), k = cr(c, [0, 0, 0]), w = cr(c, [255, 255, 255]), best = k >= w ? '#000' : '#fff';
      return `<article class="bk-cc" data-reveal data-delay="${(i % 4) * 80}">
        <div class="sw" style="--c:${h};color:${best}"><span class="aa" aria-hidden="true">Aa <small>${Math.max(k, w).toFixed(1)}:1</small></span></div>
        <div class="bd"><h3>${n}</h3>
          <button type="button" class="bk-hex" data-hex="${h}" aria-label="Copy ${n} hex ${h}">${h}${I('doc')}</button>
          <div class="meta"><span>RGB ${c.join(', ')}</span><span>${t}</span></div>
          <div class="bk-cr"><span>vs black <b>${k.toFixed(2)}:1</b> ${grade(k)}</span><span>vs white <b>${w.toFixed(2)}:1</b> ${grade(w)}</span></div></div></article>`;
    }).join('');
    $$('#brand-kit-cards .bk-hex').forEach((b) => b.addEventListener('click', () => Runo.copy(b.dataset.hex)));

    /* ---------- 2b · gradient panels (SVG) ---------- */
    const GR = [
      { id: 'sky', n: 'Sky', css: 'linear-gradient(180deg, #A9C7EE 0%, #CFE0F5 46%, #F3F5F7 100%)', base: null, layers: [{ t: 'l', c: [0, 0, 0, 1], s: [[0, '#A9C7EE'], [46, '#CFE0F5'], [100, '#F3F5F7']] }] },
      { id: 'steel', n: 'Steel', css: 'linear-gradient(100deg, #6F8AAA 0%, #A7B8CD 50%, #D9DFEC 100%)', base: null, layers: [{ t: 'l', c: [0, 0.4, 1, 0.6], s: [[0, '#6F8AAA'], [50, '#A7B8CD'], [100, '#D9DFEC']] }] },
      { id: 'mist', n: 'Mist', css: 'radial-gradient(60% 50% at 20% 20%, #6F8FB4, transparent 60%), radial-gradient(50% 45% at 70% 35%, #E4E7EC, transparent 70%), radial-gradient(60% 60% at 40% 90%, #C6CBD4, transparent 70%), #AEB9C9', base: '#AEB9C9',
        layers: [{ t: 'r', c: [0.2, 0.2, 0.55], s: [[0, '#6F8FB4'], [100, '#6F8FB4', 0]] }, { t: 'r', c: [0.7, 0.35, 0.5], s: [[0, '#E4E7EC'], [100, '#E4E7EC', 0]] }, { t: 'r', c: [0.4, 0.9, 0.6], s: [[0, '#C6CBD4'], [100, '#C6CBD4', 0]] }] },
      { id: 'foot', n: 'Sand to blue footer', css: 'linear-gradient(180deg, #F1EFEA 0%, #DCE4F0 38%, #A9C4EC 100%)', base: null, layers: [{ t: 'l', c: [0, 0, 0, 1], s: [[0, '#F1EFEA'], [38, '#DCE4F0'], [100, '#A9C4EC']] }] },
    ];
    $('#brand-kit-grads').innerHTML = GR.map((g, gi) => {
      let defs = '', rects = g.base ? `<rect width="400" height="210" fill="${g.base}"/>` : '', stops = [];
      g.layers.forEach((L, li) => {
        const id = `brand-kit-g${gi}-${li}`;
        const st = L.s.map(([o, c, a]) => `<stop offset="${o}%" stop-color="${c}"${a === 0 ? ' stop-opacity="0"' : ''}/>`).join('');
        defs += L.t === 'l' ? `<linearGradient id="${id}" x1="${L.c[0]}" y1="${L.c[1]}" x2="${L.c[2]}" y2="${L.c[3]}">${st}</linearGradient>` : `<radialGradient id="${id}" cx="${L.c[0]}" cy="${L.c[1]}" r="${L.c[2]}">${st}</radialGradient>`;
        rects += `<rect width="400" height="210" fill="url(#${id})"/>`;
        L.s.forEach(([o, c]) => { if (!stops.some((x) => x[0] === o && x[1] === c)) stops.push([o, c]); });
      });
      return `<article class="bk-gp" data-reveal data-delay="${(gi % 3) * 90}">
        <button type="button" class="pn" data-css="${g.css}" aria-label="${g.n} gradient. Activate to copy the CSS."><svg viewBox="0 0 400 210" preserveAspectRatio="none" aria-hidden="true"><defs>${defs}</defs>${rects}</svg></button>
        <h3>${g.n}<span class="bk-code">${g.layers[0].t === 'l' ? 'linearGradient' : 'radialGradient'} × ${g.layers.length}</span></h3>
        <div class="bk-stops">${stops.map(([o, c]) => `<button type="button" class="bk-stop" data-hex="${c}"><i style="background:${c}"></i>${o}% ${c}</button>`).join('')}</div></article>`;
    }).join('');
    $$('#brand-kit-grads .pn').forEach((b) => b.addEventListener('click', () => Runo.copy(b.dataset.css)));
    $$('#brand-kit-grads .bk-stop').forEach((b) => b.addEventListener('click', () => Runo.copy(b.dataset.hex)));

    /* ---------- 3 · type scale ---------- */
    const TS = [
      ['Display', 'display', 'clamp(40px, 6.6vw, 112px)', '1.02', '-0.035em', 'Financial control starts with a single setup.'],
      ['H1', 'h1', 'clamp(34px, 4.6vw, 68px)', '1.06', '-0.03em', 'Reduce <span class="hl">operational friction,</span> unlock <span class="hl">financial clarity</span> across payments, and business accounts.'],
      ['H2', 'h2', 'clamp(26px, 3vw, 44px)', '1.14', '-0.025em', 'Take full control of your financial operations'],
      ['H3', 'h3', 'clamp(20px, 1.7vw, 26px)', '1.2', '-0.02em', 'Full financial visibility'],
      ['Lead', 'lead', 'clamp(17px, 1.35vw, 21px)', '1.4', '-0.015em', 'A new standard for financial control, meet Runo.'],
      ['Body', 'body', '15px', '1.5', '-0.01em', 'Manage all accounts, payments, and operations in one place with full visibility and control.'],
      ['Eyebrow', 'eyebrow', 'clamp(13px, 1.05vw, 17px)', '1.45', '+0.01em · uppercase', 'Impact overview'],
    ];
    const sc = $('#brand-kit-scale');
    sc.innerHTML = TS.map(([n, cls, size, lh, tr, txt]) => `<button type="button" class="bk-sr" data-cls="${cls}" aria-label="Load ${n} into the tester">
      <span class="m"><b>${n}</b><span>.${cls}</span><span>${size}</span><span>lh ${lh} · ${tr}</span><span class="px">–</span></span><span class="s ${cls}">${txt}</span></button>`).join('');
    const pxs = () => $$('.bk-sr', sc).forEach((r) => { $('.px', r).textContent = 'now ' + Math.round(parseFloat(getComputedStyle($('.s', r)).fontSize)) + ' px'; });
    pxs(); addEventListener('resize', pxs);

    const ta = $('#brand-kit-tarea'), ts = $('#brand-kit-tsize'), tk = $('#brand-kit-ttrk');
    const applyT = () => {
      const w = $('.bk-grp [aria-pressed="true"]').dataset.w;
      ta.style.fontSize = ts.value + 'px'; ta.style.letterSpacing = (tk.value / 1000) + 'em'; ta.style.fontWeight = w;
      $('#brand-kit-tout').textContent = ts.value + 'px'; $('#brand-kit-tkout').textContent = (tk.value / 1000).toFixed(3) + 'em';
      $('#brand-kit-tread').textContent = `Aeonik ${w === '500' ? 'Medium' : 'Regular'} · ${ts.value}px`;
    };
    ts.addEventListener('input', applyT); tk.addEventListener('input', applyT);
    $$('.bk-grp button').forEach((b) => b.addEventListener('click', () => { $$('.bk-grp button').forEach((x) => x.setAttribute('aria-pressed', x === b)); applyT(); }));
    $$('.bk-sr', sc).forEach((r) => r.addEventListener('click', () => {
      const s = $('.s', r); ta.innerHTML = s.innerHTML.replace(/<span class="hl">|<\/span>/g, ''); ts.value = Math.min(160, Math.round(parseFloat(getComputedStyle(s).fontSize))); applyT(); ta.focus({ preventScroll: true });
      ta.scrollIntoView({ behavior: Runo.reduce ? 'auto' : 'smooth', block: 'center' });
    }));
    applyT();

    /* ---------- 4 · components ---------- */
    $('#brand-kit-iconbtns').innerHTML = ['arrow-ne', 'download', 'layers', 'plus', 'dots'].map((n) => `<button type="button" class="icon-btn" aria-label="${n.replace('-', ' ')}">${I(n)}</button>`).join('');

    const TAGS = [['Cash Visibility', 26, 40, -20, 'blue'], ['Financial Insights', 62, 41, 8, ''], ['AI Financial Copilot', 46, 50, 4, 'ice'], ['Expense Control', 72, 58, 6, 'blue'], ['Multi-Account Sync', 20, 63, -20, 'mint'],
      ['Runway Forecasting', 56, 67, 8, ''], ['Smart Payments', 42, 75, 20, ''], ['Payments', 85, 77, 22, ''], ['Automated Workflows', 20, 83, 0, 'ice'], ['Decision Layer', 66, 83, 0, 'mint']];
    const pile = $('#brand-kit-pile');
    pile.innerHTML = TAGS.map(([t, x, y, r, c], i) => `<span class="tag ${c}" aria-hidden="true" style="--x:${x}%;--y:${y}%;--r:${r}deg;--i:${i}">${t}</span>`).join('');
    pile.dataset.cls = 'drop'; watch(pile, (v) => { if (v) pile.classList.add('drop'); }, 0.35);
    pile.addEventListener('click', () => replay(pile));

    const segBars = $('#brand-kit-segbars'), seg = $('#brand-kit-seg');
    const drawSeg = (i) => { Runo.bars(segBars, { n: 36, h: 56, px: 56, color: i ? '#19C2A0' : '#4FA3F2', color2: i ? '#CEF5ED' : '#BAD5F3', heights: (k, n) => i ? 0.3 + 0.5 * Math.abs(Math.sin(k / 3.2)) : 0.25 + 0.7 * (k / n) * (0.8 + 0.2 * Math.sin(k / 2)), label: i ? 'Actual' : 'Forecast' }); segBars.classList.remove('in'); void segBars.offsetWidth; segBars.classList.add('in'); };
    $$('button', seg).forEach((b, i) => b.addEventListener('click', () => { seg.style.setProperty('--i', i); $$('button', seg).forEach((x) => x.setAttribute('aria-pressed', x === b)); drawSeg(i); }));
    drawSeg(0);

    const TABS = ['ALL', 'CARDS', 'BANK TRANSFER', 'SEPA', 'SWIFT', 'SUBSCRIPTIONS'];
    const tabs = $('#brand-kit-tabs'), tp = $('#brand-kit-tp');
    tabs.innerHTML = TABS.map((t, i) => `<button type="button" role="tab" id="brand-kit-t${i}" aria-selected="${i === 0}" aria-controls="brand-kit-tp" tabindex="${i === 0 ? 0 : -1}">${t}</button>`).join('');
    const pick = (i, focus) => {
      $$('button', tabs).forEach((b, j) => { b.setAttribute('aria-selected', i === j); b.tabIndex = i === j ? 0 : -1; if (focus && i === j) b.focus(); });
      tp.setAttribute('aria-labelledby', 'brand-kit-t' + i);
      tp.innerHTML = `<div class="bk-fig" id="brand-kit-tpb" style="height:56px"></div><p>Showing ${TABS[i]}</p>`;
      Runo.bars($('#brand-kit-tpb'), { n: 44, h: 56, px: 56, color: '#4FA3F2', color2: '#BAD5F3', heights: (k, n) => 0.2 + 0.7 * Math.abs(Math.sin((k + i * 7) / (3 + i))), label: TABS[i] });
      const f = $('#brand-kit-tpb'); f.classList.remove('in'); void f.offsetWidth; f.classList.add('in');
    };
    tabs.addEventListener('click', (e) => { const b = e.target.closest('[role=tab]'); if (b) pick($$('button', tabs).indexOf(b)); });
    tabs.addEventListener('keydown', (e) => {
      const n = TABS.length; let i = $$('button', tabs).findIndex((b) => b.getAttribute('aria-selected') === 'true');
      if (e.key === 'ArrowRight') i = (i + 1) % n; else if (e.key === 'ArrowLeft') i = (i - 1 + n) % n; else if (e.key === 'Home') i = 0; else if (e.key === 'End') i = n - 1; else return;
      e.preventDefault(); pick(i, true);
    });
    pick(0);

    const swt = $('#brand-kit-swt'); swt.addEventListener('click', () => swt.setAttribute('aria-checked', swt.getAttribute('aria-checked') !== 'true'));

    const pin = $('#brand-kit-pin'), PT = 'Add this invoice to my accounts'; let typing = !Runo.reduce, ptimer;
    const typeLoop = () => {
      if (!typing || !pin.isConnected) return; let k = 0; pin.value = '';
      const step = () => { if (!typing) return; pin.value = PT.slice(0, ++k); if (k < PT.length) ptimer = setTimeout(step, 45 + Math.random() * 50); else ptimer = setTimeout(typeLoop, 2600); };
      step();
    };
    const stopT = () => { typing = false; clearTimeout(ptimer); };
    pin.addEventListener('focus', () => { if (typing) { stopT(); pin.value = PT; } });
    watch($('#brand-kit-pf'), (v) => { if (v && typing && !pin.dataset.s) { pin.dataset.s = 1; typeLoop(); } });
    $('#brand-kit-pf').addEventListener('submit', (e) => { e.preventDefault(); Runo.toast('Marketing_invoice_Feb.pdf attached'); });

    /* ---------- 5 · data-viz ---------- */
    const DV = $('#brand-kit-dv');
    const tile = (id, label, code, body, cls = '') => `<button type="button" class="bk-panel ${cls}" id="brand-kit-${id}" aria-label="Replay ${label}"><div class="bk-lab"><span>${label}</span><span class="bk-code">${code}</span></div>${body}</button>`;
    const circ = 2 * Math.PI * 38;
    DV.innerHTML = [
      tile('dv1', 'Hairline · blue', 'Runo.bars', '<div class="bk-fig"></div>'),
      tile('dv2', 'Hairline · teal', 'Runo.bars', '<div class="bk-fig"></div>'),
      tile('dv3', 'Hairline · Signal Lime on Deep Black', 'Runo.bars', '<div class="bk-fig"></div>', 'dark'),
      tile('dv4', 'Hairline · amber lead-in (impact curve)', 'color(i, n)', '<div class="bk-fig"></div>'),
      tile('dv5', 'Donut', '86.3% · 13.7%', `<div class="bk-fig" style="place-items:center"><svg class="bk-donut" viewBox="0 0 100 100" style="width:110px" role="img" aria-label="Donut chart, 86.3 percent and 13.7 percent">
        <circle cx="50" cy="50" r="38" fill="none" stroke="#E7E8EB" stroke-width="10"/>
        <circle class="seg" cx="50" cy="50" r="38" fill="none" stroke="#6CB0F7" stroke-width="10" stroke-linecap="butt" style="--circ:${circ};--len:0" stroke-dasharray="${(circ * 0.863).toFixed(1)} ${circ}"/>
        <text x="50" y="55" text-anchor="middle" font-size="15" fill="#0B0B0C" font-family="inherit">86.3%</text></svg></div>`),
      tile('dv6', 'Soft block bars', 'rounded rect', `<div class="bk-fig"><svg class="bk-blk" viewBox="0 0 240 110" preserveAspectRatio="none" role="img" aria-label="Soft block bar chart">${[0.45, 0.7, 0.5, 0.88, 0.62, 0.95].map((h, i) => `<rect style="--i:${i}" x="${i * 40 + 4}" y="${110 - h * 104}" width="30" height="${h * 104}" rx="9" fill="var(--b${[4,5,6,3,5,2][i]})"/>`).join('')}</svg></div>`),
      tile('dv7', 'Sparkline', 'path draw', '<div class="bk-fig"><svg class="bk-spark" viewBox="0 0 240 110" preserveAspectRatio="none" role="img" aria-label="Sparkline trending upward"></svg></div>'),
    ].join('');
    const barsIn = [['dv1', { color: '#4FA3F2', color2: '#BAD5F3' }, (i, n) => 0.2 + 0.75 * Math.pow(i / n, 1.4) * (0.75 + 0.25 * Math.sin(i / 2.2))],
      ['dv2', { color: '#19C2A0', color2: '#CEF5ED' }, (i, n) => 0.25 + 0.65 * Math.abs(Math.sin(i / 5)) * (0.6 + 0.4 * (1 - i / n))],
      ['dv3', { color: '#F6FFD8', color2: '#F6FFD8', fade: false }, (i, n) => 0.15 + 0.8 * Math.abs(Math.sin(i / 7 + 0.5)) * (0.5 + 0.5 * i / n)],
      ['dv4', { color: (i, n) => i < n * 0.28 ? '#F5B27A' : '#9CC6F5' }, (i, n) => i < n * 0.28 ? 0.95 : 0.95 * Math.exp(-((i - n * 0.28) / (n * 0.3))) + 0.08 + 0.12 * Math.sin(i / 4)]];
    barsIn.forEach(([id, o, h]) => { const f = $('.bk-fig', $('#brand-kit-' + id)); Runo.bars(f, Object.assign({ n: 60, h: 80, px: 110, heights: h, label: id }, o)); });
    // sparkline
    const sp = $('.bk-spark', DV), pts = Array.from({ length: 24 }, (_, i) => [i * 10.4, 92 - (8 + i * 2.7 + Math.sin(i / 1.8) * 9 + Math.sin(i / 0.9) * 3)]);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    const gid = 'brand-kit-sparkg';
    sp.innerHTML = `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6CB0F7" stop-opacity=".35"/><stop offset="1" stop-color="#6CB0F7" stop-opacity="0"/></linearGradient></defs>
      <path class="ar" d="${d} L${pts[23][0]} 110 L0 110Z" fill="url(#${gid})"/><path class="ln" pathLength="1" d="${d}" fill="none" stroke="#4FA3F2" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
      <circle class="pt" cx="${pts[23][0]}" cy="${pts[23][1].toFixed(1)}" r="4" fill="#fff" stroke="#4FA3F2" stroke-width="2" vector-effect="non-scaling-stroke"/>`;
    ['dv1', 'dv2', 'dv3', 'dv4'].forEach((id) => { const t = $('#brand-kit-' + id); t.dataset.t = 'bars'; });
    $$('.bk-panel', DV).forEach((t) => {
      const tgt = t.id === 'brand-kit-dv5' ? $('.bk-donut', t) : t.id === 'brand-kit-dv6' ? $('.bk-blk', t) : t.id === 'brand-kit-dv7' ? $('.bk-spark', t) : t;
      watch(t, (v) => { if (v) tgt.classList.add('in'); }, 0.4);
      t.addEventListener('click', () => replay(tgt)); t.addEventListener('pointerenter', () => { if (tgt.classList.contains('in')) replay(tgt); });
    });

    /* ---------- 6 · icons ---------- */
    const ICONS = ['arrow-ne', 'arrow-up', 'arrow-right', 'arrow-left', 'arrow-down', 'plus', 'close', 'caret', 'dots', 'menu', 'clip', 'mic', 'download', 'upload', 'layers', 'user', 'doc', 'wallet', 'chart', 'spark', 'check', 'swap', 'card', 'globe', 'atom', 'ig', 'x', 'in', 'grid'];
    const ic = $('#brand-kit-ic');
    ic.innerHTML = ICONS.map((n) => `<button type="button" data-n="${n}" aria-label="Copy Runo.icon('${n}')" >${I(n)}<span>${n}</span></button>`).join('')
      + `<button type="button" data-n="mark" aria-label="Copy Runo.mark()">${Runo.mark()}<span>mark</span></button>`;
    ic.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) Runo.copy(b.dataset.n === 'mark' ? 'Runo.mark()' : `Runo.icon('${b.dataset.n}')`); });
    const icsz = $('#brand-kit-icsize'); icsz.addEventListener('input', () => { ic.style.setProperty('--s', icsz.value); $('#brand-kit-icout').textContent = icsz.value + 'px'; });

    /* ---------- 7 · tokens ---------- */
    $('#brand-kit-rad').innerHTML = [['--r-card', 28], ['--r-md', 16], ['--r-sm', 8], ['--r-btn', 4], ['pill', 999]].map(([n, v]) => `<button type="button" data-v="${n}" aria-label="Copy ${n}"><i style="border-radius:${v}px"></i>${n}<br>${v === 999 ? '999px' : v + 'px'}</button>`).join('');
    $('#brand-kit-rad').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) Runo.copy(b.dataset.v === 'pill' ? 'border-radius:999px' : `var(${b.dataset.v})`); });
    $('#brand-kit-sp').innerHTML = [4, 8, 12, 16, 24, 32, 44, 64, 96, 120].map((v) => `<button type="button" data-v="${v}" aria-label="Copy ${v}px"><span>${v}px</span><i style="--w:${v * 1.9}"></i></button>`).join('');
    $('#brand-kit-sp').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) Runo.copy(b.dataset.v + 'px'); });
    const SH = [['Rest', '0 1px 0 rgba(0,0,0,.04), 0 0 0 1px rgba(0,0,0,.06)'], ['Hover', '0 6px 18px rgba(40,70,110,.16), 0 0 0 1px rgba(0,0,0,.06)'], ['Menu', '0 20px 50px -20px rgba(30,50,80,.35), 0 0 0 1px rgba(0,0,0,.05)'], ['Device', '0 40px 80px -30px rgba(40,60,90,.45)']];
    $('#brand-kit-el').innerHTML = SH.map(([n, s]) => `<button type="button" data-s="${s}" style="--sh:${s}" aria-label="Copy ${n} shadow">${n}</button>`).join('');
    $('#brand-kit-el').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) Runo.copy('box-shadow: ' + b.dataset.s); });

    /* ---------- 8 · motion ---------- */
    const EASE = [['Ease-out', '--ease', [0.22, 1, 0.36, 1]], ['Ease in-out', '--ease-io', [0.65, 0, 0.35, 1]]];
    const bez = (x1, y1, x2, y2) => {
      const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
      const X = (t) => ((ax * t + bx) * t + cx) * t, Y = (t) => ((ay * t + by) * t + cy) * t;
      return (x) => { let lo = 0, hi = 1, t = x; for (let i = 0; i < 30; i++) { t = (lo + hi) / 2; X(t) < x ? (lo = t) : (hi = t); } return Y(t); };
    };
    let ei = 0; const curve = $('#brand-kit-curve'), eb = $('#brand-kit-ease');
    eb.innerHTML = EASE.map(([n, v, c], i) => `<button type="button" aria-pressed="${i === 0}" data-i="${i}">${n} <span class="bk-code">${v}</span></button>`).join('');
    const SZ = 300;
    const drawCurve = () => {
      const [, , c] = EASE[ei], f = bez(...c);
      let d = ''; for (let i = 0; i <= 60; i++) { const x = i / 60; d += (i ? 'L' : 'M') + (x * SZ).toFixed(1) + ' ' + (SZ - f(x) * SZ).toFixed(1); }
      const grid = [0.25, 0.5, 0.75].map((g) => `<path d="M${g * SZ} 0V${SZ}M0 ${g * SZ}H${SZ}" stroke="#E7E8EB" stroke-width="1"/>`).join('');
      curve.innerHTML = `<rect x="0" y="0" width="${SZ}" height="${SZ}" rx="14" fill="#FAFAFA"/>${grid}<path d="M0 ${SZ}L${SZ} 0" stroke="#D5D9DF" stroke-dasharray="4 5"/>
        <path d="M0 ${SZ}L${c[0] * SZ} ${SZ - c[1] * SZ}M${SZ} 0L${c[2] * SZ} ${SZ - c[3] * SZ}" stroke="#97C2EE" stroke-width="1.2"/>
        <circle cx="${c[0] * SZ}" cy="${SZ - c[1] * SZ}" r="5" fill="#fff" stroke="#6CB0F7" stroke-width="2"/><circle cx="${c[2] * SZ}" cy="${SZ - c[3] * SZ}" r="5" fill="#fff" stroke="#6CB0F7" stroke-width="2"/>
        <path d="${d}" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round"/><circle id="brand-kit-cdot" r="8" fill="#6CB0F7" stroke="#fff" stroke-width="3" cx="${SZ}" cy="0"/>
        <circle id="brand-kit-cdot2" r="6" fill="#000" cx="0" cy="${SZ + 24}"/><path d="M0 ${SZ + 24}H${SZ}" stroke="#E7E8EB" stroke-width="2" stroke-linecap="round"/>
        <text x="0" y="${SZ + 52}" font-size="11" fill="#6B7280" font-family="inherit">time</text><text x="-10" y="-6" font-size="11" fill="#6B7280" font-family="inherit">progress</text>`;
      $('#brand-kit-curvelab').textContent = `cubic-bezier(${c.join(', ')})`;
    };
    $$('button', eb).forEach((b) => b.addEventListener('click', () => { ei = +b.dataset.i; $$('button', eb).forEach((x) => x.setAttribute('aria-pressed', x === b)); drawCurve(); }));
    drawCurve();
    let vis = false; watch(curve, (v) => { vis = v; }, 0.1);
    const T = 2800, t0 = performance.now();
    const loop = (now) => {
      if (!root.isConnected) return;
      if (vis && root.classList.contains('is-active') && !Runo.reduce) {
        const p = ((now - t0) % (T + 700)) / T, x = Math.min(1, p), y = bez(...EASE[ei][2])(x);
        const d1 = $('#brand-kit-cdot'), d2 = $('#brand-kit-cdot2');
        if (d1) { d1.setAttribute('cx', x * SZ); d1.setAttribute('cy', SZ - y * SZ); }
        if (d2) d2.setAttribute('cx', y * SZ);
      }
      requestAnimationFrame(loop);
    };
    if (!Runo.reduce) requestAnimationFrame(loop);

    const DUR = [['Hover', '.25s', 250], ['Press', '.35s', 350], ['Rotate', '.45s', 450], ['Reveal', '.9s', 900], ['Count-up', '1.4s', 1400]];
    $('#brand-kit-durs').innerHTML = DUR.map(([n, t], i) => `<div class="bk-lab" style="margin:${i ? 18 : 0}px 0 0"><span>${n}</span><span class="bk-code">${t}</span></div><button type="button" class="bk-trk" data-i="${i}" aria-label="Run ${n} ${t}"><i></i></button>`).join('')
      + `<div class="bk-toks"><button type="button" data-t="${'cubic-bezier(.22,1,.36,1)'}">--ease</button><button type="button" data-t="${'cubic-bezier(.65,0,.35,1)'}">--ease-io</button></div>`;
    const run = (tr, i) => {
      const w = tr.clientWidth - 44; tr.style.setProperty('--run', w + 'px'); tr.style.setProperty('--dur', (DUR[i][2] / 1000) + 's'); tr.style.setProperty('--tf', EASE[ei][1] === '--ease' ? 'var(--ease)' : 'var(--ease-io)');
      tr.classList.remove('go'); const i0 = $('i', tr); i0.style.transition = 'none'; void tr.offsetWidth; i0.style.transition = ''; requestAnimationFrame(() => tr.classList.add('go'));
    };
    $$('.bk-trk', root).forEach((tr) => { tr.addEventListener('click', () => run(tr, +tr.dataset.i)); watch(tr, (v) => { if (v && !tr.dataset.r) { tr.dataset.r = 1; setTimeout(() => run(tr, +tr.dataset.i), 300 + +tr.dataset.i * 150); } }, 0.6); });
    $$('.bk-toks [data-t]', $('#brand-kit-durs')).forEach((b) => b.addEventListener('click', () => Runo.copy(b.dataset.t)));
  });
}
