import { fontFace } from '@vanilla-extract/css'

export const GOOGLE_SANS_MONO = fontFace([
  { src: 'url(/fonts/code-400.ttf)', fontWeight: '400' },
  {
    src: 'url(/fonts/code-400-it.ttf)',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-500.ttf)', fontWeight: '500' },
  {
    src: 'url(/fonts/code-500-it.ttf)',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.ttf)', fontWeight: 500 },
  {
    src: 'url(/fonts/code-700-it.ttf)',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.ttf)', fontWeight: '700' },
  {
    src: 'url(/fonts/code-700-it.ttf)',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-900.ttf)', fontWeight: '900' },
])
