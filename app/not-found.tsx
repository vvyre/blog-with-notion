'use client';

import { ErrorFallback } from '@/_lib/components/layout/error-fallback/error-fallback';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorFallback message={'404 NOT FOUND'} />;
}
