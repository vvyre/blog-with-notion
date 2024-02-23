import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const POST_BOX = style({
  borderRadius: '1.3rem',
  padding: '0.3rem',
  marginBottom: '0.25rem',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.theme}`,
    },
  },
});

export const POST_BOX_INNER = style({
  borderRadius: '1rem',
  border: `1px solid ${THEMES.light_b3}`,
  padding: '1.15rem',
  fontFeatureSettings: '"calt"',
});

export const SMALL = style({
  lineHeight: 1.25,
});
