import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { RichText } from '@/_lib/types/block';
import { COLORS, COLOR_STYLE_VARIANTS } from '@/_lib/styles/colors.css';
import { Annotations } from '../annotations/Annotations';
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
      <Component className={COLOR_STYLE_VARIANTS[className]} {...props}>
        <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
          {props.children}
        </Annotations>
      </Component>
    );
  else
    return (
      <Link href={richText?.href || props.href} className={COLOR_STYLE_VARIANTS[className]} {...props}>
        <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
          {props.children}
        </Annotations>
      </Link>
    );
}
