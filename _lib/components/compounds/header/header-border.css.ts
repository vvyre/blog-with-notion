import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const SCROLLED = style({
  width: '100%',
  height: '0.5rem',
  borderTop: `1px solid ${THEMES.light_b3}`,
});

export const NORMAL = style({
  width: '100%',
  height: '0.5rem',
  borderTop: '1px solid transparent',
});
