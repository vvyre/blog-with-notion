import { style } from '@vanilla-extract/css';

export const IMG_BLOCK_GRID_PLACEMENT = style({
  gridColumnStart: 1,
  gridColumnEnd: 13,
  placeItems: 'center',
  '@media': {
    '(0px <= width <= 768px)': {
      gridColumnStart: 1,
      gridColumnEnd: 7,
    },
  },
});

export const DEFAULT_BLOCK_GRID_PLACEMENT = style({
  gridColumnStart: 3,
  gridColumnEnd: 9,
  '@media': {
    '(769px <= width <= 1200px)': {
      gridColumnStart: 3,
      gridColumnEnd: 10,
    },
    '(0px <= width <= 768px)': {
      gridColumnStart: 1,
      gridColumnEnd: 7,
    },
  },
});
