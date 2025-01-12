import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    verticalAlign: 'middle',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap',
  },
]);

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.3rem',
    lineHeight: '1.25',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 600,
    fontSize: '1.15rem',
    lineHeight: '1.25',
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 500,
    fontSize: '1.15rem',
    lineHeight: '1.25',
    marginTop: '1rem',
    marginBottom: '0.75rem',
  },
]);
