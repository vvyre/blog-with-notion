import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  margin: 0,
  color: THEMES.highlight,
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  fontSize: '0.9rem',
  wordSpacing: '-0.275rem',
  borderRadius: '2rem',
  cursor: 'pointer',
});
