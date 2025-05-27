import { MONOSPACE } from 'styles/fonts.css'
import { vars } from 'styles/themes.css'
import { globalStyle } from '@vanilla-extract/css'

export const SUMMARY = globalStyle('details > summary', {
  display: 'inline-block',
  listStyleType: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: vars.padding.btn_square,
  borderRadius: vars.border.radius.card,
  '@media': {
    '(0 <= width <= 430px)': {
      borderRadius: 0,
    },
  },
})

export const SUMMARY_HOVER = globalStyle('details > summary:hover', {
  backgroundColor: vars.color.btn_bg,
})

export const SUMMARY_OPEN = globalStyle('details[open] > summary', {
  listStyleType: 'none',
  backgroundColor: vars.color.btn_bg,
})

export const SUMMARY_ICON = globalStyle('details > summary::before', {
  content: '⋯',
  fontFamily: MONOSPACE,
  fontWeight: '900',
  marginRight: '0.5rem',
})

export const SUMMARY_ICON_OPEN = globalStyle('details[open] > summary::before', {
  content: '⋮',
  fontFamily: MONOSPACE,
  fontWeight: '900',
  marginRight: '0.5rem',
})

//브라우저별 마커 설징 및 삭제
export const SUMMARY_SAFARI = globalStyle('details > summary::-webkit-details-marker', {
  listStyleType: 'none',
  cursor: 'pointer',
  fontWeight: '500',
})

export const SUMMARY_OPEN_SAFARI = globalStyle(
  'details[open] > summary::-webkit-details-marker',
  {
    listStyleType: 'none',
  }
)
