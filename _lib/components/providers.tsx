'use client';
import { ModalProvider } from '@syyu/util/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
