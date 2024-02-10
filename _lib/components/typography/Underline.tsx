import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface UnderlineProps extends ComponentPropsWithoutRef<'u'> {
  children: ReactNode;
}

export function Underline({ children }: UnderlineProps) {
  return <u>{children}</u>;
}
