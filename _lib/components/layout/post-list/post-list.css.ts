import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const GRID_SPAN = style({
  gridColumn: 'span 4',
  '@media': {
    '(0 <= width <= 768px)': {
      gridColumn: 'span 3',
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
  cursor: 'pointer',
  color: THEMES.gray,
  selectors: {
    '&:hover': {
      color: THEMES.default,
    },
  },
});

export const POST_TITLE = style([
  {
    color: THEMES.default,
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.05rem',
    lineHeight: '1.3',
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const POST_SUMMARY = style([
  {
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '0.85rem',
    lineHeight: '1.3',
    '@media': {
      '(0 <= width <= 768px)': {
        fontSize: '0.8rem',
      },
    },
  },
]);

export const POST_BOX_BORDER = styleVariants({
  default: { borderTop: `2px solid ${COLORS.default}` },
  blue: { borderTop: `2px solid ${COLORS.blue}` },
  blue_background: { borderTop: `2px solid ${COLORS.blue_background}` },
  brown: { borderTop: `2px solid ${COLORS.brown}` },
  brown_background: { borderTop: `2px solid ${COLORS.brown_background}` },
  gray: { borderTop: `2px solid ${COLORS.gray}` },
  gray_background: { borderTop: `2px solid ${COLORS.gray_background}` },
  green: { borderTop: `2px solid ${COLORS.green}` },
  green_background: { borderTop: `2px solid ${COLORS.gray_background}` },
  orange: { borderTop: `2px solid ${COLORS.orange}` },
  orange_background: { borderTop: `2px solid ${COLORS.orange_background}` },
  pink: { borderTop: `2px solid ${COLORS.pink}` },
  pink_background: { borderTop: `2px solid ${COLORS.pink_background}` },
  purple: { borderTop: `2px solid ${COLORS.purple}` },
  purple_background: { borderTop: `2px solid ${COLORS.purple_background}` },
  red: { borderTop: `2px solid ${COLORS.red}` },
  red_background: { borderTop: `2px solid ${COLORS.red_background}` },
  yellow: { borderTop: `2px solid ${COLORS.yellow}` },
  yellow_background: { borderTop: `2px solid ${COLORS.yellow_background}` },
});

export const POST_CATEGORY_TEXT = style({
  fontSize: '0.85rem',
  fontWeight: 400,
  color: THEMES.gray,
});
