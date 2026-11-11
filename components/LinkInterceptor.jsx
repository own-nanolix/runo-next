'use client';

// The page markup is HTML with plain <a href="/dashboard"> links. Route those through the Next.js
// router so moving between pages stays a client-side navigation.
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPage } from '@/lib/pages';

export default function LinkInterceptor() {
  const router = useRouter();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href[0] !== '/' || !getPage(href.slice(1))) return;
      e.preventDefault();
      router.push(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);
  return null;
}
