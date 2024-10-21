import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const CALLOUT = style({
  backgroundColor: THEMES.light_b2,
  padding: '1.25rem',
  marginBottom: '1rem',
});

export const CALLOUT_EMOJI = style({
  marginRight: '0.25rem',
});
