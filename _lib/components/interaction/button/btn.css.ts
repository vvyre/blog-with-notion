import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  cursor: 'pointer',
  borderRadius: '0.5rem',
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.highlight}`,
    },
  },
});
