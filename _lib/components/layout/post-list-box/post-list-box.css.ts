import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const POST_LIST_GRID = style([
  BASE_GRID,
  BASE_PADDING,
  {
    marginTop: '10rem',
    gridTemplateRows: 'repeat(auto-fill, minmax(128px, 1fr))',
  },
]);
