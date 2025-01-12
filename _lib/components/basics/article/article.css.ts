import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',
});

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
  {
    display: 'grid',
    width: '100%',
    backgroundColor: vars.color.b1,
    gridTemplateColumns: '2rem minmax(15rem, 50rem) 2rem',
    background: 'transparent',
    margin: '0 auto',
    '@media': {
      '(0 <= width <= 768px)': {
        gridTemplateColumns: '1.5rem minmax(15rem, 50rem) 1.5rem',
      },
    },
  },
]);
