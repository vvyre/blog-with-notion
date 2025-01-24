import { style } from '@vanilla-extract/css'
import {
  NOTION_BLOCK_LAYOUT,
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
} from '../block-layout.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    marginBottom: '1rem',
  },
])

export const SUMMARY_TXT = style({
  cursor: 'pointer',
  fontWeight: 500,
})
