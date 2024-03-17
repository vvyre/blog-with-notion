import { THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const THEME = styleVariants({
  BLACK: { backgroundColor: THEMES.default },
  WHITE: { backgroundColor: THEMES.white },
});

export const BASE = style([
  {
    width: '100vw',
    height: 'fit-content',
    position: 'sticky',
    zIndex: '999',
    top: 0,
    padding: '0.5rem 3rem 0.5rem 3rem',
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
  fontSize: '0.9rem',
  backgroundColor: 'transparent',
  fontWeight: 400,
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem',
    },
  },
});

export const MENU_TEXT = styleVariants({
  BLACK: { color: THEMES.white },
  WHITE: { color: THEMES.default },
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
    },
  },
});

export const MENU_GRID_ITEM = style({
  placeItems: 'center start',
});

export const MENU_GITHUB_PLACEMENT = style({
  justifySelf: 'right',
  textDecoration: 'none',
});

export const MENU_GITHUB = style({});
