import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { NOTION_BLOCK_LAYOUT } from 'components/notion-blocks/block-layout.css'
import { TITLES } from 'styles/fonts.css'
import { vars } from 'styles/themes.css'

export const BASE = style([
  NOTION_BLOCK_LAYOUT,
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

export const INFO_BOX = style({
  margin: '0 0.5rem 3rem 0.5rem',
  width: '100%',
  maxWidth: '62rem',
})

export const TITLE = style([
  {
    color: vars.color.default,
    fontFamily: TITLES,
    fontSize: TYPOGRAPHY.XXL.fontSize,
    fontWeight: 500,
    lineHeight: '1.3',
    wordBreak: 'break-all',
    backgroundColor: 'transparent',
  },
])

export const TITLE_ALIGN = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const RELEASED_DATE = style({
  color: vars.color.default,
  fontFamily: TITLES,
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 400,
  textAlign: 'left',
})

export const META = style({
  verticalAlign: 'middle',
  textAlign: 'left',
  marginBottom: '0.5rem',
})

export const SUMMARY = style({
  color: vars.color.default,
  textAlign: 'center',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: 400,
})
