/* Generated from src/pages/lp-pricing.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('lp-pricing', function (root) {
    var R = Runo, $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
  
    /* ---- drifting embossed coins ---- */
    var defs = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
      '<linearGradient id="lp-pricing-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFDF7"/><stop offset=".5" stop-color="#CFC4B1"/><stop offset="1" stop-color="#8F8573"/></linearGradient>' +
      '<radialGradient id="lp-pricing-face" cx=".34" cy=".28" r=".9"><stop offset="0" stop-color="#F8F4EA"/><stop offset=".6" stop-color="#DCD3C2"/><stop offset="1" stop-color="#B3A894"/></radialGradient></defs></svg>';
    var coin = '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="49" fill="url(#lp-pricing-rim)"/><circle cx="50" cy="50" r="47" fill="none" stroke="#7C725F" stroke-opacity=".45" stroke-width="2.6" stroke-dasharray=".9 1.2"/>' +
      '<circle cx="50" cy="50" r="43" fill="url(#lp-pricing-face)"/><circle cx="50" cy="50" r="38" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width=".6"/>' +
      '<svg x="29" y="29.5" width="42" height="42" viewBox="0 0 362 360" fill="#fff" opacity=".9"><use href="#runo-mark" transform="translate(-6 -6)"/></svg>' +
      '<svg x="29" y="29.5" width="42" height="42" viewBox="0 0 362 360" fill="#8E846F" opacity=".75"><use href="#runo-mark" transform="translate(6 6)"/></svg>' +
      '<svg x="29" y="29.5" width="42" height="42" viewBox="0 0 362 360" fill="#E5DDCD"><use href="#runo-mark"/></svg></svg>';
    var C = [[4, 16, 150, 1, 0, -18, 24, -30, 13], [76, 8, 190, 1.2, 0, 14, -30, 26, 16], [86, 56, 120, .6, 2, 24, -20, -24, 12], [14, 64, 210, .7, 5, -10, 26, 18, 18],
      [50, 4, 90, .5, 3, 30, -18, 26, 11], [42, 76, 140, .9, 1, 8, 22, -20, 15], [68, 74, 100, .5, 4, -26, -26, -12, 14], [28, 30, 70, .4, 3, 16, 14, 22, 10]];
    var layer = $('.coins');
    layer.innerHTML = defs + C.map(function (c) {
      return '<div class="coin" style="--x:' + c[0] + '%;--y:' + c[1] + '%;--s:' + c[2] + 'px;--z:' + c[3] + ';--b:' + c[4] + 'px;--r:' + c[5] + 'deg;--dx:' + c[6] + 'px;--dy:' + c[7] + 'px;--t:' + c[8] + 's"><div>' + coin + '</div></div>';
    }).join('');
    if (!R.reduce) $('.hero').addEventListener('pointermove', function (e) {
      var b = this.getBoundingClientRect();
      layer.style.setProperty('--px', ((e.clientX - b.left) / b.width - .5) * 2); layer.style.setProperty('--py', ((e.clientY - b.top) / b.height - .5) * 2);
    });
  
    /* ---- go to contact ---- */
    $$('[data-go="contact"]').forEach(function (b) { b.addEventListener('click', function () {
      $('#lp-pricing-contact').scrollIntoView({ behavior: R.reduce ? 'auto' : 'smooth', block: 'center' });
    }); });
    $$('[data-copy]').forEach(function (b) { b.addEventListener('click', function () { R.copy(b.dataset.copy); }); });
  
    /* ---- comparison table ---- */
    var plans = ['Runo Private', 'Runo Business', 'Enterprise'];
    var rows = [['Full visibility over your cash flow', 1, 1, 1], ['Control every payment before it moves', 1, 1, 1], ['Real-time visibility over your funds', 1, 1, 1], ['Instant transfers and global access', 1, 1, 1],
      ['Issue cards and track team spend', 0, 1, 1], ['Built-in AI Copilot', 0, 1, 1], ['Smart Payments', 0, 1, 1], ['Multi-Account Sync', 0, 1, 1], ['Runway Forecasting', 0, 1, 1],
      ['Automate financial decisions', 0, 1, 1], ['Centralized financial control', 0, 0, 1], ['Automated Workflows', 0, 0, 1]];
    var tr = $('#lp-pricing-cmp thead tr');
    plans.forEach(function (p, i) { tr.insertAdjacentHTML('beforeend', '<th scope="col" class="cell" data-col="' + i + '"><button type="button" class="colbtn" aria-pressed="false" data-col="' + i + '">' + p + '</button></th>'); });
    $('#lp-pricing-cmp tbody').innerHTML = rows.map(function (r, n) {
      return '<tr tabindex="0"><th scope="row">' + r[0] + '</th>' + [1, 2, 3].map(function (k) {
        return '<td class="cell" data-col="' + (k - 1) + '">' + (r[k] ? '<span class="yes" style="--d:' + (n * 60) + 'ms">' + R.icon('check') + '</span><span class="sr-only">Included in ' + plans[k - 1] + '</span>' : '<span class="no" aria-hidden="true">–</span><span class="sr-only">Not included in ' + plans[k - 1] + '</span>') + '</td>';
      }).join('') + '</tr>';
    }).join('');
    var pinned = -1, hover = -1;
    var paint = function () { $$('.cell').forEach(function (c) { var k = +c.dataset.col; c.classList.toggle('hl', k === pinned || k === hover); }); };
    $$('.colbtn').forEach(function (b) { b.addEventListener('click', function () {
      var k = +b.dataset.col; pinned = pinned === k ? -1 : k;
      $$('.colbtn').forEach(function (x) { x.setAttribute('aria-pressed', +x.dataset.col === pinned); }); paint();
    }); });
    $$('.plan').forEach(function (p) {
      var k = +p.dataset.plan - 1;
      p.addEventListener('mouseenter', function () { hover = k; paint(); }); p.addEventListener('mouseleave', function () { hover = -1; paint(); });
      p.addEventListener('focusin', function () { hover = k; paint(); }); p.addEventListener('focusout', function () { hover = -1; paint(); });
    });
    $$('#lp-pricing-cmp tbody tr').forEach(function (r, i) { r.addEventListener('keydown', function (e) {
      var t = $$('#lp-pricing-cmp tbody tr'); if (e.key === 'ArrowDown') { e.preventDefault(); (t[i + 1] || t[0]).focus(); } if (e.key === 'ArrowUp') { e.preventDefault(); (t[i - 1] || t[t.length - 1]).focus(); }
    }); });
  
    /* ---- scenario ---- */
    var amt = $('#lp-pricing-amt'), sw = $('.sw'), chart = $('#lp-pricing-chart');
    var N = 64, W = 460, H = 190, bars = '', i;
    for (i = 0; i < N; i++) bars += '<rect x="' + (i * (W / N) + 2).toFixed(1) + '" y="0" width="1.3" height="0" fill="url(#lp-pricing-bg)"/>';
    chart.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="lp-pricing-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7DB6F7"/><stop offset="1" stop-color="#BAD5F3" stop-opacity=".35"/></linearGradient></defs><g>' + bars + '</g><path fill="none" stroke="#8EBFF8" stroke-width="2" stroke-linecap="round" d=""/></svg>';
    var rects = $$('rect', chart), curve = $('path', chart), cur = 1, tgt = 1, raf = 0;
    var topAt = function (x, t) { return 100 - (6 + 84 * t * Math.pow(x, 2.3)) + 8 * Math.sin(x * 3) * (1 - t * .5); };
    var draw = function (t) {
      var d = '';
      rects.forEach(function (r, k) { var x = k / (N - 1), y = topAt(x, t); r.setAttribute('y', y.toFixed(1)); r.setAttribute('height', (H - y).toFixed(1)); });
      for (var k = 0; k <= 40; k++) { var x = k / 40; d += (k ? 'L' : 'M') + (x * W).toFixed(1) + ' ' + topAt(x, t).toFixed(1); }
      curve.setAttribute('d', d);
    };
    var setAmt = function () {
      var v = +amt.value, whole = R.fmt(v, 0);
      $('#lp-pricing-amtv').innerHTML = '$' + whole + '<i>.00</i>'; amt.setAttribute('aria-valuetext', '$' + whole + '.00'); amt.style.setProperty('--p', (v / 100) + '%');
      tgt = sw.getAttribute('aria-checked') === 'true' ? v / 10000 : 0;
      /* readouts show the target at once; only the chart eases (keeps figures exact even when frames are throttled) */
      $('#lp-pricing-r1').textContent = (4.6 + .8 * tgt).toFixed(1) + ' months';
      $('#lp-pricing-delta').textContent = '+' + (.8 * tgt).toFixed(1) + ' months runway';
      go();
    };
    var go = function () {
      cancelAnimationFrame(raf);
      var step = function () { cur += (tgt - cur) * (R.reduce ? 1 : .14); if (Math.abs(tgt - cur) < .002) cur = tgt; draw(cur); if (cur !== tgt) raf = requestAnimationFrame(step); };
      step();
    };
    amt.addEventListener('input', setAmt);
    sw.addEventListener('click', function () { sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') !== 'true'); setAmt(); });
    cur = 0; setAmt();
  
    /* ---- accordion ---- */
    var A = [['Centralized financial control', 'Manage all accounts, payments, and operations in one place with full visibility and control.'],
      ['Centralized financial control', 'Know exactly where your money is and where it’s going. Stay ahead of risk.'],
      ['Automate financial decisions', 'Runo analyzes your cash flow and recommends the best action.'],
      ['Built-in AI Copilot', 'Get answers about transactions, and activity across all accounts.']];
    var acc = $('#lp-pricing-acc');
    acc.innerHTML = A.map(function (a, n) {
      return '<div class="acc-i' + (n ? '' : ' open') + '"><h3><button type="button" class="acc-b" id="lp-pricing-ab' + n + '" aria-expanded="' + (n ? 'false' : 'true') + '" aria-controls="lp-pricing-ap' + n + '">' + a[0] + '<span>0' + (n + 1) + '</span></button></h3>' +
        '<div class="acc-p" id="lp-pricing-ap' + n + '" role="region" aria-labelledby="lp-pricing-ab' + n + '"><div><p class="body">' + a[1] + '</p></div></div></div>';
    }).join('');
    $$('.acc-b', acc).forEach(function (b) { b.addEventListener('click', function () {
      var it = b.closest('.acc-i'), was = it.classList.contains('open');
      $$('.acc-i', acc).forEach(function (x) { x.classList.remove('open'); $('.acc-b', x).setAttribute('aria-expanded', 'false'); });
      if (!was) { it.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
    }); });
    R.bars($('#lp-pricing-bars'), { n: 90, h: 70, px: 70, label: 'Runway projection bars', color2: '#BAD5F3', heights: function (k, n) { return .45 + .5 * Math.abs(Math.sin(k * .37) * Math.cos(k * .11)); } });
    R.scan(root);
  });
}
