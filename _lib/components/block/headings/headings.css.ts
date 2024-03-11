import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '2.25',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '2',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: '1.85',
  },
]);
