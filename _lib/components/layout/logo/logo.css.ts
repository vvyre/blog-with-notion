import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const LOGO = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.75rem',
  height: '1.75rem',
  outline: `1px solid transparent`,
  borderRadius: '1.75rem',
  transition: 'outline 0.2s',
  selectors: {
    '&:hover': {
      outline: `1px solid ${THEMES.highlight}`,
    },
  },
});
