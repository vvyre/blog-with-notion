import { THEMES } from '@/_lib/styles/colors.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const TEXT_STYLE = styleVariants({
  XXXL: {
    fontSize: '2.75rem',
    fontWeight: 700,
  },
  XXL: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  L: {
    fontSize: '1.25rem',
    fontWeight: 400,
  },
  M: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  S: {
    fontSize: '0.95rem',
    fontWeight: 400,
  },
  XS: {
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  XXS: {
    fontSize: '0.85rem',
    fontWeight: 400,
  },
});

export const BOLD = style({
  fontWeight: 600,
});

export const ITALIC = style({
  fontStyle: 'italic',
});

export const CODE = style({
  verticalAlign: 'text-bottom',
  fontSize: '0.82rem',
  padding: '0.1rem 0.25rem 0.1rem 0.25rem',
  borderRadius: '0.25rem',
  border: 'none',
  backgroundColor: THEMES.light_b2,
});

export const STRIKE = style({});

export const UNDERLINE = style({});

export const LINK = style({
  textDecoration: 'underline',
  color: THEMES.gray,
  textUnderlineOffset: '0.2rem',
  textDecorationThickness: '1px',
});
