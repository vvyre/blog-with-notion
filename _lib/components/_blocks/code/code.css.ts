import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const CODE_BLOCK = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: vars.color.b2,
    padding: '1.15rem',
    marginBottom: '1rem',
    borderRadius: '0.425rem',
  },
]);
export const CODE_LANGUAGE = style({
  fontFeatureSettings: '"calt", "case"',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  fontWeight: 600,
  color: vars.color.default,
});
export const CODE_PRE = style({
  overflowX: 'auto',
  color: vars.color.default,
});
