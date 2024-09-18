import { style } from '@vanilla-extract/css';

export const BASE = style({
  verticalAlign: 'middle',
});

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '1.25',
    marginBottom: '0.5rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.35rem',
    lineHeight: '1.3',
    marginBottom: '0.5rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.15rem',
  },
]);
