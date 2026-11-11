/* Generated from src/pages/lp-global.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-global', function (root) {
    var R = Runo, $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
    var NS = 'lp-global-';
    $('.try-dot').innerHTML = R.icon('arrow-ne');
  
    /* ---------- simplified circular flags (40x40) ---------- */
    var H = function (c) { var h = 40 / c.length; return c.map(function (x, i) { return '<rect y="' + (i * h).toFixed(2) + '" width="40" height="' + (h + .3).toFixed(2) + '" fill="' + x + '"/>'; }).join(''); };
    var V = function (c) { var w = 40 / c.length; return c.map(function (x, i) { return '<rect x="' + (i * w).toFixed(2) + '" width="' + (w + .3).toFixed(2) + '" height="40" fill="' + x + '"/>'; }).join(''); };
    var usa = (function () { var s = ''; for (var i = 0; i < 13; i++) s += '<rect y="' + (i * 40 / 13).toFixed(2) + '" width="40" height="' + (40 / 13 + .3).toFixed(2) + '" fill="' + (i % 2 ? '#fff' : '#B22234') + '"/>'; s += '<rect width="19" height="21.6" fill="#3C3B6E"/>';
      for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) s += '<circle cx="' + (2.6 + c * 3.4) + '" cy="' + (3 + r * 4.8) + '" r=".75" fill="#fff"/>'; return s; })();
    var greece = (function () { var s = '<rect width="40" height="40" fill="#0D5EAF"/>'; for (var i = 1; i < 9; i += 2) s += '<rect y="' + (i * 40 / 9).toFixed(2) + '" width="40" height="' + (40 / 9).toFixed(2) + '" fill="#fff"/>';
      return s + '<rect width="22.3" height="22.3" fill="#0D5EAF"/><rect x="8.9" width="4.5" height="22.3" fill="#fff"/><rect y="8.9" width="22.3" height="4.5" fill="#fff"/>'; })();
    var FL = {
      France: V(['#002654', '#fff', '#ED2939']),
      Spain: '<rect width="40" height="40" fill="#AA151B"/><rect y="10" width="40" height="20" fill="#F1BF00"/><rect x="8" y="16" width="5" height="8" rx="1" fill="#AD1519" opacity=".8"/>',
      Brazil: '<rect width="40" height="40" fill="#229E45"/><path d="M20 6L36 20 20 34 4 20z" fill="#F8E509"/><circle cx="20" cy="20" r="7.5" fill="#2B3F87"/><path d="M13 19.6Q20 17 27 21" stroke="#fff" stroke-width="1.5" fill="none"/>',
      Canada: '<rect width="40" height="40" fill="#D52B1E"/><rect x="10" width="20" height="40" fill="#fff"/><path d="M20 9l1.6 4 2.4-1-1 4.500 4-1.500-1.500 4.500 2.500 1.500-6.800 1.400V28h-2.400v-5.600L12 21l2.500-1.500L13 15l4 1.500-1-4.500 2.400 1z" fill="#D52B1E"/>',
      Italy: V(['#009246', '#fff', '#CE2B37']),
      India: H(['#FF9933', '#fff', '#138808']) + '<circle cx="20" cy="20" r="4.300" fill="none" stroke="#000080" stroke-width="1"/><circle cx="20" cy="20" r=".9" fill="#000080"/>',
      Netherlands: H(['#AE1C28', '#fff', '#21468B']),
      Sweden: '<rect width="40" height="40" fill="#006AA7"/><rect x="12" width="5.500" height="40" fill="#FECC00"/><rect y="17.200" width="40" height="5.600" fill="#FECC00"/>',
      Greece: greece, USA: usa,
      Egypt: H(['#CE1126', '#fff', '#000']) + '<circle cx="20" cy="20" r="3.200" fill="#C09300"/>',
      Mexico: V(['#006847', '#fff', '#CE1126']) + '<circle cx="20" cy="20" r="3.400" fill="#8B5E3C" opacity=".85"/>',
      Norway: '<rect width="40" height="40" fill="#BA0C2F"/><rect x="10" width="7.500" height="40" fill="#fff"/><rect y="16.300" width="40" height="7.500" fill="#fff"/><rect x="12" width="3.500" height="40" fill="#00205B"/><rect y="18.300" width="40" height="3.500" fill="#00205B"/>',
      Estonia: H(['#0072CE', '#000', '#fff']), Germany: H(['#000', '#DD0000', '#FFCE00'])
    };
    var flag = function (n) { return '<svg viewBox="0 0 40 40" aria-hidden="true"><g clip-path="url(#lp-global-fc)">' + FL[n] + '</g><circle cx="20" cy="20" r="19.700" fill="none" stroke="rgba(0,0,0,.1)"/></svg>'; };
    var ROW1 = ['France', 'Spain', 'Brazil', 'Canada', 'Italy', 'India', 'Netherlands', 'Sweden'], ROW2 = ['Greece', 'USA', 'Egypt', 'Mexico', 'Norway', 'Estonia', 'Germany'];
    var ALL = ROW1.concat(ROW2), sel = 'Germany';
    root.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><clipPath id="lp-global-fc"><circle cx="20" cy="20" r="20"/></clipPath></defs></svg>');
    var fill = function (el, list) {
      var one = function (hid) { return list.map(function (n) { return '<button type="button" class="pill"' + (hid ? ' tabindex="-1" aria-hidden="true"' : '') + ' data-c="' + n + '">' + flag(n) + n + '</button>'; }).join(''); };
      el.innerHTML = one(0) + one(1) + one(1) + one(1);
    };
    fill($('#lp-global-r1'), ROW1); fill($('#lp-global-r2'), ROW2);
    $$('.pill').forEach(function (b) { b.addEventListener('click', function () { choose(b.dataset.c); $('#lp-global-composer').scrollIntoView({ behavior: R.reduce ? 'auto' : 'smooth', block: 'center' }); }); });
    var mqs = $('#lp-global-mqs'), pz = $('#lp-global-pause');
    pz.addEventListener('click', function () { var on = pz.getAttribute('aria-pressed') !== 'true'; pz.setAttribute('aria-pressed', on); pz.textContent = on ? 'Resume motion' : 'Pause motion'; mqs.classList.toggle('paused', on); });
  
    /* ---------- dotted world map from a coarse land mask (polygons, lon/lat) ---------- */
    var parse = function (s) { return s.trim().split(/\s+/).map(function (p) { var a = p.split(','); return [+a[0], +a[1]]; }); };
    var LAND = ['-168,66 -162,70 -141,70 -125,70 -110,73 -95,72 -82,68 -80,63 -90,58 -94,59 -85,55 -80,52 -78,58 -70,60 -62,58 -56,52 -60,47 -67,45 -70,42 -76,38 -76,35 -81,31 -80,26 -82,26 -84,30 -90,29 -97,27 -97,22 -92,18 -88,21 -87,16 -83,10 -79,9 -77,8 -82,8 -86,12 -92,15 -97,16 -105,19 -109,25 -113,31 -117,32 -121,35 -124,40 -124,48 -130,54 -135,58 -145,60 -152,59 -158,57 -165,60 -166,64',
      '-55,60 -44,60 -20,70 -20,80 -45,83 -65,80 -70,76 -55,68', '-90,74 -75,72 -62,67 -66,63 -75,64 -85,70', '-120,72 -100,76 -80,76 -85,72 -100,70',
      '-77,8 -72,12 -62,10 -52,5 -50,0 -44,-2 -35,-5 -35,-9 -39,-15 -41,-22 -48,-26 -53,-34 -58,-38 -62,-40 -65,-45 -68,-52 -70,-55 -74,-50 -73,-40 -71,-30 -70,-18 -76,-14 -81,-5 -80,0 -77,4',
      '-9,37 -9,43 -2,44 -4,48 2,51 8,54 8,58 5,59 5,62 12,66 18,70 28,71 40,67 44,68 60,69 70,73 80,73 100,77 112,74 130,72 142,72 160,70 170,70 180,68 180,65 170,60 162,58 157,52 143,59 137,54 140,48 131,43 129,36 127,35 126,38 122,40 121,37 122,31 119,25 114,22 108,21 106,18 109,13 105,9 100,13 100,7 103,1 98,8 98,16 94,17 92,22 88,22 86,20 80,15 77,8 73,17 72,21 67,24 62,25 57,26 56,27 50,30 48,29 51,25 56,25 59,22 52,16 43,13 39,21 35,28 34,31 36,36 30,36 27,37 26,40 23,37 21,38 20,40 18,41 16,38 15,41 12,42 10,44 7,44 3,43 0,39 -2,37 -6,36',
      '-17,21 -13,28 -6,36 10,37 11,33 20,31 25,32 32,31 34,28 36,23 38,18 43,12 51,12 48,5 41,-2 40,-10 40,-15 35,-24 33,-26 32,-29 27,-34 20,-35 18,-32 14,-23 12,-15 13,-9 9,-1 9,4 5,5 -2,5 -8,4 -13,8 -17,14',
      '-5,50 1,51 2,53 -2,56 -3,58 -6,58 -5,55 -3,54 -5,52', '-10,52 -6,52 -6,55 -10,54', '-24,64 -14,64 -14,66 -22,66', '44,-25 47,-25 50,-15 49,-12 44,-17',
      '114,-22 122,-18 130,-12 137,-12 137,-16 142,-11 146,-19 153,-26 150,-37 141,-38 135,-34 130,-32 115,-34', '95,5 98,4 106,-4 105,-6 100,-2', '109,2 117,7 119,1 116,-4 110,-3', '105,-6 114,-7 114,-9 106,-8',
      '130,31 135,34 140,35 142,40 142,45 140,43 136,37 131,34', '172,-35 178,-38 175,-41 172,-41', '168,-44 172,-41 174,-42 170,-46', '120,18 122,18 126,8 122,7', '132,-2 141,-3 150,-10 141,-9'].map(parse);
    var WATER = ['47,45 53,45 54,40 50,37 49,40', '28,42 28,46 34,46 41,43 36,41', '-94,59 -90,52 -82,52 -80,56 -85,59'].map(parse);
    var inside = function (x, y, p) { var c = false; for (var i = 0, j = p.length - 1; i < p.length; j = i++) { if (((p[i][1] > y) !== (p[j][1] > y)) && x < (p[j][0] - p[i][0]) * (y - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c; } return c; };
    var MW = 1000, MH = 383, X = function (lo) { return (lo + 180) / 360 * MW; }, Y = function (la) { return (80 - la) / 138 * MH; };
    var d = '', lo, la, k;
    for (la = 78.5; la > -58; la -= 3) for (lo = -178.5; lo < 180; lo += 3) {
      var on = false; for (k = 0; k < LAND.length && !on; k++) on = inside(lo, la, LAND[k]);
      for (k = 0; k < WATER.length && on; k++) if (inside(lo, la, WATER[k])) on = false;
      if (on) d += 'M' + X(lo).toFixed(1) + ' ' + Y(la).toFixed(1) + 'h.01';
    }
    var NODES = { Canada: [-100, 56], USA: [-98, 39], Mexico: [-102, 23], Brazil: [-52, -12], Spain: [-4, 40], Germany: [10, 51], Egypt: [30, 27], India: [78, 22] };
    var ARCS = [['USA', 'Spain'], ['USA', 'Brazil'], ['Spain', 'Egypt'], ['Germany', 'India'], ['Egypt', 'India'], ['Canada', 'Germany'], ['Mexico', 'Brazil']];
    var arcs = ARCS.map(function (a, i) {
      var p = NODES[a[0]], q = NODES[a[1]], ax = X(p[0]), ay = Y(p[1]), bx = X(q[0]), by = Y(q[1]), dist = Math.hypot(bx - ax, by - ay);
      return '<path class="arc" pathLength="1" data-a="' + a[0] + '" data-b="' + a[1] + '" style="--d:' + (i * .55) + 's" d="M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + 'Q' + ((ax + bx) / 2).toFixed(1) + ' ' + (((ay + by) / 2) - dist * .32).toFixed(1) + ' ' + bx.toFixed(1) + ' ' + by.toFixed(1) + '"/>';
    }).join('');
    var nodes = Object.keys(NODES).map(function (n, i) {
      var p = NODES[n];
      return '<g class="node" tabindex="0" role="img" aria-label="' + n + '" data-n="' + n + '" transform="translate(' + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1) + ')"><circle class="ring" r="5" style="--d:' + (i * .35) + 's"/><circle class="core" r="5"/><text x="9" y="-8">' + n + '</text></g>';
    }).join('');
    var map = $('#lp-global-map');
    map.innerHTML = '<svg viewBox="-10 -14 ' + (MW + 20) + ' ' + (MH + 28) + '" role="img" aria-label="Dotted world map with animated payment routes between highlighted countries"><path d="' + d + '" fill="none" stroke="#fff" stroke-opacity=".82" stroke-width="4" stroke-linecap="round"/>' + arcs + '<g>' + nodes + '</g><g id="lp-global-trav"></g></svg>';
    var arcEls = $$('.arc', map), trav = $('#lp-global-trav');
    arcEls.forEach(function () { trav.insertAdjacentHTML('beforeend', '<circle r="3" fill="#fff" stroke="#2F6FB8" stroke-width="1.4" opacity="0"/>'); });
    var dots = $$('circle', trav);
    var hi = function (n) { map.classList.toggle('dim', !!n); arcEls.forEach(function (a) { a.classList.toggle('on', !!n && (a.dataset.a === n || a.dataset.b === n)); }); };
    $$('.node', map).forEach(function (g) {
      g.addEventListener('mouseenter', function () { hi(g.dataset.n); }); g.addEventListener('mouseleave', function () { hi(null); });
      g.addEventListener('focus', function () { hi(g.dataset.n); }); g.addEventListener('blur', function () { hi(null); });
      g.addEventListener('click', function () { choose(g.dataset.n); });
    });
    var lens = arcEls.map(function (a) { return a.getTotalLength(); });
    var tick = function (now) {
      if (!root.isConnected) return;
      if (root.offsetParent !== null) arcEls.forEach(function (a, i) {
        var t = ((now / 1000 + i * .55) % 5) / 5, ph = t < .45 ? t / .45 : -1;
        if (ph < 0) { dots[i].setAttribute('opacity', 0); return; }
        var pt = a.getPointAtLength(ph * lens[i]); dots[i].setAttribute('cx', pt.x); dots[i].setAttribute('cy', pt.y); dots[i].setAttribute('opacity', 1);
      });
      requestAnimationFrame(tick);
    };
    if (!R.reduce) requestAnimationFrame(tick);
  
    /* ---------- payment methods tabs ---------- */
    var IT = {
      A: ['Internal transfer', 'Funds added', '5,466.82 EUR', 'Yesterday', 'download'], B: ['Incoming transfer', 'Client payment', '8,450.00 EUR', 'Yesterday', 'arrow-down'],
      C: ['Internal allocation', 'Funds moved', '5,200.00 EUR', 'Yesterday', 'swap'], D: ['Vendor payout', 'Stripe fees', '1,180.00 EUR', 'Monday, <span>5th of March</span>', 'upload'],
      E: ['Outgoing transfer', 'Contractor payout', '3,000.00 EUR', 'Monday, <span>5th of March</span>', 'arrow-up'], F: ['Subscription payment', 'AWS infrastructure', '640.00 EUR', 'Thursday, <span>1st of March</span>', 'layers']
    };
    var TABS = [['ALL', 'ABCDEF'], ['CARDS', 'D'], ['BANK TRANSFER', 'ABE'], ['SEPA', 'AC'], ['SWIFT', 'BE'], ['SUBSCRIPTIONS', 'F']];
    var tl = $('#lp-global-tabs'), panel = $('#lp-global-panel');
    tl.innerHTML = TABS.map(function (t, i) { return '<button type="button" class="tab" role="tab" id="' + NS + 't' + i + '" aria-selected="' + (i === 0) + '" aria-controls="' + NS + 'panel" tabindex="' + (i ? -1 : 0) + '">' + t[0] + '</button>'; }).join('');
    panel.id = NS + 'panel';
    var showTab = function (i) {
      $$('.tab', tl).forEach(function (b, k) { b.setAttribute('aria-selected', k === i); b.tabIndex = k === i ? 0 : -1; });
      panel.setAttribute('aria-labelledby', NS + 't' + i);
      var last = '', n = 0;
      panel.innerHTML = '<h3>' + TABS[i][0] + '</h3>' + TABS[i][1].split('').map(function (c) {
        var x = IT[c], g = x[3] !== last ? '<div class="grp">' + x[3] + '</div>' : ''; last = x[3];
        return g + '<div class="it" style="--d:' + (n++ * 90) + 'ms"><span class="ic">' + R.icon(x[4]) + '</span><span><small>' + x[0] + '</small>' + x[1] + '</span><span class="a">' + x[2] + '</span></div>';
      }).join('');
    };
    tl.addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) showTab($$('.tab', tl).indexOf(b)); });
    tl.addEventListener('keydown', function (e) {
      var t = $$('.tab', tl), i = t.indexOf(document.activeElement); if (i < 0) return;
      var j = e.key === 'ArrowRight' ? (i + 1) % t.length : e.key === 'ArrowLeft' ? (i + t.length - 1) % t.length : e.key === 'Home' ? 0 : e.key === 'End' ? t.length - 1 : -1;
      if (j > -1) { e.preventDefault(); showTab(j); t[j].focus(); }
    });
    showTab(0);
  
    /* ---------- trio art ---------- */
    var ar = ''; for (k = 0; k < 9; k++) ar += '<circle cx="150" cy="190" r="' + (30 + k * 15) + '" fill="none" stroke="#fff" stroke-opacity="' + (.9 - k * .08).toFixed(2) + '" stroke-width="1" stroke-dasharray="' + (k % 2 ? '6 6' : '1 0') + '">' + (R.reduce ? '' : '<animate attributeName="r" values="' + (30 + k * 15) + ';' + (36 + k * 15) + ';' + (30 + k * 15) + '" dur="' + (6 + k) + 's" repeatCount="indefinite"/>') + '</circle>';
    $('#lp-global-arcs').innerHTML = ar;
    R.bars($('#lp-global-bars'), { n: 54, h: 220, px: 220, label: 'Funds visibility bars', color: '#3F9C86', color2: '#CEF5ED', heights: function (i, n) { return .25 + .7 * Math.abs(Math.sin(i * .21) * Math.cos(i * .07 + 1)); } });
  
    /* ---------- Accounts -> Optimize -> Send ---------- */
    var CELLS = [['Payment sources', 'Accounts', 'wallet'], ['Smart routing', 'Optimize', 'atom'], ['Execution', 'Send', 'upload']], active = 1, hold = false;
    var cells = $('#lp-global-cells');
    cells.innerHTML = CELLS.map(function (c, i) {
      return '<button type="button" class="cell" aria-pressed="' + (i === active) + '"><span class="lb">' + c[0] + R.icon('arrow-right') + '</span><span class="mid"><span class="orb"><span class="dotm"></span></span>' + c[1] + '</span><span class="ico">' + R.icon(c[2]) + '</span></button>';
    }).join('');
    var cs = $$('.cell', cells), setCell = function (i) { active = i; cs.forEach(function (c, k) { c.setAttribute('aria-pressed', k === i); }); };
    cs.forEach(function (c, i) { c.addEventListener('click', function () { setCell(i); }); c.addEventListener('mouseenter', function () { hold = true; }); c.addEventListener('mouseleave', function () { hold = false; }); c.addEventListener('focus', function () { hold = true; }); c.addEventListener('blur', function () { hold = false; }); });
    if (!R.reduce) setInterval(function () { if (!hold && root.isConnected && root.offsetParent !== null) setCell((active + 1) % 3); }, 2600);
  
    /* ---------- transfer composer ---------- */
    var pick = $('#lp-global-pick'), amt = $('#lp-global-amt'), go = $('#lp-global-go'), ok = $('#lp-global-ok'), cur = 'EUR';
    pick.innerHTML = ALL.slice().sort().map(function (n) { return '<button type="button" class="cp" role="radio" aria-checked="false" tabindex="-1" data-c="' + n + '">' + flag(n) + n + '</button>'; }).join('');
    var cps = $$('.cp', pick);
    function choose(n) {
      sel = n; cps.forEach(function (b) { var on = b.dataset.c === n; b.setAttribute('aria-checked', on); b.tabIndex = on ? 0 : -1; });
      $('#lp-global-to').innerHTML = flag(n) + n; ok.classList.remove('show');
    }
    pick.addEventListener('click', function (e) { var b = e.target.closest('.cp'); if (b) choose(b.dataset.c); });
    pick.addEventListener('keydown', function (e) {
      var i = cps.indexOf(document.activeElement); if (i < 0) return;
      var j = /ArrowRight|ArrowDown/.test(e.key) ? (i + 1) % cps.length : /ArrowLeft|ArrowUp/.test(e.key) ? (i + cps.length - 1) % cps.length : -1;
      if (j > -1) { e.preventDefault(); choose(cps[j].dataset.c); cps[j].focus(); }
    });
    $$('.seg button').forEach(function (b) { b.addEventListener('click', function () {
      cur = b.dataset.cur; $$('.seg button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      $('#lp-global-from').textContent = 'Runo Business · ' + cur + ' account'; $('#lp-global-unit').textContent = cur; $('label[for="lp-global-amt"]').textContent = 'Amount in ' + cur;
    }); });
    var valid = function () { var v = parseFloat(amt.value.replace(/,/g, '')); return isFinite(v) && v > 0 ? v : 0; };
    amt.addEventListener('input', function () { go.disabled = !valid(); });
    amt.addEventListener('blur', function () { var v = valid(); if (v) amt.value = R.fmt(v, 2); });
    go.addEventListener('click', function () {
      var v = valid(); if (!v) return;
      go.innerHTML = '<span class="spin"></span>'; go.disabled = true;
      setTimeout(function () {
        go.textContent = 'Transfer funds'; go.disabled = false;
        $('#lp-global-okt').textContent = R.fmt(v, 2) + ' ' + cur + ' to ' + sel; ok.classList.add('show'); R.toast('Transfer complete');
      }, R.reduce ? 50 : 1100);
    });
    $('#lp-global-again').addEventListener('click', function () { ok.classList.remove('show'); go.focus(); });
    choose('Germany');
    R.scan(root);
  });
}
