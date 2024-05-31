import { style } from '@vanilla-extract/css';

export const BASE = style({
  verticalAlign: 'middle',
});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: '1.25',
    marginBottom: '1.25rem',
    wordSpacing: '-0.55rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.3',
    marginBottom: '0.75rem',
    wordSpacing: '-0.5rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.25rem',
    marginBottom: '0.25rem',
    wordSpacing: '-0.4rem',
  },
]);
