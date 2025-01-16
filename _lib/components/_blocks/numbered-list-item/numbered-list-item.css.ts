import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'
import { JETBRAINS_MONO } from '@/public/fonts/fonts.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    listStyleType: 'decimal',
    paddingLeft: '2.5rem',
    fontFeatureSettings:
      "'case', 'tnum', 'cv13',  'ss02', 'cv09', 'ss07', 'ss05'",
  },
])
