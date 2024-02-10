import { assignInlineVars } from '@vanilla-extract/dynamic';
import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  size: string;
}

export const Spacing = memo(({ size }: SpacingProps) => {
  return (
    <div
      style={assignInlineVars({
        size: size,
      })}
    />
  );
});
