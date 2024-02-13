import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const POST_BOX = style({
  borderRadius: '1rem',
  border: '0.25rem solid #FFF',
  backgroundColor: `transparent`,
  padding: '1rem',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.theme}`,
    },
  },
});
