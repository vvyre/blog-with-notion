import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginTop: '5rem',
  borderTop: `1px solid ${THEMES.light_b3}`,
  padding: '2rem 2rem 5rem 2rem',
  width: '100%',
  minHeight: '10rem',
});
