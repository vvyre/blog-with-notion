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

export const POST_LIST_BASE = style({
  cursor: 'pointer',
  color: THEMES.default,
  padding: '2rem',
  marginBottom: '1rem',
  border: '1px solid transparent',
  borderRadius: '1.5rem',
  width: '66vw',
  maxWidth: '640px',
  '@media': {
    '(0 <= width <= 768px)': {
      border: '1px solid transparent',
      borderRadius: '0',
      padding: '1.5rem',
      width: '100vw',
      maxWidth: '100vw',
    },
  },
  selectors: {
    '&:hover': {
      backgroundColor: THEMES.light_b1,
    },
  },
  transition: 'all 0.3s',
});

export const POST_LINK = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flexStart',
  width: '66vw',
  '@media': {
    '(0 <= width <= 768px)': {
      width: '100vw',
    },
  },
});

export const POST_TITLE = style([
  {
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.25',
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '1.25rem',
      },
    },
  },
]);

export const POST_SUMMARY = style([
  {
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 400,
    color: COLORS.gray,
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const RELEASED_DATE = style([
  {
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontWeight: 400,
    fontFeatureSettings: '"calt"',
    color: COLORS.gray,
  },
]);

export const POST_CATEGORY = style({
  fontSize: '0.85rem',
  fontWeight: 400,
  color: COLORS.gray,
});

export const HOVER_TEXT = styleVariants({
  default: { selectors: { '&:hover': { backgroundColor: COLORS.default } } },
  blue: { selectors: { '&:hover': { backgroundColor: COLORS.blue } } },
  blue_background: { selectors: { '&:hover': { backgroundColor: COLORS.blue_background } } },
  brown: { selectors: { '&:hover': { backgroundColor: COLORS.brown } } },
  brown_background: { selectors: { '&:hover': { backgroundColor: COLORS.brown_background } } },
  gray: { selectors: { '&:hover': { backgroundColor: COLORS.gray } } },
  gray_background: { selectors: { '&:hover': { backgroundColor: COLORS.gray_background } } },
  green: { selectors: { '&:hover': { backgroundColor: COLORS.green } } },
  green_background: { selectors: { '&:hover': { backgroundColor: COLORS.gray_background } } },
  orange: { selectors: { '&:hover': { backgroundColor: COLORS.orange } } },
  orange_background: { selectors: { '&:hover': { backgroundColor: COLORS.orange_background } } },
  pink: { selectors: { '&:hover': { backgroundColor: COLORS.pink } } },
  pink_background: { selectors: { '&:hover': { backgroundColor: COLORS.pink_background } } },
  purple: { selectors: { '&:hover': { backgroundColor: COLORS.purple } } },
  purple_background: { selectors: { '&:hover': { backgroundColor: COLORS.purple_background } } },
  red: { selectors: { '&:hover': { backgroundColor: COLORS.red } } },
  red_background: { selectors: { '&:hover': { backgroundColor: COLORS.red_background } } },
  yellow: { selectors: { '&:hover': { backgroundColor: COLORS.yellow } } },
  yellow_background: { selectors: { '&:hover': { backgroundColor: COLORS.yellow_background } } },
});
