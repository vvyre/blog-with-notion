import { ReactNode } from 'react';
import { BASE } from './section.css';

interface SectionProps {
  children: ReactNode;
  styleVariants?: string;
}
export function Section({ children, styleVariants }: SectionProps) {
  const className = `${styleVariants || BASE}`;
  return <section className={className}>{children}</section>;
}
