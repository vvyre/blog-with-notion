import React from 'react';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { ALIGN_VARIANT, BASE, DIRECTION_VARIANT, JUSTIFY_VARIANT, WRAP_VARIANT } from './flex.css';

type FlexProps<T extends ElementType> = {
  as?: T;
  width?: 'fill' | 'fit';
  flexDirection?: keyof typeof DIRECTION_VARIANT;
  justifyContents: keyof typeof JUSTIFY_VARIANT;
  alignItems?: keyof typeof ALIGN_VARIANT;
  flexWrap?: keyof typeof WRAP_VARIANT;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function Flex<T extends ElementType>({
  as,
  width = 'fit',
  flexDirection = 'row',
  justifyContents,
  alignItems = 'center',
  flexWrap = 'wrap',
  children,
  className,
  ...props
}: FlexProps<T>) {
  const cn = `${width === 'fill' && BASE} ${DIRECTION_VARIANT[flexDirection]} ${JUSTIFY_VARIANT[justifyContents]} ${
    ALIGN_VARIANT[alignItems]
  } ${WRAP_VARIANT[flexWrap]} ${className ?? ''}`;
  const Component = as ?? 'div';
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
}
