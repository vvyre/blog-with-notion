import { style } from '@vanilla-extract/css'

export const BASE = style({
  width: '100%',
  maxWidth: '62rem',
  margin: '0 auto',
})

export const LAYOUT_CENTERED = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    margin: '0 auto',
  },
])
