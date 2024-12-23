import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ListProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  styleVariant?: string;
} & ComponentPropsWithoutRef<T>;

export function List<T extends ElementType>({ as, styleVariant, children }: ListProps<T>) {
  const className = styleVariant;
  const Component = as ?? 'ul';
  return <Component className={className}>{children}</Component>;
}
