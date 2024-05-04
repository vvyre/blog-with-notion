import { THEMES } from '@/_lib/styles/colors.css';
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
  textDecoration: 'underline',
  textUnderlineOffset: '0.5rem',
  textDecorationColor: THEMES.theme,
  textDecorationThickness: '3px',
});

export const CATEGORY = style({
  cursor: 'pointer',
  padding: '0.25rem 1rem 0.25rem 1rem',
  border: 'none',
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.5rem',
      textDecorationColor: THEMES.gray,
    },
  },
});

export const FALLBACK = style({});
