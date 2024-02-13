import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  size: string;
}

export const Spacing = memo(({ size }: SpacingProps) => {
  const style = { height: size };
  return <div style={style} />;
});
