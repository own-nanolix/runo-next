/* Generated from src/pages/logo.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('logo', function (root) {
    var $ = function (s, r) { return (r || root).querySelector(s); };
    var $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
    /* the three wings of the symbol (362 x 360 units) */
    var W = ['M0 0H270A92 94 0 0 1 362 94H92A92 94 0 0 1 0 0Z', 'M0 228A92 96 0 0 1 92 132H362A92 96 0 0 1 270 228Z', 'M158 266H270A92 94 0 0 1 362 360H250A92 94 0 0 1 158 266Z'];
    var wings = function (cls) { return W.map(function (d, i) { return '<path class="' + (cls || '') + (cls ? ' ' : '') + 'w' + (i + 1) + ' l' + (i + 1) + '" style="--k:' + i + '" d="' + d + '"/>'; }).join(''); };
  
    /* ---- hero: assemble + replay ---- */
    var big = $('#logo-big'); big.innerHTML = wings('');
    var play = function () { big.classList.remove('play'); void big.getBoundingClientRect(); big.classList.add('play'); };
    play(); $('#logo-replay').addEventListener('click', play);
  
    /* ---- construction ---- */
    var E = [[270, 94, 92, 94], [92, 0, 92, 94], [92, 228, 92, 96], [270, 132, 92, 96], [270, 360, 92, 94], [250, 266, 92, 94]];
    var gx = [0, 92, 158, 250, 270, 362], gy = [0, 94, 132, 228, 266, 360], g = '';
    gy.forEach(function (y) { g += '<path d="M-170 ' + y + 'H532" stroke="#8FB0DA" stroke-width="1" stroke-dasharray="6 6"/>'; });
    gx.forEach(function (x) { g += '<path d="M' + x + ' -170V530" stroke="#8FB0DA" stroke-width="1" stroke-dasharray="6 6"/>'; });
    E.forEach(function (e) { g += '<ellipse cx="' + e[0] + '" cy="' + e[1] + '" rx="' + e[2] + '" ry="' + e[3] + '" fill="none" stroke="#6CB0F7" stroke-width="2"/><circle cx="' + e[0] + '" cy="' + e[1] + '" r="5" fill="#2F6FB8"/>'; });
    g += '<path d="M270 94H362" stroke="#2F6FB8" stroke-width="2.500"/><text x="300" y="82" font-size="24" fill="#2F6FB8">r 92</text>';
    $('#logo-cons').innerHTML = '<g class="g-grid">' + g + '</g><g>' + W.map(function (d) { return '<path class="g-wing" d="' + d + '"/>'; }).join('') + '</g>';
    var modes = $$('#logo-modes button'), cons = $('#logo-cons');
    modes.forEach(function (b) { b.addEventListener('click', function () { cons.setAttribute('data-mode', b.dataset.m); modes.forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); }); });
  
    /* ---- colourways ---- */
    var CW = [
      ['Deep Black', '#000000', '#000000', 'w', ''], ['Base White', '#FFFFFF', '#FFFFFF', 'k', ''], ['Soft Blue', '#BAD5F3', '#BAD5F3', 'k', ''], ['Steel Layer', '#A7B8CD', '#A7B8CD', 'k', ''],
      ['Mint Layer', '#CEF5ED', '#CEF5ED', 'k', ''], ['Signal Lime', '#F6FFD8', '#F6FFD8', 'k', ''], ['Surface Sand', '#F4F2EC', '#F4F2EC', 'k', ''], ['Text Subtle', '#F2F3F5', '#F2F3F5', 'k', ''], ['Sky gradient', '#A9C7EE → #CFE0F5 → #F3F5F7', 'sky', 'k', 'sky'], ['Mist', '#AEB9C9 · #6F8FB4 · #E4E7EC · #C6CBD4', 'mist', 'k', 'mist']];
    var stage = $('#logo-stage'), sw = $('#logo-sw'), nameEl = $('#logo-name'), hexEl = $('#logo-hex'), cur = 1;
    var swBg = function (c) { return c[4] ? '' : 'background:' + c[2]; };
    sw.innerHTML = CW.map(function (c, i) { return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === cur) + '" aria-label="' + c[0] + ' ' + c[1] + '"><i class="' + c[4] + '" style="' + swBg(c) + '"></i>' + c[0] + '</button>'; }).join('');
    var apply = function () {
      var c = CW[cur];
      stage.className = 'lg-cw-stage ' + c[4]; stage.style.background = c[4] ? '' : c[2];
      stage.style.color = c[3] === 'w' ? '#fff' : '#000';
      nameEl.textContent = c[0]; hexEl.textContent = c[1]; hexEl.setAttribute('aria-label', 'Copy ' + c[1]);
      $$('#logo-sw button').forEach(function (b, i) { b.setAttribute('aria-pressed', i === cur); });
    };
    sw.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; cur = +b.dataset.i; apply(); });
    hexEl.addEventListener('click', function () { Runo.copy(CW[cur][1]); });
    apply();
  
    /* ---- scale row: mark inside each app icon ---- */
    $$('.lg-scale .appicon').forEach(function (a) { a.innerHTML = Runo.mark(); });
  
    /* ---- motion: loaders from the three wings ---- */
    $('#logo-loader').innerHTML = wings('');
    $('#logo-loader-dark').innerHTML = wings('');
    Runo.scan(root);
  });
}
