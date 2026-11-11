/* Generated from src/pages/overview.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('overview', function (root) {
    var $ = function (s, r) { return (r || root).querySelector(s); };
    var $$ = function (s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); };
  
    /* ---- scale the dashboard miniature to its monitor ---- */
    var scr = $('.ov-screen'), inn = $('.ov-in');
    var fit = function () { if (scr.clientWidth) inn.style.setProperty('--s', scr.clientWidth / 1118); };
    fit();
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(scr); else env.on(window, 'resize', fit);
  
    /* ---- tablet miniature: generated bars + table rows ---- */
    var mb = $('#overview-minibars'), s = '';
    for (var i = 0; i < 46; i++) {
      var h = 8 + 26 * Math.abs(Math.sin(i * 0.37)) * (0.45 + i / 80);
      s += '<rect x="' + (452 + i * 3.6) + '" y="' + (146 - h).toFixed(1) + '" width="1" height="' + h.toFixed(1) + '" fill="' + (i > 20 && i < 26 ? '#F5B27A' : '#4FA3F2') + '" opacity=".8"/>';
    }
    mb.innerHTML = s;
    var rows = [['$1,200', 'Stripe Ltd', 'Payout', 'Mar 07', 'One-time'], ['$1,850', 'Supplier Ltd', 'Invoice payment', 'Mar 03', 'One-time'], ['$680', 'Luna Ltd', 'Invoice payment', 'Mar 10', 'Monthly'],
      ['$3,000', 'Contractor', 'Transfer', 'Mar 10', 'One-time'], ['$980', 'Google Ads', 'Payment', 'Mar 11', 'Weekly'], ['$2,400', 'Payroll', 'Batch payout', 'Mar 15', 'Monthly']];
    var xs = [260, 316, 400, 470, 540], r = '';
    rows.forEach(function (row, k) { var y = 238 + k * 26; row.forEach(function (c, j) { r += '<text x="' + xs[j] + '" y="' + y + '">' + c + '</text>'; }); r += '<rect x="258" y="' + (y + 10) + '" width="362" height=".6" fill="#E7E8EB"/>'; });
    $('#overview-minirows').innerHTML = r;
  
    /* ---- line-by-line reveal of the task statement ---- */
    var task = $('#overview-task'), taskText = task.textContent.trim(), lastW = 0;
    var split = function () {
      if (!task.clientWidth || task.clientWidth === lastW) return;
      lastW = task.clientWidth;
      task.textContent = '';
      var words = taskText.split(' '), spans = words.map(function (w) { var sp = document.createElement('span'); sp.textContent = w; sp.style.display = 'inline-block'; task.appendChild(sp); task.appendChild(document.createTextNode(' ')); return sp; });
      var lines = [], top = null;
      spans.forEach(function (sp) { var t = sp.offsetTop; if (top === null || Math.abs(t - top) > 6) { lines.push([]); top = t; } lines[lines.length - 1].push(words[spans.indexOf(sp)]); });
      task.textContent = '';
      lines.forEach(function (ws, n) {
        var ln = document.createElement('span'), inner = document.createElement('span');
        ln.className = 'ov-ln'; inner.className = 'ov-lni'; inner.style.setProperty('--i', n); inner.textContent = ws.join(' ');
        ln.appendChild(inner); task.appendChild(ln);
        if (n < lines.length - 1) task.appendChild(document.createTextNode(' '));
      });
    };
    split();
    var tio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { task.classList.add('in'); tio.disconnect(); } }); }, { threshold: 0.35 });
    tio.observe(task);
    var rt; env.on(window, 'resize', function () { clearTimeout(rt); rt = setTimeout(split, 150); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { lastW = 0; split(); });
  
    /* ---- scope list: one highlighted line at a time (hover / focus / click) ---- */
    var sc = $$('#overview-scope button');
    sc.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', function () { var was = b.classList.contains('on'); sc.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); }); if (!was) { b.classList.add('on'); b.setAttribute('aria-pressed', 'true'); } }); });
  
    /* ---- app-icon parallax ---- */
    var stage = $('.ov-icon-stage');
    if (!Runo.reduce) {
      var tick = false;
      var par = function () { tick = false; if (!root.classList.contains('is-active')) return; var b = stage.getBoundingClientRect(); stage.style.setProperty('--p', ((b.top + b.height / 2 - innerHeight / 2) / innerHeight).toFixed(3)); };
      env.on(window, 'scroll', function () { if (!tick) { tick = true; requestAnimationFrame(par); } }, { passive: true });
      par();
    } else { $('.ov-appwrap').style.animation = 'none'; }
  
    /* ---- Finance list: auto-cycles, pauses on hover / focus / button ---- */
    var items = $$('#overview-fin button'), idx = 0, hold = false, manual = false, pb = $('#overview-pause');
    var setOn = function (n) { idx = n; items.forEach(function (b, k) { b.classList.toggle('on', k === n); if (k === n) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); }); };
    items.forEach(function (b, k) { b.addEventListener('click', function () { setOn(k); }); });
    var list = $('#overview-fin');
    list.addEventListener('mouseenter', function () { hold = true; }); list.addEventListener('mouseleave', function () { hold = false; });
    list.addEventListener('focusin', function () { hold = true; }); list.addEventListener('focusout', function () { hold = false; });
    pb.addEventListener('click', function () { manual = !manual; pb.setAttribute('aria-pressed', manual); pb.textContent = manual ? 'Play' : 'Pause'; });
    if (Runo.reduce) { pb.hidden = true; } else {
      setInterval(function () { if (!hold && !manual && !document.hidden && root.classList.contains('is-active')) setOn((idx + 1) % items.length); }, 2800);
    }
  
    /* ---- chapters grid ---- */
    var A = 'stroke="#8FB0DA" fill="none" stroke-width="1"';
    var motif = function (id) {
      var o = '', i;
      switch (id) {
        case 'logo': return '<rect x="70" y="36" width="60" height="60" rx="14" fill="#fff"/><svg x="85" y="51" width="30" height="30" viewBox="0 0 362 360"><use href="#runo-mark"/></svg>';
        case 'brand-kit': ['#A7B8CD', '#BAD5F3', '#CEF5ED', '#F6FFD8', '#F4F2EC', '#FFFFFF', '#F2F3F5', '#000000'].forEach(function (c, k) { o += '<rect x="' + (20 + k * 20.5) + '" y="34" width="18" height="76" rx="3" fill="' + c + '" stroke="#D5DCE8" stroke-width=".6"/>'; }); return o;
        case 'strategy': var pts = []; for (i = 0; i < 30; i++) { var y = 100 - (58 * Math.exp(-i / 9) + 12 + 22 * Math.exp(-Math.pow(i - 20, 2) / 18)) * 0.8; pts.push((14 + i * 5.9).toFixed(1) + ' ' + y.toFixed(1)); o += '<path d="M' + (14 + i * 5.9).toFixed(1) + ' ' + y.toFixed(1) + 'V112" stroke="#A8CCF1" stroke-width="1"/>'; } return o + '<path d="M' + pts.join('L') + '" ' + A + ' stroke-width="1.5"/><circle cx="' + pts[0].split(' ')[0] + '" cy="' + pts[0].split(' ')[1] + '" r="3" fill="#8FB8F7"/>';
        case 'social': return '<rect x="26" y="32" width="46" height="72" rx="10" fill="#DCE6F5"/><rect x="77" y="24" width="46" height="72" rx="10" fill="#fff"/><rect x="128" y="36" width="46" height="72" rx="10" fill="#CFE0F8"/><circle cx="100" cy="46" r="8" fill="none" stroke="#6E8FB3"/><rect x="86" y="68" width="28" height="3" rx="1.5" fill="#B4B8BF"/><rect x="86" y="76" width="20" height="3" rx="1.5" fill="#D5DCE8"/>';
        case 'dashboard': return '<rect x="14" y="30" width="50" height="86" rx="8" fill="#fff"/><circle cx="39" cy="72" r="14" fill="none" stroke="#BAD5F3" stroke-width="6" stroke-dasharray="44 88"/><circle cx="39" cy="72" r="14" fill="none" stroke="#CEF5ED" stroke-width="6" stroke-dasharray="26 88" stroke-dashoffset="-46"/><rect x="70" y="30" width="60" height="86" rx="8" fill="#fff"/><rect x="74" y="70" width="8" height="40" fill="#E8EEF8"/><rect x="83" y="56" width="8" height="54" fill="#E8EEF8"/><rect x="92" y="44" width="8" height="66" fill="#CFE0F8"/><rect x="101" y="58" width="8" height="52" fill="#E8EEF8"/><rect x="110" y="48" width="8" height="62" fill="#E8EEF8"/><rect x="136" y="30" width="50" height="86" rx="8" fill="#fff"/><g fill="#EDF0F6"><rect x="142" y="42" width="10" height="10" rx="2"/><rect x="142" y="62" width="10" height="10" rx="2"/><rect x="142" y="82" width="10" height="10" rx="2"/></g><g fill="#D5DCE8"><rect x="156" y="44" width="22" height="3" rx="1.5"/><rect x="156" y="64" width="22" height="3" rx="1.5"/><rect x="156" y="84" width="22" height="3" rx="1.5"/></g>';
        case 'mobile': return '<rect x="72" y="22" width="56" height="104" rx="12" fill="#0B0B0C"/><rect x="75.5" y="25.5" width="49" height="97" rx="9" fill="url(#overview-skyg)"/><rect x="90" y="29" width="20" height="5" rx="2.5" fill="#000"/><rect x="82" y="52" width="36" height="5" rx="2.5" fill="#fff" opacity=".9"/><rect x="82" y="64" width="26" height="4" rx="2" fill="#fff" opacity=".6"/><rect x="80" y="84" width="40" height="30" rx="6" fill="#fff"/>';
        case 'copilot': return '<circle cx="100" cy="76" r="50" ' + A + ' opacity=".6"/><circle cx="100" cy="76" r="38" ' + A + ' opacity=".8"/><circle cx="100" cy="76" r="28" fill="url(#overview-orb)"/><circle cx="100" cy="68" r="24" fill="url(#overview-orbtop)"/>';
        case 'lp-home': return '<rect x="14" y="26" width="172" height="100" rx="8" fill="url(#overview-skyg)"/><g fill="none" stroke="#fff" stroke-opacity=".8" stroke-width=".8"><circle cx="100" cy="60" r="30"/><circle cx="100" cy="60" r="46"/><circle cx="100" cy="60" r="62"/></g><rect x="70" y="56" width="60" height="6" rx="3" fill="#fff"/><rect x="86" y="72" width="28" height="9" rx="4.5" fill="#fff"/>';
        case 'lp-cashflow': for (i = 0; i < 34; i++) { var hh = 20 + 70 * Math.abs(Math.sin(i * 0.23 + .6)) * (0.5 + i / 70); o += '<rect x="' + (18 + i * 5.2) + '" y="' + (116 - hh).toFixed(1) + '" width="1.2" height="' + hh.toFixed(1) + '" fill="url(#overview-bluebar)"/>'; } return o;
        case 'lp-copilot': return '<rect x="26" y="52" width="148" height="34" rx="17" fill="#fff"/><rect x="42" y="67" width="58" height="4" rx="2" fill="#B4B8BF"/><rect class="ov-caret" x="104" y="62" width="1.5" height="14" fill="#000"/><circle cx="154" cy="69" r="10" fill="#000"/><path d="M150 69h8M154.500 65l4 4-4 4" stroke="#fff" fill="none" stroke-width="1.2"/><rect x="40" y="30" width="44" height="14" rx="4" fill="#CFE0F8"/><rect x="90" y="30" width="36" height="14" rx="4" fill="#DDF6F1"/>';
        case 'lp-solutions': return '<rect x="26" y="30" width="96" height="22" rx="5" fill="#CFE0F8"/><rect x="48" y="60" width="116" height="22" rx="5" fill="#DDF6F1"/><rect x="26" y="90" width="84" height="22" rx="5" fill="#fff"/>';
        case 'lp-pricing': return '<rect x="22" y="40" width="48" height="76" rx="8" fill="#fff" opacity=".7"/><rect x="76" y="26" width="48" height="90" rx="8" fill="#fff" stroke="#8FB0DA"/><rect x="130" y="40" width="48" height="76" rx="8" fill="#fff" opacity=".7"/><g fill="#B4B8BF"><rect x="30" y="52" width="24" height="4" rx="2"/><rect x="84" y="38" width="24" height="4" rx="2"/><rect x="138" y="52" width="24" height="4" rx="2"/></g><g fill="#000"><rect x="30" y="64" width="16" height="8" rx="2"/><rect x="84" y="50" width="22" height="10" rx="2"/><rect x="138" y="64" width="16" height="8" rx="2"/></g>';
        case 'lp-global': return '<circle cx="100" cy="74" r="44" ' + A + '/><ellipse cx="100" cy="74" rx="18" ry="44" ' + A + '/><path d="M56 74h88M64 54h72M64 94h72" ' + A + '/><path d="M44 106C80 70 120 70 156 104" stroke="#19C2A0" fill="none"/><circle cx="44" cy="106" r="3" fill="#6CB0F7"/><circle cx="156" cy="104" r="3" fill="#6CB0F7"/>';
        case 'lp-cards': return '<g transform="rotate(-8 100 80)"><rect x="52" y="38" width="112" height="72" rx="10" fill="#C9D9F1"/></g><rect x="44" y="40" width="112" height="72" rx="10" fill="url(#overview-cardg)" stroke="#fff" stroke-width=".8"/><rect x="56" y="68" width="18" height="14" rx="3" fill="#EDE6D6" stroke="#B4B8BF" stroke-width=".5"/><svg x="130" y="48" width="14" height="14" viewBox="0 0 362 360" fill="#fff"><use href="#runo-mark"/></svg><circle cx="134" cy="98" r="6" fill="#8C9197"/><circle cx="142" cy="98" r="6" fill="#DADDE1"/>';
      }
      return '';
    };
    var chs = $('#overview-chs');
    chs.innerHTML = Runo.PAGES.filter(function (p) { return p.id !== 'overview'; }).map(function (p, k) {
      return '<a class="ov-ch" href="/' + p.id + '" data-reveal data-delay="' + ((k % 4) * 70) + '"><span><span class="ov-ch-t">' + p.title + '</span><span class="ov-ch-m">' + p.n + ' &middot; ' + p.group + '</span></span>' +
        '<span class="ov-ch-a">' + Runo.icon('arrow-ne') + '</span><svg class="m" viewBox="0 0 200 128" aria-hidden="true">' + motif(p.id) + '</svg></a>';
    }).join('');
    Runo.scan(root);
  });
}
