import { style } from '@vanilla-extract/css';

export const BASE_GRID = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(12, 1fr)',
  maxWidth: '105rem',
  rowGap: '0.5rem',
  columnGap: '0.5rem',
  '@media': {
    '(0 <= width <= 768px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
});

export const BASE_PADDING = style({
  paddingRight: '3rem',
  paddingLeft: '3rem',
  '@media': {
    '(0 <= width <= 768px)': {
      paddingRight: '1.5rem',
      paddingLeft: '1.5rem',
    },
  },
});
