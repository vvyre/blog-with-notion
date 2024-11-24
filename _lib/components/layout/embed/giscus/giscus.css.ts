import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100%',
  marginTop: '1rem',
  marginBottom: '2rem',
});

export const FALLBACK_BASE = style({
  marginTop: '3rem',
  marginBottom: '2rem',
});

export const FALLBACK = style({
  textAlign: 'center',
  color: COLORS.gray,
  fontSize: '0.9rem',
  padding: '0.5rem',
  backgroundColor: THEMES.light_b1,
});
