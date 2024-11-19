'use client';
import { ComponentPropsWithRef } from 'react';
import { BASE } from './divider.css';

interface DividerProps extends ComponentPropsWithRef<'hr'> {
  styleVariant?: string;
}

export function Divider({ styleVariant, ref, ...props }: DividerProps) {
  return <hr className={styleVariant || BASE} ref={ref} {...props} />;
}
