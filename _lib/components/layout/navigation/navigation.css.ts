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
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const EXPANDED = style({
  display: 'flex',
  position: 'fixed',
  top: '3rem',
  left: 0,
  opacity: '0.95',
  alignItems: 'center',
  width: '100%',
  backgroundColor: vars.color.b3,
  height: '100dvh',
  zIndex: '9999',
});

export const HIDE = style({
  display: 'none',
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
        fontSize: TYPOGRAPHY.XXS.fontSize,
      },
    },
  },
]);

export const TEXT_COLOR = styleVariants({
  post: { color: vars.color.default },
  main: { color: vars.color.default },
});
