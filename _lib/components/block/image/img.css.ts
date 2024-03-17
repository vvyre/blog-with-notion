import { COLORS, THEMES } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const IMG_CONTAINER = style({
  margin: 0,
  position: 'relative',
  objectFit: 'contain',
});

export const IMG_CONTAINER_ZOOMED = style({
  zIndex: '1',
  backgroundColor: THEMES.default,
  padding: '1.5rem',
  position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  cursor: 'pointer',
  maxWidth: '100vw',
  '@media': {
    '(0px <= width <= 768px)': {
      width: 'calc(100vw - 3rem)',
    },
  },
});

export const CAPTION_TXT = style({
  fontSize: '0.9rem',
  color: COLORS.gray,
  marginLeft: '0.5rem',
});

export const CAPTION = style({
  textAlign: 'center',
  width: '100%',
});

export const IMG = style({
  cursor: 'pointer',
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  minWidth: '66%',
});
