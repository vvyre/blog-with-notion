import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const POST_BOX = style({
  borderRadius: '1.25rem',
  border: `0.33rem solid ${THEMES.white}`,
  backgroundColor: THEMES.light_b1,
  padding: '1.25rem',
  marginBottom: '0.5rem',
  fontFeatureSettings: '"calt"',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.theme}`,
    },
  },
});

export const FLEX_RIGHT = style({
  lineHeight: 1.25,
});
