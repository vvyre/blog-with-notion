import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { IMG_BLOCK_GRID_BASE } from '../block-layout.css';

export const IMG_CONTAINER = style([
  IMG_BLOCK_GRID_BASE,
  {
    cursor: 'zoom-in',
    margin: 0,
    position: 'relative',
    objectFit: 'contain',
    marginBottom: '2rem',
  },
]);

export const IMG_CONTAINER_ZOOMED = style({
  cursor: 'zoom-out',
  zIndex: '1',
  backgroundColor: THEMES.default,
  padding: '1.5rem',
  position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
});

export const BACKGROUND = style({
  zIndex: '-1',
  position: 'fixed',
  objectFit: 'contain',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
});

export const CAPTION_TXT = style({
  fontSize: '0.9rem',
  color: COLORS.gray,
});

export const CAPTION_TXT_ZOOMED = style({
  fontSize: '1rem',
  color: THEMES.white,
});

export const CAPTION = style({});

export const CAPTION_ZOOMED = style({
  textAlign: 'center',
  width: '100%',
});

export const IMG = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
