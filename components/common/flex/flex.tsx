import React, { memo } from 'react'
import type { ComponentProps, ElementType } from 'react'
import {
  ALIGN_VARIANT,
  DIRECTION_VARIANT,
  JUSTIFY_VARIANT,
  WIDTH_VARIANT,
  WRAP_VARIANT,
} from './flex.css'

type VariantProps = {
  width?: keyof typeof WIDTH_VARIANT
  flexDirection?: keyof typeof DIRECTION_VARIANT
  justifyContent?: keyof typeof JUSTIFY_VARIANT
  alignItems?: keyof typeof ALIGN_VARIANT
  flexWrap?: keyof typeof WRAP_VARIANT
  className?: string
  gap?: string
}

type FlexProps<T extends ElementType> = {
  as?: T
} & VariantProps &
  Omit<ComponentProps<T>, keyof VariantProps>

export const Flex = memo(
  <T extends ElementType>({
    as,
    width = 'fit',
    flexDirection = 'row',
    justifyContent = 'center',
    alignItems = 'center',
    flexWrap = 'wrap',
    gap = '0.35rem',
    className,
    ...props
  }: FlexProps<T>) => {
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
      <Component
        className={cn}
        {...props}
        style={{
          gap,
        }}
      >
        {props.children}
      </Component>
    )
  }
)

Flex.displayName = 'Flex'
