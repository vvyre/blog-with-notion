import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'
import { vars } from '@/_lib/styles/themes.css'

export const CALLOUT = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    backgroundColor: vars.color.b1,
    padding: '1.25rem',
    marginBottom: '1rem',
    borderRadius: vars.border.radius.card,
    '@media': {
      '(0 <= width <= 480px)': {
        borderRadius: 0,
      },
    },
  },
])

export const CALLOUT_EMOJI = style({
  marginRight: '0.25rem',
})
