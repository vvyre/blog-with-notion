'use client';
import { site_env } from '@/env';
import { useContext, useLayoutEffect, useRef } from 'react';
import { BASE } from './giscus.css';
import { View } from '@/_lib/components/basics/view/view';
import { ThemeContext } from '@/_lib/context/theme-provider';

export function Giscus() {
  const commentsEl = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', site_env.giscus);
    script.setAttribute('data-repo-id', site_env.giscus_id);
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOLR4oCs4CfA8r');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'ko');

    commentsEl.current?.appendChild(script);
  }, [theme]);

  return (
    <View styleVariant={BASE}>
      <div ref={commentsEl} />
    </View>
  );
}
