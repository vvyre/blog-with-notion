import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style({
  height: '3rem',
  width: '100%',
  zIndex: '99999',
  padding: '0.4rem 2rem 0.4rem 2rem',
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  top: '0',
  '@media': {
    '(0 <= width <= 700px)': {
      bottom: '0',
      padding: '0.4rem 1.5rem 0.4rem 1.5rem',
    },
  },
});

export const NAV = style({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
});

export const EXPANDED = style({
  display: 'flex',
  position: 'fixed',
  top: '3rem',
  left: 0,
  opacity: '0.95',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: vars.color.b2,
  height: 'calc(100vh)',
  zIndex: '9999',
});

export const BTN_WRAPPER = style({
  width: '100%',
  maxWidth: '10vw',
});

export const POST_TITLE_WRAPPER = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '90vw',
    color: vars.color.default,
    fontSize: TYPOGRAPHY.L.fontSize,
    '@media': {
      '(0 <= width <= 700px)': {
        fontSize: TYPOGRAPHY.S.fontSize,
      },
    },
  },
]);

export const HIDE_UNDER_700PX = style({
  '@media': {
    '(0 <= width <= 700px)': {
      display: 'none',
    },
  },
});

export const HIDE_UNDER_500PX = style({
  '@media': {
    '(0 <= width <= 500px)': {
      display: 'none',
    },
  },
});

export const POST_TITLE = style([
  {
    background: 'transparent',
    border: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'right',
    color: vars.color.default,
    fontWeight: '600',
    fontSize: TYPOGRAPHY.S.fontSize,
    '@media': {
      '(0 <= width <= 700px)': {
        fontSize: TYPOGRAPHY.XS.fontSize,
      },
    },
  },
]);

export const BACKGROUND = styleVariants({
  post: { background: vars.color.b1 },
  main: { background: 'transparent' },
});

export const TEXT_COLOR = styleVariants({
  post: { color: vars.color.default },
  main: { color: vars.color.default },
});

//LEGACY

export const THEME = styleVariants({
  BLACK: { backgroundColor: vars.color.white },
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
    color: vars.color.white,
    selectors: {
      '&:hover': {
        borderBottom: `1px solid ${vars.color.white}`,
      },
    },
  },
  WHITE: {
    color: vars.color.default,
    selectors: {
      '&:hover': {
        borderBottom: `1px solid ${vars.color.default}`,
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
  fill: vars.color.white,
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
  backgroundColor: vars.color.theme,
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
