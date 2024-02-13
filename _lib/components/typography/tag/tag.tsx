import type { ReactNode } from 'react';
import { BASE } from './tag.css';

interface TagProps {
  children: ReactNode;
}
export function Tag({ children }: TagProps) {
  const className = `${BASE}`;
  return <span className={className}>{children}</span>;
}
