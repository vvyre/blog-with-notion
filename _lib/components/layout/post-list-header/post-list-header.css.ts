import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_PADDING } from '@/_lib/styles/grid.css';
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

export const BASE = style([BASE_PADDING, {}]);

export const HEADER_TEXT = style({
  fontSize: '8rem',
  fontWeight: 700,
  color: THEMES.white,
  backgroundColor: THEMES.default,
  padding: '0.5rem',
});
