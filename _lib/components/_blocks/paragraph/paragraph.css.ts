import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
]);
