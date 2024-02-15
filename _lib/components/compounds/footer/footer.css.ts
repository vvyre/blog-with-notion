import { THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginTop: '5rem',
  borderTop: `1px solid ${THEMES.light_b3}`,
  padding: '2rem 2rem 5rem 2rem',
  width: '100%',
  minHeight: '10rem',
});

export const FOOTER_LINK = style({
  background: 'transparent',
  fontFeatureSettings: '"case"',
  fontSize: '0.9rem',
  selectors: {
    '&:after': {
      fontSize: '1rem',
      marginLeft: '0.25rem',
      fontFamily: jetbrainsMono,
      content: '↗︎',
    },
  },
});
