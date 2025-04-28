import { NOTION_BLOCK_LAYOUT } from '@/_lib/components/_blocks/block-layout.css'
import { vars } from '@/_lib/styles/themes.css'
import { style } from '@vanilla-extract/css'

export const BASE = style([
  NOTION_BLOCK_LAYOUT,
  {
    width: '100%',
    height: '100%',
    minHeight: '23.5rem',
    borderRadius: vars.border.radius.card,
    '@media': {
      '(0 <= width <= 480px)': {
        borderRadius: 0,
      },
    },
    margin: '1rem 0 0 0',
  },
])
