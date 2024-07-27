import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "case"',
  // listStyleType: 'disc', //in global style b/c of selector nesting issue
  marginLeft: '1rem',
});
