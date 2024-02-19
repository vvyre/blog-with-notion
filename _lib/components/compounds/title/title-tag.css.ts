import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const TITLE_TAG = style({
  fontSize: '0.95rem',
  color: THEMES.default,
  padding: '0.25rem 0.75rem 0.25rem 0.75rem',
  marginRight: '0.25rem',
  borderRadius: '1rem',
  border: `1px solid ${THEMES.default}`,
});
