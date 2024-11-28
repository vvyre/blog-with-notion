import { vars } from '@/_lib/styles/themes.css';
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
  color: vars.color.gray,
  fontSize: '0.9rem',
  padding: '0.5rem',
  backgroundColor: vars.color.b1,
});
