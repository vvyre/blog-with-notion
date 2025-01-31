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
    marginBottom: '3rem',
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
  margin: '2.5rem 0.5rem 2.5rem 0.5rem',
  width: '100%',
  backgroundClip: 'text !important',
  WebkitBackgroundClip: 'text !important',
  maxWidth: '62rem',
})

export const TITLE = style([
  TYPOGRAPHY.XXL,
  {
    color: 'transparent',
    fontWeight: 700,
    wordSpacing: '-0.5rem',
    letterSpacing: '-0.05rem',
    lineHeight: '1.2',
    wordBreak: 'keep-all',
  },
])

export const TITLE_ALIGN = style({
  textAlign: 'left',
  paddingRight: '15%',
})

export const RELEASED_DATE = style({
  color: 'transparent',
  fontSize: TYPOGRAPHY.XS.fontSize,
  fontWeight: 600,
  textAlign: 'left',
})

export const META = style({
  verticalAlign: 'middle',
  textAlign: 'left',
  marginBottom: '0.5rem',
})

export const SUMMARY = style({
  color: 'transparent',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 600,
  marginTop: '0.5rem',
})
