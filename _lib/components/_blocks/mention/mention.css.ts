import { fontFamilyCode } from '@/_lib/styles/fonts.css'
import { style } from '@vanilla-extract/css'
import { NOTION_BLOCK_LAYOUT } from '../block-layout.css'
import { vars } from '@/_lib/styles/themes.css'

export const BASE = style([
  NOTION_BLOCK_LAYOUT,
  {
    fontFeatureSettings: '"case"',
    display: 'block',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    padding: vars.padding.btn_square,
    borderRadius: vars.border.radius.card,
    backgroundColor: vars.color.b1,
    fontSize: '0.8rem',
    selectors: {
      '&:after': {
        fontSize: '1rem',
        marginLeft: '0.25rem',
        fontFamily: fontFamilyCode,
        content: '↗︎',
      },
    },
  },
])
