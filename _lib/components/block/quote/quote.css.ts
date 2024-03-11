import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  borderLeft: `2px solid ${THEMES.light_b3}`,
  marginLeft: '0.5rem',
  paddingLeft: '0.5rem',
  marginBottom: '1rem',
});
