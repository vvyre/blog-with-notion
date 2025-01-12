import { style } from '@vanilla-extract/css';
import { TYPOGRAPHY } from '../typography/typography.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style({
  cursor: 'pointer',
  padding: vars.padding.btn_square,
  borderRadius: vars.border.radius.card,
  fontSize: TYPOGRAPHY.S.fontSize,
  border: `1px solid transparent`,
  backgroundColor: 'transparent',
  backgroundBlendMode: 'exclusion',
  color: vars.color.gray,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.btn_bg,
    },
    '&:active': {
      backgroundColor: vars.color.btn_bg,
    },
  },
});
