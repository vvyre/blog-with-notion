import { ComponentPropsWithoutRef, ElementType, MouseEvent, ReactNode } from 'react';
import { BASE } from './btn.css';
import Link from 'next/link';

type BtnProps<T extends ElementType> = {
  as?: T | 'Link';
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Btn<T extends ElementType>({ as, onClick, children, ...props }: BtnProps<T>) {
  const className = BASE;
  const Component = as || 'button';

  switch (Component) {
    default:
      return (
        <Component className={className} onClick={onClick} {...props}>
          {children}
        </Component>
      );
    case 'Link':
      return (
        <Link className={className} href={props.href}>
          {children}
        </Link>
      );
  }
}
