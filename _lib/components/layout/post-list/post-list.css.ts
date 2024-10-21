import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { code } from '@/_lib/styles/fonts.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { TEXT_STYLE } from '../../typography/typography.css';

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
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const POST_LINK = style({
  display: 'flex',
  padding: '0.8rem 1rem 0.8rem 1rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: THEMES.default,
  '@media': {
    '(0 <= width <= 768px)': {
      width: '100%',
      padding: '1rem',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.default}`,
    },
    '&:active': {
      outline: `1px solid ${THEMES.default}`,
    },
  },
});

export const POST_TITLE = style([
  TEXT_STYLE.S,
  {
    cursor: 'pointer',
    fontWeight: 500,
    textTransform: 'uppercase',
    width: '100%',

    '@media': {
      '(0 <= width <= 768px)': {},
    },
  },
]);

export const POST_SUMMARY = style([
  TEXT_STYLE.XXS,
  {
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
    fontSize: '0.75rem',
    wordSpacing: '-0.3rem',
    color: THEMES.gray,
    fontFamily: code,
    cursor: 'pointer',
    fontWeight: 400,
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
]);

export const POST_CATEGORY = style([
  TEXT_STYLE.XXS,
  {
    fontWeight: 400,
    color: COLORS.gray,
  },
]);

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
