import { fontFace } from '@vanilla-extract/css';

export const JETBRAINS_MONO = fontFace([
  { src: 'url(/fonts/code-400.woff2)', fontWeight: '400' },
  { src: 'url(/fonts/code-400-it.woff2)', fontWeight: '400', fontStyle: 'italic' },
  { src: 'url(/fonts/code-500.woff2)', fontWeight: '500' },
  { src: 'url(/fonts/code-500-it.woff2)', fontWeight: '500', fontStyle: 'italic' },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: '600' },
  { src: 'url(/fonts/code-700-it.woff2)', fontWeight: '600', fontStyle: 'italic' },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: '700' },
  { src: 'url(/fonts/code-700-it.woff2)', fontWeight: '700', fontStyle: 'italic' },
  { src: 'url(/fonts/code-900.woff2)', fontWeight: '900' },
]);
