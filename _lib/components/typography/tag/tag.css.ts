import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontSize: '0.8rem',
  marginRight: '0.25rem',
  backgroundColor: THEMES.light_b1,
  border: `1px solid transparent`,
  borderRadius: '0.3rem',
  padding: '0.2rem 0.25rem 0.2rem 0.25rem',
  color: COLORS.default,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.highlight}`,
      background: 'transparent',
    },
  },
});
