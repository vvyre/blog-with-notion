import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  margin: 0,
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  color: COLORS.gray,
  fontSize: '0.9rem',
  wordSpacing: '-0.275rem',
  border: 'none',
  outline: `1px solid ${COLORS.default}`,
  borderRadius: '2rem',
  cursor: 'pointer',
  transition: 'outline 0.2s',
});
