import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const CODE_BLOCK = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: THEMES.light_b1,
    padding: '1.35rem',
    marginBottom: '1rem',
  },
]);
export const CODE_LANGUAGE = style({
  fontFeatureSettings: '"calt", "case"',
  fontSize: '0.9rem',
  fontWeight: 500,
});
export const CODE_PRE = style({
  overflowX: 'auto',
});
