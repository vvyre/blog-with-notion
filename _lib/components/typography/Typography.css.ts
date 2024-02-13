import { COLORS } from '@/_lib/styles/colors';
import { style, styleVariants } from '@vanilla-extract/css';

export const TEXT_COLORS = styleVariants({
  default: { color: COLORS.default },
  blue: { color: COLORS.default },
  blue_background: { backgroundColor: COLORS.default },
  brown: { color: COLORS.default },
  brown_background: { backgroundColor: COLORS.default },
  gray: { color: COLORS.default },
  gray_background: { backgroundColor: COLORS.default },
  green: { color: COLORS.default },
  green_background: { backgroundColor: COLORS.default },
  orange: { color: COLORS.default },
  orange_background: { backgroundColor: COLORS.default },
  pink: { color: COLORS.default },
  pink_background: { backgroundColor: COLORS.default },
  purple: { color: COLORS.default },
  purple_background: { backgroundColor: COLORS.default },
  red: { color: COLORS.default },
  red_background: { backgroundColor: COLORS.default },
  yellow: { color: COLORS.default },
  yellow_background: { backgroundColor: COLORS.default },
});

export const TEXT_STYLE = styleVariants({
  XXL: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  L: {
    fontSize: '1.25rem',
    fontWeight: 300,
  },
  M: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  S: {
    fontSize: '1rem',
    fontWeight: 300,
  },
});
