import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginLeft: '0.75rem',
  padding: 0,
  display: 'inline-flex',
  color: COLORS.gray,
  justifyContent: 'center',
  alignItems: 'flexStart',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const POST_SHARE = style({
  margin: 0,
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  color: COLORS.gray,
  border: `none`,
  borderRadius: '1rem',
  backgroundColor: THEMES.light_b1,
  cursor: 'pointer',
  transition: 'background-color width 0.2s',
  selectors: {
    '&:hover': {
      backgroundColor: THEMES.light_b2,
    },
  },
});
