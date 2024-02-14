import { style } from '@vanilla-extract/css';

export const BASE = style({
  fontFeatureSettings: '"calt", "zero"',
});
export const DEPTH_1 = style([
  BASE,
  {
    listStyleType: 'none',
    position: 'relative',
    selectors: {
      '&::before': {
        content: '* ',
        position: 'relative',
        paddingLeft: '0.5rem',
        fontFeatureSettings: '"case"',
      },
    },
  },
]);

export const DEPTH_2 = style([
  BASE,
  {
    listStyleType: 'none',
    position: 'relative',
    selectors: {
      '&::before': {
        content: '• ',
        position: 'relative',
        paddingLeft: '0.5rem',
        fontFeatureSettings: '"case"',
      },
    },
  },
]);
export const DEPTH_3 = style([
  BASE,
  {
    listStyleType: 'none',
    position: 'relative',
    selectors: {
      '&::before': {
        content: '- ',
        position: 'relative',
        paddingLeft: '0.5rem',
        fontFeatureSettings: '"case"',
      },
    },
  },
]);
