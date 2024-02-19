import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  position: 'absolute',
  bottom: 0,
});
export const SCROLLED = style({
  width: '100%',
  height: '1px',
  borderBottom: `1px solid ${THEMES.light_b3}`,
});

export const NORMAL = style({
  width: '100%',
  height: '1px',
  borderBottom: '1px solid transparent',
});
