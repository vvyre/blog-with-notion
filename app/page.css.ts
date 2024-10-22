import { style } from '@vanilla-extract/css';

export const LAYOUT = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '-3rem',
  minHeight: 'calc(100vh + 3rem)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FLEX = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
