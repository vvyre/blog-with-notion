import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    marginBlock: '0.5rem',
  },
])
