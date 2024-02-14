import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100%',
  height: '3.5rem',
  backgroundColor: THEMES.white,
  position: 'sticky',
  top: 0,
});

export const FLEX = style({
  width: '75%',
  maxWidth: '1200px',
});

export const MENU = style({
  marginLeft: '0.5rem',
  backgroundColor: 'transparent',
});
