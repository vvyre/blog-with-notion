import { style } from '@vanilla-extract/css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css'
import { TYPOGRAPHY } from '../../basics/typography/typography.css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    backgroundColor: vars.color.b1,
    margin: '2rem 1.25rem 2rem 1.25rem',
    padding: vars.padding.card,
    borderRadius: vars.border.radius.card,
    border: '1px solid transparent',
    selectors: {
      '&:hover': {
        border: `1px solid ${vars.color.highlight}`,
      },
    },
  },
])

export const INNER = style({})

export const DESC_URL = style({
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
})

export const BOOKMARK_TITLE = style({
  lineHeight: '1.2',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 500,
  color: vars.color.default,
  wordBreak: 'break-all',
})

export const BOOKMARK_TEXT = style({
  lineHeight: '1.65',
  fontSize: '0.85rem',
  color: vars.color.gray,
  wordBreak: 'break-all',
})

export const BOOKMARK_URL = style({
  lineHeight: '1.3',
  fontSize: '0.85rem',
  color: vars.notion.blue,
  wordBreak: 'break-all',
})
