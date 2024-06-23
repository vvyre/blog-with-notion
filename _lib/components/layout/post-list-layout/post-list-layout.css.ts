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

export const POST_LIST_CENTERED = style([
  BASE_PADDING,
  {
    maxWidth: '45rem',
    width: '100%',
    margin: '0 0 5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
]);

export const SELECTED = style({
  border: `1px solid ${THEMES.highlight}`,
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      border: `1px solid ${THEMES.highlight}`,
    },
  },
});

export const NOT_SELECTED = style({
  backgroundColor: 'transparent',
  color: COLORS.gray,
  border: `1px solid transparent`,
  selectors: {
    '&:hover': {
      border: `1px solid ${COLORS.gray_background}`,
    },
  },
});

export const CATEGORY = style({
  cursor: 'pointer',
  padding: '0.25rem 0.7rem 0.25rem 0.7rem',
  borderRadius: '0.75rem',
  transition: '0.2s',
});

export const FALLBACK = style({});
