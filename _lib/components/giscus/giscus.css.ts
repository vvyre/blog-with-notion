import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100%',
  marginTop: '5rem',
  marginBottom: '3rem',
});

export const FALLBACK_BASE = style({
  marginTop: '4rem',
  marginBottom: '2rem',
});

export const FALLBACK = style({
  textAlign: 'center',
  color: COLORS.gray,
  fontSize: '0.9rem',
  borderRadius: '1rem',
  padding: '0.5rem',
  backgroundColor: THEMES.light_b1,
});
