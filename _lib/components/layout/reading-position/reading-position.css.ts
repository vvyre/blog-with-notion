import { style } from '@vanilla-extract/css';

export const BASE = style({
  zIndex: '99999',
  position: 'fixed',
  width: '2.25rem',
  height: `2.25rem`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'transparent',
  borderRadius: '2rem',
  backgroundColor: 'transparent',
  bottom: '50%',
  right: '0.75rem',
  '@media': {
    '(0 <= width <= 500px)': {
      bottom: '1rem',
    },
  },
});

export const INNER = style({
  border: 'none',
  borderRadius: '2rem',
  transition: 'all 0.1s ease-in-out',
});
