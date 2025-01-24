import { MONOSPACE } from '@/_lib/styles/fonts.css'
import { globalStyle } from '@vanilla-extract/css'

export const UL = globalStyle('[role=list]', {
  fontFeatureSettings: '"calt", "case"',
  marginLeft: '0.75rem',
})

export const LI = globalStyle('[role=listitem]', {})

export const LI_MARK = globalStyle('[role=listitem]::before', {
  fontFamily: MONOSPACE,
  display: 'inline-block',
  content: '●',
  fontWeight: 'inherit',
  marginRight: '0.5rem',
})
