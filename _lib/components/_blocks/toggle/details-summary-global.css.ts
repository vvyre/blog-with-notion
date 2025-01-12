import { globalStyle } from '@vanilla-extract/css';

const close = '?';
const open = '!';

export const SUMMARY_SAFARI = globalStyle('details > summary::-webkit-details-marker', {
  display: open,
});

export const SUMMARY_OPEN_SAFARI = globalStyle('details[open] > summary::-webkit-details-marker', {
  display: close,
});

export const SUMMARY = globalStyle('details > summary', {
  listStyleType: open,
});

export const SUMMARY_OPEN = globalStyle('details[open] > summary', {
  listStyleType: close,
});
