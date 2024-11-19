import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { TEXT_STYLE } from '../../basics/typography/typography.css';

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
  marginBottom: '0.75rem',
  '@media': {
    '(0px <= width <= 700px)': {
      marginBottom: '0',
    },
  },
});

export const POST_LINK = style({
  display: 'inline-flex',
  padding: '0.5rem 1rem 0.5rem 1rem',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'rgba(255,255,0,0.85)',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: THEMES.white,
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: THEMES.white,
    },
  },
  '@media': {
    '(0px <= width <= 700px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 'calc(100vw - 1.7rem)',
    },
  },
});

export const POST_TITLE = style([
  {
    fontSize: '1.15rem',
    fontWeight: '600',
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
    color: THEMES.white,
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

export const FALLBACK = style({
  color: THEMES.white,
});
