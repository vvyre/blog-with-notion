import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const GRID_SPAN = style({
  gridColumn: 'span 12',
  '@media': {
    '(0 <= width <= 768px)': {
      gridColumn: 'span 6',
    },
  },
});

export const POST_BOX = style({
  fontFeatureSettings: '"calt"',
});

export const POST_THUMBNAIL = style({
  width: '100%',
  height: '12rem',
  backgroundColor: THEMES.light_b1,
  borderRadius: '0.25rem',
});

export const POST_TEXT = style({
  color: THEMES.gray,
  selectors: {
    '&:hover': {
      color: THEMES.default,
    },
  },
});

export const POST_LINK = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  color: THEMES.default,
  transition: 'color 0.15s',
});

export const POST_TITLE = style([
  {
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '2.25rem',
    lineHeight: '1.3',
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '1.75rem',
      },
    },
  },
]);

export const POST_SUMMARY = style([
  {
    fontSize: '0.9rem',
    color: THEMES.gray,
    cursor: 'pointer',
    fontWeight: '400',
  },
]);

export const RELEASED_DATE = style([
  {
    fontSize: '0.85rem',
    color: THEMES.gray,
    cursor: 'pointer',
    fontWeight: '400',
  },
]);

export const POST_CATEGORY_TEXT = style({
  fontSize: '0.9rem',
  fontWeight: 400,
});

export const HOVER_TEXT = styleVariants({
  default: { selectors: { '&:hover': { color: COLORS.default } } },
  blue: { selectors: { '&:hover': { color: COLORS.blue } } },
  blue_background: { selectors: { '&:hover': { color: COLORS.blue_background } } },
  brown: { selectors: { '&:hover': { color: COLORS.brown } } },
  brown_background: { selectors: { '&:hover': { color: COLORS.brown_background } } },
  gray: { selectors: { '&:hover': { color: COLORS.gray } } },
  gray_background: { selectors: { '&:hover': { color: COLORS.gray_background } } },
  green: { selectors: { '&:hover': { color: COLORS.green } } },
  green_background: { selectors: { '&:hover': { color: COLORS.gray_background } } },
  orange: { selectors: { '&:hover': { color: COLORS.orange } } },
  orange_background: { selectors: { '&:hover': { color: COLORS.orange_background } } },
  pink: { selectors: { '&:hover': { color: COLORS.pink } } },
  pink_background: { selectors: { '&:hover': { color: COLORS.pink_background } } },
  purple: { selectors: { '&:hover': { color: COLORS.purple } } },
  purple_background: { selectors: { '&:hover': { color: COLORS.purple_background } } },
  red: { selectors: { '&:hover': { color: COLORS.red } } },
  red_background: { selectors: { '&:hover': { color: COLORS.red_background } } },
  yellow: { selectors: { '&:hover': { color: COLORS.yellow } } },
  yellow_background: { selectors: { '&:hover': { color: COLORS.yellow_background } } },
});
