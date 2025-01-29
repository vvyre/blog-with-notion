import { MONOSPACE } from '@/_lib/styles/fonts.css'
import { style } from '@vanilla-extract/css'

export const BASE = style([
  {
    width: '100%',
    marginBottom: '1.5rem',
  },
])

export const FOOTER_LINK = style({
  fontSize: '0.8rem',
  textAlign: 'center',
})

export const FOOTER_COPYRIGHT = style({
  fontFamily: MONOSPACE,
  fontWeight: 700,
  wordSpacing: '-0.2rem',
  fontSize: '0.7rem',
  textAlign: 'center',
})
