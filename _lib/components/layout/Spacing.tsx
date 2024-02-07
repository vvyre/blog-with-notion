import { ComponentPropsWithoutRef } from 'react';

interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  size: string;
}

export function Spacing({ size }: SpacingProps) {
  return <div />;
}
