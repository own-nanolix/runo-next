/* Generated from src/pages/use-merch.html by scripts/import-runo.mjs. Edit the source, then re-import. */
/* eslint-disable */
export default function register(Runo, env) {
  // Timers and listeners come from env so they are cleaned up when the page unmounts.
  const { setTimeout, setInterval, requestAnimationFrame, addEventListener } = env;
  Runo.page('use-merch', function (root) {
    const R = Runo, $ = (s, r) => (r || root).querySelector(s), $$ = (s, r) => Array.from((r || root).querySelectorAll(s));
    const COL = { black: ['Deep Black', '#000000', '#FFFFFF'], white: ['Base White', '#FFFFFF', '#000000'], blue: ['Soft Blue', '#BAD5F3', '#000000'],
      steel: ['Steel Layer', '#A7B8CD', '#000000'], sand: ['Surface Sand', '#F4F2EC', '#000000'] };
    const SVGO = (vb, label, inner) => `<svg viewBox="${vb}" role="img" aria-label="${label}">${inner}</svg>`;
    /* logo mark, nested svg; fill is a CSS colour; the 'th' flag adds an embroidery thread texture layer */
    const MK = (x, y, s, fill, th) => {
      const m = (f) => `<svg x="${x}" y="${y}" width="${s}" height="${(s * 360 / 362).toFixed(1)}" viewBox="0 0 362 360" style="fill:${f}" aria-hidden="true"><use href="#runo-mark"/></svg>`;
      return m(fill) + (th ? m('url(#um-thread)') : '');
    };
    const sh = (cx, cy, rx, ry, o) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#1b2a42" opacity="${o || .26}" filter="url(#um-b)"/>`;
    const BARS = (x, y, w, h, o) => { const d = document.createElement('div'); R.bars(d, Object.assign({ n: 40, h: h, gap: w / 40, w: 1.3, px: h }, o));
      const s = d.firstElementChild; s.setAttribute('x', x); s.setAttribute('y', y); s.setAttribute('width', w); s.setAttribute('height', h); s.setAttribute('aria-hidden', 'true'); s.removeAttribute('role'); s.removeAttribute('aria-label'); return s.outerHTML; };
    const wave = (k) => (i) => .22 + .78 * Math.pow((Math.sin(i * k) + 1) / 2, 1.3);
    const gfill = (d, id, extra) => `<clipPath id="${id}"><path d="${d}"/></clipPath><path d="${d}" style="fill:var(--c);transition:fill .6s"/>
      <g clip-path="url(#${id})"><path d="${d}" fill="url(#um-lit)"/>${extra || ''}</g><path d="${d}" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="1"/>`;
    const fold = (d) => `<path d="${d}" fill="#000" opacity=".1" filter="url(#um-b2)"/>`;
    const hi = (d) => `<path d="${d}" fill="#fff" opacity=".16" filter="url(#um-b2)"/>`;
    const stitch = (d, o) => `<path d="${d}" fill="none" stroke="#000" stroke-opacity="${o || .2}" stroke-width="1" stroke-dasharray="3 2.2"/>`;
  
    /* shared defs (light from top-left everywhere) */
    const defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
      <linearGradient id="um-lit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".36"/><stop offset=".42" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
      <linearGradient id="um-cyl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset=".2" stop-color="#fff" stop-opacity=".42"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/><stop offset=".78" stop-color="#000" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity=".34"/></linearGradient>
      <linearGradient id="um-cylv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>
      <linearGradient id="um-skyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9C7EE"/><stop offset=".55" stop-color="#CFE0F5"/><stop offset="1" stop-color="#F3F5F7"/></linearGradient>
      <linearGradient id="um-steelg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6F8AAA"/><stop offset=".25" stop-color="#D6DEEA"/><stop offset=".5" stop-color="#A7B8CD"/><stop offset=".8" stop-color="#8398B3"/><stop offset="1" stop-color="#5F7898"/></linearGradient>
      <linearGradient id="um-silver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4F6F9"/><stop offset=".5" stop-color="#B9C3D0"/><stop offset="1" stop-color="#E4E8EE"/></linearGradient>
      <radialGradient id="um-coin" cx=".32" cy=".28" r=".9"><stop offset="0" stop-color="#F4F1EB"/><stop offset=".55" stop-color="#D8D1C4"/><stop offset="1" stop-color="#B2A998"/></radialGradient>
      <radialGradient id="um-bdisc" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#E3EFFC"/><stop offset=".6" stop-color="#A9CBF0"/><stop offset="1" stop-color="#7FAEE3"/></radialGradient>
      <pattern id="um-thread" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><rect width="3" height="1" fill="#fff" opacity=".3"/><rect y="1.5" width="3" height="1" fill="#000" opacity=".2"/></pattern>
      <filter id="um-b" x="-40%" y="-60%" width="180%" height="220%"><feGaussianBlur stdDeviation="9"/></filter>
      <filter id="um-b2" x="-80%" y="-40%" width="260%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>
      <filter id="um-b1" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.1"/></filter>
    </defs></svg>`;
    root.insertAdjacentHTML('afterbegin', defs);
  
    /* ------------------------------------------------------------------ 11 T-shirt */
    /* flat front view on a hanger: sloped shoulders, set-in sleeves angled out, slightly tapered body, rib collar */
    const TEE = (back) => `M112 24 C96 29 76 35 58 44 C40 57 23 75 11 97 L37 146 C49 140 61 132 72 125 C75 190 72 262 70 326 Q150 337 230 326 C228 262 225 190 228 125 C239 132 251 140 263 146 L289 97 C277 75 260 57 242 44 C224 35 204 29 188 24 ${back ? 'C174 37 126 37 112 24' : 'C180 64 120 64 112 24'}Z`;
    const teeFolds = fold('M72 125 C88 142 92 172 86 204 C80 172 77 146 72 125Z') + fold('M228 128 C212 168 210 232 219 304 C232 244 233 182 228 128Z')
      + fold('M88 272 C130 262 178 282 216 266 C182 292 128 286 88 272Z') + fold('M37 146 L72 125 L69 113 C58 124 46 134 33 139Z')
      + hi('M98 84 C122 118 122 196 104 248 C95 194 92 130 98 84Z') + hi('M24 92 C34 78 46 64 58 52 C50 70 40 86 32 104Z');
    const shirt = (back, ox) => {
      const id = 'um-t' + (back ? 'b' : 'f'), D = TEE(back);
      const neckF = 'M112 24 C120 64 180 64 188 24', neckB = 'M112 24 C126 37 174 37 188 24';
      return `<g transform="translate(${ox} 34)"><g class="um-sway" style="transform-origin:150px 10px">
        <path d="M150 26 V8 C150 -4 165 -6 166 4" fill="none" stroke="#8E96A3" stroke-width="3" stroke-linecap="round"/>
        <path d="${D}" fill="#1b2a42" opacity=".2" filter="url(#um-b2)" transform="translate(9 13)"/>
        ${back ? '' : `<path d="M112 24 C126 35 174 35 188 24 C180 64 120 64 112 24Z" style="fill:var(--c)"/><path d="M112 24 C126 35 174 35 188 24 C180 64 120 64 112 24Z" fill="#000" opacity=".34"/>`}
        ${gfill(D, id, teeFolds)}
        <path d="${back ? neckB : neckF}" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="10" stroke-linecap="round"/><path d="${back ? neckB : neckF}" style="fill:none;stroke:var(--c)" stroke-width="8" stroke-linecap="round"/>
        <path d="${back ? neckB : neckF}" fill="none" stroke="#000" stroke-opacity=".16" stroke-width="7" stroke-dasharray=".8 1.8"/>
        ${back ? '' : `<path d="${neckB}" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="5"/><path d="${neckB}" style="fill:none;stroke:var(--c)" stroke-width="3.6"/>`}
        ${stitch('M58 44 C66 70 70 100 72 125', .22)}${stitch('M242 44 C234 70 230 100 228 125', .22)}${stitch('M72 317 Q150 327 228 317')}${stitch('M19 93 L45 140')}${stitch('M281 93 L255 140')}
        ${back ? `<g class="um-bp">${MK(140, 58, 20, 'var(--m)')}<text x="150" y="104" text-anchor="middle" style="font:500 11px var(--font);letter-spacing:.01em;fill:var(--m)">Control, simplified.</text><text x="150" y="119" text-anchor="middle" style="font:500 11px var(--font);letter-spacing:.01em;fill:var(--m)">Have you?</text></g>`
               : MK(182, 86, 22, 'var(--m)')}
      </g></g>`;
    };
    const teeSvg = SVGO('0 0 760 420', 'T-shirt, front with small chest mark and back with one-line print', shirt(false, 70) + shirt(true, 400));
  
    /* ------------------------------------------------------------------ 12 Hoodie */
    /* front view, arms hanging: raised hood with dark opening, raglan seams, drawstrings, kangaroo pocket, rib cuffs and hem */
    const HD = 'M100 58 C80 62 62 68 50 80 C34 98 26 126 22 166 L14 288 L49 294 L60 172 L67 152 L67 318 Q150 330 233 318 L233 152 L240 172 L251 294 L286 288 L278 166 C274 126 266 98 250 80 C238 68 220 62 200 58 C190 82 110 82 100 58Z';
    const HOOD = 'M96 64 C82 20 114 -12 150 -12 C186 -12 218 20 204 64Z', HOPEN = 'M114 66 C108 28 128 2 150 2 C172 2 192 28 186 66 C170 86 130 86 114 66Z', HRIM = 'M114 70 C108 28 128 2 150 2 C172 2 192 28 186 70';
    const rib = (d, w) => `<path d="${d}" fill="none" stroke="#000" stroke-opacity=".09" stroke-width="${w}" stroke-dasharray="1.1 2.3"/>`;
    const hoodSvg = SVGO('0 0 560 420', 'Hoodie with embroidered mark on the chest and the wordmark Runo. on the sleeve', `<g transform="translate(130 50)"><g class="um-sway" style="transform-origin:150px 0">
      <path d="${HD}" fill="#1b2a42" opacity=".2" filter="url(#um-b2)" transform="translate(9 13)"/>
      ${gfill(HOOD, 'um-hh', fold('M180 -6 C206 10 214 40 204 64 L176 64Z') + hi('M108 30 C112 6 132 -6 150 -8 C130 4 118 20 114 44Z'))}
      <path d="${HOPEN}" style="fill:var(--c)"/><path d="${HOPEN}" fill="#000" opacity=".5"/><path d="M118 60 C116 30 132 10 150 10 C134 22 126 40 128 70Z" fill="#000" opacity=".18" filter="url(#um-b1)"/>
      ${gfill(HD, 'um-hd', fold('M67 152 C84 176 88 210 82 248 C76 212 72 180 67 152Z') + fold('M233 152 C214 184 212 236 220 296 C232 250 234 196 233 152Z')
        + fold('M22 166 L60 172 L57 200 C44 194 32 186 22 186Z') + fold('M278 166 L240 172 L243 200 C256 194 268 186 278 186Z')
        + hi('M30 120 C36 104 44 92 54 84 C44 110 38 150 34 200Z') + hi('M100 100 C120 130 122 170 110 210 C102 170 98 130 100 100Z')
        + '<path d="M16 268 L47 274 L49 294 L14 288Z M284 268 L253 274 L251 294 L286 288Z M67 300 Q150 312 233 300 L233 318 Q150 330 67 318Z" fill="#000" opacity=".1"/>')}
      ${rib('M15 279 L48 285', 18)}${rib('M285 279 L252 285', 18)}${rib('M67 309 Q150 321 233 309', 17)}
      <path d="${HRIM}" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="11"/><path d="${HRIM}" style="fill:none;stroke:var(--c)" stroke-width="9"/><path d="M110 60 C106 26 128 -2 150 -2" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="3"/>
      <path d="M100 58 C110 82 190 82 200 58" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="1.4"/>
      ${stitch('M100 58 C90 92 74 124 67 152', .22)}${stitch('M200 58 C210 92 226 124 233 152', .22)}
      <path d="M92 214 H208 C214 240 222 268 226 296 Q150 304 74 296 C78 268 86 240 92 214Z" fill="#000" opacity=".05"/>
      <path d="M92 214 C86 240 78 268 74 296 M208 214 C214 240 222 268 226 296" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="2"/><path d="M92 216 H208" stroke="#000" stroke-opacity=".12" stroke-width="3" filter="url(#um-b1)"/>
      ${stitch('M97 220 H203', .2)}
      <path d="M138 80 C136 110 133 140 135 170 M162 80 C165 110 168 140 166 170" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="4.4" transform="translate(1 1)"/>
      <path d="M138 80 C136 110 133 140 135 170 M162 80 C165 110 168 140 166 170" fill="none" stroke="#E4E6EA" stroke-width="3.4"/>
      <rect x="132.5" y="168" width="5" height="11" rx="2" fill="#8E96A3"/><rect x="163.5" y="168" width="5" height="11" rx="2" fill="#8E96A3"/>
      <circle cx="138" cy="80" r="3.4" fill="url(#um-silver)" stroke="#000" stroke-opacity=".25"/><circle cx="162" cy="80" r="3.4" fill="url(#um-silver)" stroke="#000" stroke-opacity=".25"/>
      ${MK(176, 112, 26, 'var(--m)', 1)}
      <text transform="rotate(-86 34 210)" x="34" y="214" text-anchor="middle" style="font:500 12px var(--font);letter-spacing:.14em;fill:var(--m)">Runo.</text>
    </g></g>`);
  
    /* ------------------------------------------------------------------ 13 Cap */
    /* three-quarter front view: structured six-panel crown, curved pre-bent brim with edge thickness, top button, eyelets */
    /* crown turned a little to the left, so the brim reaches forward-left and its top surface reads */
    const DOME = 'M156 256 C146 172 210 100 318 96 C410 96 456 156 446 236 Q330 272 156 256Z';
    const BRIM = 'M158 250 C214 266 330 268 398 248 C404 292 336 338 236 342 C158 344 92 322 96 294 C98 274 124 258 158 250Z';
    const capSvg = SVGO('0 0 560 420', 'Six-panel cap with the mark embroidered on the front panels', `${sh(282, 366, 178, 16, .28)}<g class="um-capg">
      <clipPath id="um-cpd"><path d="${DOME}"/></clipPath><path d="${DOME}" style="fill:var(--c);transition:fill .6s"/>
      <g clip-path="url(#um-cpd)"><path d="${DOME}" fill="url(#um-lit)"/>
        <ellipse cx="236" cy="146" rx="72" ry="46" fill="#fff" opacity=".2" filter="url(#um-b)"/>
        <path d="M396 108 C444 140 462 196 446 252 L404 252 C418 200 414 150 396 108Z" fill="#000" opacity=".2" filter="url(#um-b2)"/>
        <path d="M150 236 C220 262 360 262 450 228 L450 280 L150 280Z" fill="#000" opacity=".26" filter="url(#um-b2)"/></g>
      <g fill="none" stroke="#000" stroke-opacity=".2" stroke-width="1.2"><path d="M318 98 C276 140 254 196 252 262"/><path d="M318 98 C240 112 184 162 164 232"/><path d="M318 98 C356 132 380 188 386 252"/><path d="M318 98 C392 108 434 160 444 222"/></g>
      ${stitch('M312 98 C270 140 247 196 245 262', .16)}${stitch('M324 98 C283 140 261 196 259 262', .16)}
      <circle cx="232" cy="142" r="3.2" fill="#000" opacity=".3"/><circle cx="372" cy="134" r="3" fill="#000" opacity=".3"/>
      <ellipse cx="318" cy="97" rx="12" ry="6" style="fill:var(--c)"/><ellipse cx="318" cy="97" rx="12" ry="6" fill="url(#um-lit)" stroke="#000" stroke-opacity=".22"/>
      <g transform="rotate(-6 252 186) skewY(-4)"><g opacity=".3" transform="translate(1.6 2)">${MK(220, 158, 62, '#000')}</g>${MK(220, 158, 62, 'var(--m)', 1)}</g>
      <path d="${BRIM}" style="fill:var(--c)" transform="translate(2 7)"/><path d="${BRIM}" fill="#000" opacity=".45" transform="translate(2 7)"/>
      <path d="${BRIM}" style="fill:var(--c)"/><path d="${BRIM}" fill="url(#um-lit)"/>
      <path d="M120 296 C150 316 260 330 360 294" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="18" filter="url(#um-b2)"/>
      ${stitch('M110 294 C112 320 170 334 238 332 C320 330 382 300 388 262', .26)}${stitch('M124 288 C130 312 180 322 240 320 C312 318 366 294 374 260', .2)}${stitch('M140 282 C148 302 190 310 242 308 C302 306 352 288 360 258', .16)}
      <path d="M158 250 C214 266 330 268 398 248" fill="none" stroke="#000" stroke-opacity=".32" stroke-width="2.2"/>
    </g>`);
  
    /* ------------------------------------------------------------------ 14 Tote */
    const TAGS = [['Cash Visibility', 200, 200, -12, '#CFE0F8'], ['Financial Insights', 340, 192, 6, '#F2F3F5'], ['AI Financial Copilot', 262, 244, -4, '#E6ECF5'], ['Expense Control', 372, 256, 9, '#CFE0F8'],
      ['Multi-Account Sync', 196, 292, 8, '#DDF6F1'], ['Runway Forecasting', 330, 298, -7, '#F2F3F5'], ['Smart Payments', 232, 340, -13, '#E6ECF5'], ['Payments', 380, 338, 6, '#F2F3F5'], ['Automated Workflows', 218, 384, 4, '#E6ECF5'], ['Decision Layer', 348, 382, -6, '#DDF6F1']];
    /* canvas tote hanging from its straps: soft side bulge, slack bottom, box-stitched strap ends, drape from the handles */
    const TB = 'M128 142 H432 C436 230 440 320 446 402 Q280 414 114 402 C120 320 124 230 128 142Z';
    const STRAP = 'M210 172 C200 72 212 40 246 40 H314 C348 40 360 72 350 172';
    const toteSvg = SVGO('0 0 560 440', 'Tote bag with a large mark, or an all-over pile of feature tags', `${sh(286, 414, 190, 16, .26)}<g class="um-sway" style="transform-origin:280px 40px">
      <path d="${STRAP}" fill="none" style="stroke:var(--c);transition:stroke .6s" stroke-width="17" transform="translate(12 -4)"/><path d="${STRAP}" fill="none" stroke="#000" stroke-opacity=".3" stroke-width="17" transform="translate(12 -4)"/>
      <path d="${TB}" fill="#1b2a42" opacity=".16" filter="url(#um-b2)" transform="translate(8 10)"/>
      ${gfill(TB, 'um-tb', fold('M128 142 C148 220 146 320 134 402 L114 402 C120 320 124 230 128 142Z') + fold('M432 142 C424 240 426 330 446 402 L456 402 L456 142Z')
        + fold('M210 172 C232 214 238 246 230 282 C222 248 212 214 198 176Z') + fold('M350 172 C330 214 326 250 334 286 C340 250 350 214 362 176Z')
        + hi('M168 190 C196 260 192 340 176 392 C206 330 212 250 190 190Z') + '<path d="M114 380 Q280 396 446 380 V414 H114Z" fill="#000" opacity=".06"/>')}
      ${stitch('M129 162 H431', .24)}${stitch('M118 392 Q280 404 442 392', .18)}<path d="M128 142 H432" stroke="#000" stroke-opacity=".1" stroke-width="3"/>
      <path d="${STRAP}" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="20" stroke-linecap="butt"/><path d="${STRAP}" fill="none" style="stroke:var(--c);transition:stroke .6s" stroke-width="17"/>
      <path d="${STRAP}" fill="none" stroke="url(#um-cylv)" stroke-width="17" opacity=".5"/>    ${stitch('M202 148 h17 v22 h-17Z M202 148 l17 22 M219 148 l-17 22', .24)}${stitch('M341 148 h17 v22 h-17Z M341 148 l17 22 M358 148 l-17 22', .24)}
      <g class="um-big">${MK(230, 222, 100, 'var(--m)')}</g>
      <g class="um-tg"><clipPath id="um-tbc"><path d="${TB}"/></clipPath><g clip-path="url(#um-tbc)">${TAGS.map((t) => { const w = t[0].length * 7.4 + 26;
        return `<g transform="translate(${t[1] + 10} ${t[2] + 10}) rotate(${t[3]})"><rect x="${-w / 2 + 2}" y="-13" width="${w}" height="30" rx="6" fill="#000" opacity=".12" filter="url(#um-b1)"/><rect x="${-w / 2}" y="-15" width="${w}" height="30" rx="6" fill="${t[4]}"/><text x="0" y="1" text-anchor="middle" dominant-baseline="middle" style="font:400 13px var(--font);fill:#2B3440">${t[0]}</text></g>`; }).join('')}</g></g>
    </g>`);
  
    /* ------------------------------------------------------------------ 15 Mug (rotation is driven in init) */
    const NB = 54;
    const mugSvg = SVGO('0 0 560 420', 'Ceramic mug: the mark on one side, a band of hairline bars on the other', `${sh(290, 372, 140, 17, .28)}
      <g class="um-mh"><path d="M0 150 C66 130 74 290 0 290" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="22"/><path d="M0 150 C66 130 74 290 0 290" fill="none" stroke="#FBFBFA" stroke-width="18"/><path d="M0 150 C66 130 74 290 0 290" fill="none" stroke="url(#um-cylv)" stroke-width="18"/></g>
      <clipPath id="um-mc"><path d="M160 110 V340 A100 22 0 0 0 360 340 V110Z"/></clipPath>
      <path d="M160 110 V340 A100 22 0 0 0 360 340 V110Z" fill="#FBFBFA"/>
      <g clip-path="url(#um-mc)"><g class="um-mm" transform="translate(260 0)"><g transform="translate(-35 -0)">${MK(0, 196, 70, '#000')}</g></g><g class="um-mb">${Array.from({ length: NB }, (_, i) => `<rect y="${(290 - 130 * wave(.23)(i)).toFixed(1)}" height="${(130 * wave(.23)(i)).toFixed(1)}" width="1.7" fill="#4FA3F2"/>`).join('')}</g>
      <rect x="160" y="110" width="200" height="270" fill="url(#um-cyl)"/></g>
      <path d="M160 110 V340 A100 22 0 0 0 360 340 V110" fill="none" stroke="#000" stroke-opacity=".14"/>
      <ellipse cx="260" cy="110" rx="100" ry="22" fill="#EFEDE8" stroke="#000" stroke-opacity=".16"/><ellipse cx="260" cy="113" rx="90" ry="18" fill="#D9D5CC"/><ellipse cx="256" cy="109" rx="86" ry="14" fill="#E9E6DF"/>`);
  
    /* ------------------------------------------------------------------ 16 Bottle */
    const BO = 'M246 100 H314 L318 128 Q340 148 340 178 V356 Q340 392 306 392 H254 Q220 392 220 356 V178 Q220 148 242 128Z';
    const bottleSvg = SVGO('0 0 560 440', 'Steel Layer water bottle with an engraved mark', `<ellipse cx="290" cy="404" rx="120" ry="14" fill="#A7B8CD" opacity=".35" filter="url(#um-b)"/>
      <g class="um-cap-b"><path d="M256 62 V34 Q256 28 262 28 H298 Q304 28 304 34 V62" fill="none" stroke="#111" stroke-width="7"/>
        <rect x="240" y="58" width="80" height="48" rx="9" fill="#101113"/><rect x="240" y="58" width="80" height="48" rx="9" fill="url(#um-cyl)"/>
        ${[70, 78, 86, 94].map((y) => `<path d="M241 ${y} H319" stroke="#fff" stroke-opacity=".1"/>`).join('')}</g>
      <clipPath id="um-bc"><path d="${BO}"/></clipPath><path d="${BO}" fill="url(#um-steelg)"/>
      <g clip-path="url(#um-bc)"><rect x="220" y="100" width="120" height="300" fill="url(#um-cyl)" opacity=".5"/><rect class="um-sheen" x="228" y="90" width="34" height="320" fill="#fff" opacity=".38" transform="skewX(-14)" filter="url(#um-b1)"/>
        <rect x="220" y="360" width="120" height="40" fill="#000" opacity=".14"/><path d="M220 176 H340" stroke="#000" stroke-opacity=".18"/><path d="M220 178 H340" stroke="#fff" stroke-opacity=".25"/>
        <g transform="translate(.9 1.1)" opacity=".7">${MK(253, 206, 54, '#fff')}</g>${MK(253, 206, 54, 'rgba(20,35,60,.55)')}
        <path d="M232 330 H328 M232 336 H328" stroke="#000" stroke-opacity=".16"/></g>
      <path d="${BO}" fill="none" stroke="#000" stroke-opacity=".25"/>`);
  
    /* ------------------------------------------------------------------ 17 Lanyard + badge */
    const lanSvg = SVGO('0 0 560 440', 'Lanyard with an ID badge showing the mark and the name David Clark', `<defs><path id="um-lp1" d="M278 176 L196 -10"/><path id="um-lp2" d="M284 176 L366 -10"/></defs>
      <path d="M196 -10 L277 180" stroke="#000" stroke-opacity=".25" stroke-width="26" transform="translate(6 6)" filter="url(#um-b1)"/><path d="M364 -10 L283 180" stroke="#000" stroke-opacity=".25" stroke-width="26" transform="translate(6 6)" filter="url(#um-b1)"/>
      <path d="M196 -10 L277 180" stroke="#0B0B0C" stroke-width="24"/><path d="M364 -10 L283 180" stroke="#0B0B0C" stroke-width="24"/>
      <path d="M196 -10 L277 180" stroke="#fff" stroke-opacity=".1" stroke-width="2" transform="translate(-9 0)"/>
      <text style="font:500 11px var(--font);letter-spacing:.08em;fill:#fff;white-space:pre" dy="3.8"><textPath href="#um-lp1" startOffset="8">Runo.      Runo.      Runo.      Runo.      Runo.</textPath></text>
      <text style="font:500 11px var(--font);letter-spacing:.08em;fill:#fff;white-space:pre" dy="3.8"><textPath href="#um-lp2" startOffset="8">Runo.      Runo.      Runo.      Runo.      Runo.</textPath></text>
      <g class="um-bw">
        <rect x="226" y="228" width="128" height="214" rx="16" fill="#1b2a42" opacity=".3" filter="url(#um-b)" transform="translate(14 16)"/>
        <path d="M268 184 V204 M292 184 V204" stroke="#B9C3D0" stroke-width="5" stroke-linecap="round"/>
        <rect x="262" y="172" width="36" height="20" rx="6" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/>
        <rect x="266" y="196" width="28" height="22" rx="5" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/>
        <clipPath id="um-bd"><rect x="216" y="214" width="128" height="214" rx="14"/></clipPath>
        <rect x="216" y="214" width="128" height="214" rx="14" fill="#fff"/>
        <g clip-path="url(#um-bd)"><rect x="216" y="214" width="128" height="104" fill="url(#um-skyg)"/>
          <g fill="none" stroke="#fff" stroke-opacity=".7" stroke-width=".8">${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="344" cy="214" r="${40 + i * 14}"/>`).join('')}</g>
          <rect x="216" y="214" width="128" height="214" fill="url(#um-lit)"/></g>
        <rect x="264" y="226" width="32" height="8" rx="4" fill="#4F6A8C" opacity=".55"/>
        ${MK(265, 250, 30, '#000')}
        <text x="280" y="352" text-anchor="middle" style="font:500 17px var(--font);fill:#0B0B0C;letter-spacing:-.01em">David Clark</text>
        <text x="280" y="371" text-anchor="middle" style="font:400 9px var(--font);fill:#6B7280;letter-spacing:.01em">Runo Finance</text>
        ${BARS(234, 388, 92, 26, { n: 30, color: '#4FA3F2', color2: '#BAD5F3', heights: wave(.4), label: 'Hairline bars' })}
        <rect x="216" y="214" width="128" height="214" rx="14" fill="none" stroke="#000" stroke-opacity=".12"/>
      </g>`);
  
    /* ------------------------------------------------------------------ 18 Pins + coin */
    const ring = (n, cx, cy, r0, dr, stroke, o) => Array.from({ length: n }, (_, i) => `<circle cx="${cx}" cy="${cy}" r="${r0 + i * dr}" fill="none" stroke="${stroke}" stroke-opacity="${o}" stroke-width=".8"/>`).join('');
    /* cast coin seen at a tilt, as in the case study: raised rim, reeded edge with real thickness, embossed mark */
    const coin = () => {
      const RX = 106, RY = 68, T = 16, N = 96;
      let reed = '';
      for (let i = 1; i < N; i++) { const a = Math.PI * i / N, x = RX * Math.cos(a), y = RY * Math.sin(a);
        reed += `<path d="M${x.toFixed(1)} ${(y + 1).toFixed(1)}v${T - 1}" stroke="${i % 2 ? '#fff' : '#6E634E'}" stroke-opacity="${i % 2 ? .35 : .4}" stroke-width=".9"/>`; }
      const sq = (RY / RX).toFixed(3);
      return `<ellipse cx="22" cy="${RY + 60}" rx="${RX}" ry="${RY * .6}" fill="#1b2a42" opacity=".26" filter="url(#um-b)"/>
        <path d="M${-RX} 0 A${RX} ${RY} 0 0 0 ${RX} 0 V${T} A${RX} ${RY} 0 0 1 ${-RX} ${T}Z" fill="#AFA593"/>
        <path d="M${-RX} 0 A${RX} ${RY} 0 0 0 ${RX} 0 V${T} A${RX} ${RY} 0 0 1 ${-RX} ${T}Z" fill="url(#um-cyl)"/>${reed}
        <ellipse rx="${RX}" ry="${RY}" fill="url(#um-coin)"/>
        <ellipse rx="${RX - 9}" ry="${RY - 6}" fill="#000" opacity=".05"/>
        <ellipse rx="${RX - 9}" ry="${RY - 6}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" transform="translate(1 1)"/>
        <ellipse rx="${RX - 9}" ry="${RY - 6}" fill="none" stroke="#7D735F" stroke-opacity=".45" stroke-width="1.2" transform="translate(-.6 -.6)"/>
        <ellipse rx="${RX - .5}" ry="${RY - .5}" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
        <g transform="scale(1 ${sq})"><g transform="translate(-2.2 -2.6)" opacity=".85">${MK(-44, -44, 88, '#fff')}</g><g transform="translate(2.6 3.4)" opacity=".42">${MK(-44, -44, 88, '#5E5442')}</g>${MK(-44, -44, 88, '#D5CDBE')}</g>
        <ellipse rx="${RX}" ry="${RY}" fill="url(#um-lit)" opacity=".8"/>`;
    };
    const pinSvg = SVGO('0 0 560 420', 'Enamel pin with the mark, a blue disc badge and a sand coin embossed with the mark', `
      <g class="um-p1" style="transform-origin:130px 130px"><g transform="translate(130 124) rotate(-8)">
        <rect x="-40" y="-34" width="104" height="104" rx="26" fill="#1b2a42" opacity=".3" filter="url(#um-b2)"/>
        <rect x="-50" y="-50" width="100" height="100" rx="26" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/>
        <rect x="-43" y="-43" width="86" height="86" rx="20" fill="#FAFAFA" stroke="#000" stroke-opacity=".14"/>
        ${MK(-24, -24, 48, '#000')}<rect x="-50" y="-50" width="100" height="100" rx="26" fill="url(#um-lit)"/></g></g>
      <g class="um-p2" style="transform-origin:180px 316px"><g transform="translate(184 316)">
        <circle cx="12" cy="16" r="58" fill="#1b2a42" opacity=".3" filter="url(#um-b2)"/>
        <circle r="58" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/><circle r="51" fill="url(#um-bdisc)" stroke="#000" stroke-opacity=".12"/>
        ${ring(6, 0, 0, 12, 7.5, '#fff', .75)}<text y="7" text-anchor="middle" style="font:500 19px var(--font);fill:#16304D">Runo.</text>
        <circle r="58" fill="url(#um-lit)"/></g></g>
      <g class="um-p3" style="transform-origin:372px 224px"><g transform="translate(372 226) rotate(-16)">${coin()}</g></g>`);
  
    /* ------------------------------------------------------------------ 19 Pen + pencil + tin */
    const penSvg = SVGO('0 0 560 420', 'Pen and pencil with a steel tin', `<rect x="130" y="276" width="320" height="150" rx="16" fill="#1b2a42" opacity=".3" filter="url(#um-b)" transform="translate(12 16)"/>
      <rect x="120" y="262" width="320" height="150" rx="16" fill="url(#um-steelg)" stroke="#000" stroke-opacity=".22"/><rect x="120" y="262" width="320" height="150" rx="16" fill="url(#um-lit)"/>
      <rect x="132" y="274" width="296" height="126" rx="10" fill="none" stroke="#fff" stroke-opacity=".5"/><rect x="133" y="275" width="296" height="126" rx="10" fill="none" stroke="#000" stroke-opacity=".14"/>
      <g transform="translate(.9 1.1)" opacity=".7">${MK(255, 292, 50, '#fff')}</g>${MK(255, 292, 50, 'rgba(25,40,65,.5)')}
      ${BARS(164, 364, 232, 26, { n: 70, color: '#27425F', color2: '#27425F', fade: false, heights: wave(.3), w: 1.1 })}
      <g class="um-pen"><rect x="2" y="8" width="338" height="18" rx="9" fill="#000" opacity=".28" filter="url(#um-b2)"/>
        <rect x="0" y="0" width="300" height="17" rx="8.5" fill="#0B0B0C"/><rect x="0" y="0" width="300" height="17" rx="8.5" fill="url(#um-cylv)"/>
        <rect x="0" y="0" width="22" height="17" rx="8" fill="url(#um-silver)"/><path d="M300 0 L346 8.5 L300 17Z" fill="url(#um-silver)"/><path d="M336 6 L352 8.5 L336 11Z" fill="#333"/>
        <rect x="40" y="-3.5" width="96" height="4" rx="2" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/><text x="170" y="11.5" style="font:500 7.5px var(--font);letter-spacing:.04em;fill:#fff;opacity:.85">Runo.</text></g>
      <g class="um-pcl"><rect x="2" y="8" width="320" height="19" rx="3" fill="#000" opacity=".26" filter="url(#um-b2)"/>
        <rect x="0" y="0" width="276" height="19" fill="#BAD5F3"/><rect x="0" y="0" width="276" height="6.5" fill="#fff" opacity=".4"/><rect x="0" y="12.5" width="276" height="6.5" fill="#27425F" opacity=".28"/>
        <path d="M276 0 L318 9.5 L276 19Z" fill="#E7D4B5"/><path d="M276 19 L318 9.5 L312 12.5 L276 19Z" fill="#000" opacity=".12"/><path d="M304 6 L322 9.5 L304 13Z" fill="#2B2F36"/>
        <rect x="-8" y="0" width="8" height="19" fill="url(#um-silver)"/><rect x="-24" y="1" width="16" height="17" rx="5" fill="#111"/>
        <text x="70" y="13" style="font:500 8px var(--font);letter-spacing:.04em;fill:#16304D">Runo.</text></g>`);
  
    /* ------------------------------------------------------------------ 20 Welcome kit */
    const boxSvg = SVGO('0 0 760 440', 'Open welcome kit box from above with a sleeve, a card, a notebook and a pin', `${sh(386, 410, 330, 20, .3)}
      <rect x="130" y="34" width="500" height="372" rx="16" fill="#111214"/><rect x="130" y="34" width="500" height="372" rx="16" fill="url(#um-lit)"/>
      <rect x="144" y="48" width="472" height="344" rx="8" fill="#F4F2EC"/><rect x="144" y="48" width="472" height="344" rx="8" fill="#000" opacity=".1" filter="url(#um-b2)"/>
      <rect x="144" y="48" width="472" height="344" rx="8" fill="#EFEDE6"/>
      <g class="um-nb" style="transform-origin:230px 220px"><rect x="170" y="70" width="150" height="300" rx="8" fill="#000" opacity=".3" filter="url(#um-b2)" transform="translate(6 8)"/>
        <rect x="164" y="64" width="150" height="300" rx="8" fill="#A7B8CD"/><rect x="164" y="64" width="150" height="300" rx="8" fill="url(#um-lit)"/><rect x="164" y="64" width="12" height="300" fill="#000" opacity=".14"/>
        <rect x="276" y="64" width="12" height="300" fill="#0B0B0C"/>${MK(204, 96, 44, '#000')}${stitch('M184 76 H306 V352 H184Z', .3)}</g>
      <rect x="344" y="66" width="248" height="164" rx="8" fill="#000" opacity=".12"/><rect x="346" y="68" width="244" height="160" rx="6" fill="#E1DED5"/><rect x="346" y="68" width="244" height="14" fill="#000" opacity=".08"/>
      <g transform="translate(362 82) rotate(-3)"><rect x="4" y="8" width="208" height="130" rx="12" fill="#000" opacity=".3" filter="url(#um-b2)"/>${R.card('ice').replace('<svg ', '<svg x="0" y="0" width="208" height="130" ')}</g>
      <rect x="344" y="248" width="248" height="124" rx="6" fill="#000" opacity=".25" filter="url(#um-b2)" transform="translate(5 7)"/>
      <rect x="344" y="248" width="248" height="124" rx="6" fill="#fff"/><rect x="344" y="248" width="86" height="124" rx="6" fill="url(#um-skyg)"/>${MK(373, 288, 28, '#000')}
      <text x="450" y="296" style="font:500 15px var(--font);fill:#0B0B0C">Runo Finance</text><text x="450" y="314" style="font:400 10.5px var(--font);fill:#6B7280">runo.finance</text>
      ${BARS(450, 334, 126, 22, { n: 36, color: '#4FA3F2', color2: '#BAD5F3', heights: wave(.45) })}
      <g transform="translate(556 262) rotate(8)"><circle cx="2" cy="4" r="13" fill="#000" opacity=".3" filter="url(#um-b1)"/><circle r="13" fill="url(#um-silver)" stroke="#000" stroke-opacity=".2"/><circle r="10" fill="#fff"/>${MK(-6, -6, 12, '#000')}</g>
      <g class="um-lid"><rect x="144" y="50" width="500" height="372" rx="16" fill="#000" opacity=".4" filter="url(#um-b)" transform="translate(12 16)"/>
        <rect x="130" y="34" width="500" height="372" rx="16" fill="#0B0B0C" stroke="#fff" stroke-opacity=".08"/><rect x="130" y="34" width="500" height="372" rx="16" fill="url(#um-lit)"/>
        ${MK(340, 150, 80, '#fff')}<text x="380" y="300" text-anchor="middle" style="font:500 15px var(--font);fill:#fff;letter-spacing:.02em">Runo Finance</text></g>`);
  
    /* ------------------------------------------------------------------ tile table */
    const T = [
      { n: 11, name: 'T-shirt', spec: 'Heavy cotton · 1-colour screen print', surf: 's-sand', wide: 1, svg: teeSvg, col: 'black', pill: ['Back print', 'back'] },
      { n: 12, name: 'Hoodie', spec: 'Brushed fleece · Embroidery and sleeve print', surf: 'sky', svg: hoodSvg, col: 'sand' },
      { n: 13, name: 'Cap', spec: 'Cotton twill · 3D embroidery', surf: 's-blue', svg: capSvg, col: 'white', tilt: 1 },
      { n: 14, name: 'Tote bag', spec: 'Heavy cotton canvas · Screen print', surf: 's-page', svg: toteSvg, col: 'sand', pill: ['Feature tags', 'tags'] },
      { n: 15, name: 'Ceramic mug', spec: 'Glazed ceramic, 330 ml · Wrap-around print', surf: 'mist', svg: mugSvg, mug: 1 },
      { n: 16, name: 'Water bottle', spec: 'Stainless steel, 500 ml · Laser engraving', surf: 's-black', svg: bottleSvg },
      { n: 17, name: 'Lanyard and ID badge', spec: 'Woven polyester · Offset-printed card', surf: 'steel-grad', svg: lanSvg },
      { n: 18, name: 'Enamel pins and embossed coin', spec: 'Hard enamel · Cast coin, embossed', surf: 'sky', svg: pinSvg, tilt: 1 },
      { n: 19, name: 'Pen and pencil set', spec: 'Anodised aluminium, wood · Tin with debossed mark', surf: 's-sand', svg: penSvg },
      { n: 20, name: 'Welcome kit box', spec: 'Rigid box with sliding lid · Card, notebook, pin', surf: 'mist', wide: 1, svg: boxSvg, tilt: 1, box: 1 },
    ];
    const HINT = 'Hover, focus or press Enter';
    $('#um-grid').innerHTML = T.map((t, i) => `<article class="card um-tile${t.wide ? ' um-w' : ''}" data-reveal data-delay="${(i % 2) * 90}">
      <div class="um-stage ${t.surf}" tabindex="0" role="group" aria-label="${t.name}. ${HINT} to animate." data-i="${i}" style="--c:${t.col ? COL[t.col][1] : '#fff'};--m:${t.col ? COL[t.col][2] : '#000'}">
        <div class="um-obj">${t.svg}</div><div class="um-ctl">${t.col ? `<div class="um-sw" role="group" aria-label="${t.name} colourway">${Object.keys(COL).map((k) => `<button type="button" class="um-dot" data-k="${k}" aria-pressed="${k === t.col}" aria-label="${COL[k][0]}" title="${COL[k][0]}" style="--s:${COL[k][1]}"></button>`).join('')}</div><span class="um-sn" aria-live="polite">${COL[t.col][0]}</span>` : ''}
        ${t.pill ? `<button type="button" class="um-pill" data-p="${t.pill[1]}" aria-pressed="${t.pill[1] === 'back'}">${t.pill[0]}</button>` : ''}<span class="um-hint">${HINT}</span></div>
      </div>
      <div class="um-cap"><span class="um-num">${t.n}</span><h2>${t.name}</h2><p>${t.spec}</p></div></article>`).join('');
  
  
    /* ------------------------------------------------------------------ interactions */
    const mugInit = (st) => {
      const mm = $('.um-mm', st), mb = $$('.um-mb rect', st), mh = $('.um-mh', st), Rr = 100, cx = 260;
      let th = 0, tg = 0, raf = 0;
      const draw = () => {
        const c = Math.cos(th), s = Math.sin(th);
        mm.setAttribute('transform', `translate(${cx + Rr * s} 0) scale(${Math.max(c, 0.001)} 1)`); mm.style.display = c > .02 ? '' : 'none';
        mb.forEach((r, i) => { const a = Math.PI + (i / (NB - 1) - .5) * Math.PI * .92 + th, cc = Math.cos(a);
          if (cc < .04) { r.style.display = 'none'; return; } r.style.display = ''; r.setAttribute('x', (cx + Rr * Math.sin(a) - .85 * cc).toFixed(2)); r.setAttribute('width', (1.7 * cc).toFixed(2)); r.setAttribute('opacity', (.35 + .65 * cc).toFixed(2)); });
        const ha = Math.PI / 2 + th, hs = Math.sin(ha);
        mh.setAttribute('transform', `translate(${cx + Rr * hs} 0) scale(${hs.toFixed(3)} 1)`);
      };
      const tick = () => { th += (tg - th) * .1; if (Math.abs(tg - th) < .003) { th = tg; draw(); raf = 0; return; } draw(); raf = requestAnimationFrame(tick); };
      draw();
      return (on) => { tg = on ? Math.PI : 0; if (R.reduce) { th = tg; draw(); } else if (!raf) raf = requestAnimationFrame(tick); };
    };
  
    $$('.um-stage').forEach((st) => {
      const t = T[+st.dataset.i], obj = $('.um-obj', st);
      let hov = 0, foc = 0, pin = 0, cur = 0, setMug = t.mug ? mugInit(st) : null;
      const upd = () => { const v = !!(hov || foc || pin); if (v === cur) return; cur = v; st.classList.toggle('is-on', v); setMug && setMug(v); };
      st.addEventListener('pointerenter', () => { hov = 1; upd(); });
      st.addEventListener('pointerleave', () => { hov = 0; upd(); obj.style.removeProperty('--rx'); obj.style.removeProperty('--ry'); st.classList.remove('tilting'); });
      st.addEventListener('focusin', () => { foc = 1; upd(); });
      st.addEventListener('focusout', (e) => { if (!st.contains(e.relatedTarget)) { foc = 0; upd(); } });
      st.addEventListener('keydown', (e) => { if (e.target === st && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pin = pin ? 0 : 1; upd(); } });
      if (t.tilt && !R.reduce) st.addEventListener('pointermove', (e) => {
        if (e.pointerType === 'touch') return; const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        st.classList.add('tilting'); obj.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg'); obj.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg'); });
      $$('.um-dot', st).forEach((b) => b.addEventListener('click', () => {
        const c = COL[b.dataset.k]; st.style.setProperty('--c', c[1]); st.style.setProperty('--m', c[2]);
        $$('.um-dot', st).forEach((o) => o.setAttribute('aria-pressed', o === b)); $('.um-sn', st).textContent = c[0]; }));
      $$('.um-pill', st).forEach((b) => b.addEventListener('click', () => {
        const p = b.dataset.p, on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
        if (p === 'back') st.classList.toggle('m-off', !on); else st.classList.toggle('m-tags', on); }));
    });
  });
}
