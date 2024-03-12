import { style } from '@vanilla-extract/css';

export const BASE_GRID = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(12, 1fr)',
  maxWidth: '105rem',
  rowGap: '0.25rem',
  columnGap: '0.25rem',
  '@media': {
    '(0 <= width <= 768px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
});
