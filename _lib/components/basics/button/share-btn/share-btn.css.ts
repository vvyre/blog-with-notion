import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginLeft: '0.15rem',
  paddingLeft: '0.25rem',
  display: 'inline-flex',
  color: COLORS.gray,
  justifyContent: 'center',
  alignItems: 'flexStart',
  height: '100%',
  border: 'none',
  borderRadius: '2rem',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const POST_SHARE = style({
  margin: 0,
  padding: '0.35rem 0.95rem 0.35rem 0.95rem',
  color: COLORS.gray,
  fontSize: '0.9rem',
  border: `none`,
  background: 'transparent',
  cursor: 'pointer',
  outline: `1px solid ${THEMES.gray}`,
  transition: 'background-color width 0.2s',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.default}`,
      color: COLORS.default,
    },
    '&:active': {
      outline: `1px solid ${THEMES.default}`,
      color: COLORS.default,
    },
  },
});

export const NAV_BASE = style([
  BASE,
  {
    margin: 0,
  },
]);
