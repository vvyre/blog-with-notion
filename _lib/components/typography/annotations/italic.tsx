import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ItalicProps extends ComponentPropsWithoutRef<'i'> {
  children: ReactNode;
}

export function Italic({ children }: ItalicProps) {
  return <i>{children}</i>;
}
