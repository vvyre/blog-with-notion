'use client';
import { useEffect, useRef } from 'react';

export function Utterances() {
  const commentsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'brewcoldblue/blog-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    commentsEl.current?.appendChild(script);
  }, []);

  return <div ref={commentsEl} />;
}
