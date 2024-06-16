import { BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const ABOUT = style([
  BASE_PADDING,
  {
    margin: 0,
    width: '48rem',
    wordBreak: 'keep-all',
    '@media': {
      '(0 <= width <= 768px)': {
        wordBreak: 'break-all',
        width: '100vw',
      },
    },
  },
]);

export const ABOUT_INNER = style([
  {
    '@media': {
      '(0 <= width <= 768px)': {
        padding: '0 1.5rem 0 1.5rem',
      },
    },
  },
]);

export const ABOUT_SITE_TITLE = style({
  textTransform: 'uppercase',
  fontWeight: 900,
  fontSize: '3.25rem',
});
