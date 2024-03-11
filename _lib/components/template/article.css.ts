import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';
import { TITLE_GRID } from '../compounds/title/title.css';

export const BASE = style({
  margin: '3rem auto',
  width: '100%',
});

export const POST_GRID = style([
  BASE_GRID,
  {
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
