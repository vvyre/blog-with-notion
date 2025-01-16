import { style } from '@vanilla-extract/css';
import { NOTION_BLOCK_LAYOUT } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const CODE_BLOCK = style([
  NOTION_BLOCK_LAYOUT,
  {
    backgroundColor: vars.color.b1,
    padding: '1.15rem',
    margin: '2rem 0 2rem 0',
    borderRadius: vars.border.radius.card,
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
