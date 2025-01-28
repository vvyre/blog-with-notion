import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '../../basics/typography/typography.css'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../../_blocks/block-layout.css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto',
    minHeight: '15rem',
    paddingBottom: '3rem',
  },
])

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '3rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 1,
      gridColumn: 1,
    },
  },
})

export const BACK_BUTTON_STYLE_VARIANT = style({
  fontWeight: 400,
  fontSize: '1.75rem',
})

export const INFO_BOX = style({
  margin: '3rem 0 3rem 0',
  width: '100%',
  maxWidth: '62rem',
})

export const TITLE = style([
  TYPOGRAPHY.XXL,
  {
    color: 'transparent',
    backgroundClip: 'text !important',
    WebkitBackgroundClip: 'text !important',
    fontWeight: 600,
    lineHeight: '1.2',
    wordBreak: 'keep-all',
  },
])

export const TITLE_ALIGN = style({
  textAlign: 'center',
})

export const RELEASED_DATE = style({
  color: vars.color.gray,
  fontWeight: 400,
  textAlign: 'right',
})

export const META = style({
  lineHeight: '1.65',
  verticalAlign: 'middle',
  textAlign: 'center',
  marginBottom: '1rem',
})

export const SUMMARY = style({
  color: vars.color.gray,
})
