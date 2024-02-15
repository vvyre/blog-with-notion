import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 500,
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 500,
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 400,
    marginTop: '1.15rem',
    marginBottom: '0.5rem',
  },
]);
