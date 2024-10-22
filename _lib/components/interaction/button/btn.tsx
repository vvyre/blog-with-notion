import { ComponentPropsWithoutRef, ElementType, MouseEvent, ReactNode } from 'react';
import { BASE } from './btn.css';
import Link from 'next/link';
import { Url } from 'url';

type BtnProps<T extends ElementType> = {
  as?: T | 'Link';
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  styleVariant?: string;
  href?: string | Url;
} & ComponentPropsWithoutRef<T>;

export function Btn<T extends ElementType>({ as, onClick, children, href, styleVariant, ...props }: BtnProps<T>) {
  const className = styleVariant || BASE;
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
        <Link className={className} href={href || '/'}>
          {children}
        </Link>
      );
  }
}
