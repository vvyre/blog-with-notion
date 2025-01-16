import { style } from '@vanilla-extract/css'
import { JETBRAINS_MONO } from '@/public/fonts/fonts.css'
import { vars } from '@/_lib/styles/themes.css'

export const SHARE_BTN_BASE = style({
  display: 'inline-flex',
  height: 'auto',
  width: '1.2rem',
  marginLeft: '0.33rem',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export const PARAGRAPH_SHARE = style({
  fontFamily: JETBRAINS_MONO,
  fontWeight: '700',
  fontSize: '0.75em',
  fontFeatureSettings: '"calt" "case"',
  color: vars.color.default,
  selectors: {
    '&:hover': {
      color: vars.notion.purple_background,
    },
  },
})

export const TEXT_COLOR_GREEN = style({
  color: vars.notion.green,
  selectors: {
    '&:hover': {
      color: vars.notion.green,
    },
  },
})

export const NAV_BASE = style([
  {
    margin: 0,
  },
])
