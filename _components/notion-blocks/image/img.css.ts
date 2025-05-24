import { style } from '@vanilla-extract/css'
import {
  NOTION_IMG_BLOCK_LAYOUT,
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
} from '../block-layout.css'
import { vars } from 'styles/themes.css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'

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
    margin: '1rem 0 1rem 0',
  },
])

export const IMG_CONTAINER_ZOOMED = style([
  {
    cursor: 'zoom-out',
    zIndex: '999999',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: '1rem',
    margin: 0,
    position: 'fixed',
    display: 'flex',
    width: '100vw',
    height: '100dvh',
    top: '0',
    left: '0',
  },
])

export const CAPTION_TXT_TEXTBOX = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    width: '100%',
    marginTop: '0.35rem',
    color: vars.color.gray,
    textAlign: 'left',
    fontSize: TYPOGRAPHY.XS.fontSize,
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
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  '@media': {
    '(0 <= width <= 480px)': {
      borderRadius: 0,
    },
  },
})
