import { style } from '@vanilla-extract/css'
import { vars } from 'styles/themes.css'
import { MONOSPACE } from 'styles/fonts.css'

export const SHARE_BTN_BASE = style({
  display: 'inline-block',
  verticalAlign: 'text-bottom',
  height: 'auto',
  width: '1.35rem',
  marginLeft: '0.33rem',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export const PARAGRAPH_SHARE = style({
  fontFamily: MONOSPACE,
  fontWeight: '700',
  fontFeatureSettings: '"calt" "case"',
  color: vars.color.default,

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        color: vars.notion.purple_background,
      },
    },
  },
})

export const TEXT_COLOR_GREEN = style({
  color: vars.notion.green,
  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        color: vars.notion.green,
      },
    },
  },
})

export const NAV_BASE = style([
  {
    margin: 0,
  },
])
