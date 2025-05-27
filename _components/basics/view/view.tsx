import { ComponentProps, ElementType, ReactNode } from 'react'
import { BASE } from './view.css'

type ViewProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentProps<T>

export function View<T extends ElementType>({ as, children, ...props }: ViewProps<T>) {
  const Component = as ?? 'div'
  const cn = props.className ?? BASE
  return (
    <Component className={cn} ref={props.ref} {...props}>
      {children}
    </Component>
  )
}
