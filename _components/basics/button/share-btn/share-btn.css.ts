import { style } from '@vanilla-extract/css'
import { vars } from 'styles/themes.css'
import { MONOSPACE } from 'styles/fonts.css'

export const SHARE_BTN_BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1rem',
  height: 'auto',
  marginLeft: '0',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  marginRight: '0.25rem',
  '@media': {
    '(0 <= width <= 42rem)': {
      transform: 'translateX(0)',
    },
  },
})

export const PARAGRAPH_SHARE = style({
  fontFamily: MONOSPACE,
  fontWeight: '700',
  display: 'inline-flex',
  height: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
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
