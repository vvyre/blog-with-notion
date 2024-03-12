import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  {
    width: '100vw',
    height: 'fit-content',
    padding: '0.5rem 0 0.5rem 0',
    backgroundColor: THEMES.white,
    position: 'sticky',
    zIndex: '999',
    top: 0,
  },
]);

export const HEADER_GRID = style([
  BASE_GRID,
  {
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
    'screen and (max-width: 1200px)': {
      gridColumnStart: 3,
      gridColumnEnd: 5,
    },
    'screen and (max-width: 768px)': {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
  },
});

export const MENU_GRID_PLACEMENT = style({
  gridColumnStart: 9,
  gridColumnEnd: 12,
  '@media': {
    'screen and (max-width: 1200px)': {
      gridColumnStart: 9,
      gridColumnEnd: 12,
    },
    'screen and (max-width: 768px)': {
      gridColumnStart: 3,
      gridColumnEnd: 7,
    },
  },
});

export const LOGO = style({
  fontWeight: 700,
});
