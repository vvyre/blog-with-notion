import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    marginBottom: '1rem',
  },
])
export const INNER = style([
  {
    borderLeft: `2px solid ${vars.color.default}`,
    marginLeft: '0.5rem',
    paddingLeft: '1rem',
  },
])
