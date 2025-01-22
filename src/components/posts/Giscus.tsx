'use client';

import { useEffect, useRef, useState } from 'react';
import useDarkMode from '@/hooks/useDarkMode';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
    const repo_id = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
    const category_id = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', repo!);
    scriptElem.setAttribute('data-repo-id', repo_id!);
    scriptElem.setAttribute('data-category', category!);
    scriptElem.setAttribute('data-category-id', category_id!);
    scriptElem.setAttribute('data-mapping', 'title');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme!);
    scriptElem.setAttribute('data-lang', 'en');
    scriptElem.setAttribute('data-loading', 'lazy');

    ref.current.appendChild(scriptElem);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }, [theme, mounted]);

  return <section ref={ref} />;
}
