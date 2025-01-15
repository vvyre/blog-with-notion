import { style } from '@vanilla-extract/css';

export const BASE = style({
  zIndex: '99999',
  position: 'fixed',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  border: 'transparent',
  borderRadius: '3rem',
  backgroundColor: 'transparent',
  bottom: '50dvh',
  right: '0.75rem',
  overflow: 'hidden',
  '@media': {
    '(0 <= width <= 500px)': {
      width: '2rem',
      height: '2rem',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
});

export const INNER = style({
  position: 'absolute',
  border: 'none',
  transition: 'height 0.1s ease-in-out',
});
