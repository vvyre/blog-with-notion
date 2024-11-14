import { style } from '@vanilla-extract/css';

export const BLOCK_GRID_BASE = style({
  gridColumn: '2 / 3',
  width: '100%',
  maxWidth: '50rem',
});

export const IMG_BLOCK_GRID_BASE = style({
  gridColumn: '1 / 4',
  width: '100%',
  maxWidth: '50rem',
});
