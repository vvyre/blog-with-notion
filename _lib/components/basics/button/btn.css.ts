import { style } from '@vanilla-extract/css';
import { TYPOGRAPHY } from '../typography/typography.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style({
  cursor: 'pointer',
  padding: '0.4rem 0.55rem 0.4rem 0.55rem',
  borderRadius: '0.3rem',
  fontSize: TYPOGRAPHY.S.fontSize,
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  backgroundBlendMode: 'exclusion',
  color: vars.color.gray,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.b4,
    },
    '&:active': {
      backgroundColor: vars.color.b4,
    },
  },
});
