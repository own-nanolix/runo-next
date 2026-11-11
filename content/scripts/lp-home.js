/* Generated from src/pages/lp-home.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-home', function (root) {
    var R = Runo, $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
    var NS = 'http://www.w3.org/2000/svg';
    var watch = function (el, cb) { new IntersectionObserver(function (es) { es.forEach(function (e) { cb(e.isIntersecting); }); }, { threshold: .1 }).observe(el); };

    /* ---- 1 hero pointer parallax ---- */
    var hero = $('.hero'), stage = $('#lp-home-stage');
    if (!R.reduce) {
      hero.addEventListener('pointermove', function (e) {
        var b = hero.getBoundingClientRect();
        stage.style.setProperty('--mx', (((e.clientX - b.left) / b.width - .5) * 2).toFixed(3));
        stage.style.setProperty('--my', (((e.clientY - b.top) / b.height - .5) * 2).toFixed(3));
      });
      hero.addEventListener('pointerleave', function () { stage.style.setProperty('--mx', 0); stage.style.setProperty('--my', 0); });
    }

    /* ---- 3 audiences ---- */
    var AUD = ['Finance teams', 'Founders', 'Operators', 'Startups', 'Global teams', 'Multi-account teams'];
    var PAL = [['#6F8FB4', '#E4E7EC', '#C6CBD4', '#AEB9C9'], ['#8FB6E6', '#F1F4F8', '#BAD5F3', '#A7C3E6'], ['#9FD0C3', '#EAF5F1', '#CEF5ED', '#9DB8B4'],
      ['#A7B8CD', '#FFFFFF', '#D5DAD0', '#8EA2BC'], ['#5D86B6', '#DCE6F3', '#9DB4D0', '#7E9CC3'], ['#B7C6D8', '#F4F2EC', '#CEF5ED', '#A3B0C4']];
    var tabs = $('#lp-home-aud-tabs'), pn = $('#lp-home-pn'), cur = 0, hold = false, vis = false, tb = [];
    AUD.forEach(function (n, i) {
      var p = PAL[i], d = document.createElement('div'); d.className = 'lay';
      d.style.background = 'radial-gradient(60% 50% at ' + (14 + i * 10) + '% ' + (18 + (i % 3) * 8) + '%,' + p[0] + ' 0%,transparent 60%),radial-gradient(50% 45% at ' + (78 - i * 7) + '% ' + (30 + (i % 2) * 14) + '%,' + p[1] + ' 0%,transparent 70%),radial-gradient(60% 60% at ' + (30 + i * 8) + '% 92%,' + p[2] + ' 0%,transparent 70%),' + p[3];
      pn.insertBefore(d, pn.firstChild);
      var b = document.createElement('button'); b.type = 'button'; b.role = 'tab'; b.id = 'lp-home-t' + i; b.textContent = n; b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'lp-home-pn'); tabs.appendChild(b); tb.push(b);
      b.addEventListener('pointerenter', function () { pick(i); }); b.addEventListener('focus', function () { pick(i); }); b.addEventListener('click', function () { pick(i); });
    });
    var lays = $$('.lay', pn).reverse();
    function pick(i) {
      cur = i;
      tb.forEach(function (b, k) { b.setAttribute('aria-selected', k === i); b.tabIndex = k === i ? 0 : -1; });
      lays.forEach(function (l, k) { l.classList.toggle('on', k === i); });
      pn.setAttribute('aria-labelledby', 'lp-home-t' + i);
    }
    tabs.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return; e.preventDefault(); var n = (cur + d + AUD.length) % AUD.length; pick(n); tb[n].focus();
    });
    tabs.addEventListener('pointerenter', function () { hold = true; }); tabs.addEventListener('pointerleave', function () { hold = false; });
    tabs.addEventListener('focusin', function () { hold = true; }); tabs.addEventListener('focusout', function () { hold = false; });
    watch(pn, function (v) { vis = v; });
    pick(0);
    if (!R.reduce) setInterval(function () { if (vis && !hold && R.current && R.current.id === 'lp-home') pick((cur + 1) % AUD.length); }, 4200);

    /* ---- 4 ring ---- */
    (function () {
      var c = 280, r = 243, svg = $('#lp-home-rsv');
      var pt = function (a, rad) { var t = a * Math.PI / 180; return [(c + rad * Math.cos(t)).toFixed(2), (c - rad * Math.sin(t)).toFixed(2)]; };
      var g = '<g class="g1">';
      [90, 0, 270, 180].forEach(function (a) {
        var s = pt(a + 37, r), e = pt(a - 37, r), d = pt(a, r - 16);
        g += '<path class="arc" d="M' + s[0] + ' ' + s[1] + 'A' + r + ' ' + r + ' 0 0 1 ' + e[0] + ' ' + e[1] + '"/><circle class="dt" cx="' + d[0] + '" cy="' + d[1] + '" r="2.6"/>';
      });
      g += '</g><g class="g2"><circle class="hl2" cx="' + c + '" cy="' + c + '" r="' + r + '" pathLength="360" stroke-dasharray="26 334" opacity=".95"/><circle class="hl2" cx="' + c + '" cy="' + c + '" r="' + r + '" pathLength="360" stroke-dasharray="60 300" stroke-width="7" opacity=".16"/></g>';
      svg.innerHTML = g;
    })();

    /* ---- 5 execute pill + fabric ---- */
    (function () {
      var f = $('#lp-home-fab');
      f.innerHTML = '<g filter="url(#lp-home-fb)"><g class="gp p1"><path d="M-20 60C60 20 140 40 200 -10L340 -10 340 120C260 90 200 160 150 230S60 300 -20 280Z" fill="#7FB3A2"/><path d="M200 -10C260 60 320 80 340 120L340 -10Z" fill="#4F7F6B"/></g>'
        + '<g class="gp p2"><path d="M40 -10C80 60 130 120 150 190 190 260 170 340 110 380L-30 380 -30 200C20 160 10 60 40 -10Z" fill="#F4F8F3"/><path d="M110 380C170 300 250 280 330 250L340 380Z" fill="#9CCBB9"/><path d="M180 120C220 150 260 210 250 300 230 360 330 380 340 380L340 90Z" fill="#3E6B58" opacity=".85"/></g>'
        + '<path d="M60 40C100 100 90 190 140 240" stroke="#fff" stroke-width="26" fill="none" opacity=".75" stroke-linecap="round"/></g>';
      var b = $('#lp-home-ex'); b.addEventListener('click', function () { b.classList.remove('go'); void b.offsetWidth; b.classList.add('go'); });
    })();

    /* ---- 6 accordion ---- */
    var ACC = [['Centralized financial control', 'Manage all accounts, payments, and operations in one place with full visibility and control.'],
      ['Centralized financial control', 'Runo helps you manage payments, monitor cash flow, and control financial operations in real time.'],
      ['Automate financial decisions', 'Runo analyzes your cash and executes the best move automatically.'],
      ['Built-in AI Copilot', 'Move funds, and complete operations directly from the copilot.']];
    var acc = $('#lp-home-acc');
    acc.innerHTML = ACC.map(function (a, i) {
      return '<div class="ai' + (i ? '' : ' open') + '"><h3><button type="button" aria-expanded="' + (i ? 'false' : 'true') + '" aria-controls="lp-home-a' + i + '"><span>' + a[0] + '</span><span class="n">0' + (i + 1) + '</span></button></h3><div class="ab" id="lp-home-a' + i + '" role="region"><div><p>' + a[1] + '</p></div></div></div>';
    }).join('');
    $$('.ai > h3 > button', acc).forEach(function (b) {
      b.addEventListener('click', function () {
        var item = b.closest('.ai'), was = item.classList.contains('open');
        $$('.ai', acc).forEach(function (x) { x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
        if (!was) { item.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      });
    });
    var marks = [17.5, 60.4, 84.2];
    R.bars($('#lp-home-strip'), { n: 112, h: 44, px: 44, gap: 4, w: 1.4, label: 'Runway spend strip: core team, vendors, tools and infrastructure',
      color: function (i, n) { var p = i / n * 100; return marks.some(function (m) { return p >= m && p < m + 9.5; }) ? '#8CC0F8' : '#2F4D6E'; } });

    /* ---- 7 coins ---- */
    (function () {
      var cb = $('#lp-home-cb'), coins = [];
      var ray = function (dx, dy, col, w) { var s = ''; for (var k = 0; k < 8; k++) { s += '<line x1="100" y1="100" x2="100" y2="' + (k % 2 ? 62 : 54) + '" transform="translate(' + dx + ' ' + dy + ') rotate(' + (k * 45 + (k % 2) * 6) + ' 100 100)" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round"/>'; } return s; };
      var face = function (kind) {
        if (kind === 'm') {
          var m = function (dx, dy, f, o) { return '<use href="#runo-mark" x="0" y="0" transform="translate(' + (51 + dx) + ' ' + (52 + dy) + ') scale(.27)" fill="' + f + '" opacity="' + o + '"/>'; };
          return m(3, 3, '#6F6455', .85) + m(-2, -2, '#fff', .95) + m(0, 0, '#D3C8B7', 1);
        }
        return ray(2.4, 2.8, '#6F6455', 8) + ray(-1.6, -1.8, '#fff', 8) + ray(0, 0, '#D6CBBA', 7).replace(/y2="(62|54)"/g, function (a, b) { return 'y2="' + b + '"'; });
      };
      var coin = function (kind, blur) {
        var ridges = '<circle cx="100" cy="100" r="95" fill="none" stroke="#7F7364" stroke-width="5" stroke-dasharray="1.2 2.4" opacity=".9"/>';
        return '<svg viewBox="0 0 200 212" aria-hidden="true"><g' + (blur ? ' filter="url(#lp-home-b' + blur + ')"' : '') + '><circle cx="100" cy="112" r="97" fill="url(#lp-home-cr)"/><circle cx="100" cy="100" r="97" fill="url(#lp-home-cr)"/>' + ridges
          + '<circle cx="100" cy="100" r="88" fill="url(#lp-home-cf)"/><circle cx="100" cy="100" r="76" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.2"/>' + face(kind) + '</g></svg>';
      };
      [['62%', '-6%', 300, 'm', 0, 55, -8, -10, 62, -2, 8, -14, 12, 9], ['27%', '1%', 250, 'a', 0, 66, 10, 20, 72, 14, 30, -6, 11, 7],
       ['2%', '36%', 340, 'a', 6, 50, 8, -20, 58, 16, 6, 10, 15, 6], ['76%', '28%', 250, 'm', 6, 62, -14, 24, 68, -4, 18, 40, 13, 5],
       ['66%', '70%', 170, 'a', 12, 52, 12, -30, 60, 2, -10, 20, 17, 4], ['40%', '72%', 130, 'm', 12, 60, 20, 10, 66, -12, -4, -30, 14, 3]].forEach(function (c, i) {
        var d = document.createElement('div'); d.className = 'coin';
        d.style.cssText = '--x:' + c[0] + ';--y:' + c[1] + ';--s:' + c[2] + ';--a1:' + c[5] + 'deg;--b1:' + c[6] + 'deg;--c1:' + c[7] + 'deg;--a2:' + c[8] + 'deg;--b2:' + c[9] + 'deg;--c2:' + c[10] + 'deg;--dur:' + c[12] + 's;--dl:' + (-i * 2.4) + 's';
        d.innerHTML = '<div class="cd2">' + coin(c[3], c[4]) + '</div>'; d.dataset.z = c[13]; cb.appendChild(d); coins.push(d);
      });
      var px = 0, tick = 0;
      var upd = function () {
        tick = 0; var b = cb.getBoundingClientRect(), p = (innerHeight / 2 - (b.top + b.height / 2)) / innerHeight;
        coins.forEach(function (d) { var z = +d.dataset.z; d.style.setProperty('--ty', (p * z * 24).toFixed(1) + 'px'); d.style.setProperty('--tx', (px * z * 6).toFixed(1) + 'px'); });
      };
      var q = function () { if (!tick) tick = requestAnimationFrame(upd); };
      if (!R.reduce) { addEventListener('scroll', q, { passive: true }); cb.addEventListener('pointermove', function (e) { var b = cb.getBoundingClientRect(); px = (e.clientX - b.left) / b.width - .5; q(); }); upd(); }
    })();

    /* ---- 8 scroller drag + keyboard ---- */
    (function () {
      var sc = $('#lp-home-sc'), down = false, sx = 0, sl = 0, moved = 0;
      sc.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = sc.scrollLeft; });
      addEventListener('pointermove', function (e) { if (!down) return; var d = e.clientX - sx; if (Math.abs(d) > 4) { moved = 1; sc.classList.add('dr'); } sc.scrollLeft = sl - d; });
      addEventListener('pointerup', function () { if (!down) return; down = false; sc.classList.remove('dr'); });
      sc.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') sc.scrollBy({ left: 390, behavior: 'smooth' }); if (e.key === 'ArrowLeft') sc.scrollBy({ left: -390, behavior: 'smooth' }); });
    })();

    /* ---- 9 scenario ---- */
    (function () {
      var sn = $('#lp-home-sn'), mt = $('#lp-home-mt'), sw = $('#lp-home-sw'), tab = 'runway', on = true;
      var curve = function (t) { return on ? .47 - .05 * Math.sin(Math.min(1, t * 2) * Math.PI) + .53 * Math.pow(t, 3.2) : .47 - .03 * Math.sin(t * Math.PI); };
      var ic = function (n) { return '<svg class="icon" aria-hidden="true" viewBox="0 0 16 16"><use href="#i-' + n + '"/></svg>'; };
      var head = '<div class="r1"><h3>Scenario</h3><span class="pl">+0.8 months runway</span></div>'
        + '<div class="r2"><span>Allocated amount</span><span><b class="num">$10,000<em>.00</em></b><span class="co" aria-hidden="true">$</span></span></div>';
      var chart = function (second) {
        var pts = [], pa = []; for (var i = 0; i <= 56; i++) { var t = i / 56; pts.push((i ? 'L' : 'M') + (t * 100).toFixed(2) + ' ' + (100 - curve(t) * 96).toFixed(2)); pa.push((i ? 'L' : 'M') + (t * 100).toFixed(2) + ' ' + (100 - .47 * 96).toFixed(2)); }
        return '<div class="ch2"><div id="lp-home-bars"></div><svg class="cv" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="' + pts.join('') + '"/>' + (second ? '<path class="a" d="' + pa.join('') + '"/>' : '') + '</svg></div>';
      };
      var proj = function (label, right, second) {
        return '<h4>Projected outcome</h4><div class="nw"><span>Now →</span><span>+12 months</span></div><div class="rw"><span>Runway: 4.6 →</span><b class="num">' + right + ' months <i>' + ic('chart') + '</i></b></div>' + chart(second);
      };
      var views = {
        runway: function () { return proj('', on ? '5.4' : '4.6', false); },
        forecasts: function () { return proj('', on ? '5.4' : '4.6', true) + '<div class="nw" style="margin-top:12px"><span>Forecast</span><span>Actual</span></div>'; },
        allocation: function () {
          var rows = [['Core team', 10420], ['Vendors', 5380], ['Tools &amp; infra', 3100], ['Committed', 6240], ['Current burn', 18900]];
          return '<h4>Projected outcome</h4><div class="al2">' + rows.map(function (r) { return '<div><div class="ln"><span>' + r[0] + '</span><b class="num">$' + R.fmt(r[1]) + '</b></div><div class="mb"><i style="--w:' + (r[1] / 18900 * 100).toFixed(1) + '%"></i></div></div>'; }).join('') + '</div>';
        }
      };
      var render = function () {
        sn.classList.toggle('off', !on);
        sn.innerHTML = head + '<div class="fd">' + views[tab]() + '</div>';
        var bx = $('#lp-home-bars', sn);
        if (bx) { R.bars(bx, { n: 58, h: 218, px: 218, gap: 4, w: 1.2, color: '#8CC0F8', color2: '#C7DFFA', fade: true, label: 'Runway projection over the next 12 months', heights: function (i, n) { return curve(i / (n - 1)); } }); bx.firstElementChild.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'; R.scan(sn); var s = $('.rbars', sn); if (s) s.classList.add('in'); }
      };
      $$('button', mt).forEach(function (b) {
        b.addEventListener('click', function () { tab = b.dataset.k; $$('button', mt).forEach(function (x) { var s = x === b; x.setAttribute('aria-selected', s); x.tabIndex = s ? 0 : -1; }); sn.setAttribute('aria-labelledby', b.id); render(); });
      });
      mt.addEventListener('keydown', function (e) {
        var bs = $$('button', mt), i = bs.indexOf(document.activeElement); if (i < 0) return;
        var n = e.key === 'ArrowRight' ? (i + 1) % 3 : e.key === 'ArrowLeft' ? (i + 2) % 3 : -1; if (n < 0) return; e.preventDefault(); bs[n].focus(); bs[n].click();
      });
      sw.addEventListener('click', function () { on = !on; sw.setAttribute('aria-checked', on); sw.setAttribute('aria-label', on ? 'Scenario on' : 'Scenario off'); render(); });
      render();
    })();

    /* ---- 10 CTA artwork ---- */
    (function () {
      var s = $('#lp-home-cbg'), l = '';
      for (var i = 0; i < 64; i++) { var x = 760 + i * 9; l += '<path d="M' + x + ' 560C' + (x + 40) + ' 420 ' + (x - 20) + ' 300 ' + (x + 70) + ' 150S' + (x + 150) + ' 20 ' + (x + 190) + ' -20" stroke="#fff" stroke-opacity="' + (.1 + (i % 5) * .05) + '" stroke-width=".8" fill="none"/>'; }
      s.innerHTML = '<defs><linearGradient id="lp-home-cg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E4EAE6"/><stop offset=".5" stop-color="#B9C0BD"/><stop offset="1" stop-color="#9AA3A1"/></linearGradient>'
        + '<linearGradient id="lp-home-cg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3F7F1"/><stop offset=".6" stop-color="#C8E5D9"/><stop offset="1" stop-color="#8FC4B0"/></linearGradient>'
        + '<filter id="lp-home-cgb" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="22"/></filter>'
        + '<filter id="lp-home-cgn" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".09"/></feComponentTransfer></filter></defs>'
        + '<rect width="1265" height="540" fill="url(#lp-home-cg2)"/>'
        + '<g filter="url(#lp-home-cgb)"><ellipse cx="1050" cy="130" rx="260" ry="130" fill="#6F9F8B" opacity=".75"/><ellipse cx="900" cy="470" rx="240" ry="120" fill="#4E8672" opacity=".8"/><ellipse cx="1180" cy="420" rx="200" ry="150" fill="#F7FBF5" opacity=".9"/><ellipse cx="800" cy="60" rx="140" ry="70" fill="#fff" opacity=".7"/></g>' + l
        + '<path d="M-20 -20H600L1010 150Q1038 168 1000 196L440 560H-20Z" fill="url(#lp-home-cg1)"/><rect width="1265" height="540" filter="url(#lp-home-cgn)" opacity="1"/>'
        + '<path d="M1010 150Q1038 168 1000 196L440 560" stroke="#fff" stroke-width="2.2" fill="none" opacity=".85"/><path d="M600 -20L1010 150" stroke="#fff" stroke-width="1.4" fill="none" opacity=".55"/>';
    })();
  });
}
