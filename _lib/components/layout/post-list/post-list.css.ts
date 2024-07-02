import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { code } from '@/_lib/styles/fonts.css';
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
  width: '100vw',
  maxWidth: '41rem',
});

export const POST_LINK = style({
  display: 'flex',
  padding: '0.35rem 0.75rem 0.35rem 0.75rem',
  marginBottom: '0.5rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '41rem',
  color: THEMES.default,
  borderRadius: '0.5rem',
  transition: 'all 0.1s ease',
  '@media': {
    '(0 <= width <= 768px)': {
      width: '100%',
      padding: '0.75rem 1rem 0.75rem 1rem',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  selectors: {
    '&:hover': {
      backgroundColor: THEMES.light_b1,
    },
    '&:active': {
      backgroundColor: THEMES.light_b2,
    },
  },
});

export const POST_TITLE = style([
  {
    cursor: 'pointer',
    fontWeight: 600,
    textTransform: 'uppercase',
    width: '100%',
    fontSize: '0.95rem',
    '@media': {
      '(0 <= width <= 768px)': {},
    },
  },
]);

export const POST_SUMMARY = style([
  {
    fontSize: '0.85rem',
    cursor: 'pointer',
    fontWeight: 400,
    width: '100%',
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const RELEASED_DATE = style([
  {
    fontSize: '0.8rem',
    color: THEMES.gray,
    fontFamily: code,
    cursor: 'pointer',
    fontWeight: 400,
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
]);

export const POST_CATEGORY = style({
  fontSize: '0.8rem',
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
