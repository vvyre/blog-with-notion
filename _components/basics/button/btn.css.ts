import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '../typography/typography.css'
import { vars } from 'styles/themes.css'

export const BASE = style({
  cursor: 'pointer',
  padding: vars.padding.btn_square,
  borderRadius: vars.border.radius.card,
  fontSize: TYPOGRAPHY.S.fontSize,
  border: `1px solid transparent`,
  backgroundColor: vars.color.btn_bg,
  backgroundBlendMode: 'exclusion',
  color: vars.color.default,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        outline: `0.1rem solid ${vars.color.btn_bg}`,
        outlineOffset: '0.2rem',
      },
    },
  },
})
