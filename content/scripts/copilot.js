/* Generated from src/pages/copilot.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('copilot', function (root) {
    const R = Runo, $ = (s, r) => (r || root).querySelector(s), $$ = (s, r) => Array.from((r || root).querySelectorAll(s)), reduce = R.reduce;
    const ico = (sel, name) => { $$(sel).forEach((e) => { e.innerHTML = R.icon(name); }); };
    ico('#cp-mic', 'mic'); ico('#cp-go1', 'arrow-right'); ico('#cp-go2', 'arrow-right'); ico('#cp-ph-plus', 'plus'); ico('#cp-ph-up', 'arrow-up');
    ico('#cp-plus', 'plus'); ico('#cp-send', 'arrow-up'); ico('.pn .plus', 'plus'); ico('.pn .clip', 'clip'); ico('.pn .spk', 'spark'); ico('.st-h .ar', 'arrow-right');
    $('#cp-attach').innerHTML = R.icon('clip') + 'Marketing_invoice_Feb.pdf';
    $('#cp-trydot').innerHTML = R.icon('arrow-ne');
    $$('.disc').forEach((d) => { d.innerHTML = R.icon(d.dataset.ic); });

    /* ---------- hero: pointer-follow orb + listening ---------- */
    const hero = $('#cp-hero'), mv = $('#cp-orbmove'), pill = $('#cp-pill');
    if (!reduce) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
        const near = Math.max(0, 1 - Math.hypot(nx, ny) * 2.2);
        mv.style.transform = `translate(${nx * 36}px,${ny * 28}px) scale(${1 + near * .05})`;
      });
      hero.addEventListener('pointerleave', () => { mv.style.transform = ''; });
    }
    pill.addEventListener('click', () => {
      const on = pill.getAttribute('aria-pressed') !== 'true';
      pill.setAttribute('aria-pressed', on); hero.classList.toggle('listening', on);
    });

    /* ---------- phone ---------- */
    R.bars($('#cp-ph-bars'), { n: 14, h: 46, px: 46, gap: 6, w: 3, color: '#8FB8E8', color2: '#E6EEF9',
      heights: (i) => [.85, .5, .6, .9, .45, .7, .55, .8, .4, .65, .5, .75, .35, .55][i % 14], label: 'Outgoing payments bars' });
    const tilt = $('#cp-tilt'), pc = $('#cp-phonecard');
    if (!reduce) {
      pc.addEventListener('pointermove', (e) => {
        const r = pc.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
        tilt.style.transform = `rotateY(${-24 + nx * 14}deg) rotateX(${9 - ny * 12}deg) rotateZ(${5 + nx * 3}deg)`;
      });
      pc.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
    }

    /* ---------- interactive demo ---------- */
    const PROMPTS = ['Add this invoice to my accounts', 'Measure our market risk', 'Review pending payments and approve transfers', 'Review cash position', 'Manage outgoing payments'];
    const SCRIPT = {
      0: { u: 'Reading Marketing_invoice_Feb.pdf', p: 'Matching it to your accounts', e: 'Added to your accounts',
        card: { t: 'Invoice added', rows: [['File', 'Marketing_invoice_Feb.pdf'], ['Status', 'Awaiting approval'], ['Invoices awaiting approval', '$9,380']] } },
      1: { u: 'Reviewing activity across all accounts', p: 'Spotting risks early', e: 'Risk summary ready',
        card: { t: 'Market risk', note: 'Prevent issues before they impact your business. Spot risks early.', rows: [['Runway', '4.6 months'], ['Monthly burn', '$18,900']] } },
      2: { u: 'Finding pending payments', p: 'Lining up transfers for approval', e: 'Ready to approve',
        card: { t: 'Pending payments', rows: [['Pending payouts', '$14,020'], ['Invoices awaiting approval', '$9,380']] } },
      3: { u: 'Reading inflows, outflows and runway', p: 'Recommending the best action', e: 'Cash position ready',
        card: { t: 'Cash position', big: [['Cash balance', '$48,320'], ['Net flow', '$6,480'], ['Monthly burn', '$18,900']], rows: [['Runway', '4.6 months'], ['Pending payouts', '$14,020'], ['Invoices awaiting approval', '$9,380']] } },
      4: { u: 'Reading vendors, contractors, subscriptions', p: 'Ordering outgoing payments', e: 'Ready to send',
        card: { t: 'Outgoing payments', note: 'Vendors, contractors, subscriptions', rows: [['Pending payouts', '$14,020'], ['Monthly burn', '$18,900']] } },
      free: { u: 'Get answers about transactions, and activity across all accounts.', p: 'Runo analyzes your cash flow and recommends the best action.', e: 'Move funds, and complete operations directly from the copilot.',
        card: { t: 'Review all activity', note: 'Get answers about transactions, and activity across all accounts.', rows: [] } },
    };
    const form = $('#cp-form'), inp = $('#cp-in'), resp = $('#cp-resp'), sugg = $('#cp-sugg');
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    sugg.innerHTML = PROMPTS.map((p, i) => `<button type="button" class="sg" data-i="${i}">${p}</button>`).join('');
    let token = 0;
    const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
    const run = async (key, text) => {
      const my = ++token, sc = SCRIPT[key];
      resp.innerHTML = `<div class="you"><span>${esc(text)}</span></div><ol class="steps">${[['Understand', sc.u], ['Plan actions', sc.p], ['Execute in one step', sc.e]].map(([t, d]) =>
        `<li><span class="dot">${R.icon('check')}</span><div><strong>${t}</strong><span class="d">${esc(d)}</span></div></li>`).join('')}</ol>`;
      const lis = $$('.steps li', resp);
      resp.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
      for (const li of lis) { if (my !== token) return; li.classList.add('run'); await wait(750); if (my !== token) return; li.classList.remove('run'); li.classList.add('done'); }
      const c = sc.card;
      const el = document.createElement('div'); el.className = 'rcard';
      el.innerHTML = `<h3>${c.t}</h3>${c.big ? `<div class="big">${c.big.map(([l, v]) => `<div><small>${l}</small><b class="num">${v}</b></div>`).join('')}</div>` : ''}
        ${c.note ? `<p class="note">${esc(c.note)}</p>` : ''}${c.rows.map(([l, v]) => `<div class="row"><small style="font-size:14px;color:var(--ink-3)">${l}</small><b>${esc(v)}</b></div>`).join('')}
        <button type="button" class="glass">Execute</button>`;
      resp.appendChild(el);
      const b = $('.glass', el);
      b.addEventListener('click', () => { b.disabled = true; b.innerHTML = R.icon('check') + 'Executed'; R.toast('Executed'); });
    };
    const submit = (text) => {
      const t = (text || '').trim(); if (!t) { inp.focus(); return; }
      const i = PROMPTS.findIndex((p) => p.toLowerCase() === t.toLowerCase());
      inp.value = ''; run(i >= 0 ? i : 'free', t);
    };
    form.addEventListener('submit', (e) => { e.preventDefault(); submit(inp.value); });
    sugg.addEventListener('click', (e) => { const b = e.target.closest('.sg'); if (!b) return; inp.value = PROMPTS[+b.dataset.i]; submit(inp.value); });

    /* ---------- panel 2 silk lines ---------- */
    (function () {
      let s = '';
      for (let i = 0; i < 16; i++) s += `<path d="M${-10 + i * 6} 360 C${60 + i * 8} ${260 - i * 3} ${140 + i * 5} ${160 + i * 4} ${250 + i * 2} ${20 + i * 4}"/>`;
      $('#cp-silk').innerHTML = s;
    })();
    $('#cp-exec2').addEventListener('click', () => R.toast('Executed in one step'));

    /* ---------- flow strip: travelling dot ---------- */
    (function () {
      const grid = $('#cp-fs'), trav = $('#cp-trav'), cols = $$('.st', grid), discs = $$('.disc', grid);
      let i = 0, timer = null, running = false;
      const pos = (k) => { const g = grid.getBoundingClientRect(), r = discs[k].getBoundingClientRect(); return [r.left + r.width / 2 - g.left, r.top + r.height / 2 - g.top]; };
      const set = (k) => { cols.forEach((c, n) => c.classList.toggle('act', n === k)); };
      const move = (k, instant) => { const [x, y] = pos(k); trav.style.transition = instant ? 'none' : ''; trav.style.transform = `translate(${x}px,${y}px)`; trav.style.opacity = 1; };
      const tick = () => {
        if (!grid.offsetParent) return;
        i = (i + 1) % 3;
        if (i === 0) { trav.style.opacity = 0; setTimeout(() => { move(0, true); void trav.offsetWidth; trav.style.transition = ''; trav.style.opacity = 1; set(0); }, 450); }
        else { move(i); setTimeout(() => set(i), 1300); }
      };
      const start = () => { if (running) return; running = true; move(0, true); set(0); void trav.offsetWidth; if (!reduce) timer = setInterval(tick, 2400); };
      const stop = () => { running = false; clearInterval(timer); };
      new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting ? start() : stop()), { threshold: .3 }).observe(grid);
      addEventListener('resize', () => { if (running) move(i, true); });
      cols.forEach((c, n) => c.addEventListener('pointerenter', () => { if (reduce) return; i = n; move(n); set(n); }));
    })();

    /* ---------- scenario curve ---------- */
    (function () {
      const n = 90, gap = 4, H = 190, h = (x) => .2 - .05 * Math.sin(Math.PI * x) + .8 * Math.pow(x, 4);
      R.bars($('#cp-scbars'), { n, h: H, px: H, gap, w: 1.2, color: '#7FB2F2', color2: '#C9E0FA', heights: (i) => h(i / (n - 1)), label: 'Projected runway bars' });
      let d = '';
      for (let i = 0; i < n; i++) d += (i ? ' L' : 'M') + (i * gap + .6) + ' ' + (H - Math.max(.04, h(i / (n - 1))) * H).toFixed(1);
      const sv = $('#cp-scline'); sv.setAttribute('viewBox', `0 0 ${n * gap} ${H}`);
      sv.innerHTML = `<path d="${d}" fill="none" stroke="#8FC0FA" stroke-width="1.6" vector-effect="non-scaling-stroke" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:${reduce ? 0 : 1};transition:stroke-dashoffset 2.2s var(--ease-io)"/>`;
      const path = sv.firstElementChild;
      new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { o.disconnect(); path.style.strokeDashoffset = 0; } }), { threshold: .4 }).observe(sv);
    })();
    R.scan(root);
  });
}
