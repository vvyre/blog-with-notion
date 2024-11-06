import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const POST_LIST_CENTERED = style([
  {
    background: 'transparent',
    lineHeight: 1.65,
    height: '100%',
    width: '100vw',
    maxWidth: '70rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media': {
      '(0px <= width <= 700px)': {
        flexDirection: 'column',
      },
    },
  },
]);

//LEGACY
export const POST_LIST_GRID = style([
  {
    marginTop: '5rem',
    gridTemplateRows: 'repeat(auto-fill, minmax(128px, 1fr))',
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
