import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID, BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const POST_LIST_GRID = style([
  BASE_GRID,
  BASE_PADDING,
  {
    marginTop: '5rem',
    gridTemplateRows: 'repeat(auto-fill, minmax(128px, 1fr))',
  },
]);

export const POST_LIST_CENTERED = style([BASE_PADDING]);

export const SELECTED = style({
  backgroundColor: THEMES.light_b2,
});

export const NOT_SELECTED = style({
  backgroundColor: 'transparent',
  color: COLORS.gray,
});

export const CATEGORY = style({
  cursor: 'pointer',
  padding: '0.25rem 0.7rem 0.25rem 0.7rem',
  border: 'none',
  borderRadius: '0.75rem',
  selectors: {
    '&:hover': {
      backgroundColor: THEMES.light_b2,
    },
  },
});

export const FALLBACK = style({});
