import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const LOGO = style([
  {
    fontWeight: 800,
    padding: '0.4rem 0.55rem 0.4rem 0.55rem',
    fontSize: '0.85rem',
    textAlign: 'center',
    borderRadius: '0.3rem',
    background: 'transparent',
    border: 'none',
    selectors: {
      '&:hover': {
        background: 'transparent',
      },
      '&:active': {
        background: 'transparent',
      },
    },
  },
]);

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
      outline: `1px solid ${vars.color.theme}`,
    },
  },
});
export const MENU_GITHUB_IMG = style({
  width: '1.4rem',
  height: '1.4rem',
});
