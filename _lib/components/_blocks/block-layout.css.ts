import { vars } from '@/_lib/styles/themes.css'
import { style } from '@vanilla-extract/css'

export const NOTION_BLOCK_LAYOUT_INLINE = style({
  display: 'inline',
})

export const NOTION_BLOCK_LAYOUT = style({
  width: '100%',
  maxWidth: '42rem',
  '@media': {
    '(0 <= width <= 480px)': {
      padding: '0 1.5rem 0 1.5rem',
    },
  },
})

export const NOTION_PARAGRAPH_BLOCK_LAYOUT = style({
  width: '100%',
  maxWidth: '42rem',
  margin: '0 1.25rem 0 1.25rem',
  wordBreak: 'break-all',
  padding: vars.padding.post_component,
})

export const NOTION_IMG_BLOCK_LAYOUT = style({
  width: '100%',
  maxWidth: '62rem',
})
