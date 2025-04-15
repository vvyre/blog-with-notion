import { TYPOGRAPHY } from '@/_lib/components/basics/typography/typography.css'
import { style } from '@vanilla-extract/css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    color: vars.color.white,
    fontSize: TYPOGRAPHY.XXS.fontSize,
    fontWeight: 800,
    margin: '1rem 0 1rem 0',
    textAlign: 'left',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
])
