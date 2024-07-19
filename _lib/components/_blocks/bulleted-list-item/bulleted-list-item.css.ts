import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "case"',
  listStyleType: 'disc',
  marginLeft: '1rem',
});
export const DEPTH_1 = style([
  {
    // listStyleType: '"• "',
  },
]);

export const DEPTH_2 = style([BASE, {}]);
export const DEPTH_3 = style([
  BASE,
  {
    listStyleType: '',
  },
]);
