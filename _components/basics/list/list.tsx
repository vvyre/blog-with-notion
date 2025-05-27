import { memo, type ComponentProps, type ElementType, type ReactNode } from 'react'

type ListProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentProps<T>

export const List = memo(
  <T extends ElementType>({ as, children, ...props }: ListProps<T>) => {
    const className = props.className
    const Component = as ?? 'ul'
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    )
  }
)

List.displayName = 'List'
