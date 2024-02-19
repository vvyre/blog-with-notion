import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  width: '100vw',
  height: 'fit-content',
  padding: '0.5rem 0 0.5rem 0',
  backgroundColor: THEMES.white,
  position: 'sticky',
  zIndex: '999',
  top: 0,
});

export const MENU = style({
  marginLeft: '0.5rem',
  backgroundColor: 'transparent',
  fontWeight: 500,
});
