import { THEMES } from '@/_lib/styles/colors.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const LOGO = style({
  fontWeight: 900,
  fontSize: '0.95rem',
  opacity: '0.75',
  fontFamily: fontFamilyCode,
  textAlign: 'center',
  color: THEMES.default,
  '@media': {
    '(0px <= width <= 768px)': {
      fontSize: '1rem',
    },
  },
});

const BASE = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  height: 'fit-content',
  outline: `1px solid transparent`,
  borderRadius: '100%',
  cursor: 'pointer',
});

export const EXTERNAL_LINK = style([BASE, {}]);

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
  width: '1.4rem',
  height: '1.4rem',
});
