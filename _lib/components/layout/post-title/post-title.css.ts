import { style } from '@vanilla-extract/css';
import { THEMES } from '@/_lib/styles/colors.css';
import { kor } from '@/_lib/styles/fonts.css';

export const BASE = style([
  {
    backgroundColor: THEMES.default,
    color: 'white',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3rem',
    height: 'auto',
    padding: '0 3rem 0 3rem',
    minHeight: '16rem',
  },
]);

export const BACK_BUTTON_PLACEMENT = style({
  gridRow: 1,
  gridColumn: 3,
  marginBottom: '3rem',
  '@media': {
    'screen and (max-width: 768px)': {
      gridRow: 1,
      gridColumn: 1,
    },
  },
});

export const BACK_BUTTON_STYLE_VARIANT = style({
  fontWeight: 400,
  fontSize: '1.75rem',
  color: THEMES.white,
});

export const TITLE_TEXT_PLACEMENT = style({
  // gridRow: 2,
  // gridColumnStart: 3,
  // gridColumnEnd: 11,
  marginBottom: '1rem',
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 2,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 7,
  //   },
  // },
});

export const TITLE = style({
  textAlign: 'center',
  fontWeight: 700,
  fontFamily: kor,
  fontSize: '2.5rem',
  lineHeight: '1.2',
  width: '100%',
  maxWidth: '42rem',
});

export const DEPTH3_TEXT = style({
  textAlign: 'center',
  fontWeight: 400,
  color: THEMES.white,
  fontSize: '1.05rem',
});

export const SUMMARY = style({
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '0.95rem',
  lineHeight: '1.65',
});

export const TAG_GRID_PLACEMENT = style({
  // gridRow: 4,
  // gridColumnStart: 1,
  // gridColumnEnd: 2,
  // alignItems: 'center',
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 4,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 3,
  //   },
  // },
});

export const DATE_GRID_PLACEMENT = style({
  // gridRow: 3,
  // gridColumnStart: 3,
  // gridColumnEnd: 12,
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 4,
  //     gridColumnStart: 3,
  //     gridColumnEnd: 7,
  //   },
  // },
});
export const SUMMARY_GRID_PLACEMENT = style({
  // gridRow: 4,
  // gridColumnStart: 3,
  // gridColumnEnd: 11,
  // '@media': {
  //   'screen and (max-width: 768px)': {
  //     gridRow: 3,
  //     gridColumnStart: 1,
  //     gridColumnEnd: 7,
  //     marginBottom: '1rem',
  //   },
  // },
});
