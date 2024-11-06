import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';
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
  display: 'inline-flex',

  justifyContent: 'center',
});

export const POST_LINK = style({
  display: 'inline-flex',
  padding: '0.35rem 0.85rem 0.35rem 0.85rem',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: THEMES.white,
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: THEMES.white,
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: THEMES.white,
    },
  },
  '@media': {
    '(0px <= width <= 700px)': {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'calc(100vw - 1.7rem)',
    },
  },
});

export const POST_TITLE = style([
  TEXT_STYLE.L,
  {
    cursor: 'pointer',
    '@media': {
      '(0px <= width <= 700px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const POST_SUMMARY = style([
  TEXT_STYLE.XXS,
  {
    cursor: 'pointer',
    width: '100%',
    '@media': {
      '(0 <= width <= 700px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const RELEASED_DATE = style([
  TEXT_STYLE.XXXS,
  {
    wordSpacing: '-0.3rem',
    color: THEMES.light_b2,
    fontFamily: fontFamilyCode,
    cursor: 'pointer',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
]);

export const POST_CATEGORY = style([
  TEXT_STYLE.XXS,
  {
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
