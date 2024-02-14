import { styleVariants } from '@vanilla-extract/css';

export const TEXT_STYLE = styleVariants({
  XXXL: {
    fontSize: '2.5rem',
    fontWeight: 600,
  },
  XXL: {
    fontSize: '2rem',
    fontWeight: 500,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  L: {
    fontSize: '1.25rem',
    fontWeight: 400,
  },
  M: {
    fontSize: '1.15rem',
    fontWeight: 400,
  },
  S: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  XS: {
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  XXS: {
    fontSize: '0.8rem',
    fontWeight: 500,
  },
});
