import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "zero"',
});
export const DEPTH_1 = style([
  BASE,
  {
    listStyleType: 'disc',
    margin: 0,
  },
]);

export const DEPTH_2 = style([
  BASE,
  {
    listStyleType: 'circle',
  },
]);
export const DEPTH_3 = style([
  BASE,
  {
    listStyleType: 'square',
  },
]);
