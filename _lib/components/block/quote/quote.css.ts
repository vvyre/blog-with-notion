import { COLORS } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  borderLeft: `1px solid ${COLORS.default}`,
  marginLeft: '0.5rem',
  paddingLeft: '0.5rem',
  marginBottom: '1rem',
});
