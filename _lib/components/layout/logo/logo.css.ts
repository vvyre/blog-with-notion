import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

const BASE = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.75rem',
  height: '1.75rem',
  outline: `1px solid transparent`,
  borderRadius: '1.75rem',
  transition: 'outline 0.1s ease-out',
});

export const LOGO = style([
  {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '1rem',
    wordSpacing: '-0.3rem',
    '@media': {
      '(0px <= width <= 768px)': {
        fontSize: '0.75rem',
        wordSpacing: '-0.25rem',
        fontWeight: 500,
      },
    },
    transition: 'color 0.1s ease-out',
    selectors: {
      '&:hover': {
        color: `${THEMES.theme}`,
      },
    },
  },
]);

export const EXTERNAL_LINK = style([
  BASE,
  {
    selectors: {
      '&:hover': {
        outline: `1px solid ${THEMES.highlight}`,
      },
    },
  },
]);

export const MENU_GITHUB_PLACEMENT = style({
  justifySelf: 'right',
  textDecoration: 'none',
});

export const MENU_GITHUB = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.75rem',
  height: '1.75rem',
  borderRadius: '1.75rem',
  backgroundColor: 'transparent',
  fontWeight: 700,
  outline: `1px solid transparent`,
  transition: 'outline 0.1s ease-out',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.theme}`,
    },
  },
});
export const MENU_GITHUB_IMG = style({
  width: '1.35rem',
  height: '1.35rem',
});
