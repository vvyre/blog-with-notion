import { style } from '@vanilla-extract/css';

export const BASE_GRID = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  maxWidth: '105rem',
  padding: '0 3rem 0 3rem',
  rowGap: '0.25rem',
  columnGap: '0.25rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(6, auto)',
      padding: '0 1.5rem 0 1.5rem',
    },
  },
});
