import { style } from '@vanilla-extract/css'
import { vars } from 'styles/themes.css'

export const BACK_BUTTON_BASE = style({
  padding: '0.5rem',
  backgroundColor: vars.color.btn_bg,
  borderRadius: '1.5rem',
  border: '1px solid transparent',
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        outline: `0.1rem solid ${vars.color.btn_bg}`,
        outlineOffset: '0.2rem',
      },
    },
  },
})

export const BACK_BUTTON_INNER = style({
  color: 'transparent',
  fontSize: '1.5rem',
  fontWeight: 500,
})
