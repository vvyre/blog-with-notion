import { style, styleVariants } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'
import { MONOSPACE } from 'styles/fonts.css'

export const BACKGROUND_BASE = styleVariants({
  isPost: {
    backgroundColor: 'transparent',
  },
  isMain: {
    backgroundColor: 'transparent',
  },
})
export const BASE = style({
  zIndex: '99999',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  left: '0',
  opacity: 0.85,
  top: '50%',
  transform: 'translateY(-50%)',
  '@media': {
    '(0 <= width <= 430px)': {
      border: `none`,
      width: '100%',
      top: 'calc(100% - 5rem)',
      flexDirection: 'row',
    },
  },
})

export const NAV_FLEX = styleVariants({
  isPost: {
    color: vars.color.default,
    borderRadius: vars.border.radius.card,
    height: '100%',
    width: '3.5rem',
    padding: '1rem 0.25rem 1rem 0.25rem',
    margin: '0.5rem',
    backgroundColor: vars.color.b1,
    '@media': {
      '(0 <= width <= 430px)': {
        borderRadius: vars.border.radius.card,
        height: '3rem',
        width: '100%',
        padding: '0.25rem 1rem 0.25rem 1rem',
        marginInline: '0.75rem',
        border: `none`,
      },
    },
  },
})

export const NAV = style({
  display: 'flex',
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

export const MENU_WRAPPER = style([
  {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    gap: '0.25rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: vars.color.default,
    fontSize: TYPOGRAPHY.L.fontSize,
    '@media': {
      '(0 <= width <= 430px)': {
        width: '100%',
        gap: 0,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: TYPOGRAPHY.S.fontSize,
      },
    },
  },
])

export const NAV_BTN = style([
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    fontFamily: MONOSPACE,
    textTransform: 'uppercase',
    wordSpacing: '-0.2rem',
    letterSpacing: '0.03rem',
    color: vars.color.default,
    padding: '0.5rem 0.75rem 0.5rem 0.75rem',
    fontSize: '0.85rem',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: vars.border.radius.list,
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
