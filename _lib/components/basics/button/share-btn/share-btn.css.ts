import { style } from '@vanilla-extract/css';
import { JETBRAINS_MONO } from '@/public/fonts/fonts.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style({
  marginLeft: '0.35rem',
  color: vars.color.gray,
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const PARAGRAPH_SHARE = style({
  fontFamily: JETBRAINS_MONO,
  fontWeight: '900',
  fontSize: '1.05rem',
  color: vars.color.lightgray,
  selectors: {
    '&:hover': {
      color: vars.notion.gray,
    },
  },
});

export const TEXT_COLOR_GREEN = style({
  color: vars.notion.green,
  selectors: {
    '&:hover': {
      color: vars.notion.green,
    },
  },
});

export const NAV_BASE = style([
  BASE,
  {
    margin: 0,
  },
]);
