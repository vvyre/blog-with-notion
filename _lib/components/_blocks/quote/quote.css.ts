import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    borderLeft: `1.5px solid ${vars.color.default}`,
    marginLeft: '-0.5rem',
    paddingLeft: '0.5rem',
    marginBottom: '1rem',
  },
]);
