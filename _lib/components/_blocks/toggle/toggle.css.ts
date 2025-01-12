import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    marginBottom: '1rem',
  },
]);

export const SUMMARY_TXT = style({
  cursor: 'pointer',
  fontWeight: '600',
});
