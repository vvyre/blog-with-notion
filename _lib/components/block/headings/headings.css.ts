import { style } from '@vanilla-extract/css';

export const BASE = style({});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: '1.25',
    marginTop: '2rem',
    marginBottom: '1.25rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.3',
    marginTop: '1.25rem',
    marginBottom: '1rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.1rem',
  },
]);
