import { vars } from 'styles/themes.css'
import { style } from '@vanilla-extract/css'

const LAYOUT = style({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LAYOUT_BG = style([
  LAYOUT,
  {
    position: 'relative',
    width: '100%',
    height: '100dvh',
    backgroundColor: 'transparent',
  },
])

export const LAYOUT_CANVAS = style([{}])

export const LAYOUT_INNER = style([
  LAYOUT,
  {
    backgroundColor: 'transparent',
  },
])

export const POST_LAYOUT = style({
  width: '100%',
  height: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
})

export const LAYOUT_FILTER = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    backgroundColor: vars.color.background_filter,
  },
])

export const OVERFLOW = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
})

export const FLEX = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
