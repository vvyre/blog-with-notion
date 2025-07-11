import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'

export const BASE = style({
  padding: '0.1rem 0.5rem 0.1rem 0.5rem',
  borderRadius: vars.border.radius.btn_square,
  backgroundColor: vars.color.btn_bg,
  color: vars.color.default,
  fontSize: TYPOGRAPHY.XXS.fontSize,
  fontWeight: 500,
  selectors: {
    '&:before': {
      content: '#',
    },
  },
})

export const TAG_BASE = style({
  cursor: 'default',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'inline-flex',
  gap: '0.25rem',
  flexWrap: 'wrap',
  alignItems: 'center',
})
