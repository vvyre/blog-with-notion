import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const POST_GRID = style([
  BASE_PADDING,
  BASE_GRID,
  {
    margin: '0 auto',
    paddingTop: '2rem',
    paddingBottom: '0',
  },
]);

export const LAYOUT_CENTERED = style([
  BASE_PADDING,
  {
    background: 'transparent',
    margin: '0 auto',
    paddingBottom: '0',
    maxWidth: '45rem',
    padding: '0 2rem 0 2rem',
    '@media': {
      '(0 <= width <= 768px)': {
        padding: '0 1.5rem 0 1.5rem',
      },
    },
  },
]);
