import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  borderRadius: '0.75rem',
  padding: '0.75rem 0.6rem 0.75rem 0.6rem',
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      backgroundColor: THEMES.light_b2,
    },
  },
});
