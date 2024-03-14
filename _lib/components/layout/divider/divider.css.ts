import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  borderTop: `1px solid ${THEMES.default}`,
  marginTop: '1rem',
  marginBottom: '1rem',
  height: '1px',
  width: '100%',
});
