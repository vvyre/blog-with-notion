import { style } from '@vanilla-extract/css'
import {
  NOTION_IMG_BLOCK_LAYOUT,
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
} from '../block-layout.css'
import { vars } from '@/_lib/styles/themes.css'
import { TYPOGRAPHY } from '../../basics/typography/typography.css'

export const IMG_CONTAINER = style([
  NOTION_IMG_BLOCK_LAYOUT,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'zoom-in',
    objectFit: 'contain',
    height: '100%',
    margin: '2rem 0 2rem 0',
  },
])

export const IMG_CONTAINER_ZOOMED = style({
  cursor: 'zoom-out',
  zIndex: '1',
  backgroundColor: vars.color.default,
  padding: '1.5rem',
  position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '100dvh',
  top: '0',
  left: '0',
})

export const CAPTION_TXT_TEXTBOX = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    width: '100%',
    marginTop: '0.35rem',
    color: vars.color.gray,
    textAlign: 'left',
    fontSize: TYPOGRAPHY.XXS.fontSize,
    fontWeight: 500,
  },
])

export const CAPTION_TXT_ZOOMED = style({
  display: 'none',
})

export const CAPTION_ZOOMED = style([NOTION_PARAGRAPH_BLOCK_LAYOUT, {}])

export const IMG = style({
  borderRadius: vars.border.radius.card,
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})
