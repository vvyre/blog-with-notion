import { COLORS } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const IMG_CONTAINER = style({
  width: '100%',
  maxHeight: '75vh',
  objectFit: 'contain',
  overflow: 'hidden',
  position: 'relative',
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
  width: 'auto',
  height: 'auto',
  maxWidth: 'calc(100vw - 3rem)',
  maxHeight: '75vh',
  '@media': {
    '(0px <= width <= 768px)': {
      width: 'calc(100vw - 3rem)',
    },
  },
});
