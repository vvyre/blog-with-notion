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
    fontSize: '4.5rem',
    fontWeight: 900,
  },
  XXL: {
    fontSize: '2.25rem',
    fontWeight: 700,
  },
  XL: {
    fontSize: '1.45rem',
    fontWeight: 600,
  },
  L: {
    fontSize: '1.3rem',
    fontWeight: 500,
  },
  M: {
    fontSize: '1.075rem',
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
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  XXXS: {
    fontSize: '0.8rem',
    fontWeight: 400,
  },
}

export const TEXT_STYLE = styleVariants(TYPOGRAPHY)

export const BOLD = style({
  fontWeight: 500,
})

export const ITALIC = style({
  fontStyle: 'italic',
})

export const CODE = style({
  verticalAlign: 'text-top',
  fontSize: '0.8em',
  padding: '0.1rem 0.3rem 0.1rem 0.3rem',
  margin: '0 0.12rem 0 0.12rem',
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
