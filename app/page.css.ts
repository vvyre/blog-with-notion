import { style } from '@vanilla-extract/css';

export const LAYOUT = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 0 200px rgba(0,0,0,0.12) inset',
});
