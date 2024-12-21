import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

const LAYOUT = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '-3rem',
  minHeight: 'calc(100vh + 3rem)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LAYOUT_BG = style([
  LAYOUT,
  {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
    backgroundPosition: 'center',
  },
]);

export const LAYOUT_BG_TIL = style([
  LAYOUT,
  {
    backgroundColor: vars.notion.purple,
  },
]);

export const LAYOUT_INNER = style([
  LAYOUT,
  {
    backgroundColor: vars.color.b4,
  },
]);

export const FLEX = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
