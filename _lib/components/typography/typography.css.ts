import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const TEXT_STYLE = styleVariants({
  XXXL: {
    fontSize: '2.75rem',
    fontWeight: 600,
  },
  XXL: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  L: {
    fontSize: '1.15rem',
    fontWeight: 500,
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
    fontWeight: 500,
  },
});

export const BOLD = style({
  fontWeight: 600,
});

export const ITALIC = style({
  fontStyle: 'italic',
});

export const CODE = style({
  fontSize: '0.85rem',
  padding: '0.1rem 0.25rem 0.1rem 0.25rem',
  borderRadius: '0.25rem',
  border: 'none',
  backgroundColor: THEMES.light_b2,
  color: THEMES.highlight,
});

export const STRIKE = style({});

export const UNDERLINE = style({});

export const LINK = style({
  textDecoration: 'underline',
  color: THEMES.gray,
  textUnderlineOffset: '0.2rem',
});
