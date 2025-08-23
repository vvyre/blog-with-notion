import type { ComponentProps, ReactNode } from 'react'
import { LAYOUT_CENTERED } from './article.css'

interface ArticleProps extends ComponentProps<'article'> {
  children: ReactNode
}

export function Article({ children, ...props }: ArticleProps) {
  const cn = `${props.className ?? LAYOUT_CENTERED}`
  return <article className={cn}>{children}</article>
}
