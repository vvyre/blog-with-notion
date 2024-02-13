import { ReactNode } from 'react';
import { BASE } from './section.css';
import { RESPONSIVE } from './responsive.css';

interface SectionProps {
  children: ReactNode;
  styleVariants?: string;
}
export function Section({ children, styleVariants }: SectionProps) {
  const className = `${RESPONSIVE} ${styleVariants || BASE}`;
  return <section className={className}>{children}</section>;
}
