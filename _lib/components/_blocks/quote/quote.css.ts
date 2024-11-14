import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    borderLeft: `2px solid ${THEMES.default}`,
    marginLeft: '-0.5rem',
    paddingLeft: '0.5rem',
    marginBottom: '1rem',
  },
]);
