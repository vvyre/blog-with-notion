import { style } from '@vanilla-extract/css';
import { IMG_BLOCK_GRID_BASE } from '../block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const IMG_CONTAINER = style([
  IMG_BLOCK_GRID_BASE,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'zoom-in',
    margin: 0,
    padding: '0.25rem',
    objectFit: 'contain',
    height: '100%',
  },
]);

export const IMG_CONTAINER_ZOOMED = style({
  cursor: 'zoom-out',
  zIndex: '1',
  backgroundColor: vars.color.default,
  padding: '1.5rem',
  position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '100dvh',
  top: '0',
  left: '0',
});

export const CAPTION_TXT = style({
  fontSize: '0.9rem',
  textAlign: 'center',
  width: '100%',
  color: vars.color.gray,
  padding: '0.25rem',
  maxWidth: '30rem',
});

export const CAPTION_TXT_ZOOMED = style({
  display: 'none',
});

export const CAPTION_ZOOMED = style({
  textAlign: 'center',
  width: '100%',
});

export const IMG = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
