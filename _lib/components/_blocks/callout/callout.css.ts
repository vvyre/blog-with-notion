import { THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';

export const CALLOUT = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: THEMES.light_b2,
    padding: '1.25rem',
    marginBottom: '1rem',
  },
]);

export const CALLOUT_EMOJI = style({
  marginRight: '0.25rem',
});
