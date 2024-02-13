import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ListProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function List<T extends ElementType>({ as, children }: ListProps<T>) {
  const Component = as || 'ul';
  return <Component>{children}</Component>;
}
