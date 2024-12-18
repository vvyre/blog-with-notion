import { style } from '@vanilla-extract/css';
import { TYPOGRAPHY } from '../../basics/typography/typography.css';
import { BLOCK_GRID_BASE } from '../../_blocks/block-layout.css';
import { vars } from '@/_lib/styles/themes.css';

export const BASE = style([
  BLOCK_GRID_BASE,
  {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto',
    minHeight: '14rem',
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

export const INFO_BOX = style({
  margin: '3rem 0 3rem 0',
  width: '100%',
  maxWidth: '45rem',
});

export const TITLE = style([
  TYPOGRAPHY.XXXL,
  {
    color: vars.color.b1,
    backgroundColor: vars.color.default,
    fontWeight: 900,
    textAlign: 'left',
    lineHeight: '1.2',
    width: '100%',
    wordBreak: 'break-all',
  },
]);

export const RELEASED_DATE = style({
  color: vars.color.gray,
  fontWeight: 400,
  textAlign: 'left',
});

export const INFO = style({
  lineHeight: '1.65',
  verticalAlign: 'middle',
  textAlign: 'left',
});

export const SUMMARY = style({
  color: vars.color.gray,
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
