import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface StrikeProps extends ComponentPropsWithoutRef<'s'> {
  children: ReactNode;
}

export function Strike({ children }: StrikeProps) {
  return <s>{children}</s>;
}
