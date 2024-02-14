import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontSize: '0.9rem',
  fontWeight: 400,
  marginLeft: '0.35rem',
  color: COLORS.gray,
  cursor: 'pointer',
  fontFeatureSettings: '"case"',
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
    },
  },
});
