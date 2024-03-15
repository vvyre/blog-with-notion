import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  BASE_PADDING,
  BASE_GRID,
  {
    position: 'sticky',
    top: '4.5rem',
    zIndex: 9,
  },
]);
export const CATEGORY_PLACEMENT = style({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  '@media': {
    'screen and (max-width: 768px)': {
      gridColumnStart: 1,
      gridColumnEnd: 2,
    },
  },
});
export const TITLE_PLACEMENT = style({
  gridColumnStart: 3,
  gridColumnEnd: 11,
  '@media': {
    'screen and (max-width: 768px)': {
      gridColumnStart: 2,
      gridColumnEnd: 7,
    },
  },
});
