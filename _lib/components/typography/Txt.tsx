import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { RichText } from '@/_lib/types/block';
import { TEXT_COLORS } from './Typography.css';
import { COLORS } from '@/_lib/styles/colors';
import { Annotations } from './annotations/Annotations';
import Link from 'next/link';

type TxtProps<T extends ElementType> = {
  as?: T | 'Link';
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  color?: keyof typeof COLORS;
  richText?: RichText;
} & ComponentPropsWithoutRef<T>;

export function Txt<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  color = 'default',
  richText,
  ...props
}: TxtProps<T>) {
  const className = richText ? richText.annotations.color : color;
  const Component = as || 'p';

  if (Component !== 'Link')
    return (
      <Component className={TEXT_COLORS[className]} {...props}>
        <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
          {props.children}
        </Annotations>
      </Component>
    );
  else
    return (
      <Link href={richText?.href || props.href} className={TEXT_COLORS[className]} {...props}>
        <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
          {props.children}
        </Annotations>
      </Link>
    );
}
