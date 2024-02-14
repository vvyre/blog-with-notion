import { ReactNode } from 'react';
import { CODE } from '../typography.css';

export interface CodeProps {
  children: ReactNode;
}
export function Code({ children }: CodeProps) {
  return <code className={CODE}>{children}</code>;
}
