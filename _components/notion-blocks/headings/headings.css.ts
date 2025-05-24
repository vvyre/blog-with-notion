import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    verticalAlign: 'middle',
    flexWrap: 'nowrap',
  },
])

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: TYPOGRAPHY.XL.fontSize,
    lineHeight: '1.25',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },
])

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: TYPOGRAPHY.L.fontSize,
    lineHeight: '1.2',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
])

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: TYPOGRAPHY.M.fontSize,
  },
])
