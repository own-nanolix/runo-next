'use client';

// Presenter chrome: the dock (previous / next / index), the page index overlay and the toast region.
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { PAGES, GROUPS, HOME, idFromPath } from '@/lib/pages';

const Icon = ({ name }) => (
  <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><use href={`#i-${name}`} /></svg>
);

export default function Dock() {
  const router = useRouter();
  const id = idFromPath(usePathname());
  const index = Math.max(0, PAGES.findIndex((p) => p.id === id));
  const page = PAGES[index];
  const [open, setOpen] = useState(false);
  const indexRef = useRef(null);

  const step = useCallback((d) => router.push('/' + PAGES[(index + d + PAGES.length) % PAGES.length].id), [router, index]);

  useEffect(() => { setOpen(false); }, [id]);
  useEffect(() => { if (open) indexRef.current?.querySelector('a[aria-current]')?.focus(); }, [open]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight' && e.shiftKey) step(1);
      if (e.key === 'ArrowLeft' && e.shiftKey) step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [step]);

  return (
    <>
      <div className={'index' + (open ? ' open' : '')} id="index" aria-label="All pages" ref={indexRef}>
        <div className="index-grid" id="index-grid">
          {GROUPS.map((g) => (
            <div key={g}>
              <h2>{g}</h2>
              {PAGES.filter((p) => p.group === g).map((p) => (
                <Link key={p.id} href={'/' + p.id} aria-current={p.id === id ? 'page' : undefined} onClick={() => setOpen(false)}>
                  <span>{p.n}</span>{p.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="dock" role="navigation" aria-label="Presentation">
        <Link href={'/' + HOME} aria-label="Runo overview">
          <svg className="mark" viewBox="0 0 362 360" aria-hidden="true"><use href="#runo-mark" /></svg>
        </Link>
        <button type="button" id="dock-prev" aria-label="Previous page" onClick={() => step(-1)}><Icon name="arrow-left" /></button>
        <span className="dock-title">
          <span className="dock-n" id="dock-n">{page.n} / {PAGES.length}</span>&nbsp;&nbsp;<span id="dock-t" aria-live="polite">{page.title}</span>
        </span>
        <button type="button" id="dock-next" aria-label="Next page" onClick={() => step(1)}><Icon name="arrow-right" /></button>
        <button type="button" id="dock-index" aria-expanded={open} aria-controls="index" onClick={() => setOpen((v) => !v)}><Icon name="grid" />Index</button>
      </div>
      <div className="toast" id="toast" role="status" aria-live="polite" />
    </>
  );
}
