import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: THEMES.white,
    padding: '0.1rem',
    marginBottom: '1rem',
    border: `4px solid ${THEMES.white}`,
    selectors: {
      '&:hover': {
        outline: `1px solid ${THEMES.highlight}`,
      },
    },
  },
]);

export const INNER = style({
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  border: `2px solid ${THEMES.light_b3}`,
});

export const BOOKMARK_TEXT = style({
  lineHeight: '1.65',
  fontSize: TYPOGRAPHY.XS.fontSize,
  color: THEMES.gray,
  wordBreak: 'break-all',
});

export const BOOKMARK_URL = style({
  lineHeight: '1.3',
  fontSize: TYPOGRAPHY.XS.fontSize,
  color: THEMES.gray,
  wordBreak: 'break-all',
});
