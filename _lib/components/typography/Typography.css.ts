import { COLORS } from '@/_lib/styles/colors.css';
import { styleVariants } from '@vanilla-extract/css';

export const TEXT_STYLE = styleVariants({
  XXL: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  L: {
    fontSize: '1.25rem',
    fontWeight: 300,
  },
  M: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  S: {
    fontSize: '1rem',
    fontWeight: 300,
  },
});
