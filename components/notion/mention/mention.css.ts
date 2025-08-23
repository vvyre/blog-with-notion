import { MONOSPACE } from 'styles/fonts.css'
import { style } from '@vanilla-extract/css'
import { NOTION_BLOCK_LAYOUT } from '../block-layout.css'
import { vars } from 'styles/themes.css'

export const BASE = style([
  NOTION_BLOCK_LAYOUT,
  {
    fontFeatureSettings: '"case"',
    display: 'block',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    padding: vars.padding.btn_square,
    borderRadius: vars.border.radius.card,
    '@media': {
      '(0 <= width <= 430px)': {
        borderRadius: 0,
      },
    },
    backgroundColor: vars.color.b1,
    fontSize: '0.8rem',
    selectors: {
      '&:after': {
        fontSize: '1rem',
        marginLeft: '0.25rem',
        fontFamily: MONOSPACE,
        content: '↗︎',
      },
    },
  },
])
