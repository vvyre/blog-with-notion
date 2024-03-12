import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const POST_GRID = style([
  BASE_GRID,
  {
    gridTemplateRows: 'repeat(1, auto)',
    margin: '0 auto',
    padding: '5rem 3rem 0 3rem',
    '@media': {
      '(0px <= width <= 768px)': {
        padding: '5rem 1.5rem 0 1.5rem',
      },
    },
  },
]);

export const POST_GRID_PLACEMENT = style({
  gridRow: 1,
  gridColumnStart: 3,
  gridColumnEnd: 9,
  '@media': {
    '(0px <= width <= 768px)': {
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 7,
    },
  },
});
