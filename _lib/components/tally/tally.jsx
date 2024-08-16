'use client';
import { site_env } from '@/env';
import React, { useEffect } from 'react';

export function TallyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(e => (e.src = e.dataset.tallySrc));
      }
    };
    script.onerror = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(e => (e.src = e.dataset.tallySrc));
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe data-tally-src="${site_env.tally}" loading="lazy" frameborder="0" width="100%" height="250" title='소식 전하기'></iframe>`,
      }}
    />
  );
}
