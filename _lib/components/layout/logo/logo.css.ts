import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const LOGO = style({
  display: 'block',
  color: THEMES.theme,
  width: '1.75rem',
  height: '1.75rem',
  borderRadius: '1rem',
});
