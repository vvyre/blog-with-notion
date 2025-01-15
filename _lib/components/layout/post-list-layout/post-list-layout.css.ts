import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const POST_LIST_CENTERED = style([
  {
    background: 'transparent',
    lineHeight: 1.65,
    width: '100%',
    maxWidth: '62rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media': {
      '(0px <= width <= 700px)': {
        paddingTop: '25rem',
        paddingBottom: '7.5rem',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
]);

export const POST_LIST_STUDY_CENTERED = style([
  {
    background: 'transparent',
    lineHeight: 1.65,
    height: '100%',
    minHeight: '100dvh',
    width: '100vw',
    maxWidth: '62rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media': {
      '(0px <= width <= 700px)': {
        flexDirection: 'column',
      },
    },
  },
]);

export const POST_LIST_STUDY = style([
  {
    background: 'transparent',
    lineHeight: 1.65,
    height: '100%',
    width: '100vw',
    maxWidth: '62rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

//LEGACY
export const POST_LIST_GRID = style([
  {
    marginTop: '5rem',
    gridTemplateRows: 'repeat(auto-fill, minmax(128px, 1fr))',
  },
]);

export const SELECTED = style({
  border: `1px solid ${vars.color.highlight}`,
  backgroundColor: 'transparent',
  selectors: {
    '&:hover': {
      border: `1px solid ${vars.color.highlight}`,
    },
  },
});

export const NOT_SELECTED = style({
  backgroundColor: 'transparent',
  color: vars.notion.gray,
  border: `1px solid transparent`,
  selectors: {
    '&:hover': {
      border: `1px solid ${vars.notion.gray_background}`,
    },
  },
});

export const CATEGORY = style({
  cursor: 'pointer',
  padding: '0.25rem 0.7rem 0.25rem 0.7rem',
  borderRadius: vars.border.radius.card,
  transition: '0.2s',
});

export const FALLBACK = style({});
