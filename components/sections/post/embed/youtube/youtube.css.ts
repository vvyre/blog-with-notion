import { NOTION_BLOCK_LAYOUT } from '../../../../notion/block-layout.css'
import { vars } from 'styles/themes.css'
import { style } from '@vanilla-extract/css'

export const BASE = style([
  NOTION_BLOCK_LAYOUT,
  {
    width: '100%',
    height: '100%',
    minHeight: '23.5rem',
    borderRadius: vars.border.radius.card,
    '@media': {
      '(0 <= width <= 430px)': {
        borderRadius: 0,
        paddingInline: 0,
      },
    },
    margin: '1rem 0 0 0',
  },
])
