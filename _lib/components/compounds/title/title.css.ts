import { THEMES } from '@/_lib/styles/colors.css';
import { BASE_GRID } from '@/_lib/styles/grid.css';
import { style } from '@vanilla-extract/css';

export const BASE = style({
  marginBottom: '7rem',
  paddingBottom: '5rem',
  borderBottom: `1px solid ${THEMES.theme}`,
});

export const TITLE_GRID = style([
  BASE_GRID,
  {
    margin: '0 auto',
  },
]);

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '2rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 1,
      gridColumn: 1,
    },
  },
});

export const TITLE_TEXT_PLACEMENT = style({
  gridRow: 2,
  gridColumnStart: 3,
  gridColumnEnd: 11,
  marginBottom: '2rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 2,
      gridColumnStart: 1,
      gridColumnEnd: 6,
    },
    'screen and (max-width: 430px)': {
      gridRow: 2,
      gridColumn: 1,
    },
  },
});

export const TAG_GRID_PLACEMENT = style({
  gridRow: 4,
  gridColumnStart: 1,
  gridColumnEnd: 2,
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 4,
      gridColumn: 1,
    },
    'screen and (max-width: 430px)': {
      gridRow: 4,
      gridColumn: 1,
    },
  },
});

export const DATE_GRID_PLACEMENT = style({
  gridRow: 3,
  gridColumnStart: 3,
  gridColumnEnd: 12,
  marginBottom: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 4,
      gridColumnStart: 2,
      gridColumnEnd: 6,
    },
    'screen and (max-width: 430px)': {
      display: 'none',
    },
  },
});
export const SUMMARY_GRID_PLACEMENT = style({
  gridRow: 4,
  gridColumnStart: 3,
  gridColumnEnd: 11,
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 3,
      gridColumnStart: 1,
      gridColumnEnd: 6,
      marginBottom: '1rem',
    },
    'screen and (max-width: 430px)': {
      gridRow: 3,
      gridColumn: 1,
    },
  },
});
export const TITLE = style({
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '2.75rem',
  lineHeight: '1.25',
});

export const SUMMARY = style({
  textAlign: 'left',
  fontWeight: 400,
  fontSize: '1.2rem',
  lineHeight: '1.65',
});

export const POST_TAG = style({
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '1.2rem',
  lineHeight: '1.65',
});
