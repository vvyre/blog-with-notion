import { code } from '@/_lib/styles/fonts.css';
import { BASE_PADDING } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const ABOUT = style([
  {
    margin: 0,
    maxWidth: '41rem',
    width: '100vw',
    wordBreak: 'keep-all',
    '@media': {
      '(0 <= width <= 768px)': {
        wordBreak: 'break-all',
      },
    },
  },
]);

export const ABOUT_INNER = style([
  {
    '@media': {
      '(0 <= width <= 768px)': {},
    },
  },
]);

export const ABOUT_SITE_TITLE = style({
  textTransform: 'uppercase',
  fontWeight: 900,
  fontFamily: code,
  fontSize: '3.25rem',
});
