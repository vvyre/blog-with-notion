import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: THEMES.white,
    padding: '0.1rem',
    marginBottom: '1rem',
    border: `4px solid ${THEMES.white}`,
    selectors: {
      '&:hover': {
        outline: `1px solid ${THEMES.highlight}`,
      },
    },
  },
]);

export const INNER = style({
  padding: '0.7rem 1.05rem 1.05rem 1.05rem',

  border: `2px solid ${THEMES.light_b3}`,
});
