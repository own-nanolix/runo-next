import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Geist } from 'next/font/google';
import Dock from '@/components/Dock';
import LinkInterceptor from '@/components/LinkInterceptor';
import './globals.css';

// Aeonik (the case study's typeface) is commercial; Geist is the closest free match.
// To use Aeonik, add the licensed files with next/font/local and put its variable first in --font.
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export const metadata = {
  title: { default: 'Runo — AI-powered fintech platform', template: 'Runo — %s' },
  description: 'Runo — a new standard for financial control. Brand, product and web presented as a live site.',
  robots: { index: false, follow: false },
};

const sprite = readFileSync(join(process.cwd(), 'content', 'sprite.html'), 'utf8');

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {/* Shared SVG sprite: logo mark (#runo-mark) and icons (#i-<name>). */}
        <div dangerouslySetInnerHTML={{ __html: sprite }} />
        <main id="main">{children}</main>
        <Dock />
        <LinkInterceptor />
      </body>
    </html>
  );
}
