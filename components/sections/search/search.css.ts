import { style } from '@vanilla-extract/css'
import { vars } from 'styles/themes.css'

export const SEARCH_BASE = style({
  zIndex: 999,
  padding: vars.padding.card,
  borderRadius: vars.border.radius.card,
  opacity: 0.9,
  position: 'fixed',
  backgroundColor: vars.color.b1,
  width: 'auto',
  maxWidth: '42rem',
  height: 'auto',
  top: '2rem',
  left: '50vw',
  transform: 'translateX(-50%)',
})
