/* Generated from src/pages/lp-solutions.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-solutions', function (root) {
    const R = Runo, $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
    const IO = (el, fn, th = .3) => { const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { o.disconnect(); fn(); } }), { threshold: th }); o.observe(el); };
    const mix = (a, b, t) => { const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
    const replay = (el) => $$('.rbars', el).forEach((s) => { s.classList.remove('in'); void s.getBoundingClientRect(); s.classList.add('in'); });
    const flag = (k) => k === 'usd'
      ? '<svg viewBox="0 0 20 20" class="flag" aria-hidden="true"><rect width="20" height="20" fill="#fff"/><g fill="#C9423F"><rect y="0" width="20" height="2"/><rect y="4" width="20" height="2"/><rect y="8" width="20" height="2"/><rect y="12" width="20" height="2"/><rect y="16" width="20" height="2"/></g><rect width="10" height="11" fill="#2A4A8D"/></svg>'
      : '<svg viewBox="0 0 20 20" class="flag" aria-hidden="true"><rect width="20" height="20" fill="#1F3F93"/><g fill="#F5D34A">' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + (10 + 6 * Math.sin(i / 12 * 6.2832)).toFixed(2) + '" cy="' + (10 - 6 * Math.cos(i / 12 * 6.2832)).toFixed(2) + '" r=".9"/>').join('') + '</g></svg>';

    /* ---------- hero: audience selector + stage ---------- */
    const A = [
      ['Finance teams', 'Review pending payments and approve transfers', 'linear-gradient(180deg,#A9C7EE 0%,#CFE0F5 50%,#F3F5F7 100%)'],
      ['Founders', 'Review cash position', 'linear-gradient(180deg,#D3E0F2 0%,#E9EDF3 55%,#F4F2EC 100%)'],
      ['Operators', 'Manage outgoing payments', 'linear-gradient(160deg,#BDD0E6 0%,#DCE9EC 55%,#EEF3F0 100%)'],
      ['Startups', 'Add this invoice to my accounts', 'linear-gradient(170deg,#CEF5ED 0%,#E3F4EE 50%,#F6FFD8 130%)'],
      ['Global teams', 'Measure our market risk', 'linear-gradient(170deg,#7E9AC0 0%,#B3C6DD 55%,#DCE5F0 100%)'],
      ['Multi-account teams', 'Monitor your cash movement across all accounts', 'linear-gradient(180deg,#BAD5F3 0%,#D8E7F8 55%,#EEF3FA 100%)'],
    ];
    const sel = $('#lp-solutions-aud'), bgs = $('#lp-solutions-bgs'), mods = $('#lp-solutions-mods');
    const M = [];
    const ico = (n) => '<span class="ic">' + R.icon(n) + '</span>';
    M[0] = () => { const rows = [['user', 'Pending payouts', '$14,020'], ['doc', 'Invoices awaiting approval', '$9,380'], ['layers', 'Recurring subscriptions', '$2,560'], ['wallet', 'Operational fees', '$160']];
      return '<div class="mc"><header><b>Operations awaiting review</b><span class="stag" id="lp-solutions-pend"><i></i>4 pending</span></header>' + rows.map((r, i) => '<div class="mrow rise" style="--k:' + i + '">' + ico(r[0]) + '<span class="l">' + r[1] + '</span><span class="a">' + r[2] + '</span><button class="ap" type="button" aria-pressed="false" data-n="' + r[1] + '">Approve</button></div>').join('') + '</div>'; };
    M[1] = () => '<div class="mc"><header><b>Runway Projection</b><span class="chip">Forecast</span></header><div style="padding:14px 0 6px" class="rise"><div class="big num">4.6 months</div></div><div class="rise" style="--k:1" data-bars="rw"></div><div class="mrow rise" style="--k:2;border-top:1px solid var(--line-2);margin-top:10px"><span class="l">Core team</span><span class="a">$10,420</span></div><div class="mrow rise" style="--k:3"><span class="l">Vendors</span><span class="a">$5,380</span></div><div class="mrow rise" style="--k:4"><span class="l">Tools &amp; infra</span><span class="a">$3,100</span></div></div>';
    M[2] = () => { const T = [['$1,200', 'Stripe Ltd', 'Payout', 'Mar 07', 'One-time'], ['$1,850', 'Supplier Ltd', 'Invoice payment', 'Mar 03', 'One-time'], ['$680', 'Luna Ltd', 'Invoice payment', 'Mar 10', 'Monthly'], ['$3,000', 'Contractor', 'Transfer', 'Mar 10', 'Weekly'], ['$980', 'Google Ads', 'Payment', 'Mar 11', 'Monthly']];
      return '<div class="mc"><header><b>Operations</b><span class="stag"><i></i>5 scheduled</span></header><table class="tt rise"><thead><tr><th>Total</th><th>Recipient</th><th>Type</th><th>Due</th><th>Frequency</th></tr></thead><tbody>' + T.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>'; };
    M[3] = () => '<div class="mc"><header><b>Control overview</b><span class="stag"><i></i>Optimal</span></header><div class="mrow rise" style="--k:0;padding:16px 0"><span class="l"><small>Cash runway</small><span class="big num">8.2 months</span></span></div><div class="rise" style="--k:1" data-bars="st"></div><div class="mrow rise" style="--k:2;margin-top:8px"><span class="l"><small>Burn rate</small>$12,400 / month</span><span class="stag"><i></i>Healthy</span></div><div class="mrow rise" style="--k:3"><span class="l"><small>Success rate</small>98.6%</span><span class="stag"><i></i>Optimal</span></div></div>';
    M[4] = () => '<div class="mc" style="text-align:center"><header><b>Individual account ****1116</b><span class="cur-seg" role="group" aria-label="Currency"><button type="button" aria-pressed="true" data-c="usd">USD</button><button type="button" aria-pressed="false" data-c="eur">EUR</button></span></header><span class="bigflag rise" id="lp-solutions-gf">' + flag('usd').replace('class="flag"', 'class="flag" style="width:84px;height:84px"') + '<i class="coin">$</i></span><div class="rise" style="--k:1"><div class="big num" id="lp-solutions-gv">$92,345.67</div><div class="sm" id="lp-solutions-gl" style="margin-top:6px">Total balance</div></div></div>';
    M[5] = () => { const a = [['Reserve account **1234', 25000, '3.7%'], ['Treasury account **9134', 42800.5, '4.1%'], ['Reserve account **5672', 53000, '5.1%']];
      return '<div class="mc"><header><b>Total balance</b><span class="big num" style="font-size:24px">$92,345.67</span></header>' + a.map((r, i) => '<div class="mrow rise" style="--k:' + i + ';flex-wrap:wrap"><span class="l">' + r[0] + '<small>Yield optimization · ' + r[2] + ' APY</small></span><span class="a">$' + R.fmt(r[1], 2) + '</span><div style="width:100%" data-bars="m' + i + '" data-v="' + r[1] + '"></div></div>').join('') + '</div>'; };
    A.forEach((a, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === 0); b.tabIndex = i === 0 ? 0 : -1; b.textContent = a[0]; b.dataset.i = i; sel.appendChild(b);
      const bg = document.createElement('div'); bg.className = 'bg' + (i === 0 ? ' on' : ''); bg.style.background = a[2]; bgs.appendChild(bg);
      const m = document.createElement('div'); m.className = 'mod' + (i === 0 ? ' on' : ''); m.innerHTML = M[i](); mods.appendChild(m);
    });
    const mEls = $$('.mod', mods), bEls = $$('.bg', bgs);
    $$('[data-bars]', mods).forEach((el) => { const k = el.dataset.bars;
      if (k === 'rw') R.bars(el, { n: 60, h: 38, px: 38, gap: 4, w: 1.4, fade: false, label: 'Runway projection hairline chart', color: (i, n) => (i / n < .55 ? mix('#1F5FA8', '#7DB8F5', i / n / .55) : i / n < .84 ? mix('#3F86D8', '#9CCBF2', (i / n - .55) / .29) : mix('#4FA3F2', '#C5E3FA', (i / n - .84) / .16)), heights: (i) => .35 + .65 * Math.abs(Math.sin(i * 2.3) * Math.cos(i * .7)) });
      else if (k === 'st') R.bars(el, { n: 60, h: 30, px: 30, gap: 4, w: 1.4, color: '#4FA3F2', color2: '#BAD5F3', label: 'Cash runway hairline chart', heights: (i, n) => .3 + .7 * (i / n) * (.7 + .3 * Math.sin(i)) });
      else { const act = Math.round(40 * (+el.dataset.v) / 53000); R.bars(el, { n: 40, h: 14, px: 14, gap: 4, w: 1.4, fade: false, label: 'Account balance share', color: (i) => (i < act ? '#4FA3F2' : '#DDE6F2'), heights: () => 1 }); } });
    const PT = $('#lp-solutions-pt'); let ptT, cur = 0;
    const typeP = (s) => { clearTimeout(ptT); let k = 0; if (R.reduce) { PT.textContent = s; return; } PT.textContent = ''; const f = () => { PT.textContent = s.slice(0, ++k); if (k < s.length) ptT = setTimeout(f, 26); }; f(); };
    const pick = (i, focus) => { cur = i; $$('button', sel).forEach((b, k) => { b.setAttribute('aria-selected', k === i); b.tabIndex = k === i ? 0 : -1; });
      mEls.forEach((m, k) => m.classList.toggle('on', k === i)); bEls.forEach((m, k) => m.classList.toggle('on', k === i)); replay(mEls[i]); typeP(A[i][1]); if (focus) $$('button', sel)[i].focus(); };
    $$('button', sel).forEach((b, i, all) => { b.addEventListener('click', () => pick(i)); b.addEventListener('keydown', (e) => { const d = /Down|Right/.test(e.key) ? 1 : /Up|Left/.test(e.key) ? -1 : 0; if (d) { e.preventDefault(); pick((i + d + all.length) % all.length, true); } }); });
    typeP(A[0][1]);
    /* module interactions */
    const pend = $('#lp-solutions-pend');
    $$('.ap', mods).forEach((b) => b.addEventListener('click', () => { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); b.textContent = on ? 'Approved' : 'Approve'; const n = 4 - $$('.ap[aria-pressed="true"]', mods).length; pend.innerHTML = '<i></i>' + (n ? n + ' pending' : 'All approved'); if (on) R.toast(b.dataset.n + ' approved'); }));
    const gcur = { usd: ['$92,345.67', 'Total balance'], eur: ['122,567.48 EUR', 'under active management'] };
    $$('.cur-seg button', mods).forEach((b) => b.addEventListener('click', () => { const k = b.dataset.c; $$('.cur-seg button', mods).forEach((x) => x.setAttribute('aria-pressed', x === b)); const gf = $('#lp-solutions-gf'); gf.innerHTML = flag(k).replace('class="flag"', 'class="flag" style="width:84px;height:84px"') + '<i class="coin">' + (k === 'usd' ? '$' : '€') + '</i>'; $('#lp-solutions-gv').textContent = gcur[k][0]; $('#lp-solutions-gl').textContent = gcur[k][1]; }));
    if (!R.reduce) { const stage = $('#lp-solutions-stage'); stage.addEventListener('pointermove', (e) => { const b = stage.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; $('.rg', stage).style.translate = (x * -24) + 'px ' + (y * -18) + 'px'; }); }

    /* ---------- control-layer bubble map ---------- */
    const BUB = [
      ['What Runo is', 'Runo is a financial control layer designed for modern teams. It connects accounts, payments, and financial activity into one clear operational system.', 4, 5, 29, ''],
      ['What enables', 'Runo gives teams real-time visibility over cash flow, outgoing activity, and commitments. It helps users understand what is happening and what to do next.', 65, 7, 31, ''],
      ['Control Layer', 'Runo is a centralized financial control layer that unifies cash, operations, and decision-making into a single system.', 39, 38, 26, ' core'],
      ['How it works', 'Runo structures financial data into clear flows and supports execution through AI assistance.', 73, 56, 22, ''],
      ['Why it matters', 'Financial work is often fragmented. Runo reduces complexity and supports faster decisions.', 15, 58, 25, ''],
    ];
    const map = $('#lp-solutions-map'), rib = $('#lp-solutions-rib');
    BUB.forEach((b, i) => { const e = document.createElement('button'); e.type = 'button'; e.className = 'bub' + b[5]; e.setAttribute('aria-pressed', i === 2); e.style.cssText = 'left:' + b[2] + '%;top:' + b[3] + '%;width:' + b[4] + '%'; e.innerHTML = '<b>' + b[0] + '</b><span>' + b[1] + '</span>'; e.dataset.i = i; map.appendChild(e); });
    const N = 34, paths = []; for (let i = 0; i < N; i++) { const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.style.setProperty('--t', (11 + (i % 7) * 1.6) + 's'); p.style.animationDelay = (-i * .4) + 's'; rib.appendChild(p); paths.push(p); }
    const center = (i) => { const b = BUB[i]; return [(b[2] + b[4] / 2) * 10, (b[3] + b[4] / 2 / .625) * 6.25]; };
    let cx = center(2)[0], cy = center(2)[1], tx = cx, ty = cy, raf = 0;
    const draw = () => { paths.forEach((p, i) => { const t = i / (N - 1) - .5, y0 = 600 + t * 120, y1 = 20 + t * 90, mx = cx + t * 70, my = cy + t * 30;
      p.setAttribute('d', 'M-30 ' + y0 + ' C ' + (280) + ' ' + (y0 + 10) + ', ' + (mx - 250) + ' ' + (my + 150 + t * 40) + ', ' + mx + ' ' + my + ' C ' + (mx + 250) + ' ' + (my - 150 - t * 40) + ', ' + (720) + ' ' + (y1 + 20) + ', 1030 ' + y1); }); };
    const anim = () => { cx += (tx - cx) * .08; cy += (ty - cy) * .08; draw(); if (Math.abs(tx - cx) + Math.abs(ty - cy) > .5) raf = requestAnimationFrame(anim); else { raf = 0; } };
    const focusB = (i) => { $$('.bub', map).forEach((b, k) => b.setAttribute('aria-pressed', k === i)); [tx, ty] = center(i); map.classList.add('hot'); clearTimeout(focusB.t); focusB.t = setTimeout(() => map.classList.remove('hot'), 1600); if (R.reduce) { cx = tx; cy = ty; draw(); } else if (!raf) raf = requestAnimationFrame(anim); };
    draw(); $$('.bub', map).forEach((b) => { const i = +b.dataset.i; b.addEventListener('click', () => focusB(i)); b.addEventListener('pointerenter', () => focusB(i)); b.addEventListener('focus', () => focusB(i)); });

    /* ---------- 86.3 / 13.7 ---------- */
    const ch = $('#lp-solutions-ch'), blks = $$('.blk', ch), cols = $$('.col', ch), nn = $('#lp-solutions-nn'), nt = $('#lp-solutions-nt');
    const setCh = (on) => blks.forEach((b) => { b.style.height = on ? (+b.dataset.h / 86.3 * 100 * .86) + '%' : '0'; });
    const place = () => $$('.col', ch).forEach((c) => { const b = $('.blk', c), v = $('.v', c); v.style.bottom = 'calc(' + b.dataset.h * .86 / 86.3 * 100 * 1 + '% + 14px)'; });
    const sync = (on) => { blks.forEach((b) => { b.style.height = on ? (+b.dataset.h / 86.3 * 86) + '%' : '0'; }); cols.forEach((c) => { const v = $('.v', c); v.style.bottom = on ? 'calc(' + (+$('.blk', c).dataset.h / 86.3 * 86) + '% + 12px)' : '12px'; }); };
    sync(false); IO(ch, () => { sync(true); }, .3);
    const pickC = (s) => { cols.forEach((c, k) => c.classList.toggle('dim', s >= 0 && k !== s)); if (s < 0) return;
      nn.dataset.count = s ? 13.7 : 86.3; nn.dataset.from = s ? 86.3 : 13.7; nn.dataset.dur = 900; R.count(nn);
      nt.innerHTML = s ? '<span>Static Operations</span>' : '<span>Of financial operations remain</span> dependent on outdated workflows, limiting speed and clarity.'; };
    $$('button', ch).forEach((b) => { b.addEventListener('click', () => pickC(+b.dataset.s)); b.addEventListener('pointerenter', () => { if (matchMedia('(pointer:fine)').matches) pickC(+b.dataset.s); }); b.addEventListener('pointerleave', () => cols.forEach((c) => c.classList.remove('dim'))); });
    $('#lp-solutions-rp').addEventListener('click', () => { sync(false); cols.forEach((c) => c.classList.remove('dim')); nn.dataset.count = 86.3; nn.dataset.from = 0; R.count(nn); nt.innerHTML = '<span>Of financial operations remain</span> dependent on outdated workflows, limiting speed and clarity.'; setTimeout(() => sync(true), 120); });

    /* ---------- ice cards ---------- */
    $$('.ic3', root).forEach((c) => IO(c, () => c.classList.add('go'), .3));

    /* ---------- intelligence + tablet ---------- */
    const IGL = [['Intelligence', 'all', 'Intelligence'], ['Cash flow clarity', 'c', ''], ['Real-time insights', 'm', ''], ['Operational execution', 'o', '']];
    const igl = $('#lp-solutions-igl'), tb = $('#lp-solutions-tb'); let igT, igI = 0, igUser = false;
    IGL.forEach((g, i) => { const li = document.createElement('li'), b = document.createElement('button'); b.type = 'button'; b.textContent = g[0]; b.setAttribute('aria-pressed', i === 0); li.appendChild(b); igl.appendChild(li); b.addEventListener('click', () => { igUser = true; clearTimeout(igT); setIg(i); }); });
    const setIg = (i) => { igI = i; $$('button', igl).forEach((b, k) => b.setAttribute('aria-pressed', k === i)); const z = IGL[i][1]; tb.classList.toggle('f', z !== 'all'); $$('.z', tb).forEach((e) => e.classList.toggle('hi', z !== 'all' && (e.dataset.z === z || (z === 'c' && e.dataset.z === 'c')))); if (z === 'all') $$('.z', tb).forEach((e) => e.classList.remove('hi')); };
    const loop = () => { if (igUser || R.reduce) return; igT = setTimeout(() => { if (root.classList.contains('is-active')) setIg((igI + 1) % IGL.length); loop(); }, 3600); };
    IO($('#lp-solutions-igr'), loop, .35);
    const OPS = [['$1,200', 'Stripe Ltd', 'Payout', 'Mar 07', 'One-time'], ['$1,850', 'Supplier Ltd', 'Invoice payment', 'Mar 03', 'One-time'], ['$680', 'Luna Ltd', 'Invoice payment', 'Mar 10', 'Monthly'], ['$3,000', 'Contractor', 'Transfer', 'Mar 10', 'Weekly'], ['$980', 'Google Ads', 'Payment', 'Mar 11', 'Monthly']];
    $('#lp-solutions-tbo').innerHTML = OPS.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('');
    R.bars($('#lp-solutions-tbb'), { n: 46, h: 22, px: 28, gap: 4, w: 1.4, fade: false, label: 'Balance locked hairline chart', color: (i, n) => mix('#4FA3F2', i / n > .6 ? '#F5B27A' : '#9CCBF2', i / n), heights: (i, n) => .3 + .7 * Math.abs(Math.sin(i * .8)) });
    const tw = $('#lp-solutions-tabw'), igr = $('#lp-solutions-igr'); if (matchMedia('(pointer:fine)').matches && !R.reduce) { igr.addEventListener('pointermove', (e) => { const b = igr.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; tw.style.setProperty('--ry', (-6 + x * 10) + 'deg'); tw.style.setProperty('--rx', (4 - y * 8) + 'deg'); }); igr.addEventListener('pointerleave', () => { tw.style.removeProperty('--ry'); tw.style.removeProperty('--rx'); }); }

    /* ---------- sub sections ---------- */
    const subs = $$('.sub', root), jump = $('#lp-solutions-jump');
    const goSub = (s) => { s.scrollIntoView({ behavior: R.reduce ? 'auto' : 'smooth', block: 'start' }); s.classList.remove('flash'); void s.offsetWidth; s.classList.add('flash'); const h = $('h3', s); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } };
    const keyOf = (t) => t.replace(/\s+/g, ' ').trim().toLowerCase();
    subs.forEach((s) => { const h = $('h3', s).textContent; const b = document.createElement('button'); b.type = 'button'; b.textContent = h; b.addEventListener('click', () => goSub(s)); jump.appendChild(b); s.dataset.k = keyOf(h); });
    $$('.lp-footer a', root).forEach((a) => { const s = subs.find((x) => x.dataset.k === keyOf(a.textContent)); if (s) a.addEventListener('click', (e) => { e.preventDefault(); goSub(s); }); });

    const gt = $('#lp-solutions-gt'), bf = $('#lp-solutions-bf'); $$('[data-f]', gt).forEach((f) => { f.outerHTML = flag(f.dataset.f).replace('class="flag"', 'class="flag"'); });
    const setBF = (k) => { bf.innerHTML = flag(k) + '<i class="coin">' + (k === 'usd' ? '$' : '€') + '</i>'; $('.flag', bf).style.cssText = 'width:84px;height:84px'; };
    setBF('usd'); $$('button', gt).forEach((b) => b.addEventListener('click', () => { $$('button', gt).forEach((x) => x.setAttribute('aria-pressed', x === b)); setBF(b.dataset.c); }));
    $('#lp-solutions-ca2').addEventListener('click', () => R.toast('Account created in the demo'));

    const MT = [['Cash runway', 'Liquidity health', 'Optimal', '8.2 months'], ['Burn rate', 'Spending velocity', 'Healthy', '$12,400 / month'], ['Liquidity ratio', 'Balance coverage', 'Optimal', '2.4'], ['Success rate', 'Transaction reliability', 'Optimal', '98.6%']];
    $('#lp-solutions-mt').innerHTML = MT.map((m, i) => '<button class="mtr" type="button" aria-pressed="' + (i === 0) + '"><span><b>' + m[0] + '</b><small>' + m[1] + '</small></span><span class="st"><i></i>' + m[2] + '</span><span class="num">' + m[3] + '</span></button>').join('');
    $$('.mtr', root).forEach((b) => b.addEventListener('click', () => { $$('.mtr', root).forEach((x) => x.setAttribute('aria-pressed', x === b)); }));

    const sch = $('#lp-solutions-sch'), sw = $('#lp-solutions-sw'), SN = 56; let scOn = false;
    sch.innerHTML = '<svg viewBox="0 0 224 130" preserveAspectRatio="none" role="img" aria-label="Runway curve"><path id="lp-solutions-scp" d="" fill="none" stroke="#9CCBF2" stroke-width="1.6"/></svg>';
    const rects = [], sv = $('svg', sch); for (let i = 0; i < SN; i++) { const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); r.setAttribute('x', i * 4); r.setAttribute('width', 1.1); r.setAttribute('fill', '#A9CDF7'); sv.insertBefore(r, $('#lp-solutions-scp')); rects.push(r); }
    const curve = (on) => rects.map((r, i) => { const t = i / (SN - 1), v = on ? .12 + .8 * Math.pow(t, 2.2) : .1 + .26 * Math.pow(t, 1.6); return 120 * v + 6; });
    const paintSc = () => { const hs = curve(scOn); rects.forEach((r, i) => { r.style.y = (130 - hs[i]) + 'px'; r.style.height = hs[i] + 'px'; }); $('#lp-solutions-scp').setAttribute('d', hs.map((h, i) => (i ? 'L' : 'M') + (i * 4) + ' ' + (130 - h)).join('')); };
    rects.forEach((r) => { r.style.y = '130px'; r.style.height = '0'; }); IO(sch, paintSc, .3);
    sw.addEventListener('click', () => { scOn = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', scOn); paintSc(); $('#lp-solutions-scc').classList.toggle('off', !scOn); $('#lp-solutions-sn').textContent = scOn ? 'Runway grows to 5.4 months in 12 months.' : 'Runway stays at 4.6 months.';
      const el = $('#lp-solutions-rm'); el.dataset.count = scOn ? 5.4 : 4.6; el.dataset.from = scOn ? 4.6 : 5.4; el.dataset.decimals = 1; el.dataset.dur = 900; R.count(el); setTimeout(() => { el.textContent = (scOn ? '5.4' : '4.6') + ' months'; }, 950); });
    const origCount = R.count; $('#lp-solutions-rm').dataset.suffix = ' months';

    const AC = [['Reserve account **1234', '$25,000.00', 3.7, 25000, 'M'], ['Treasury account **9134', '$42,800.50', 4.1, 42800.5, 'M'], ['Reserve account **5672', '$53,000.00', 5.1, 53000, 'M']];
    const acs = $('#lp-solutions-acs'); const renderAc = (k) => { const L = AC.slice().sort((a, b) => k === 'apy' ? b[2] - a[2] : b[3] - a[3]); acs.innerHTML = L.map((a) => '<div class="acr"><span class="m">M:</span><span><b>' + a[0] + '</b><small>Yield optimization</small></span><span style="text-align:right"><b class="num">' + a[1] + '</b><small>' + a[2].toFixed(1) + '% APY</small></span><button class="tu" type="button" data-n="' + a[0] + '">Top Up</button></div>').join(''); };
    renderAc('bal'); acs.addEventListener('click', (e) => { const b = e.target.closest('.tu'); if (b) R.toast('Top up started for ' + b.dataset.n); });
    $$('#lp-solutions-srt button').forEach((b) => b.addEventListener('click', () => { $$('#lp-solutions-srt button').forEach((x) => x.setAttribute('aria-pressed', x === b)); renderAc(b.dataset.k); }));

    /* ---------- CTA ribbons ---------- */
    let w = ''; for (let i = 0; i < 28; i++) { const o = i * 8; w += '<path d="M-20 ' + (420 - o * .3) + ' C 280 ' + (80 + o) + ', 560 ' + (480 - o * .6) + ', 820 ' + (240 + o * .3) + ' S 1120 ' + (40 + o * .5) + ', 1240 ' + (160 + o * .4) + '"/>'; }
    $('#lp-solutions-cw').innerHTML = w;
  });
}
