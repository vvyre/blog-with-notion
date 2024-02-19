import { THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  backgroundColor: THEMES.light_b1,
  marginTop: '2rem',
  borderTop: `1px solid ${THEMES.light_b3}`,
  padding: '2rem 2rem 3rem 2rem',
  lineHeight: '1.3',
  width: '100%',
  minHeight: '8rem',
});

export const FOOTER_LINK = style({
  background: 'transparent',
  fontFeatureSettings: '"case"',
  fontSize: '0.85rem',
  selectors: {
    '&:after': {
      fontSize: '0.85rem',
      marginLeft: '0.25rem',
      fontFamily: jetbrainsMono,
      content: '↗︎',
    },
  },
});
