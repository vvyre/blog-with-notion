import { style } from '@vanilla-extract/css';
import { BLOCK_GRID_BASE } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const CALLOUT = style([
  BLOCK_GRID_BASE,
  {
    backgroundColor: vars.color.b2,
    padding: '1.25rem',
    marginBottom: '1rem',
    borderRadius: vars.border.radius.card,
  },
]);

export const CALLOUT_EMOJI = style({
  marginRight: '0.25rem',
});
