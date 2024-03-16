import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
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

export const BASE = style([
  BASE_PADDING,
  BASE_GRID,
  {
    marginTop: '6rem',
  },
]);

export const PROFILE_TEXT_PLACEMENT = style({
  gridColumnStart: '4',
  gridColumnEnd: '13',
  '@media': {
    '(0 <= width <= 768px)': {
      gridColumnStart: '1',
      gridColumnEnd: '7',
    },
  },
});

export const PROFILE_TEXT = style({
  fontSize: '8rem',
  fontWeight: 700,
  color: THEMES.white,
  backgroundColor: THEMES.default,
  padding: '0.5rem',
});
