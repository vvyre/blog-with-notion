import { createThemeContract } from '@vanilla-extract/css';

export const CONTRACT = createThemeContract({
  color: {
    theme: null,
    text: null,
    text_hover: null,
    text_select: null,
    highlight: null,
    background: null,
    background_d1: null,
    background_d2: null,
    background_d3: null,
  },
});
