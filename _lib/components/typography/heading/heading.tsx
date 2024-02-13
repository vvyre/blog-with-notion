import { COLORS } from '@/_lib/styles/colors';
import type { RichText } from '@/_lib/types/block';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { Annotations } from '../annotations/Annotations';
import { TEXT_STYLE } from '../Typography.css';

type HeadingProps<T extends ElementType> = {
  as?: T;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  size?: keyof typeof TEXT_STYLE;
  color?: keyof typeof COLORS;
  richText?: RichText;
} & ComponentPropsWithoutRef<T>;
export function Heading<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  size,
  color = 'default',
  richText,
  ...props
}: HeadingProps<T>) {
  const Component = as || 'h1';
  const SIZE = size || (Component === 'h1' ? 'XL' : Component === 'h2' ? 'L' : 'M');
  const className = `${TEXT_STYLE[SIZE]} ${richText ? richText.annotations.color : color}`;
  return (
    <Component className={className}>
      <Annotations richText={richText} bold={bold} code={code} italic={italic} strike={strike} underline={underline}>
        {props.children}
      </Annotations>
    </Component>
  );
}
