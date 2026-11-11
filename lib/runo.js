// Runo shared runtime for the browser: motion helpers and brand components used by every page.
// Ported from the single-file site's base.js. The hash router and dock moved to Next.js
// (app/[slug], components/Dock.jsx); what remains is the page lifecycle: mountPage() / its cleanup.
import { PAGES } from './pages';

let R = null;
let live = null; // state of the page that is mounted right now
let navigate = (href) => { window.location.href = href; };

/** Tell the runtime how to change route (the Next.js router). */
export function setNavigate(fn) { navigate = fn; }

/** Timers and listeners a page creates, so they can all be released when it unmounts. */
function makeEnv() {
  const timeouts = new Set(), intervals = new Set(), frames = new Set(), offs = [];
  let dead = false;
  const env = {
    setTimeout: (fn, ms, ...a) => { const id = window.setTimeout((...x) => { timeouts.delete(id); if (!dead) fn(...x); }, ms, ...a); timeouts.add(id); return id; },
    setInterval: (fn, ms, ...a) => { const id = window.setInterval((...x) => { if (!dead) fn(...x); }, ms, ...a); intervals.add(id); return id; },
    requestAnimationFrame: (fn) => { const id = window.requestAnimationFrame((t) => { frames.delete(id); if (!dead) fn(t); }); frames.add(id); return id; },
    on: (target, type, fn, opts) => { target.addEventListener(type, fn, opts); offs.push(() => target.removeEventListener(type, fn, opts)); },
    addEventListener: (type, fn, opts) => env.on(window, type, fn, opts),
    destroy: () => {
      dead = true;
      timeouts.forEach((id) => window.clearTimeout(id)); intervals.forEach((id) => window.clearInterval(id)); frames.forEach((id) => window.cancelAnimationFrame(id));
      offs.forEach((off) => off());
    },
  };
  return env;
}

/** Scroll-reveal / count-up / typewriter / bar wiring for one mounted page. */
function makeObservers() {
  const pending = new Set();
  const fire = (el) => {
    if (!pending.has(el)) return; pending.delete(el); io.unobserve(el);
    if (el.hasAttribute('data-reveal')) { if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay + 'ms'); el.classList.add('in'); }
    if (el.hasAttribute('data-count')) R.count(el);
    if (el.hasAttribute('data-type')) R.type(el);
    if (el.classList.contains('rbars')) el.classList.add('in');
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) fire(e.target); }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  // Fallback: IntersectionObserver can stay silent (background tab, print) — sweep by geometry so content never stays hidden.
  let queued = 0, timers = [];
  const sweep = () => { queued = 0; const vh = window.innerHeight; pending.forEach((el) => { const r = el.getBoundingClientRect(); if (r.width && r.top < vh * 0.96 && r.bottom > 0) fire(el); }); };
  return {
    sweepSoon: () => { if (!queued) queued = window.setTimeout(sweep, 80); },
    scan: (root) => {
      R.$$('[data-reveal],[data-count],[data-type],.rbars', root).forEach((el) => { if (!el.__o) { el.__o = 1; pending.add(el); io.observe(el); } });
      timers.push(window.setTimeout(sweep, 250), window.setTimeout(sweep, 900));
    },
    destroy: () => { io.disconnect(); pending.clear(); window.clearTimeout(queued); timers.forEach((t) => window.clearTimeout(t)); },
  };
}

