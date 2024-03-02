import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const CODE_BLOCK = style({
  backgroundColor: THEMES.light_b1,
  borderRadius: '1rem',
  padding: '1.25rem',
  marginBottom: '1rem',
});
export const CODE_LANGUAGE = style({
  fontFeatureSettings: '"calt", "case"',
  fontSize: '0.85rem',
  fontWeight: 600,
});
export const CODE_PRE = style({
  overflowX: 'auto',
});
