import type { ReactNode } from 'react';
import { BASE } from './tag.css';

interface TagProps {
  children: ReactNode;
  styleVariant?: string;
}
export function Tag({ children, styleVariant }: TagProps) {
  const className = `${styleVariant ?? BASE}`;
  return <span className={className}>{children}</span>;
}
