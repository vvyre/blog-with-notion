import { vars } from 'styles/themes.css'
import { Annotations } from '../annotations/annotations'
import { TEXT_STYLE } from '../typography.css'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { TEXT_COLOR } from '../annotations/color.css'

type HeadingProps<T extends ElementType> = {
  as?: T
  bold?: boolean
  code?: boolean
  italic?: boolean
  strike?: boolean
  underline?: boolean
  size?: keyof typeof TEXT_STYLE
  color?: keyof typeof vars.notion
  richText?: RichTextItemResponse
  className?: string
} & ComponentPropsWithoutRef<T>
export function Heading<T extends ElementType>({
  as,
  bold,
  code,
  italic,
  strike,
  underline,
  size = 'XL',
  color = 'default',
  richText,
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? 'h1'
  const COLOR = richText ? richText.annotations.color : color
  const classNames = [TEXT_STYLE[size], TEXT_COLOR[COLOR], className]
  const cn = classNames.join(' ')

  return (
    <Component className={cn}>
      <Annotations
        richText={richText}
        bold={bold}
        code={code}
        italic={italic}
        strike={strike}
        underline={underline}
      >
        {props.children}
      </Annotations>
    </Component>
  )
}
