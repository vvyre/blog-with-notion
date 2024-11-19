import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  cursor: 'pointer',
  padding: '0.25rem 0.75rem 0.25rem 0.75rem',
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.highlight}`,
    },
  },
});
