import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';
import { TEXT_STYLE } from '../../basics/typography/typography.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';

export const POST_LINK_TIL = style({
  display: 'inline-flex',
  padding: '0.5rem 1rem 0.5rem 1rem',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: vars.color.default,
  borderRadius: '0.425rem',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.b4,
      color: vars.color.postListTextHovered,
    },
    '&:active': {
      backgroundColor: vars.color.b4,
      color: vars.color.postListTextHovered,
    },
  },
  '@media': {
    '(0px <= width <= 700px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 'calc(100vw - 1.7rem)',
    },
  },
});

export const POST_TITLE_TIL = style([
  {
    fontSize: '1.15rem',
    fontWeight: '600',
    cursor: 'pointer',
    '@media': {
      '(0px <= width <= 700px)': {
        fontSize: '0.9rem',
      },
    },
  },
]);

export const RELEASED_DATE_TIL = style([
  TEXT_STYLE.XXXS,
  {
    wordSpacing: '-0.3rem',
    color: vars.color.white,
    fontFamily: fontFamilyCode,
    cursor: 'pointer',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
]);
