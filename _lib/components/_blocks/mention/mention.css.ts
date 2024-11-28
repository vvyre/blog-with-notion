import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    fontFeatureSettings: '"case"',
    display: 'block',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    padding: '0.5rem 0.75rem 0.5rem 0.75rem',
    borderRadius: '0.3rem',
    backgroundColor: vars.color.b2,
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
]);
