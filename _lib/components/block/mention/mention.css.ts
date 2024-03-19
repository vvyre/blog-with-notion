import { THEMES } from '@/_lib/styles/colors.css';
import { code } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"case"',
  display: 'block',
  marginTop: '0.25rem',
  marginBottom: '0.25rem',
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  borderRadius: '0.5rem',
  backgroundColor: THEMES.light_b2,
  fontSize: '0.8rem',
  selectors: {
    '&:after': {
      fontSize: '1rem',
      marginLeft: '0.25rem',
      fontFamily: code,
      content: '↗︎',
    },
  },
});
