import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface StrongProps extends ComponentPropsWithoutRef<'strong'> {
  children: ReactNode;
}

export function Strong({ children }: StrongProps) {
  return <strong>{children}</strong>;
}
