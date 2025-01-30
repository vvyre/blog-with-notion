import { MONOSPACE } from '@/_lib/styles/fonts.css'
import { style, styleVariants } from '@vanilla-extract/css'
import { TEXT_STYLE, TYPOGRAPHY } from '../../basics/typography/typography.css'
import { vars } from '@/_lib/styles/themes.css'

export const GRID_SPAN = style({
  gridColumn: 'span 12',
  '@media': {
    '(0 <= width <= 768px)': {
      gridColumn: 'span 6',
    },
  },
})

export const POST_THUMBNAIL = style({
  width: '100%',
  height: '12rem',
  backgroundColor: vars.color.b2,
})

export const POST_TEXT = style({
  color: vars.color.gray,
  selectors: {
    '&:hover': {
      color: vars.color.default,
    },
  },
})

export const POST_LIST_BASE = style({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  marginBottom: '0.75rem',
  '@media': {
    '(0px <= width <= 480px)': {
      marginBottom: '0',
      display: 'flex',
      width: '100%',
    },
  },
})

export const POST_LINK_THEME_VARIANT = styleVariants({
  DARK: {
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.postListBgDark,
        color: vars.color.postListTextHoveredDark,
      },
      '&:active': {
        backgroundColor: vars.color.postListBgDark,
        color: vars.color.postListTextHoveredDark,
      },
    },
  },
  LIGHT: {
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.postListBgLight,
        color: vars.color.postListTextHoveredLight,
      },
      '&:active': {
        backgroundColor: vars.color.postListBgLight,
        color: vars.color.postListTextHoveredLight,
      },
    },
  },
})

export const POST_LINK = style({
  display: 'inline-flex',
  padding: vars.padding.card,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: vars.color.postListTitleText,
  borderRadius: vars.border.radius.card,
  '@media': {
    '(0px <= width <= 480px)': {
      display: 'flex',
      width: '100%',
    },
  },
})

export const POST_TITLE = style([
  {
    width: '100%',
    fontSize: '1.15rem',
    fontWeight: 600,
    cursor: 'pointer',
    '@media': {
      '(0px <= width <= 480px)': {
        fontSize: '0.9rem',
      },
    },
  },
])

export const POST_SUMMARY = style([
  TEXT_STYLE.XXS,
  {
    cursor: 'pointer',
    width: '100%',
    '@media': {
      '(0 <= width <= 480px)': {
        fontSize: '0.9rem',
      },
    },
  },
])

export const RELEASED_DATE = style([
  {
    wordSpacing: '-0.3rem',
    fontSize: TYPOGRAPHY.XXXS.fontSize,
    fontWeight: 500,
    color: vars.color.white,
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
])

export const POST_CATEGORY = style([
  TEXT_STYLE.XXS,
  {
    color: vars.notion.gray,
  },
])

export const HOVER_TEXT = styleVariants({
  default: {
    selectors: { '&:hover': { backgroundColor: vars.notion.default } },
  },
  blue: { selectors: { '&:hover': { backgroundColor: vars.notion.blue } } },
  blue_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.blue_background } },
  },
  brown: { selectors: { '&:hover': { backgroundColor: vars.notion.brown } } },
  brown_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.brown_background } },
  },
  gray: { selectors: { '&:hover': { backgroundColor: vars.notion.gray } } },
  gray_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.gray_background } },
  },
  green: { selectors: { '&:hover': { backgroundColor: vars.notion.green } } },
  green_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.gray_background } },
  },
  orange: { selectors: { '&:hover': { backgroundColor: vars.notion.orange } } },
  orange_background: {
    selectors: {
      '&:hover': { backgroundColor: vars.notion.orange_background },
    },
  },
  pink: { selectors: { '&:hover': { backgroundColor: vars.notion.pink } } },
  pink_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.pink_background } },
  },
  purple: { selectors: { '&:hover': { backgroundColor: vars.notion.purple } } },
  purple_background: {
    selectors: {
      '&:hover': { backgroundColor: vars.notion.purple_background },
    },
  },
  red: { selectors: { '&:hover': { backgroundColor: vars.notion.red } } },
  red_background: {
    selectors: { '&:hover': { backgroundColor: vars.notion.red_background } },
  },
  yellow: { selectors: { '&:hover': { backgroundColor: vars.notion.yellow } } },
  yellow_background: {
    selectors: {
      '&:hover': { backgroundColor: vars.notion.yellow_background },
    },
  },
})

export const FALLBACK = style({
  color: vars.color.white,
})
