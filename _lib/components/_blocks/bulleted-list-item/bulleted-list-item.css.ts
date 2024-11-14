import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    fontFeatureSettings: '"calt", "case"',
    // listStyleType: 'disc', //in global style b/c of selector nesting issue
    marginLeft: '1rem',
  },
]);
