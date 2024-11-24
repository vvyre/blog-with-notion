import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  cursor: 'pointer',
  padding: '0.15rem 0.75rem 0.15rem 0.75rem',
  borderRadius: '0.3rem',
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  backgroundBlendMode: 'exclusion',
  color: THEMES.gray,
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(240,240,241,0.5)',
    },
    '&:active': {
      backgroundColor: 'rgba(240,240,241,0.5)',
    },
  },
});
