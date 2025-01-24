import { MONOSPACE } from '@/_lib/styles/fonts.css'
import { globalStyle } from '@vanilla-extract/css'

export const OL = globalStyle('[data-role=orderedlist]', {
  fontFeatureSettings: '"calt", "case"',
  marginLeft: '0.75rem',
  counterReset: 'list-counter',
})

export const LI = globalStyle('[data-role=orderedlistitem]', {
  counterIncrement: 'list-counter',
})

export const LI_MARK = globalStyle('[data-role=orderedlistitem]::before', {
  fontFamily: MONOSPACE,
  display: 'inline-block',
  content: "counter(list-counter) '. '",
  fontWeight: 'inherit',
  marginRight: '0.5rem',
})
