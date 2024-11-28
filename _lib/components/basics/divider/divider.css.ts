import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  borderTop: `1px solid ${vars.color.default}`,
  marginTop: '1.5rem',
  marginBottom: '2.5rem',
  height: '1px',
  width: '100%',
});
