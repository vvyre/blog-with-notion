import { ReactNode } from 'react';
import { BASE, LAYOUT_CENTERED } from './article.css';

interface ArticleProps {
  children: ReactNode;
  styleVariants?: string;
}
export function Article({ children, styleVariants }: ArticleProps) {
  const className = `${styleVariants ?? BASE}`;
  return <article className={className}>{children}</article>;
}
