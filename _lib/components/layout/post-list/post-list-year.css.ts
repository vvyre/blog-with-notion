import { MONOSPACE } from '@/_lib/styles/fonts.css'
import { TYPOGRAPHY } from '../../basics/typography/typography.css'
import { style } from '@vanilla-extract/css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  {
    fontFamily: MONOSPACE,
    color: vars.color.white,
    fontSize: TYPOGRAPHY.XXS.fontSize,
    fontWeight: 700,
    margin: '1rem 0 1rem 0',
    textAlign: 'left',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
    ':before': {
      content: '——',
    },
  },
])
