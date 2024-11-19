import { BLOCK_GRID_BASE } from '@/_lib/components/_blocks/block-layout.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    width: '100%',
    height: '100%',
    minHeight: '23.5rem',
    margin: '1rem 0 0 0',
  },
]);
