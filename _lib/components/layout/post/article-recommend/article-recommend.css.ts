import { style } from '@vanilla-extract/css'
import { RELEASED_DATE } from '../post-list/post-list.css'
import { BASE as BTN_BASE } from '@/_lib/components/basics/button/btn.css'
import { TYPOGRAPHY } from '@/_lib/components/basics/typography/typography.css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style({
  marginTop: '2rem',
  marginBottom: '3rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const UL = style({
  listStyleType: 'none',
  width: '100%',
})

export const POST_LIST = style([
  BTN_BASE,
  {
    width: '100%',
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
])

export const TITLE = style({
  textAlign: 'center',
  width: '100%',
  fontSize: TYPOGRAPHY.XS.fontSize,
  color: vars.color.default,
  fontWeight: 500,
})

export const DATE = style([
  RELEASED_DATE,
  {
    color: `${vars.color.gray} !important`,
  },
])
