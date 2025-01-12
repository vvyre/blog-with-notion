import { JETBRAINS_MONO } from '@/public/fonts/fonts.css';
import { globalStyle } from '@vanilla-extract/css';

export const UL = globalStyle('[role=list]', {
  fontFeatureSettings: '"calt", "case"',
  marginLeft: '0.75rem',
  gridColumn: '2 / 3', //BLOCK_GRID_BASE_INLINE
});

export const LI = globalStyle('[role=listitem]', {});

export const LI_MARK = globalStyle('[role=listitem]::before', {
  fontFamily: JETBRAINS_MONO,
  display: 'inline-block',
  content: '●',
  fontWeight: 'inherit',
  marginRight: '0.5rem',
});
