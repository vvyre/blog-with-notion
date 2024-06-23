import { COLORS, THEMES } from '@/_lib/styles/colors.css';
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
  fontSize: '0.75rem',
  fontWeight: 400,
});

export const FOOTER_DECORATION = style({
  fontSize: '0.75rem',
  cursor: 'default',
});

export const FOOTER_LINK = style({
  fontSize: '0.75rem',
  transition: 'color 0.15s',
  selectors: {
    '&:hover': {
      color: THEMES.highlight,
    },
    '&:after': {
      marginLeft: '0.25rem',
      marginRight: '0.5rem',
      fontSize: '0.85rem',
      fontFamily: code,
      content: '↗︎',
    },
  },
});

export const FOOTER_COPYRIGHT = style({
  fontSize: '0.75rem',
  color: THEMES.gray,
});
