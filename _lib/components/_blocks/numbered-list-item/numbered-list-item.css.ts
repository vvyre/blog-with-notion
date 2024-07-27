import { style } from '@vanilla-extract/css';
export const BASE = style({
  fontFeatureSettings: '"tnum"',
  // listStyleType: 'decimal', //in global style b/c of selector nesting issue
  marginLeft: '1rem',
  fontSize: '0.95rem',
});
