import React from 'react'
import type { ComponentProps, ElementType, ReactNode } from 'react'
import {
  ALIGN_VARIANT,
  DIRECTION_VARIANT,
  JUSTIFY_VARIANT,
  WIDTH_VARIANT,
  WRAP_VARIANT,
} from './flex.css'

type FlexProps<T extends ElementType> = {
  as?: T
  width?: keyof typeof WIDTH_VARIANT
  flexDirection?: keyof typeof DIRECTION_VARIANT
  justifyContent?: keyof typeof JUSTIFY_VARIANT
  alignItems?: keyof typeof ALIGN_VARIANT
  flexWrap?: keyof typeof WRAP_VARIANT
  className?: string
} & ComponentProps<T>

export function Flex<T extends ElementType>({
  as,
  width = 'fit',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  flexWrap = 'wrap',
  className,
  ...props
}: FlexProps<T>) {
  const cn = [
    DIRECTION_VARIANT[flexDirection],
    WIDTH_VARIANT[width],
    JUSTIFY_VARIANT[justifyContent],
    ALIGN_VARIANT[alignItems],
    WRAP_VARIANT[flexWrap],
    className,
  ].join(' ')
  const Component = as ?? 'div'
  return (
    <Component className={cn} {...props}>
      {props.children}
    </Component>
  )
}
