import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const POST_GRID = style([
  BASE_GRID,
  BASE_PADDING,
  {
    gridTemplateRows: 'repeat(1, auto)',
    margin: '0 auto',
    paddingTop: '5rem',
    paddingBottom: '0',
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
