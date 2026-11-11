'use client';

// Runs a page's behaviour after its server-rendered markup is in the DOM, and cleans up on leave.
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import scripts from '@/content/scripts';
import { mountPage, setNavigate } from '@/lib/runo';

export default function PageRuntime({ id }) {
  const router = useRouter();

  useEffect(() => {
    setNavigate((href) => router.push(href));
    const host = document.getElementById('page-host');
    if (!host) return undefined;
    // Page scripts build DOM. Keep the pristine markup so a re-run (React Strict Mode, Fast Refresh)
    // starts from the server-rendered state instead of stacking on top of the previous run.
    if (host.__pristineFor === id) host.innerHTML = host.__pristine;
    else { host.__pristine = host.innerHTML; host.__pristineFor = id; }

    let cancelled = false;
    let destroy = null;
    scripts[id]().then((mod) => {
      if (cancelled) return;
      const root = host.querySelector('#p-' + id);
      if (root) destroy = mountPage(id, root, mod.default);
    });
    return () => { cancelled = true; if (destroy) destroy(); };
  }, [id, router]);

  return null;
}
