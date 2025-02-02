import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    listStyleType: 'disc',
    paddingLeft: '2.5rem',
    fontFeatureSettings:
      "'case', 'tnum', 'cv13', 'ss02', 'cv09', 'ss07', 'ss05'",
  },
])
