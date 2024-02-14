import { THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const LINK = style({
  display: 'block',
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  borderRadius: '0.5rem',
  backgroundColor: THEMES.light_b2,
  fontFamily: jetbrainsMono,
  fontSize: '0.75rem',
});
