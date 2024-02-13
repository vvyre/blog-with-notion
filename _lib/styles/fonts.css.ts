import { fontFace } from '@vanilla-extract/css';

export const main = fontFace([
  { src: 'url(/fonts/300.woff)', fontWeight: '300' },
  { src: 'url(/fonts/400.woff)', fontWeight: '400' },
  { src: 'url(/fonts/500.woff)', fontWeight: '500' },
  { src: 'url(/fonts/600.woff)', fontWeight: '600' },
  { src: 'url(/fonts/700.woff)', fontWeight: '700' },
]);
export const code = fontFace([
  { src: 'url(/fonts/code-400.woff)', fontWeight: '400' },
  { src: 'url(/fonts/code-400-it.woff)', fontWeight: '400', fontStyle: 'italic' },
  { src: 'url(/fonts/code-400.woff)', fontWeight: '700' },
  { src: 'url(/fonts/code-700-it.woff)', fontWeight: '700', fontStyle: 'italic' },
]);
