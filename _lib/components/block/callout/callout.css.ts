import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const CALLOUT = style({
  backgroundColor: THEMES.light_b2,
  borderRadius: '1rem',
  padding: '0.75rem 1.25rem 1.25rem 1.25rem',
  marginBottom: '1rem',
});
export const CALLOUT_TEXT = style({
  fontSize: '0.925rem',
});
