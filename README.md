# Runo brand site (Next.js)

The Runo brand-kit site as a Next.js app: 18 pages, from logo and brand kit to dashboard, mobile app, landing
pages and the brand in use. It is a port of the single-file site (`runo.html`): same markup, styles, artwork and
behaviour, with real routes instead of a hash router.

- Next.js 16 (App Router), React 19, plain JavaScript. No other dependencies.
- Every page is static. `next build` writes plain HTML/CSS/JS to `out/`, so it can be hosted anywhere.
- All artwork is inline SVG and CSS. There are no image files.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static export to ./out
npm run preview    # serves ./out on http://localhost:4174
```

Deploying to Vercel needs no settings: import the repo and deploy.

## Routes

`/` is the overview. Every other page is `/<id>`:

`overview` `logo` `brand-kit` `strategy` `social` `use-print` `use-merch` `use-world` `dashboard` `mobile`
`copilot` `lp-home` `lp-cashflow` `lp-copilot` `lp-solutions` `lp-pricing` `lp-global` `lp-cards`

The list, titles, groups and presenter order live in `lib/pages.js`.

## How it is put together

| Path | What it is |
|---|---|
| `app/layout.jsx` | Root layout: font, SVG sprite, skip link, dock, link interceptor |
| `app/page.jsx`, `app/[slug]/page.jsx` | The routes. Both render `<RunoPage id>`; `[slug]` is statically generated for every page |
| `app/globals.css` | The shared design system: tokens, type, buttons, cards, device frames, motion utilities |
| `components/RunoPage.jsx` | Server component. Reads `content/pages/<id>.html` and renders it into the HTML at build time |
| `components/PageRuntime.jsx` | Client component. Lazy-loads the page's behaviour and mounts / unmounts it |
| `components/Dock.jsx` | Presenter dock (previous, next, index), index overlay, toast. Shift+Left / Shift+Right also step |
| `components/LinkInterceptor.jsx` | Sends plain `<a href="/page">` clicks inside page markup through the Next.js router |
| `lib/runo.js` | Browser runtime: the global `Runo` helpers (reveal, count-up, typewriter, bar charts, orb, payment card, landing nav and footer) and the page lifecycle |
| `content/pages/<id>.html` | One page's markup with its scoped `<style>` (every selector starts with `#p-<id>`) |
| `content/scripts/<id>.js` | One page's behaviour as an ES module: `register(Runo, env)` |
| `content/sprite.html` | Logo mark (`#runo-mark`) and icon symbols (`#i-<name>`) |

### Page lifecycle

1. The server component puts the page markup in the HTML, so pages are fully rendered without JavaScript.
2. After hydration `PageRuntime` imports `content/scripts/<id>.js` and calls `mountPage(id, root, register)`.
3. `mountPage` renders shared components (`[data-lp-nav]`, `[data-lp-footer]`, `[data-orb]`, `[data-card]`), runs the
   page's initialiser, and wires scroll reveals (`data-reveal`), count-ups (`data-count`) and typewriters
   (`data-type`).
4. On navigation the cleanup stops every timer, animation frame and listener the page created. Page scripts get
   `setTimeout`, `setInterval`, `requestAnimationFrame` and `addEventListener` from `env` for exactly this reason:
   use those, not the globals, when adding behaviour.

React Strict Mode and Fast Refresh are handled: before a re-run the page host is reset to its server-rendered
markup, so behaviour never stacks.

## Where this is deliberately not "React-idiomatic"

The 18 pages are HTML content with vanilla-JS behaviour, mounted by React. That keeps the port pixel-identical
to the approved single-file site and keeps each page independent. It is the right trade-off for a presentation
site; it is not how you would build an application.

If a page needs to become real product UI, convert that page on its own: turn `content/pages/<id>.html` into JSX
components, move its `<style>` into a CSS module, and replace its script with hooks. `dashboard` and `mobile` are
the natural first candidates. Pages do not depend on each other, so this can be done one at a time.

## Font

The case study uses Aeonik, which is a commercial typeface. The site loads Geist (closest free match) through
`next/font/google`. To use Aeonik, add the licensed files with `next/font/local` in `app/layout.jsx` and put its
CSS variable first in `--font` at the end of `app/globals.css`.

## Re-importing from the single-file sources

`content/` and `app/globals.css` were generated from the single-file site's sources (`src/pages/*.html`,
`src/base.css`, `src/shell.html`). If those change:

```bash
npm run import -- <path-to-runo-site/src>
```

The import rewrites hash links (`#/dashboard`) to routes (`/dashboard`) and routes page listeners through `env`.
Edits made directly in `content/` are overwritten by a re-import.

## Checked

- `next build` passes; 18 pages plus `/` are exported.
- All 18 pages were opened in a browser by client-side navigation and scrolled end to end: no console errors and
  no horizontal overflow at about 1040 px wide.
- Dock previous / next, Shift+arrow keys, the index overlay and in-page links navigate without a full reload.
- `next dev` (Strict Mode) mounts pages once: one nav, one footer, no duplicated components.

Not checked: narrow phone widths in this port (the source site was checked at 390 px), Safari and Firefox.
