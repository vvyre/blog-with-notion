import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "case"',
  marginLeft: '1.5rem',
});
export const DEPTH_1 = style([
  BASE,
  {
    listStyleType: '"–  "',
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