/** The global `Runo` object the page scripts use. Created once, in the browser. */
export function getRuno() {
  if (R) return R;
  R = window.Runo = { pages: {} };
  R.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  R.$ = (s, r = document) => r.querySelector(s);
  R.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  R.PAGES = PAGES;

  /** Register a page initialiser. root = the page <section>. */
  R.page = (id, fn) => { R.pages[id] = fn; };
  R.go = (id) => navigate('/' + id);
  const step = (d) => { const i = PAGES.indexOf(R.current); R.go(PAGES[(i + d + PAGES.length) % PAGES.length].id); };
  R.next = () => step(1); R.prev = () => step(-1);
  R.icon = (name, cls = 'icon') => `<svg class="${cls}" aria-hidden="true" viewBox="0 0 16 16"><use href="#i-${name}"/></svg>`;
  R.mark = (cls = 'mark') => `<svg class="${cls}" viewBox="0 0 362 360" aria-hidden="true"><use href="#runo-mark"/></svg>`;
  R.fmt = (v, d = 0) => Number(v).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  let uid = 0; R.uid = (p = 'u') => p + (++uid);

  /* ---------- toast / clipboard ---------- */
  let toastT;
  R.toast = (msg) => {
    const t = R.$('#toast'); if (!t) return; t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600);
  };
  R.copy = (text) => { try { navigator.clipboard.writeText(text); } catch (e) {} R.toast('Copied ' + text); };

  /* ---------- count-up: <span data-count="92345.67" data-decimals="2" data-prefix="$" data-suffix=""> ---------- */
  R.count = (el) => {
    const to = parseFloat(el.dataset.count), d = +(el.dataset.decimals || 0), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    const from = parseFloat(el.dataset.from || 0);
    if (R.reduce) { el.textContent = pre + R.fmt(to, d) + suf; return; }
    const t0 = performance.now(), dur = +(el.dataset.dur || 1400);
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      el.textContent = pre + R.fmt(from + (to - from) * e, d) + suf;
      if (p < 1 && el.isConnected) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  /* ---------- typewriter: <span data-type="A|B|C" data-loop> (types A, then B… ) ---------- */
  R.type = (el) => {
    const list = el.dataset.type.split('|'); el.classList.add('caret'); el.setAttribute('aria-label', list[0]);
    if (R.reduce) { el.textContent = list[0]; return; }
    let i = 0;
    const run = () => {
      const s = list[i % list.length]; let k = 0; el.textContent = '';
      const next = () => {
        if (!el.isConnected) return;
        el.textContent = s.slice(0, ++k);
        if (k < s.length) setTimeout(next, 38 + Math.random() * 50);
        else if (el.hasAttribute('data-loop')) setTimeout(() => { i++; run(); }, 2200);
      };
      next();
    };
    run();
  };

  /* ---------- hairline bars (the Runo chart signature) ----------
     R.bars(el,{n:70,h:48,color:'#5AA9F5', color2:'#BAD5F3', heights:(i,n)=>0..1, w:1.4, gap:4, fade:true}) */
  R.bars = (el, o = {}) => {
    const n = o.n || 70, h = o.h || 48, gap = o.gap || 4, w = o.w || 1.4, id = R.uid('bg');
    const hs = o.heights || (() => 1);
    let rects = '';
    for (let i = 0; i < n; i++) {
      const hh = Math.max(0.04, hs(i, n)) * h;
      const c = typeof o.color === 'function' ? o.color(i, n) : `url(#${id})`;
      rects += `<rect style="--i:${i}" x="${i * gap}" y="${(h - hh).toFixed(1)}" width="${w}" height="${hh.toFixed(1)}" fill="${c}"/>`;
    }
    el.innerHTML = `<svg class="rbars" viewBox="0 0 ${n * gap} ${h}" preserveAspectRatio="none" width="100%" height="${o.px || h}" role="img" aria-label="${o.label || 'Bar chart'}">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${o.color || '#4FA3F2'}"/><stop offset="1" stop-color="${o.color2 || o.color || '#BAD5F3'}" stop-opacity="${o.fade === false ? 1 : .35}"/></linearGradient></defs>${rects}</svg>`;
    return el.firstElementChild;
  };

  /* ---------- Copilot orb (animated SVG). R.orb(el, 220) ---------- */
  R.orb = (el, size = 220) => {
    const u = R.uid('orb');
    el.innerHTML = `<svg viewBox="0 0 200 200" width="${size}" height="${size}" role="img" aria-label="Runo Copilot orb" style="overflow:visible">
      <defs>
        <radialGradient id="${u}c" cx=".5" cy=".62" r=".5"><stop offset="0" stop-color="#2E6FD3"/><stop offset=".55" stop-color="#5E9BE8"/><stop offset="1" stop-color="#BAD5F3" stop-opacity="0"/></radialGradient>
        <radialGradient id="${u}o" cx=".5" cy=".2" r=".5"><stop offset="0" stop-color="#F9B98C"/><stop offset=".6" stop-color="#F6C9A5" stop-opacity=".55"/><stop offset="1" stop-color="#F6C9A5" stop-opacity="0"/></radialGradient>
        <radialGradient id="${u}g" cx=".4" cy=".3" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".5" stop-color="#EAF2FC" stop-opacity=".55"/><stop offset="1" stop-color="#CFE0F6" stop-opacity=".2"/></radialGradient>
        <pattern id="${u}d" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".55" fill="#fff" opacity=".7"/></pattern>
        <clipPath id="${u}k"><circle cx="100" cy="104" r="46"/></clipPath>
        <filter id="${u}b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2"/></filter>
      </defs>
      <g style="transform-origin:100px 100px;animation:floaty 6s ease-in-out infinite">
        <g filter="url(#${u}b)" opacity=".9">
          <path fill="url(#${u}g)" style="transform-origin:100px 100px;animation:spin 26s linear infinite" d="M100 14c26-4 44 10 58 26s28 34 22 58-14 46-36 58-46 22-70 12-44-22-52-48-4-52 14-72 40-30 64-34z"/>
          <path fill="#fff" opacity=".35" style="transform-origin:100px 100px;animation:spin 38s linear infinite reverse" d="M96 22c30-8 54 12 64 34s14 52-4 72-44 34-70 26-48-28-52-56 6-48 24-62 24-10 38-14z"/>
        </g>
        <circle cx="100" cy="104" r="50" fill="url(#${u}c)"/>
        <g clip-path="url(#${u}k)"><circle cx="100" cy="78" r="44" fill="url(#${u}o)"/><rect x="50" y="54" width="100" height="100" fill="url(#${u}d)"/></g>
        <path fill="none" stroke="#fff" stroke-opacity=".8" stroke-width=".8" style="transform-origin:100px 100px;animation:spin 30s linear infinite" d="M100 16c26-4 44 10 58 26s26 34 20 58-14 44-36 56-44 20-68 10-42-22-50-46-4-50 14-70 38-30 62-34z"/>
        <ellipse cx="78" cy="56" rx="22" ry="9" fill="#fff" opacity=".5" transform="rotate(-24 78 56)" filter="url(#${u}b)"/>
      </g></svg>`;
  };

  /* ---------- Runo card (SVG). R.card('sage'|'ice'|'blue') -> svg string, 320x200 ---------- */
  R.card = (v = 'sage') => {
    const u = R.uid('cd');
    const P = { sage: ['#D5DAD0', '#AEB7AB', '#fff', .55], ice: ['#EEF3FB', '#D3E0F5', '#fff', .9], blue: ['#86ABD6', '#5C88BB', '#fff', .35] }[v];
    let lines = '';
    for (let i = 0; i < 9; i++) lines += `<path d="M${120 + i * 9} 210 V${150 - i * 4} a${40 + i * 6} ${40 + i * 6} 0 0 1 ${40 + i * 6}-${40 + i * 6} H340" />`;
    for (let i = 0; i < 6; i++) lines += `<path d="M-10 ${150 + i * 9} H${60 + i * 6} l${70 - i * 4}-${120 - i * 6}" />`;
    return `<svg viewBox="0 0 320 200" class="runo-card" role="img" aria-label="Runo payment card">
      <defs><linearGradient id="${u}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${P[0]}"/><stop offset="1" stop-color="${P[1]}"/></linearGradient>
      <clipPath id="${u}c"><rect width="320" height="200" rx="16"/></clipPath></defs>
      <g clip-path="url(#${u}c)"><rect width="320" height="200" fill="url(#${u}g)"/>
      <g fill="none" stroke="${P[2]}" stroke-opacity="${P[3]}" stroke-width=".8">${lines}</g>
      <rect width="320" height="1.2" fill="#fff" opacity=".6"/></g>
      <g transform="translate(34 78)"><rect width="40" height="30" rx="6" fill="${v === 'blue' ? '#3B4A5E' : '#EDE6D6'}" stroke="rgba(0,0,0,.18)" stroke-width=".6"/>
        <path d="M0 10h13M0 20h13M27 10h13M27 20h13M13 0v30M27 0v30" stroke="rgba(0,0,0,.22)" stroke-width=".6" fill="none"/></g>
      <svg x="262" y="22" width="30" height="30" viewBox="0 0 362 360" fill="#fff" opacity=".8"><use href="#runo-mark"/></svg>
      <circle cx="262" cy="160" r="13" fill="#8C9197" opacity=".9"/><circle cx="279" cy="160" r="13" fill="#DADDE1" opacity=".85"/>
      <text x="270" y="186" text-anchor="middle" font-size="7" fill="${v === 'ice' ? '#7C8794' : '#fff'}" opacity=".85" font-family="inherit">mastercard</text></svg>`;
  };

  /** Call after injecting new markup so reveal / count / type / bars get wired. */
  R.scan = (root = document) => { if (live) live.observers.scan(root); };
  R.sweep = () => { if (live) live.observers.sweepSoon(); };
  window.addEventListener('scroll', R.sweep, { passive: true });
  window.addEventListener('resize', R.sweep);
  return R;
}

