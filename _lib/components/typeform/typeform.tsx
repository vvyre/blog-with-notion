'use client';
import { site_env } from '@/env';
import React, { useEffect } from 'react';

export function Typeform() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live={site_env.tf} />;
}
