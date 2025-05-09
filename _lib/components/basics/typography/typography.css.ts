import { vars } from '@/_lib/styles/themes.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const TEXT_COLOR_THEME_VARIANT = styleVariants({
  LIGHT: {
    color: vars.color.white,
  },
  DARK: {
    color: vars.color.blueblack,
  },
})

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
})

export const TYPOGRAPHY = {
  XXXL: {
    fontSize: '2.75rem',
    fontWeight: 700,
  },
  XXL: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  XL: {
    fontSize: '1.15rem',
    fontWeight: 600,
  },
  L: {
    fontSize: '1.08rem',
    fontWeight: 500,
  },
  M: {
    fontSize: '0.95rem',
    fontWeight: 400,
  },
  S: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  XS: {
    fontSize: '0.825rem',
    fontWeight: 400,
  },
  XXS: {
    fontSize: '0.8rem',
    fontWeight: 400,
  },
  XXXS: {
    fontSize: '0.775rem',
    fontWeight: 400,
  },
}

export const TEXT_STYLE = styleVariants(TYPOGRAPHY)

export const BOLD = style({
  fontWeight: 600,
})

export const ITALIC = style({
  fontStyle: 'italic',
})

export const CODE = style({
  verticalAlign: 'text-top',
  fontSize: '0.715rem',
  padding: '0.2rem 0.5rem 0.2rem 0.5rem',
  letterSpacing: '0.02rem',
  fontWeight: 500,
  marginRight: '0.15rem',
  borderRadius: vars.border.radius.card,
  border: 'none',
  backgroundColor: vars.color.b1,
})

export const STRIKE = style({})

export const UNDERLINE = style({
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
  textDecorationThickness: '1px',
})

export const LINK = style([
  TYPOGRAPHY.M,
  {
    textDecoration: 'underline',
    color: `${vars.color.gray}`,
    textUnderlineOffset: '0.25rem',
    textDecorationThickness: '1px',
    selectors: {
      '&:hover': {
        color: vars.notion.blue,
      },
    },
  },
])
