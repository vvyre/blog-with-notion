import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BOLD } from '../typography.css';

interface StrongProps extends ComponentPropsWithoutRef<'strong'> {
  children: ReactNode;
}

export function Strong({ children }: StrongProps) {
  return <strong className={BOLD}>{children}</strong>;
}
