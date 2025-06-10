import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { TITLES } from 'styles/fonts.css'
import { vars } from 'styles/themes.css'

export const BASE = style({
  paddingInline: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '1rem 1rem 1rem 1rem',
})

export const SITE_TITLE = style({
  fontSize: TYPOGRAPHY.XXL.fontSize,
  fontWeight: 900,
  fontFamily: TITLES,
  color: vars.color.white,
  textTransform: 'uppercase',
  lineHeight: 1,
})

export const SITE_DESCRIPTION = style({
  fontSize: TYPOGRAPHY.L.fontSize,
  fontWeight: 400,
  color: vars.color.white,
  lineHeight: 1.4,
})
