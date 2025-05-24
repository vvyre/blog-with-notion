import {
  ComponentPropsWithRef,
  ComponentRef,
  ElementType,
  forwardRef,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react'
import { BASE } from './btn.css'
import Link from 'next/link'
import { Url } from 'url'

type BtnProps<T extends ElementType> = {
  as?: T | 'Link'
  onClick?: (e: MouseEvent) => void
  children: ReactNode
  href?: string | Url
} & ComponentPropsWithRef<T>

export const Btn = forwardRef(
  <T extends ElementType>(
    { as, onClick, children, href, ...props }: BtnProps<T>,
    ref: Ref<ComponentRef<T>>
  ) => {
    const cn = props.className ?? BASE
    const Component = as ?? 'button'

    switch (Component) {
      default:
        return (
          <Component className={cn} onClick={onClick} {...props} ref={ref}>
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
            ref={ref}
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
            ref={ref as Ref<HTMLAnchorElement>}
            {...props}
          >
            {children}
          </Link>
        )
    }
  }
)
