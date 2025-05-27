import { style } from '@vanilla-extract/css'
import { RELEASED_DATE } from '../post-list/post-list.css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'

export const BASE = style({
  marginTop: '2rem',
  marginBottom: '3rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SECTION_TITLE = style({
  fontSize: TYPOGRAPHY.L.fontSize,
  color: vars.color.default,
  fontWeight: 600,
  textAlign: 'center',
})

export const UL = style({
  listStyleType: 'none',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.5rem',
})

export const POST_LIST = style([
  {
    display: 'inline-block',
    width: '100%',
    gap: '0.75rem',
    textAlign: 'left',
  },
])

export const TITLE = style({
  display: 'inline-block',
  width: '100%',
  fontSize: TYPOGRAPHY.S.fontSize,
  color: vars.color.default,
  fontWeight: 400,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '0.25rem',
      },
    },
  },
})

export const DATE = style([
  RELEASED_DATE,
  {
    color: `${vars.color.gray} !important`,
  },
])
