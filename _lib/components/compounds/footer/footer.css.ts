import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginTop: '5rem',
  borderTop: `1px solid ${THEMES.light_b2}`,
  padding: '2rem 0 5rem 0',
  width: '100%',
  minHeight: '10rem',
});

export const FLEX = style({
  width: '75%',
  maxWidth: '1200px',
});
