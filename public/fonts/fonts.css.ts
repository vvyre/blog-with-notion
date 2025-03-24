import { fontFace } from '@vanilla-extract/css'

export const SANS_SERIF_SYNTHESIZED = fontFace([
  { src: 'url(/fonts/Pretendard-Regular.subset.woff2)', fontWeight: 400 },
  {
    src: 'url(/fonts/Pretendard-Regular.subset.woff2)',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/Pretendard-Medium.subset.woff2)', fontWeight: 500 },
  {
    src: 'url(/fonts/Pretendard-Medium.subset.woff2)',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/Pretendard-Semibold.subset.woff2)', fontWeight: 600 },
  {
    src: 'url(/fonts/Pretendard-Semibold.subset.woff2)',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/Pretendard-Bold.subset.woff2)', fontWeight: 700 },
  {
    src: 'url(/fonts/Pretendard-Bold.subset.woff2)',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/Pretendard-Black.subset.woff2)', fontWeight: 900 },
  {
    src: 'url(/fonts/Pretendard-Black.subset.woff2)',
    fontWeight: 900,
    fontStyle: 'italic',
  },
])

export const MONOSPACE_SYNTHESIZED = fontFace([
  { src: 'url(/fonts/code-400.woff2)', fontWeight: 400 },
  {
    src: 'url(/fonts/code-400-it.woff2)',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-400.woff2)', fontWeight: 500 },
  {
    src: 'url(/fonts/code-400-it.woff2)',
    fontWeight: 500,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: 600 },
  {
    src: 'url(/fonts/code-700-it.woff2)',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-700.woff2)', fontWeight: 700 },
  {
    src: 'url(/fonts/code-700-it.woff2)',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  { src: 'url(/fonts/code-900.ttf)', fontWeight: 900 },
  { src: 'url(/fonts/code-900.ttf)', fontWeight: 900, fontStyle: 'italic' },
])
