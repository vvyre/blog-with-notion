import { COLORS } from '@/_lib/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const IMG_CONTAINER = style({
  width: '100vw',
  maxWidth: '45rem',
  maxHeight: '600px',
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
  width: '75vw',
  maxWidth: '22.5rem',
});
