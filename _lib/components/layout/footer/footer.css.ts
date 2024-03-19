import { THEMES } from '@/_lib/styles/colors.css';
import { code } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const BASE = style([
  {
    marginTop: '2rem',
    marginBottom: '1rem',
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
      fontFamily: code,
      content: '↗︎',
    },
  },
});

export const FOOTER_COPYRIGHT = style({
  fontSize: '0.8rem',
  color: THEMES.gray,
});
