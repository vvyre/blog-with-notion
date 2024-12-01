import Link from 'next/link';
import { Annotations } from '../annotations/annotations';
import { LINK, TEXT_STYLE } from '../typography.css';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { vars } from '@/_lib/styles/themes.css';
import { TEXT_COLOR } from '../annotations/color.css';

type TxtProps<T extends ElementType> = {
  as?: T | 'Link';
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  color?: keyof typeof vars.notion;
  richText?: RichTextItemResponse;
  size?: keyof typeof TEXT_STYLE;
  styleVariant?: string;
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
  size = 'M',
  styleVariant,
  ...props
}: TxtProps<T>) {
  const COLOR = richText ? richText.annotations.color : color;
  const classNames = [TEXT_STYLE[size], TEXT_COLOR[COLOR]];

  let Component = as || 'span';
  if (richText?.href) Component = 'a';

  let className = classNames.join(' ');
  if (Component === 'a' || richText?.href) className = LINK;
  if (styleVariant) className = styleVariant;

  switch (Component) {
    default:
      return (
        <Component className={className} {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </Component>
      );
    case 'a':
      return (
        <a className={className} href={richText?.href || props.href} target="_blank" {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </a>
      );
    case 'Link':
      return (
        <Link href={richText?.href || props.href} className={className} {...props}>
          <Annotations
            richText={richText}
            bold={bold}
            code={code}
            italic={italic}
            strike={strike}
            underline={underline}>
            {props.children}
          </Annotations>
        </Link>
      );
  }
}
