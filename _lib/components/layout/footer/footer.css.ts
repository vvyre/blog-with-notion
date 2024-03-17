import { THEMES } from '@/_lib/styles/colors.css';
import { jetbrainsMono } from '@/_lib/styles/fonts.css';
import { BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  {
    minHeight: '8rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    marginTop: '2rem',
    lineHeight: '1.3',
    textAlign: 'center',
    width: '100%',
  },
]);

export const FOOTER_SITE_TITLE = style({
  fontSize: '1rem',
  fontWeight: 500,
});

export const FOOTER_LINK = style({
  fontSize: '0.85rem',
  selectors: {
    '&:after': {
      marginLeft: '0.25rem',
      fontSize: '0.85rem',
      fontFamily: jetbrainsMono,
      content: '↗︎',
    },
  },
});

export const FOOTER_COPYRIGHT = style({
  fontSize: '0.85rem',
});
