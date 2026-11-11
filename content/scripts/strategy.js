/* Generated from src/pages/strategy.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('strategy', function (root) {
    const $ = (s, r) => (r || root).querySelector(s), $$ = (s, r) => Array.from((r || root).querySelectorAll(s));
    const R = Runo, reduce = R.reduce;
    const onView = (el, fn, th) => {
      const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { o.disconnect(); fn(); } }), { threshold: th || .3 });
      o.observe(el);
    };
    const countEl = (el, to, d, suf) => { el.dataset.count = to; el.dataset.decimals = d || 0; el.dataset.suffix = suf || ''; R.count(el); };
    const lerpAt = (pts, x) => { for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const a = pts[i - 1], b = pts[i], t = (x - a[0]) / ((b[0] - a[0]) || 1); return a[1] + (b[1] - a[1]) * t; } return pts[pts.length - 1][1]; };
  
    /* ---------- 1. selection highlight + handles ---------- */
    const head = $('#sy-shift'), sel = $('.sel', head), hs = $('.hs.s', head), he = $('.hs.e', head);
    const place = () => {
      const rs = sel.getClientRects(); if (!rs.length) return;
      const hb = head.getBoundingClientRect(), a = rs[0], b = rs[rs.length - 1];
      hs.style.cssText = 'left:' + (a.left - hb.left) + 'px;top:' + (a.top - hb.top) + 'px;height:' + a.height + 'px';
      he.style.cssText = 'left:' + (b.right - hb.left - 2) + 'px;top:' + (b.top - hb.top) + 'px;height:' + b.height + 'px';
    };
    place(); addEventListener('resize', place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    onView(head, () => { place(); head.classList.add('go'); }, .5);
  
    /* ---------- 2. 86.3 / 13.7 chart ---------- */
    (function () {
      const host = $('#sy-c1'); const base = 560, h1 = 500, h2 = 67;
      let ticks = '';
      for (let k = 0; k <= 18; k++) ticks += `<line class="tick" style="--i:${k}" x1="40" x2="70" y1="${base - k * 30}" y2="${base - k * 30}" stroke="#D9DDE3" stroke-opacity="${(1 - k / 24).toFixed(2)}"/>`;
      let ln = '';
      for (let i = 0; i < 60; i++) ln += `<rect style="--i:${i}" x="${(545 + i * 7.25).toFixed(1)}" y="${base - h2}" width="1.2" height="${h2}" fill="${i % 5 === 4 ? '#CBD0D8' : '#B6D2F5'}"/>`;
      host.innerHTML = `<svg viewBox="0 0 1000 640" role="img" aria-label="Bar chart. Adaptive Systems 86.3 percent, Static Operations 13.7 percent, on a System Inefficiency scale.">
        <g aria-hidden="true">${ticks}<text x="26" y="320" transform="rotate(-90 26 320)" text-anchor="middle" font-size="17" fill="#6B7280">System Inefficiency</text></g>
        <g class="grp" tabindex="0" aria-label="Adaptive Systems 86.3%">
          <rect class="bar" x="110" y="${base - h1}" width="430" height="${h1}" fill="#F2F3F5"/>
          <g class="fade"><line x1="110" x2="540" y1="${base - h1}" y2="${base - h1}" stroke="#7FA3D3" stroke-width="1.4"/><rect class="hd" x="319" y="${base - h1 - 6}" width="12" height="12" fill="#7FA3D3"/>
          <text id="sy-l1" x="325" y="${base - h1 - 28}" text-anchor="middle" font-size="40" letter-spacing="-1.5" fill="#000">86.3%</text></g>
        </g>
        <g class="grp" tabindex="0" aria-label="Static Operations 13.7%">
          <g class="ln">${ln}</g>
          <g class="fade"><line x1="540" x2="980" y1="${base - h2}" y2="${base - h2}" stroke="#7FA3D3" stroke-width="1.4"/><rect class="hd" x="754" y="${base - h2 - 6}" width="12" height="12" fill="#7FA3D3"/>
          <text id="sy-l2" x="760" y="${base - h2 - 28}" text-anchor="middle" font-size="40" letter-spacing="-1.5" fill="#000">13.7%</text></g>
        </g>
        <g aria-hidden="true"><line x1="110" x2="980" y1="${base + 1}" y2="${base + 1}" stroke="#BAD5F3" stroke-width="2"/>
          <path d="M100 561 114 553V569Z" fill="#BAD5F3"/><path d="M990 561 976 553V569Z" fill="#BAD5F3"/>
          <text x="325" y="604" text-anchor="middle" font-size="18" fill="#6B7280">Adaptive Systems</text><text x="760" y="604" text-anchor="middle" font-size="18" fill="#6B7280">Static Operations</text></g></svg>`;
      const svg = host.firstElementChild;
      onView(host, () => { host.classList.add('go'); countEl($('#sy-l1'), 86.3, 1, '%'); countEl($('#sy-l2'), 13.7, 1, '%'); }, .35);
    })();
  
    /* ---------- 3. impact curve ---------- */
    (function () {
      const svg = $('#sy-imp-svg'), box = $('#sy-imp'), tip = $('#sy-tip'), stBox = $('#sy-stages');
      const W = 1780, base = 636;
      const P = [[78,56],[280,56],[350,67],[405,100],[477,160],[530,235],[577,325],[630,400],[680,465],[752,498],[800,488],[850,440],[900,408],[950,377],[1000,358],[1050,350],[1100,358],[1180,395],[1230,440],[1280,472],[1350,498],[1430,500],[1530,508],[1675,525]];
      let d = 'M' + P[0].join(' ');
      for (let i = 0; i < P.length - 1; i++) {
        const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
      }
      const gridY = [30, 128, 225, 322, 420, 518];
      const N = 65, x0 = 78, x1 = 1675, step = (x1 - x0) / (N - 1);
      let hair = '';
      /* path first so we can sample it */
      svg.innerHTML = `<g aria-hidden="true">${gridY.map((y) => `<line x1="78" x2="1675" y1="${y}" y2="${y}" stroke="#EEF0F3"/>`).join('')}
        <path d="M18 ${base} V22" stroke="#BFD7F4" stroke-width="1.6" fill="none"/><path d="M11 32 18 21 25 32" stroke="#BFD7F4" stroke-width="1.6" fill="none"/>
        <path d="M18 ${base} H1750" stroke="#BFD7F4" stroke-width="1.6" fill="none"/><path d="M1740 ${base - 7} 1751 ${base} 1740 ${base + 7}" stroke="#BFD7F4" stroke-width="1.6" fill="none"/>
        <text x="40" y="330" transform="rotate(-90 40 330)" text-anchor="middle" font-size="22" fill="#6B7280">Operational friction</text></g>
        <g class="hair" id="sy-hair" aria-hidden="true"></g>
        <path id="sy-curve" d="${d}" fill="none" stroke="#C4DAF5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g id="sy-dots" aria-hidden="true"></g>
        <g class="late" aria-hidden="true"><rect x="998" y="437" width="104" height="54" rx="10" fill="#D4E5FB"/><text x="1050" y="473" text-anchor="middle" font-size="26" fill="#27598F">-60%</text>
          <path d="M1668 513 1695 528 1668 537Z" fill="#BAD5F3"/><circle cx="1598" cy="383" r="38" fill="#D3E3F8"/>
          <svg x="1578" y="363" width="40" height="40" viewBox="0 0 362 360" fill="#fff"><use href="#runo-mark"/></svg></g>
        <g class="xh" id="sy-xh" aria-hidden="true"><line id="sy-xv" y1="22" y2="${base}" stroke="#4F97E6" stroke-width="1.4" stroke-dasharray="4 5"/><line id="sy-xhz" x1="18" stroke="#4F97E6" stroke-width="1.4" stroke-dasharray="4 5"/><circle id="sy-xc" r="9" fill="#fff" stroke="#4F97E6" stroke-width="3"/></g>`;
      const curve = $('#sy-curve'), L = curve.getTotalLength(), S = 900, tab = [];
      for (let i = 0; i <= S; i++) { const p = curve.getPointAtLength(L * i / S); tab.push([p.x, p.y, L * i / S]); }
      const yAt = (x) => lerpAt(tab, x), lenAt = (x) => lerpAt(tab.map((t) => [t[0], t[2]]), x);
      for (let i = 0; i < N; i++) {
        const x = x0 + i * step, y = yAt(x), amber = i <= 10, o = amber ? Math.max(.18, .9 - Math.max(0, i - 5) * .13) : (i === 39 ? 1 : .62);
        hair += `<line data-x="${x.toFixed(1)}" x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${(y + 3).toFixed(1)}" y2="${base}" stroke="${amber ? '#F5B27A' : (i === 39 ? '#7FB4F2' : '#A6CBF5')}" stroke-width="${i === 39 ? 2 : 1.4}" style="--o:${o.toFixed(2)};transition-delay:0ms"/>`;
      }
      $('#sy-hair').innerHTML = hair;
      const cl = [[79,102,125,148,171],[293,316,338],[1004,1027,1050,1073,1096]];
      $('#sy-dots').innerHTML = cl.map((xs) => xs.map((x) => `<circle class="dot" data-x="${x}" cx="${x}" cy="${yAt(x).toFixed(1)}" r="11" fill="#8FC0FA"/>`).join('')).join('');
      curve.style.strokeDasharray = L; curve.style.strokeDashoffset = L;
      const lines = $$('#sy-hair line'), dots = $$('.dot', svg);
      const draw = (p) => {
        curve.style.strokeDashoffset = L * (1 - p);
        const xr = lerpAt(tab.map((t) => [t[2], t[0]]), L * p);
        lines.forEach((l) => l.classList.toggle('on', +l.dataset.x <= xr + 1));
        dots.forEach((c) => c.classList.toggle('on', +c.dataset.x <= xr + 1));
      };
      onView(box, () => {
        if (reduce) { draw(1); box.classList.add('go'); return; }
        const t0 = performance.now(), D = 3200;
        const f = (t) => { const k = Math.min(1, (t - t0) / D), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; draw(e); if (k < 1) requestAnimationFrame(f); };
        box.classList.add('go'); requestAnimationFrame(f);
      }, .3);
      /* stages */
      const stages = [['Intake', 80], ['Setup', 325], ['Accounts', 585], ['Payments', 860], ['Automation', 1147], ['Insights', 1423], ['Scale', 1672]];
      const btns = stages.map(([n, x], i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = n; b.style.left = (x / W * 100) + '%'; b.dataset.i = i; stBox.appendChild(b); return b; });
      let cur = -1;
      const show = (i) => {
        cur = i; const [n, x] = stages[i], cx = Math.min(Math.max(x, x0), x1), cy = yAt(cx);
        $('#sy-xv').setAttribute('x1', cx); $('#sy-xv').setAttribute('x2', cx); $('#sy-xhz').setAttribute('x2', cx); $('#sy-xhz').setAttribute('y1', cy); $('#sy-xhz').setAttribute('y2', cy);
        $('#sy-xc').setAttribute('cx', cx); $('#sy-xc').setAttribute('cy', cy);
        tip.textContent = n; tip.style.left = (cx / W * 100) + '%'; tip.style.top = (cy / 700 * svg.getBoundingClientRect().height) + 'px';
        box.classList.add('hov'); btns.forEach((b, k) => b.setAttribute('aria-current', k === i));
      };
      const hide = () => { cur = -1; box.classList.remove('hov'); btns.forEach((b) => b.removeAttribute('aria-current')); };
      svg.addEventListener('pointermove', (e) => {
        const r = svg.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * W; let k = 0, best = 1e9;
        stages.forEach((s, i) => { const dd = Math.abs(s[1] - x); if (dd < best) { best = dd; k = i; } }); if (k !== cur) show(k);
      });
      svg.addEventListener('pointerleave', () => { if (!btns.includes(document.activeElement)) hide(); });
      btns.forEach((b, i) => {
        b.addEventListener('pointerenter', () => show(i)); b.addEventListener('focus', () => show(i));
        b.addEventListener('blur', () => setTimeout(() => { if (!btns.includes(document.activeElement)) hide(); }, 0));
        b.addEventListener('keydown', (e) => {
          const k = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? btns.length - 1 : null;
          if (k === null) return; e.preventDefault(); btns[(k + btns.length) % btns.length].focus();
        });
      });
      stBox.addEventListener('pointerleave', () => { if (!btns.includes(document.activeElement)) hide(); });
    })();
  
    /* ---------- 4. +74% chart ---------- */
    (function () {
      const host = $('#sy-c4'), wrap = $('#sy-c4wrap'), base = 705;
      const sig = [[945,663],[1072,663],[1160,583],[1348,583],[1452,479],[1566,479],[1726,318],[1779,318]];
      const sta = [[945,687],[1117,687],[1302,523],[1472,523],[1578,618],[1695,618],[1733,577],[1780,577]];
      const toD = (pts) => 'M' + pts.map((p) => p.join(' ')).join(' L');
      let hair = '';
      for (let i = 0, x = 947; x < 1779; i++, x += 6.1) {
        const y = lerpAt(sta, x), amber = x < 1215 || x > 1733;
        hair += `<rect style="--i:${i}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="1.1" height="${(base - y).toFixed(1)}" fill="${amber ? '#F5B27A' : '#B9D4F5'}" opacity="${amber ? .75 : 1}"/>`;
      }
      const gy = [[301, '100%'], [399, '75%'], [497, '50%'], [595, '25%'], [693, '0%']];
      host.innerHTML = `<svg viewBox="820 270 980 530" role="img" aria-label="Chart of Signal Detection against Static Reporting across Input, Processing, Adaptation and Response. Signal Detection rises in steps from about 10 to nearly 100 percent; Static Reporting peaks at about 45 percent during Adaptation then falls.">
        <g aria-hidden="true">${gy.map(([y, t]) => `<line x1="938" x2="1790" y1="${y}" y2="${y}" stroke="#EEF0F3"/><text x="893" y="${y + 6}" text-anchor="end" font-size="19" fill="#6B7280">${t}</text>`).join('')}</g>
        <g class="ser ser-sta"><g class="ar" aria-hidden="true">${hair}</g><path class="pl" pathLength="1" d="${toD(sta)}" fill="none" stroke="#A9CBF3" stroke-width="2"/></g>
        <g aria-hidden="true"><line x1="945" x2="1782" y1="${base}" y2="${base}" stroke="#BAD5F3" stroke-width="2.5"/><path d="M938 ${base} 954 697V713Z" fill="#BAD5F3"/><path d="M1790 ${base} 1774 697V713Z" fill="#BAD5F3"/>
          <text x="945" y="750" font-size="20" fill="#6B7280">Input</text><text x="1207" y="750" text-anchor="middle" font-size="20" fill="#6B7280">Processing</text><text x="1473" y="750" text-anchor="middle" font-size="20" fill="#6B7280">Adaptation</text><text x="1777" y="750" text-anchor="end" font-size="20" fill="#6B7280">Response</text></g>
        <g class="ser ser-sig"><path class="pl" pathLength="1" d="${toD(sig)}" fill="none" stroke="#6CA3E8" stroke-width="2.6" stroke-linejoin="round" style="transition-delay:.2s"/></g></svg>`;
      onView(wrap, () => wrap.classList.add('go'), .3);
      $$('#sy-legend button').forEach((b) => b.addEventListener('click', () => {
        const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
        $('.ser-' + b.dataset.s, host).classList.toggle('off', !on);
      }));
    })();
  
    /* ---------- 5. wave ribbons + bubbles ---------- */
    (function () {
      const svg = $('#sy-waves'); let out = '';
      for (let i = 0; i < 44; i++) {
        const s = (i - 21.5) / 21.5, a = Math.abs(s);
        out += `<path d="M${(1010 + s * 80).toFixed(1)} -20 C${(790 + s * 50).toFixed(1)} 50 ${(560 + s * 14).toFixed(1)} ${(150 + s * 16).toFixed(1)} ${(520 + s * 8).toFixed(1)} 300 S${(470 + s * 40).toFixed(1)} 470 ${(60 + s * 80).toFixed(1)} 700" stroke="#8DB9EE" stroke-width=".7" stroke-opacity="${(.85 - a * .45).toFixed(2)}" style="--wd:${(10 + (i % 7)).toFixed(0)}s;--wl:${(-i * .35).toFixed(2)}s"/>`;
      }
      for (let j = 0; j < 16; j++) {
        out += `<path d="M-30 ${520 + j * 13} C140 ${490 + j * 13} 260 ${600 + j * 14} 420 ${690 + j * 14}" stroke="#A9CBF3" stroke-width=".7" stroke-opacity="${(.7 - j * .03).toFixed(2)}" style="--wd:${12 + (j % 4)}s;--wl:${(-j * .5).toFixed(1)}s"/>`;
      }
      svg.innerHTML = out;
      const map = $('#sy-map');
      $$('.bub', map).forEach((b) => {
        const on = () => { map.dataset.active = b.dataset.k; b.classList.add('is-on'); };
        const off = () => { delete map.dataset.active; b.classList.remove('is-on'); };
        b.addEventListener('pointerenter', on); b.addEventListener('pointerleave', off); b.addEventListener('focus', on); b.addEventListener('blur', off);
      });
    })();
    R.scan(root);
  });
}
