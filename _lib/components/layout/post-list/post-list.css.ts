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
  padding: '1.5rem 2rem 1.5rem 2rem',
  border: '1px solid transparent',
  borderBottom: `1px solid ${COLORS.gray_background}`,
  width: '100vw',
  '@media': {
    '(0 <= width <= 768px)': {
      border: '1px solid transparent',
      padding: '1.5rem',
    },
  },
});

export const POST_LINK = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  color: THEMES.default,
  selectors: {
    '&:hover': {
      opacity: '0.5',
    },
  },
  transition: 'all 0.3s',
  '@media': {
    '(0 <= width <= 768px)': {
      width: '100vw',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
});

export const POST_TITLE = style([
  {
    cursor: 'pointer',
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '1.75rem',
    lineHeight: '1.25',
    width: '100%',
    wordSpacing: '-0.5rem',
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
    width: '100%',
    wordSpacing: '-0.325rem',
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
    wordSpacing: '-0.3rem',
  },
]);

export const POST_CATEGORY = style({
  fontSize: '0.85rem',
  fontWeight: 400,
  color: COLORS.gray,
  wordSpacing: '-0.25rem',
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
