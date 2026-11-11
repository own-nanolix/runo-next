// Serves the static export in ./out with clean URLs (/dashboard -> dashboard.html).
//   npm run build && npm run preview   ->  http://localhost:4174
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, resolve, join, normalize, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'out');
const port = Number(process.argv[2]) || Number(process.env.PORT) || 4174;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain', '.ico': 'image/x-icon' };

createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const tryFiles = extname(p) ? [p] : [p + '.html', join(p, 'index.html')];
  for (const f of tryFiles) {
    const file = normalize(join(root, f));
    if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }).end(body);
      return;
    } catch { /* try next */ }
  }
  try { res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' }).end(await readFile(join(root, '404.html'))); }
  catch { res.writeHead(404).end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Runo (static export) on http://localhost:${port}`));
