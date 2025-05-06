import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/_lib/components/basics/typography/typography.css'
import { NOTION_IMG_BLOCK_LAYOUT } from '@/_lib/components/_blocks/block-layout.css'

export const BASE = style([
  NOTION_IMG_BLOCK_LAYOUT,
  {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto',
    paddingInline: '1rem',
    marginBottom: '2rem',
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
  TYPOGRAPHY.XXXL,
  {
    color: 'transparent',
    fontWeight: 700,
    lineHeight: '1.2',
    wordBreak: 'break-all',
  },
])

export const TITLE_ALIGN = style({
  textAlign: 'center',
})

export const RELEASED_DATE = style({
  color: 'transparent',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 500,
  textAlign: 'left',
})

export const META = style({
  verticalAlign: 'middle',
  textAlign: 'left',
  marginBottom: '0.5rem',
})

export const SUMMARY = style({
  color: 'transparent',
  textAlign: 'center',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 600,
})
