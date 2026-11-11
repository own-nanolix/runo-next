/* Generated from src/pages/use-world.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('use-world', function (root) {
    const R = Runo, P = 'use-world-';
    const $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => Array.from(r.querySelectorAll(s));

    /* ---------- svg helpers ---------- */
    const lg = (id, stops, a = 0, b = 0, c = 0, d = 1) => `<linearGradient id="${P}${id}" x1="${a}" y1="${b}" x2="${c}" y2="${d}">${stops.map(s => `<stop offset="${s[0]}" stop-color="${s[1]}"${s[2] != null ? ` stop-opacity="${s[2]}"` : ''}/>`).join('')}</linearGradient>`;
    const rg = (id, stops) => `<radialGradient id="${P}${id}">${stops.map(s => `<stop offset="${s[0]}" stop-color="${s[1]}" stop-opacity="${s[2]}"/>`).join('')}</radialGradient>`;
    /* light from top-left: shadows fall to the lower right */
    const sh = (id, dx = 8, dy = 16, sd = 14, a = .3) => `<filter id="${P}${id}" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="${dx}" dy="${dy}" stdDeviation="${sd}" flood-color="#1E2D46" flood-opacity="${a}"/></filter>`;
    const bl = (id, s) => `<filter id="${P}${id}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${s}"/></filter>`;
    const mk = (x, y, w, fill, extra = '') => `<svg x="${x}" y="${y}" width="${w}" height="${(w * 360 / 362).toFixed(1)}" viewBox="0 0 362 360" fill="${fill}" ${extra} aria-hidden="true"><use href="#runo-mark"/></svg>`;
    const svg = (vb, label, defs, body, mw) => `<svg class="uw-svg" viewBox="${vb}" role="img" aria-label="${label}" style="--mw:${mw}px"><defs>${defs}</defs>${body}</svg>`;
    const tx = (x, y, s, fill, t, o = '') => `<text x="${x}" y="${y}" font-size="${s}" fill="${fill}" ${o}>${t}</text>`;
    const cardAt = (v, x, y, w, rot, cls) => `<g transform="translate(${x} ${y}) rotate(${rot || 0})"><g class="${cls || ''}">${R.card(v).replace('<svg ', `<svg width="${w}" height="${(w * .625).toFixed(1)}" `)}</g></g>`;
    const rings = (cx, cy, n, r0, dr, op, sw = .8) => { let s = ''; for (let i = 0; i < n; i++) s += `<circle cx="${cx}" cy="${cy}" r="${r0 + i * dr}"/>`; return `<g fill="none" stroke="#fff" stroke-opacity="${op}" stroke-width="${sw}">${s}</g>`; };
    const hair = (x, y, n, gap, hmax, base, color) => { let s = ''; for (let i = 0; i < n; i++) { const h = 6 + Math.abs(Math.sin(i * .37) * .6 + Math.cos(i * .9) * .25) * hmax; s += `<rect x="${(x + i * gap).toFixed(1)}" y="${(y + base - h).toFixed(1)}" width="1.2" height="${h.toFixed(1)}" fill="${color}"/>`; } return s; };
    const out = (k, html) => { const el = $(`[data-uw="${k}"]`); if (el) el.innerHTML = html; };

    /* ---------- 21 card backs ---------- */
    const back = (v) => {
      const u = R.uid('bk'), c = { sage: ['#D5DAD0', '#AEB7AB'], ice: ['#EEF3FB', '#D3E0F5'], blue: ['#86ABD6', '#5C88BB'] }[v], ink = v === 'blue' ? '#fff' : '#27425F';
      let l = '', h = '';
      for (let i = 0; i < 9; i++) l += `<path d="M-10 ${196 - i * 6} C90 ${150 - i * 4} 190 ${210 - i * 6} 330 ${110 - i * 6}"/>`;
      for (let i = 0; i < 24; i++) h += `<path d="M${28 + i * 8} 108 l10 -24"/>`;
      return `<svg viewBox="0 0 320 200" role="img" aria-label="Runo ${v} card, back"><defs>
        <linearGradient id="${u}g" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient>
        <linearGradient id="${u}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2D33"/><stop offset="1" stop-color="#0B0C0E"/></linearGradient>
        <clipPath id="${u}c"><rect width="320" height="200" rx="16"/></clipPath><clipPath id="${u}p"><rect x="24" y="80" width="200" height="30" rx="3"/></clipPath></defs>
        <g clip-path="url(#${u}c)"><rect width="320" height="200" fill="url(#${u}g)"/>
        <g fill="none" stroke="#fff" stroke-opacity=".5" stroke-width=".8">${l}</g>
        <rect y="26" width="320" height="38" fill="url(#${u}s)"/>
        <rect x="24" y="80" width="200" height="30" rx="3" fill="#fff" opacity=".94"/><g clip-path="url(#${u}p)" fill="none" stroke="#B4B8BF" stroke-width=".8">${h}</g>
        <rect y="0" width="320" height="1.2" fill="#fff" opacity=".6"/></g>
        <svg x="24" y="132" width="24" height="24" viewBox="0 0 362 360" fill="${ink}" opacity=".85"><use href="#runo-mark"/></svg>
        <text x="24" y="176" font-size="11" fill="${ink}" opacity=".9" letter-spacing="1.5" font-family="inherit">•••• 1116</text>
        <text x="296" y="146" text-anchor="end" font-size="8" fill="${ink}" opacity=".85" font-family="inherit">runo.finance</text>
        <text x="296" y="158" text-anchor="end" font-size="8" fill="${ink}" opacity=".85" font-family="inherit">1800 123 4567</text>
        <circle cx="274" cy="180" r="9" fill="#8C9197" opacity=".9"/><circle cx="286" cy="180" r="9" fill="#DADDE1" opacity=".85"/></svg>`;
    };
    $$('[data-back]').forEach(el => { el.innerHTML = back(el.dataset.back); });

    /* ---------- 22 card carrier ---------- */
    out('carrier', svg('0 0 640 440', 'Folded letter reading Financial control starts with a single setup, with a Runo card tipped on',
      lg('p22', [[0, '#FFFFFF'], [1, '#F0F1F4']], 0, 0, 1, 1) + lg('c22', [[0, '#000', .14], [1, '#000', 0]]) + lg('c22b', [[0, '#fff', .9], [1, '#fff', 0]]) + sh('s22', 10, 22, 16, .28) + sh('s22c', 6, 12, 8, .3),
      `<g transform="rotate(-3 320 220)">
        <rect x="110" y="36" width="400" height="368" rx="3" fill="url(#${P}p22)" filter="url(#${P}s22)"/>
        <rect x="110" y="156" width="400" height="16" fill="url(#${P}c22)"/><rect x="110" y="276" width="400" height="16" fill="url(#${P}c22)"/>
        <path d="M110 156H510M110 276H510" stroke="#fff" stroke-width="1.2" opacity=".9"/><path d="M110 157H510M110 277H510" stroke="#1E2D46" stroke-opacity=".12" stroke-width=".8"/>
        ${mk(150, 66, 26, '#000')}${tx(186, 86, 16, '#0B0B0C', 'Runo.')}
        ${tx(150, 206, 25, '#0B0B0C', 'Financial control starts')}${tx(150, 236, 25, '#0B0B0C', 'with a single setup.')}
        ${hair(150, 270, 46, 4, 34, 90, '#6CB0F7')}
      </g>
      <g filter="url(#${P}s22c)">${cardAt('sage', 300, 262, 200, 5, 'uw-lift uw-l22')}</g>`, 640));

    /* ---------- 23 metal card in sleeve ---------- */
    out('sleeve', svg('0 0 640 440', 'Brushed metal Runo card sliding out of a paper sleeve',
      lg('sl', [[0, '#FBFAF6'], [1, '#E3DFD4']], 0, 0, .5, 1) + lg('sd', [[0, '#000', .5], [1, '#000', 0]]) + lg('sheen', [[0, '#fff', 0], [.5, '#fff', .5], [1, '#fff', 0]], 0, 0, 1, .2) +
      sh('s23', 6, 18, 14, .6) + `<clipPath id="${P}k23"><rect width="380" height="237.5" rx="19"/></clipPath>`,
      `<ellipse cx="320" cy="392" rx="250" ry="18" fill="#6CB0F7" opacity=".12" filter="url(#${P}b23)"/><defs>${bl('b23', 14)}</defs>
      <rect x="90" y="120" width="460" height="276" rx="16" fill="#BDB8AB"/>
      <g transform="translate(130 64) rotate(-2)"><g class="uw-lift uw-l23">
        <rect x="2" y="5" width="380" height="237.5" rx="19" fill="#26364B"/>
        ${R.card('blue').replace('<svg ', '<svg width="380" height="237.5" ')}
        <g clip-path="url(#${P}k23)"><g class="uw-band"><rect x="-60" y="-60" width="130" height="420" fill="url(#${P}sheen)" transform="rotate(22)"/></g></g>
      </g></g>
      <path d="M106 176H255A45 45 0 0 0 345 176H534A16 16 0 0 1 550 192V380A16 16 0 0 1 534 396H106A16 16 0 0 1 90 380V192A16 16 0 0 1 106 176Z" fill="url(#${P}sl)" filter="url(#${P}s23)"/>
      <path d="M255 176A45 45 0 0 0 345 176" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="2"/>
      <path d="M106 177H255M345 177H534" stroke="#fff" stroke-width="1.5" opacity=".9"/>
      ${mk(130, 322, 26, '#0B0B0C')}${tx(168, 342, 16, '#0B0B0C', 'Runo.')}${hair(396, 330, 36, 4, 22, 40, '#6CB0F7')}`, 640));

    /* ---------- 24 contactless POS ---------- */
    let keys = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) keys += `<rect x="${366 + c * 54}" y="${268 + r * 38}" width="44" height="26" rx="7" fill="url(#${P}kk)" ${r === 3 && c === 2 ? `style="fill:#56769B"` : ''}/>`;
    out('pos', svg('0 0 640 480', 'Payment terminal showing the Runo mark and 640.00 EUR, with a card being tapped',
      lg('tb', [[0, '#3A3F47'], [1, '#14161A']], 0, 0, 1, 1) + lg('scr', [[0, '#1B2028'], [1, '#07090C']]) + lg('kk', [[0, '#F0F2F5'], [1, '#B8BEC8']]) + sh('s24', 10, 26, 18, .4),
      `<ellipse cx="450" cy="448" rx="150" ry="14" fill="#1E2D46" opacity=".28" filter="url(#${P}b24)"/><defs>${bl('b24', 12)}</defs>
      <rect x="330" y="40" width="230" height="390" rx="30" fill="url(#${P}tb)" filter="url(#${P}s24)"/>
      <rect x="331" y="41" width="228" height="388" rx="29" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <rect x="352" y="66" width="186" height="170" rx="12" fill="url(#${P}scr)"/>
      <path d="M356 70H520" stroke="#fff" stroke-opacity=".25"/>
      <g class="uw-s1">${mk(423, 84, 44, '#fff')}
        <g fill="none" stroke="#BAD5F3" stroke-width="2.4" stroke-linecap="round"><path class="uw-wave" d="M432 152a14 14 0 0 1 26 0"/><path class="uw-wave" d="M424 144a26 26 0 0 1 42 0"/><path class="uw-wave" d="M416 136a38 38 0 0 1 58 0" transform="translate(0 -2)"/></g></g>
      <g class="uw-s2"><circle cx="445" cy="124" r="30" fill="#19C2A0"/><path class="uw-chk" d="M430 124l11 11 20-22" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${tx(445, 178, 12, '#CEF5ED', 'Approved', 'text-anchor="middle"')}</g>
      ${tx(445, 218, 19, '#fff', '640.00 EUR', 'text-anchor="middle"')}
      ${keys}
      ${cardAt('ice', 56, 216, 232, -10, 'uw-lift uw-l24')}`, 640));

    /* ---------- 25 ATM ---------- */
    let akeys = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) akeys += `<rect x="${164 + c * 44}" y="${276 + r * 26}" width="34" height="18" rx="5" fill="url(#${P}ak)"/>`;
    out('atm', svg('0 0 560 520', 'ATM kiosk whose screen reads Welcome back, David Clark',
      lg('ab', [[0, '#F6F8FA'], [1, '#C5CCD6']], 0, 0, 1, 1) + lg('sky', [[0, '#A9C7EE'], [.46, '#CFE0F5'], [1, '#F3F5F7']]) + lg('ak', [[0, '#fff'], [1, '#C2C9D3']]) + lg('ap', [[0, '#E6EAF0'], [1, '#B4BDC9']]) +
      sh('s25', 10, 24, 18, .32) + `<clipPath id="${P}k25"><rect x="160" y="64" width="240" height="174" rx="9"/></clipPath>` + bl('b25', 12),
      `<ellipse cx="290" cy="500" rx="190" ry="14" fill="#1E2D46" opacity=".25" filter="url(#${P}b25)"/>
      <rect x="130" y="24" width="300" height="470" rx="28" fill="url(#${P}ab)" filter="url(#${P}s25)"/>
      <rect x="131" y="25" width="298" height="468" rx="27" fill="none" stroke="#fff" stroke-width="1.5"/>
      <rect x="210" y="36" width="140" height="6" rx="3" fill="#6CB0F7" opacity=".7"/>
      <rect x="152" y="56" width="256" height="190" rx="14" fill="#0B0D10"/>
      <rect x="160" y="64" width="240" height="174" rx="9" fill="url(#${P}sky)"/>
      <g clip-path="url(#${P}k25)"><g class="uw-rings">${rings(350, 150, 9, 30, 16, .65)}</g>
        ${mk(172, 74, 16, '#fff')}${tx(194, 86, 9, '#27425F', 'Runo Finance')}
        <g class="uw-hello">${tx(176, 136, 22, '#fff', 'Welcome back,')}${tx(176, 162, 22, '#fff', 'David Clark', 'opacity=".88"')}</g>
        <g class="uw-bal">${tx(176, 194, 9, '#27425F', 'Total balance')}${tx(176, 220, 22, '#0B0B0C', '$92,345.67')}</g></g>
      <rect x="152" y="264" width="150" height="120" rx="10" fill="url(#${P}ap)"/>${akeys}
      <rect x="320" y="268" width="88" height="16" rx="8" fill="#0B0D10"/><rect class="uw-slot" x="328" y="275" width="72" height="2.5" rx="1.2" fill="#6CB0F7" opacity=".6"/>
      <rect x="320" y="310" width="88" height="10" rx="5" fill="#1A1D22"/><rect x="326" y="322" width="76" height="40" rx="6" fill="url(#${P}ap)" opacity=".6"/>
      <rect x="152" y="404" width="256" height="62" rx="10" fill="#2A2E34"/><rect x="152" y="404" width="256" height="9" rx="4" fill="#4A5059"/><rect x="170" y="424" width="220" height="24" rx="5" fill="#000"/>`, 520));

    /* ---------- 26 phones + watch ---------- */
    const tint = ['#BAD5F3', '#CEF5ED', '#F6FFD8', '#F4F2EC', '#A7B8CD', '#fff'];
    const markEl = Runo.mark();
    $('[data-uw="grid"]').innerHTML = Array.from({ length: 16 }, (_, i) => i === 0 ? `<span class="uw-ico appicon">${markEl}</span>` : `<span class="uw-ico" style="background:${tint[(i * 5) % 6]};opacity:.92"></span>`).join('');
    $('[data-uw="dock"]').innerHTML = [0, 1, 2, 3].map(i => i === 0 ? `<span class="uw-ico appicon">${markEl}</span>` : `<span class="uw-ico" style="background:${tint[i + 1]}"></span>`).join('');
    let wb = '';
    for (let i = 0; i < 22; i++) { const h = 8 + Math.abs(Math.sin(i * .5) * 22 + Math.cos(i * 1.1) * 8); wb += `<rect style="--i:${i}" x="${34 + i * 4.4}" y="${(206 - h).toFixed(1)}" width="1.3" height="${h.toFixed(1)}" fill="url(#${P}wb)"/>`; }
    out('watch', svg('0 0 160 300', 'Watch face showing a total balance of $92,345.67',
      lg('st', [[0, '#3A3F47'], [1, '#14161A']], 0, 0, 1, 0) + lg('wc', [[0, '#F1F4F8'], [1, '#9FAABA']], 0, 0, 1, 1) + lg('wb', [[0, '#6CB0F7'], [1, '#BAD5F3', .4]]) + sh('s26w', 6, 14, 8, .4),
      `<rect x="36" y="0" width="88" height="110" rx="14" fill="url(#${P}st)"/><rect x="36" y="190" width="88" height="110" rx="14" fill="url(#${P}st)"/>
      <rect x="18" y="80" width="124" height="140" rx="34" fill="url(#${P}wc)" filter="url(#${P}s26w)"/><rect x="142" y="130" width="6" height="22" rx="3" fill="#8E99A8"/>
      <rect x="26" y="88" width="108" height="124" rx="28" fill="#000"/>
      ${tx(80, 116, 8.5, '#B9C7D8', 'Total balance', 'text-anchor="middle"')}${tx(80, 142, 15, '#fff', '$92,345.67', 'text-anchor="middle"')}
      <g class="uw-wbars">${wb}</g>`, 130));

    /* ---------- 27 mail ---------- */
    $$('[data-mark]').forEach(el => { el.innerHTML = R.mark(); });
    $$('[data-mark-inline]').forEach(el => { el.innerHTML = R.mark(); el.style.display = 'inline-flex'; });
    $('[data-uw="nrings"]').innerHTML = rings(330, 40, 10, 40, 20, .55);
    R.bars($('[data-uw="mbars"]'), { n: 90, h: 36, px: 36, color: '#fff', color2: '#fff', heights: (i, n) => .25 + .7 * Math.abs(Math.sin(i * .21) * .6 + Math.cos(i * .07) * .4), label: 'Hairline bar chart' });

    /* ---------- 28 browser ---------- */
    $$('[data-i]').forEach(el => { el.innerHTML = R.icon(el.dataset.i); el.style.display = 'inline-flex'; });

    /* ---------- 29 office ---------- */
    const rel = (x, y, s, t) => `<g>${tx(x + 3, y + 4, s, '#6F7C8F', t, `opacity=".5" filter="url(#${P}r29)"`)}${tx(x - 2, y - 2, s, '#fff', t, 'opacity=".95"')}${tx(x, y, s, `url(#${P}rf)`, t)}</g>`;
    /* wayfinding plate: just the mark and the "Runo." wordmark, set large enough to read on a phone */
    const nav = `${tx(800, 290, 30, '#fff', 'Runo.')}<path d="M800 230h100" stroke="#fff" stroke-opacity=".25"/>`;
    out('office', svg('0 0 960 440', 'Reception wall with the Runo mark and wordmark in relief, a door and a wayfinding plate',
      lg('w29', [[0, '#F7F8FA'], [1, '#DEE3EA']], 0, 0, 1, 0) + lg('fl', [[0, '#C9CFD8'], [1, '#EBEEF2']]) + lg('rf', [[0, '#F0F2F6'], [1, '#D2D9E3']], 0, 0, 1, 1) +
      lg('dk', [[0, '#fff'], [1, '#DDE2E9']]) + lg('dr', [[0, '#F8F9FB'], [1, '#D6DCE5']], 0, 0, 1, 1) + lg('sw29', [[0, '#fff', 0], [.5, '#fff', .55], [1, '#fff', 0]], 0, 0, 1, 0) +
      lg('ceil', [[0, '#fff', .9], [1, '#fff', 0]]) + rg('hl', [[0, '#BAD5F3', .9], [1, '#BAD5F3', 0]]) + sh('s29', 8, 18, 14, .3) + sh('s29p', 6, 10, 8, .5) + bl('r29', 2) + bl('rb29', 3) + `<clipPath id="${P}k29"><rect width="960" height="360"/></clipPath>`,
      `<rect width="960" height="360" fill="url(#${P}w29)"/><rect width="960" height="90" fill="url(#${P}ceil)"/>
      <rect y="360" width="960" height="80" fill="url(#${P}fl)"/><rect y="354" width="960" height="6" fill="#C3CAD5"/>
      <ellipse class="uw-halo" cx="300" cy="170" rx="260" ry="130" fill="url(#${P}hl)"/>
      <svg x="110" y="100" width="150" height="149" viewBox="0 0 362 360" aria-hidden="true"><use href="#runo-mark" fill="#6F7C8F" opacity=".5" transform="translate(9 11)" filter="url(#${P}rb29)"/><use href="#runo-mark" fill="#fff" transform="translate(-5 -5)"/><use href="#runo-mark" fill="url(#${P}rf)"/></svg>
      ${rel(290, 200, 84, 'Runo.')}
      <g clip-path="url(#${P}k29)"><rect class="uw-sweep" width="300" height="360" fill="url(#${P}sw29)"/></g>
      <rect x="70" y="300" width="500" height="64" rx="10" fill="url(#${P}dk)" filter="url(#${P}s29)"/><rect x="70" y="300" width="500" height="8" rx="4" fill="#fff"/>
      <rect x="590" y="70" width="170" height="292" fill="#B8C1CD"/><rect x="598" y="78" width="154" height="284" fill="url(#${P}dr)"/>
      <path d="M598 78V362M752 78V362" stroke="#fff" stroke-opacity=".6"/><rect x="734" y="222" width="5" height="44" rx="2.5" fill="#8E99A8"/>
      <rect x="780" y="140" width="140" height="170" rx="10" fill="#000" filter="url(#${P}s29p)"/><rect x="781" y="141" width="138" height="168" rx="9" fill="none" stroke="#fff" stroke-opacity=".12"/>${mk(800, 160, 52, '#fff')}${nav}`, 960));

    /* ---------- 30 out-of-home ---------- */
    let lamps = '';
    for (let i = 0; i < 3; i++) { const x = 140 + i * 150; lamps += `<rect x="${x}" y="28" width="32" height="10" rx="3" fill="#2B2F36"/><path class="uw-lamp" d="M${x + 4} 38L${x - 40} 150L${x + 76} 150L${x + 28} 38Z" fill="url(#${P}cone)"/>`; }
    /* two drawings that sit side by side on wide screens and stack on phones, so the copy never shrinks below reading size */
    const billboard = svg('0 0 640 460', 'Billboard reading Designed for teams that manage money at scale, with three Runo cards',
      lg('bb', [[0, '#5E9AE0'], [.5, '#A9CBEE'], [1, '#EEF3FB']]) + lg('pole', [[0, '#E4E8EE'], [1, '#98A2B0']], 0, 0, 1, 0) + lg('cone', [[0, '#fff', .7], [1, '#fff', 0]]) +
      lg('grl', [[0, '#AEB9C9', 0], [.14, '#AEB9C9', .85], [1, '#AEB9C9', .85]], 0, 0, 1, 0) + lg('grr', [[0, '#AEB9C9', .85], [.8, '#AEB9C9', .85], [1, '#AEB9C9', 0]], 0, 0, 1, 0) +
      lg('roof', [[0, '#F3F5F8'], [1, '#B3BCC8']]) + sh('s30', 8, 20, 14, .35) + bl('b30', 12) + bl('b30s', 10) +
      `<clipPath id="${P}kb"><rect x="40" y="62" width="560" height="236"/></clipPath><clipPath id="${P}kp"><rect x="81" y="118" width="128" height="198"/></clipPath>`,
      `<rect y="410" width="640" height="50" fill="url(#${P}grl)"/><ellipse cx="330" cy="414" rx="250" ry="8" fill="#1E2D46" opacity=".18" filter="url(#${P}b30s)"/>
      <rect x="170" y="300" width="14" height="112" fill="url(#${P}pole)"/><rect x="456" y="300" width="14" height="112" fill="url(#${P}pole)"/>
      <rect x="40" y="40" width="560" height="6" fill="#2B2F36"/>${lamps}
      <rect x="30" y="50" width="580" height="260" rx="4" fill="#1B1E23" filter="url(#${P}s30)"/>
      <rect x="40" y="62" width="560" height="236" fill="url(#${P}bb)"/>
      <g clip-path="url(#${P}kb)">${rings(110, 330, 9, 90, 26, .45)}
        ${mk(70, 84, 28, '#fff')}${tx(106, 106, 20, '#fff', 'Runo.')}
        ${tx(70, 162, 34, '#fff', 'Designed for teams')}${tx(70, 202, 34, '#fff', 'that manage money')}${tx(70, 242, 34, '#fff', 'at scale')}
        ${tx(70, 282, 20, '#0B0B0C', 'runo.finance')}
        ${cardAt('sage', 430, 80, 140, -6, 'uw-drift')}${cardAt('ice', 444, 136, 140, -6, 'uw-drift')}${cardAt('blue', 458, 192, 140, -6, 'uw-drift')}</g>`, 640);
    const shelter = svg('0 0 330 460', 'Bus-shelter poster reading Designed for teams that manage money at scale',
      `<clipPath id="${P}kp2"><rect x="81" y="118" width="128" height="198"/></clipPath>`,
      `<rect y="410" width="330" height="50" fill="url(#${P}grr)"/><ellipse cx="160" cy="412" rx="130" ry="7" fill="#1E2D46" opacity=".18" filter="url(#${P}b30s)"/>
      <rect x="30" y="84" width="8" height="326" fill="url(#${P}pole)"/><rect x="292" y="84" width="8" height="326" fill="url(#${P}pole)"/>
      <rect x="238" y="100" width="54" height="300" fill="#fff" opacity=".22" stroke="#fff" stroke-opacity=".5"/>
      <rect x="20" y="70" width="290" height="16" rx="5" fill="url(#${P}roof)" filter="url(#${P}s30)"/>
      <rect class="uw-lamp" x="68" y="104" width="154" height="226" fill="#fff" opacity=".55" filter="url(#${P}b30)"/>
      <rect x="75" y="112" width="140" height="210" rx="4" fill="#14161A"/><rect x="81" y="118" width="128" height="198" fill="url(#${P}bb)"/>
      <g clip-path="url(#${P}kp2)">${mk(91, 128, 18, '#fff')}${tx(91, 168, 15, '#fff', 'Designed for')}${tx(91, 186, 15, '#fff', 'teams that')}${tx(91, 204, 15, '#fff', 'manage money')}${tx(91, 222, 15, '#fff', 'at scale')}
        ${cardAt('sage', 104, 236, 84, -5, 'uw-drift')}${cardAt('ice', 110, 256, 84, -5, 'uw-drift')}${cardAt('blue', 116, 276, 84, -5, 'uw-drift')}</g>
      <rect x="65" y="372" width="160" height="10" rx="3" fill="#8E99A8"/><rect x="75" y="382" width="6" height="28" fill="#8E99A8"/><rect x="209" y="382" width="6" height="28" fill="#8E99A8"/>`, 330);
    out('ooh', `<div class="uw-ooh">${billboard}${shelter}</div>`);

    /* ---------- interactions ---------- */
    $$('.uw-tile').forEach(t => {
      const st = $('.uw-stage', t); let lock = false;
      const set = v => t.classList.toggle('is-on', v || lock);
      const reset = () => ['--rx', '--ry'].forEach(p => st.style.setProperty(p, 0));
      t.addEventListener('pointerenter', () => set(true));
      t.addEventListener('pointerleave', () => { reset(); set(false); });
      t.addEventListener('focus', () => set(true));
      t.addEventListener('blur', () => set(false));
      t.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lock = !lock; t.classList.toggle('is-on', lock); } });
      t.addEventListener('click', e => { if (e.pointerType === 'touch' || e.detail === 0) { lock = !lock; t.classList.toggle('is-on', lock); } });
      st.addEventListener('pointermove', e => {
        if (R.reduce) return;
        const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        st.style.setProperty('--rx', ((x - .5) * 14).toFixed(2)); st.style.setProperty('--ry', ((.5 - y) * 9).toFixed(2));
        st.style.setProperty('--mx', (x * 100).toFixed(1)); st.style.setProperty('--my', (y * 100).toFixed(1));
      });
    });
    R.scan(root);
  });
}
