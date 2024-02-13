import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const POST_BOX = style({
  borderRadius: '1rem',
  border: `0.33rem solid ${THEMES.light_b1}`,
  backgroundColor: '#FFF',
  padding: '1rem',
  marginBottom: '0.5rem',
  fontFeatureSettings: '"calt"',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.theme}`,
    },
  },
});
