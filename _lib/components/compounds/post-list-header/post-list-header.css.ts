import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const CATEGORY = style({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginRight: '1rem',
  cursor: 'pointer',
  fontFeatureSettings: '"case"',
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
    },
  },
});
