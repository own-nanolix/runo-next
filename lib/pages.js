// The site map. Order here is the presenter order (dock previous / next and the index).
export const PAGES = [
  ['overview', 'Overview', 'Brand'],
  ['logo', 'Logo', 'Brand'],
  ['brand-kit', 'Brand kit', 'Brand'],
  ['strategy', 'Strategy & impact', 'Brand'],
  ['social', 'Social media', 'Brand'],
  ['use-print', 'In use · Stationery & print', 'Brand in use'],
  ['use-merch', 'In use · Merch & objects', 'Brand in use'],
  ['use-world', 'In use · Cards, digital & spaces', 'Brand in use'],
  ['dashboard', 'Dashboard · 7 screens', 'Product'],
  ['mobile', 'Mobile app · 7 screens', 'Product'],
  ['copilot', 'AI Copilot', 'Product'],
  ['lp-home', 'Landing · Home', 'Landing pages'],
  ['lp-cashflow', 'Landing · Cash Flow', 'Landing pages'],
  ['lp-copilot', 'Landing · AI Copilot', 'Landing pages'],
  ['lp-solutions', 'Landing · Solutions', 'Landing pages'],
  ['lp-pricing', 'Landing · Pricing', 'Landing pages'],
  ['lp-global', 'Landing · Payments', 'Landing pages'],
  ['lp-cards', 'Landing · Cards & accounts', 'Landing pages'],
].map(([id, title, group], i) => ({ id, title, group, n: String(i + 1).padStart(2, '0') }));

export const HOME = PAGES[0].id;
export const getPage = (id) => PAGES.find((p) => p.id === id);
export const GROUPS = [...new Set(PAGES.map((p) => p.group))];
/** "/dashboard" -> "dashboard"; "/" -> the home page id. */
export const idFromPath = (pathname) => (pathname || '/').replace(/^\/+|\/+$/g, '').replace(/\.html$/, '') || HOME;
