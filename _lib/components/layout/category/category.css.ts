import { style, styleVariants } from '@vanilla-extract/css';
import { THEMES } from '@/_lib/styles/colors.css';
export const HOVER = style({
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem',
    },
  },
});
export const BASE = style([
  {
    margin: 0,
    padding: '0 0.75rem 0 0',
  },
]);
export const CATEGORY = styleVariants({
  selected: [
    BASE,
    {
      fontWeight: 900,
      textDecoration: 'underline',
      textDecorationStyle: 'double',
      textUnderlineOffset: '0.25rem',
    },
  ],
  options: [BASE, HOVER, {}],
});
