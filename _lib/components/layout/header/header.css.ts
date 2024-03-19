import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const THEME = styleVariants({
  BLACK: { backgroundColor: THEMES.default },
  WHITE: { backgroundColor: THEMES.white },
});

export const BASE = style([
  {
    height: 'fit-content',
    position: 'sticky',
    zIndex: '999',
    top: 0,
    padding: '0.5rem 2rem 0.5rem 2rem',
    '@media': {
      '(0px <= width <= 768px)': {
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
      },
    },
  },
]);

export const HEADER_GRID = style([
  BASE_GRID,
  {
    margin: '0 auto',
    gridTemplateRows: '(2, auto)',
    '@media': {
      '(0px <= width <= 768px)': {
        gridTemplateRows: '(1, 1fr)',
      },
    },
  },
]);

export const MENU = style({
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
});

export const MENU_TEXT_BASE = style({
  backgroundColor: 'transparent',
  borderBottom: '1px solid transparent',
  fontSize: '0.9rem',
  fontWeight: 700,
});

export const MENU_TEXT = styleVariants({
  BLACK: {
    color: THEMES.white,
    selectors: {
      '&:hover': {
        borderBottom: `1px solid ${THEMES.white}`,
      },
    },
  },
  WHITE: {
    color: THEMES.default,
    selectors: {
      '&:hover': {
        borderBottom: `1px solid ${THEMES.default}`,
      },
    },
  },
});

export const LOGO_GRID_PLACEMENT = style({
  display: 'block',
  gridColumnStart: 1,
  gridColumnEnd: 3,
  alignSelf: 'center',
  '@media': {
    '(0px <= width <= 768px)': {
      gridColumnStart: 1,
      gridColumnEnd: 2,
    },
  },
});

export const MENU_GRID_PLACEMENT = style({
  gridColumnStart: 9,
  gridColumnEnd: 11,
  '@media': {
    '(0px <= width <= 768px)': {
      gridColumnStart: 4,
      gridColumnEnd: 5,
    },
  },
});

export const MENU_GRID_ITEM = style({
  placeItems: 'center start',
});

export const MENU_LIST = style({
  fill: THEMES.white,
});

export const MENU_GITHUB_PLACEMENT = style({
  justifySelf: 'right',
  textDecoration: 'none',
});

export const MENU_GITHUB = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  width: '1.75rem',
  backgroundColor: 'transparent',
  fontWeight: 900,
  transition: 'border 0.15s',
  borderBottom: `1px solid transparent`,
});
export const MENU_GITHUB_IMG = style({
  width: '1.35rem',
  height: '1.35rem',
});
