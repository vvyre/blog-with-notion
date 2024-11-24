import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: THEMES.light_b1,
    marginBottom: '1rem',
    padding: '0.75rem 1rem 0.75rem 1rem',
    borderRadius: '0.4rem',
    selectors: {
      '&:hover': {
        outline: `1px solid ${THEMES.highlight}`,
        outlineOffset: '0.25rem',
      },
    },
  },
]);

export const INNER = style({});

export const DESC_URL = style({
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
});

export const BOOKMARK_TITLE = style({
  lineHeight: '1.2',
  fontSize: TYPOGRAPHY.M.fontSize,
  fontWeight: '600',
  color: THEMES.default,
  wordBreak: 'break-all',
});

export const BOOKMARK_TEXT = style({
  lineHeight: '1.65',
  fontSize: '0.85rem',
  color: THEMES.gray,
  wordBreak: 'break-all',
});

export const BOOKMARK_URL = style({
  lineHeight: '1.3',
  fontSize: '0.85rem',
  color: COLORS.blue,
  wordBreak: 'break-all',
});
