import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

const LAYOUT = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  top: '0',
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

export const LAYOUT_BG_STUDY = style([LAYOUT]);

export const LAYOUT_INNER = style([
  LAYOUT,

  {
    backgroundColor: 'transparent',
  },
]);

export const OVERFLOW = style({
  minHeight: '100dvh',
  height: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)',
});

export const FLEX = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
