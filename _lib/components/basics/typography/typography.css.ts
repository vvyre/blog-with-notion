import { vars } from '@/_lib/styles/themes.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const TEXT_COLOR_THEME_VARIANT = styleVariants({
  LIGHT: {
    color: vars.color.white,
  },
  DARK: {
    color: vars.color.blueblack,
  },
});

export const TEXT_COLOR_WITH_THEME_HOVER_VARIANT = styleVariants({
  LIGHT: {
    color: vars.color.white,
    selectors: {
      '&:hover': {
        color: vars.color.blueblack,
      },
      '&:active': {
        color: vars.color.blueblack,
      },
    },
  },
  DARK: {
    color: vars.color.blueblack,
    selectors: {
      '&:hover': {
        color: vars.color.white,
      },
      '&:active': {
        color: vars.color.white,
      },
    },
  },
});

export const TYPOGRAPHY = {
  XXXL: {
    fontSize: '4.5rem',
    fontWeight: 900,
  },
  XXL: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  XL: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  L: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  M: {
    fontSize: '1.05rem',
    fontWeight: 400,
  },
  S: {
    fontSize: '0.975rem',
    fontWeight: 400,
  },
  XS: {
    fontSize: '0.925rem',
    fontWeight: 400,
  },
  XXS: {
    fontSize: '0.85rem',
    fontWeight: 400,
  },
  XXXS: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
};

export const TEXT_STYLE = styleVariants(TYPOGRAPHY);

export const BOLD = style({
  fontWeight: 600,
});

export const ITALIC = style({
  fontStyle: 'italic',
});

export const CODE = style({
  verticalAlign: 'text-bottom',
  fontSize: '0.825rem',
  padding: '0.1rem 0.25rem 0.1rem 0.25rem',
  borderRadius: vars.border.radius.card,
  border: 'none',
  backgroundColor: vars.color.b2,
});

export const STRIKE = style({});

export const UNDERLINE = style({
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  textDecorationThickness: '1px',
});

export const LINK = style({
  textDecoration: 'underline',
  color: `${vars.color.gray}`,
  textUnderlineOffset: '0.25rem',
  textDecorationThickness: '1px',
  transition: 'color 0.2s ease',
  fontSize: TYPOGRAPHY.M.fontSize,
  selectors: {
    '&:hover': {
      color: vars.color.highlight,
    },
  },
});
