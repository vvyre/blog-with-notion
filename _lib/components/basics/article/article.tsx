import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { LAYOUT_CENTERED } from './article.css';

interface ArticleProps extends ComponentPropsWithoutRef<'article'> {
  children: ReactNode;
}

export function Article({ children, ...props }: ArticleProps) {
  const cn = `${props.className ?? LAYOUT_CENTERED}`;
  return <article className={cn}>{children}</article>;
}
