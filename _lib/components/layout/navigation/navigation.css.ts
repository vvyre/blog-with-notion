import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { TYPOGRAPHY } from '../../typography/typography.css';

export const BASE = style({
  height: '5rem',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
  background: THEMES.default,
  width: '100vw',
  zIndex: '99999',
  padding: '0.5rem 2rem 0.5rem 2rem',
  position: 'sticky',
  top: '0',
  '@media': {
    '(0 <= width <= 768px)': {
      height: '3.5rem',
      padding: '0.5rem 1.5rem 0.5rem 1.5rem',
    },
  },
});

export const BACK_BTN = style({
  display: 'linine',
});
export const BTN_WRAPPER = style({
  width: '100%',
  maxWidth: '10vw',
});

export const POST_TITLE = style([
  {
    textAlign: 'right',
    width: '100%',
    maxWidth: '90vw',
    color: 'white',
    fontSize: TYPOGRAPHY.L.fontSize,
    '@media': {
      '(0 <= width <= 768px)': {
        display: 'none',
      },
    },
  },
]);

//LEGACY

export const THEME = styleVariants({
  BLACK: { backgroundColor: THEMES.default },
  WHITE: { background: 'transparent' },
});

export const BASE_LEGACY = style([
  {
    height: '4rem',
    width: '100%',
    zIndex: '999',
    '@media': {
      '(width > 768px)': {
        position: 'sticky',
        top: 0,
      },
      '(480px < width <= 768px)': {
        position: 'sticky',
        top: 0,
      },
      '(0 <= width <= 480px)': {
        position: 'fixed',
        bottom: 0,
      },
    },
  },
]);

export const PADDINGS = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '4rem',
  padding: '0.5rem 2rem 0.5rem 2rem',
  '@media': {
    '(480px < width <= 768px)': {
      padding: '0.5rem 1.5rem 0.5rem 1.5rem',
    },
    '(0 <= width <= 480px)': {
      padding: '0.5rem 1.5rem 0.5rem 1.5rem',
    },
  },
});

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

export const MENU_ICON = style({
  fill: THEMES.white,
});

export const NAV_POST_TITLE = style({
  fontSize: '0.9rem',
  cursor: 'default',
  '@media': {
    '(0px <= width <= 768px)': {
      fontSize: '0.75rem',
      fontWeight: 500,
    },
  },
});

export const PROGRESS_BAR = style({
  position: 'fixed',
  backgroundColor: THEMES.theme,
  height: '1px',
  zIndex: '999',
  '@media': {
    '(768px <= width)': {
      top: '3rem',
    },
    '(0px <= width <= 768px)': {
      top: '0',
    },
  },
});
