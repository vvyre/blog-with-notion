import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const BASE = style([
  {
    width: '100vw',
    height: 'fit-content',
    backgroundColor: THEMES.white,
    position: 'sticky',
    zIndex: '999',
    top: 0,
    padding: '1rem 3rem 1rem 3rem',
    '@media': {
      '(0px <= width <= 768px)': {
        padding: '1rem 1.5rem 1rem 1.5rem',
      },
    },
  },
]);

export const HEADER_GRID = style([
  BASE_GRID,
  {
    margin: '0 auto',
    gridTemplateRows: '(1, auto)',
  },
]);

export const MENU = style({
  marginLeft: '0.5rem',
  backgroundColor: 'transparent',
  fontWeight: 500,
});

export const LOGO_GRID_PLACEMENT = style({
  gridColumnStart: 3,
  gridColumnEnd: 6,
  '@media': {
    '(0px <= width <= 768px)': {
      gridColumnStart: 2,
      gridColumnEnd: 3,
    },
  },
});

export const MENU_GRID_PLACEMENT = styleVariants({
  0: {
    gridColumnStart: 8,
    gridColumnEnd: 10,
    placeItems: 'center start',
    '@media': {
      '(0px <= width <= 768px)': {
        gridColumnStart: 5,
        gridColumnEnd: 6,
      },
    },
  },
  1: {
    gridColumnStart: 10,
    gridColumnEnd: 12,
    placeItems: 'center start',
    '@media': {
      '(0px <= width <= 768px)': {
        gridColumnStart: 6,
        gridColumnEnd: 7,
      },
    },
  },
});

export const LOGO = style({
  fontWeight: 700,
});
