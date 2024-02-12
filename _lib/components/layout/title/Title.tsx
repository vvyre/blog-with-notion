import type { ComponentPropsWithoutRef } from 'react';

interface TitleProps extends ComponentPropsWithoutRef<'h1'> {
  title: string;
}
export function Title({ title }: TitleProps) {
  return <h1>{title}</h1>;
}