/* ---------- landing chrome (rendered into [data-lp-nav] / [data-lp-footer]) ---------- */
function lpNav(el, env) {
  const dark = el.dataset.lpNav === 'dark', cur = el.dataset.current || '';
  const a = (id, label) => `<a href="/${id}"${cur === id ? ' aria-current="page"' : ''}>${label}</a>`;
  el.innerHTML = `<nav class="lp-nav${dark ? ' dark' : ''}" aria-label="Runo website">
    <a href="/lp-home" aria-label="Runo home">${R.mark()}</a>
    <div class="lp-links">
      <div class="lp-drop"><button type="button" aria-expanded="false" aria-haspopup="true">Product ${R.icon('caret')}</button>
        <div class="lp-menu">${a('lp-home', 'Overview')}${a('lp-cashflow', 'Cash Flow')}${a('lp-global', 'Payments')}${a('lp-copilot', 'AI Copilot')}${a('lp-cards', 'Cards &amp; accounts')}</div></div>
      ${a('lp-solutions', 'Solutions')}${a('lp-pricing', 'Pricing')}<a href="/lp-home">Resources</a>
    </div>
    <div class="lp-right"><a href="/lp-pricing">Talk to sales</a><a class="btn btn-pill" href="/lp-cards">Get started</a></div></nav>`;
  const d = R.$('.lp-drop', el), b = R.$('button', d);
  const set = (v) => { d.classList.toggle('open', v); b.setAttribute('aria-expanded', v); };
  b.addEventListener('click', (e) => { e.stopPropagation(); set(!d.classList.contains('open')); });
  d.addEventListener('mouseenter', () => set(true)); d.addEventListener('mouseleave', () => set(false));
  env.on(document, 'click', () => set(false));
  d.addEventListener('keydown', (e) => { if (e.key === 'Escape') { set(false); b.focus(); } });
}
function lpFooter(el) {
  const col = (h, items) => `<h3>${h}</h3><ul>${items.map(([t, id]) => `<li><a href="/${id}">${t}</a></li>`).join('')}</ul>`;
  el.innerHTML = `<footer class="lp-footer"><div class="lp-footer-grid">
    <div class="lp-footer-brand"><div class="wordmark">Runo.</div>
      <div><div style="display:flex;gap:10px;margin-bottom:18px;color:#fff">
        <a href="/social" aria-label="Instagram" style="color:#fff">${R.icon('ig')}</a><a href="/social" aria-label="X" style="color:#fff">${R.icon('x')}</a><a href="/social" aria-label="LinkedIn" style="color:#fff">${R.icon('in')}</a></div>
        <p class="ft">Contact:</p><p class="ft">1800 123 4567</p><p class="ft">hello@runo.finance</p></div></div>
    <div>${col('Product', [['Overview', 'lp-home'], ['Cash Flow', 'lp-cashflow'], ['Payments', 'lp-global'], ['AI Copilot', 'lp-copilot']])}
      <div style="height:32px"></div>${col('Solutions', [['Startups &amp; scale-ups', 'lp-solutions'], ['Finance teams', 'lp-solutions'], ['Founders &amp; operators', 'lp-solutions'], ['Multi-account teams', 'lp-solutions']])}</div>
    <div>${col('Pricing', [['Plans', 'lp-pricing'], ['Enterprise', 'lp-pricing']])}
      <div style="height:32px"></div>${col('Resources', [['Blog', 'lp-home'], ['Documentation', 'lp-home'], ['Help center', 'lp-home'], ['Status', 'lp-home']])}</div>
    </div><div class="lp-footer-bar"><span class="ft">© 2026 Runo. All rights reserved.</span>
    <nav aria-label="Legal"><a href="/lp-home">Privacy Policy</a><a href="/lp-home">Terms of Service</a><a href="/lp-home">Cookies Settings</a></nav></div></footer>`;
}

/**
 * Bring one page to life: shared components, the page's own behaviour, scroll observers.
 * `register` is the default export of content/scripts/<id>.js. Returns the cleanup function.
 */
export function mountPage(id, root, register) {
  getRuno();
  if (live) live.destroy();
  const env = makeEnv(), observers = makeObservers();
  const state = { id, env, observers, destroy: () => { env.destroy(); observers.destroy(); if (live === state) live = null; } };
  live = state;
  R.current = PAGES.find((p) => p.id === id);
  R.$$('[data-lp-nav]', root).forEach((el) => lpNav(el, env));
  R.$$('[data-lp-footer]', root).forEach(lpFooter);
  R.$$('[data-orb]', root).forEach((el) => R.orb(el, +el.dataset.orb || 220));
  R.$$('[data-card]', root).forEach((el) => { el.innerHTML = R.card(el.dataset.card); });
  try { register(R, env); if (R.pages[id]) R.pages[id](root); } catch (err) { console.error('Runo page init failed: ' + id, err); }
  observers.scan(root);
  const h = R.$('h1', root); if (h) h.setAttribute('tabindex', '-1');
  return state.destroy;
}
