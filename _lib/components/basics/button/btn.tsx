import { ComponentPropsWithoutRef, ElementType, MouseEvent, ReactNode } from 'react';
import { BASE } from './btn.css';
import Link from 'next/link';
import { Url } from 'url';

type BtnProps<T extends ElementType> = {
  as?: T | 'Link';
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  href?: string | Url;
} & ComponentPropsWithoutRef<T>;

export function Btn<T extends ElementType>({ as, onClick, children, href, ...props }: BtnProps<T>) {
  const cn = props.className ?? BASE;
  const Component = as ?? 'button';

  switch (Component) {
    default:
      return (
        <Component className={cn} href={href} onClick={onClick} {...props}>
          {children}
        </Component>
      );
    case 'Link':
      return (
        <Link className={cn} href={href ?? '/'} scroll={props.scroll ?? false}>
          {children}
        </Link>
      );
  }
}
