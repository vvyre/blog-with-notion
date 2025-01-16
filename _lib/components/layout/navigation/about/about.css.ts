import { fontFamilyCode } from '@/_lib/styles/fonts.css';
import { style } from '@vanilla-extract/css';

export const ABOUT = style([
  {
    width: '100vw',
    margin: '0 auto',
    maxWidth: '62rem',
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
  fontFamily: fontFamilyCode,
  fontSize: '3.25rem',
});
