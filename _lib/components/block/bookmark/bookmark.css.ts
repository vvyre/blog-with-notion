import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  backgroundColor: THEMES.white,
  padding: '0.1rem',
  marginBottom: '1rem',
  borderRadius: '1.15rem',
  border: `4px solid ${THEMES.white}`,
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.highlight}`,
    },
  },
});

export const INNER = style({
  padding: '1.05rem',
  borderRadius: '1rem',
  border: `2px solid ${THEMES.light_b3}`,
});
