import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 600,
    marginTop: '3rem',
    marginBottom: '1.5rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    marginTop: '2.5rem',
    marginBottom: '1.25rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 400,
    marginTop: '2rem',
    marginBottom: '1rem',
  },
]);
