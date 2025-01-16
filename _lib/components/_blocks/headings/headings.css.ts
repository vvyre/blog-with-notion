import { style } from '@vanilla-extract/css';
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from '../block-layout.css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';

export const BASE = style([
  NOTION_PARAGRAPH_BLOCK_LAYOUT,
  {
    verticalAlign: 'middle',
    flexWrap: 'nowrap',
  },
]);

export const HEADING_1 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: '1.275rem',
    lineHeight: '1.25',
    marginTop: '3rem',
    marginBottom: '1rem',
  },
]);

export const HEADING_2 = style([
  BASE,
  {
    fontWeight: 700,
    fontSize: TYPOGRAPHY.M.fontSize,
    lineHeight: '1.2',
    marginTop: '1.5rem',
    marginBottom: '1rem',
  },
]);

export const HEADING_3 = style([
  BASE,
  {
    fontWeight: 500,
    fontSize: TYPOGRAPHY.M.fontSize,
    lineHeight: '1.2',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
]);
