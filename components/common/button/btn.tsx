import { ComponentProps, ElementType, MouseEvent, ReactNode } from 'react'
import { BASE } from './btn.css'
import Link from 'next/link'
import { Url } from 'url'

type BtnProps<T extends ElementType> = {
  as?: T | 'Link'
  onClick?: (e: MouseEvent) => void
  children: ReactNode
  href?: string | Url
} & ComponentProps<T>

export const Btn = <T extends ElementType>({
  as,
  onClick,
  children,
  href,
  ...props
}: BtnProps<T>) => {
  const cn = props.className ?? BASE
  const Component = as ?? 'button'

  switch (Component) {
    default:
      return (
        <Component className={cn} onClick={onClick} {...props} ref={props.ref}>
          {children}
        </Component>
      )
    case 'a':
      return (
        <Component
          className={cn}
          href={href}
          target={props.target ?? '_blank'}
          rel="noopener noreferrer"
          ref={props.ref}
          {...props}
        >
          {children}
        </Component>
      )
    case 'Link':
      return (
        <Link
          className={cn}
          href={href ?? '/'}
          scroll={props.scroll ?? true}
          ref={props.ref}
          {...props}
        >
          {children}
        </Link>
      )
  }
}
