'use client';
import { site_env } from '@/env';
import { useEffect, useLayoutEffect, useRef } from 'react';

export function Utterances() {
  const commentsEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', site_env.utterances);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    commentsEl.current?.appendChild(script);
  }, []);

  return <div ref={commentsEl} />;
}
