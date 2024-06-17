import { THEMES } from '@/_lib/styles/colors.css';
import { style, styleVariants } from '@vanilla-extract/css';

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

export const LOGO = style({
  textTransform: 'uppercase',
  fontWeight: 900,
  mixBlendMode: 'difference',
  fontSize: '1.75rem',
  wordSpacing: '-0.5rem',
  color: THEMES.white,
  '@media': {
    '(0px <= width <= 768px)': {
      fontSize: '1rem',
      wordSpacing: '-0.3rem',
    },
  },
});

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
