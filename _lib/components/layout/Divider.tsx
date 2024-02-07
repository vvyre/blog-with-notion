import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export function Divider() {
  return (
    <hr
      css={css`
        height: '1px';
        background: 'transparent';
        border-bottom: '1px solid black';
      `}
    />
  );
}
