import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { BASE } from './tag.css'

interface TagProps extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode
}
export function Tag({ children, ...props }: TagProps) {
  const className = `${props.className ?? BASE}`
  return <span className={className}>{children}</span>
}
