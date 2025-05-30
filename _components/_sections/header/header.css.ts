import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'

export const BASE = style({
  paddingInline: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  backgroundColor: vars.color.white,
  width: '100%',
  padding: '0.75rem 1rem 1rem 1rem',
})

export const SITE_TITLE = style({
  fontSize: TYPOGRAPHY.XXXL.fontSize,
  fontWeight: 500,
  color: vars.color.blacktext,
  lineHeight: 1,
})

export const SITE_DESCRIPTION = style({
  fontSize: TYPOGRAPHY.L.fontSize,
  fontWeight: 400,
  color: vars.color.blacktext,
  lineHeight: 1.4,
})
