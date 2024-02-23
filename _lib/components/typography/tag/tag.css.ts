import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontSize: '0.875rem',
  color: THEMES.default,
  padding: '0.2rem 0.7rem 0.2rem 0.7rem',
  marginRight: '0.25rem',
  borderRadius: '1rem',
  border: `1px solid ${THEMES.default}`,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
      border: `1px solid ${THEMES.highlight}`,
    },
  },
});
