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

export const NAV_BASE = style([
  BASE,
  {
    margin: 0,
  },
]);
