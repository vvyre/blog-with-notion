import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridColumn: 1,
    },
  },
});
