import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "case"',
  listStylePosition: 'inside',
  textIndent: '-1rem',
  marginLeft: '1rem',
});
export const DEPTH_1 = style([
  BASE,
  {
    listStyleType: '"*  "',
  },
]);

export const DEPTH_2 = style([
  BASE,
  {
    listStyleType: '"– "',
  },
]);
export const DEPTH_3 = style([
  BASE,
  {
    listStyleType: '',
  },
]);
