import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { JETBRAINS_MONO } from '@/public/fonts/fonts.css';

export const BASE = style({
  marginLeft: '0.35rem',
  color: COLORS.gray,
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const PARAGRAPH_SHARE = style({
  fontFamily: JETBRAINS_MONO,
  fontWeight: '900',
  fontSize: '1.05rem',
  color: THEMES.lightgray,
  selectors: {
    '&:hover': {
      color: COLORS.gray,
    },
  },
});

export const TEXT_COLOR_GREEN = style({
  color: COLORS.green,
  selectors: {
    '&:hover': {
      color: COLORS.green,
    },
  },
});

export const NAV_BASE = style([
  BASE,
  {
    margin: 0,
  },
]);
