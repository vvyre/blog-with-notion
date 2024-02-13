import { styleVariants } from '@vanilla-extract/css';

export const COLORS = {
  blue: ' ',
  blue_background: ' ',
  brown: ' ',
  brown_background: ' ',
  default: '#303336',
  gray: '#808386',
  gray_background: '#F0F1F4',
  green: ' ',
  green_background: ' ',
  orange: '#FA5A15',
  orange_background: ' ',
  pink: ' ',
  pink_background: ' ',
  purple: ' ',
  purple_background: ' ',
  red: ' ',
  red_background: ' ',
  yellow: ' ',
  yellow_background: ' ',
};

export const THEMES = {
  theme: '#13D483',
  highlight: COLORS.orange,
  light_b1: '#F7F8FA',
  light_b2: '#E0E1E3',
  light_b3: '#DFE4E8',
};

export const COLOR_STYLE_VARIANTS = styleVariants({
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
