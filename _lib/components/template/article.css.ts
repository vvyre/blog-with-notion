import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100vw',
});

export const POST_GRID = style([
  BASE_GRID,
  {
    gridTemplateRows: 'repeat(1, auto)',
    paddingTop: '5rem',
    margin: '0 auto',
  },
]);

export const POST_GRID_PLACEMENT = style({
  gridRowStart: 1,
  gridRowEnd: 4,
  gridColumnStart: 3,
  gridColumnEnd: 9,
  '@media': {
    'screen and (max-width: 1200px)': {
      gridRowStart: 1,
      gridRowEnd: 4,
      gridColumn: 3,
      gridColumnEnd: 11,
    },
    'screen and (max-width: 768px)': {
      gridRowStart: 1,
      gridRowEnd: 4,
      gridColumn: 1,
      gridColumnEnd: 6,
    },
  },
});
