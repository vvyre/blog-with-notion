'use client';
import { ComponentPropsWithRef } from 'react';
import { BASE } from './divider.css';

interface DividerProps extends ComponentPropsWithRef<'hr'> {
  className?: string;
}

export function Divider({ className, ref, ...props }: DividerProps) {
  return <hr className={className ?? BASE} ref={ref} {...props} />;
}
