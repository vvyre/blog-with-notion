import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';
import { TEXT_STYLE, TYPOGRAPHY } from '../../basics/typography/typography.css';
import { fontFamilyCode } from '@/_lib/styles/fonts.css';

export const POST_LINK_TIL = style({
  display: 'inline-flex',
  padding: vars.padding.card,
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: vars.color.default,
  borderRadius: vars.border.radius.card,
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
    fontFamily: fontFamilyCode,
    fontSize: TYPOGRAPHY.XXXS.fontSize,
    fontWeight: 500,
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
]);
