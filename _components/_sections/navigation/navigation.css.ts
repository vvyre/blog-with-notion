import { style, styleVariants } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'
import { MONOSPACE } from 'styles/fonts.css'

export const BASE = style({
  height: '3rem',
  width: '100%',
  zIndex: '99999',
  padding: '0.4rem 2rem 0.4rem 2rem',
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  top: '0',
  backgroundColor: 'transparent',
  '@media': {
    '(0 <= width <= 430px)': {
      bottom: '0',
      padding: '0.4rem 1.5rem 0.4rem 1.5rem',
    },
  },
})

export const FILTER_VARIANT = styleVariants({
  isPost: {
    background: vars.color.b2,
    color: vars.color.default,
  },
})

export const NAV = style({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
})

export const EXPANDED = style({
  display: 'flex',
  position: 'fixed',
  top: '3rem',
  left: 0,
  alignItems: 'center',
  width: '100%',
  backgroundColor: vars.color.b1,
  height: '100dvh',
  zIndex: '9999',
})

export const HIDE = style({
  display: 'none',
})

export const BTN_WRAPPER = style({
  width: '100%',
  maxWidth: '10vw',
})

export const POST_TITLE_WRAPPER = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: vars.color.default,
    fontSize: TYPOGRAPHY.L.fontSize,
    '@media': {
      '(0 <= width <= 430px)': {
        fontSize: TYPOGRAPHY.S.fontSize,
      },
    },
  },
])

export const NAV_BTN = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    fontFamily: MONOSPACE,
    textTransform: 'uppercase',
    wordSpacing: '-0.2rem',
    letterSpacing: '0.03rem',
    color: vars.color.default,
    padding: vars.padding.btn_square,
    fontSize: '0.85rem',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: vars.border.radius.btn_square,
    outline: 'none',
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.btn_bg,
      },
    },
  },
])

export const HIDE_UNDER_430px = style({
  '@media': {
    '(0 <= width <= 430px)': {
      display: 'none',
    },
  },
})

export const HIDE_UNDER_500PX = style({
  '@media': {
    '(0 <= width <= 500px)': {
      display: 'none',
    },
  },
})

export const POST_TITLE = style([
  {
    backgroundColor: 'transparent',
    border: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'right',
    color: vars.color.default,
    fontWeight: 500,
    fontSize: TYPOGRAPHY.S.fontSize,
    '@media': {
      '(0 <= width <= 430px)': {
        fontSize: TYPOGRAPHY.XXS.fontSize,
      },
    },
  },
])

export const TEXT_COLOR = styleVariants({
  post: { color: vars.color.default },
  main: { color: vars.color.default },
})
