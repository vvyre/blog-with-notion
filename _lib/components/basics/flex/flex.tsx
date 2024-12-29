import React from 'react';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { ALIGN_VARIANT, DIRECTION_VARIANT, JUSTIFY_VARIANT, WIDTH_VARIANT, WRAP_VARIANT } from './flex.css';

type FlexProps<T extends ElementType> = {
  as?: T;
  width?: keyof typeof WIDTH_VARIANT;
  flexDirection?: keyof typeof DIRECTION_VARIANT;
  justifyContent: keyof typeof JUSTIFY_VARIANT;
  alignItems?: keyof typeof ALIGN_VARIANT;
  flexWrap?: keyof typeof WRAP_VARIANT;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function Flex<T extends ElementType>({
  as,
  width = 'fill',
  flexDirection = 'row',
  justifyContent,
  alignItems = 'center',
  flexWrap = 'wrap',
  children,
  className,
  ...props
}: FlexProps<T>) {
  const cn = `${WIDTH_VARIANT[width]} ${DIRECTION_VARIANT[flexDirection]} ${JUSTIFY_VARIANT[justifyContent]} ${
    ALIGN_VARIANT[alignItems]
  } ${WRAP_VARIANT[flexWrap]} ${className ?? ''}`;
  const Component = as ?? 'div';
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
}
