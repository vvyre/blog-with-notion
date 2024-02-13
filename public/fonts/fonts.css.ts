import { fontFace } from '@vanilla-extract/css';

export const main = fontFace([
  { src: './300.woff', fontWeight: '300' },
  { src: './400.woff', fontWeight: '400' },
  { src: './500.woff', fontWeight: '500' },
  { src: './600.woff', fontWeight: '600' },
  { src: './700.woff', fontWeight: '700' },
]);
export const code = fontFace([
  { src: './code-400.woff', fontWeight: '400' },
  { src: './code-400-it.woff', fontWeight: '400', fontStyle: 'italic' },
  { src: './code-400.woff', fontWeight: '700' },
  { src: './code-700-it.woff', fontWeight: '700', fontStyle: 'italic' },
]);
