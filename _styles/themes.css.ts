import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

const RADIUS = {
  card: '16px',
  list: '12px',
  btn_square: '8px',
  btn_round: '20px',
}

const PADDING = {
  card: '0.75rem 1.15rem 0.75rem 1.15rem',
  post_component: '0 1.25rem 0 1.25rem',
  btn_square: '0.4rem 0.55rem 0.4rem 0.55rem',
  btn_round: '0.65rem',
}

export const vars = createGlobalThemeContract({
  color: {
    theme: 'color-theme',
    background_filter: 'color-background-filter',
    white: 'color-white',
    whitegray: 'color-whitegray',
    lightgray: 'color-lightgray',
    default: 'color-default',
    invert: 'color-invert',
    blacktext: 'color-blacktext',
    gray: 'color-gray',
    highlight: 'color-highlight',
    b1: 'color-light-b1',
    b2: 'color-light-b2',
    b3: 'color-light-b3',
    b4: 'color-light-b4',
    btn_bg: 'color-btn-bg',
    nav_bg: 'color-nav-bg',
    postListTitleText: 'color-postlist-title-text',
    postListTextHoveredLight: 'color-postlist-text-hovered-light',
    postListTextHoveredDark: 'color-postlist-text-hovered-dark',
    postListBgLight: 'color-postlist-bg-light',
    postListBgDark: 'color-postlist-bg-dark',
  },
  notion: {
    blue: 'notion-blue',
    blue_background: 'notion-blue-background',
    brown: 'notion-brown',
    brown_background: 'notion-brown-background',
    default: 'notion-default',
    default_background: 'notion-default-background',
    gray: 'notion-gray',
    gray_background: 'notion-gray-background',
    green: 'notion-green',
    green_background: 'notion-green-background',
    orange: 'notion-orange',
    orange_background: 'notion-orange-background',
    pink: 'notion-pink',
    pink_background: 'notion-pink-background',
    purple: 'notion-purple',
    purple_background: 'notion-purple-background',
    red: 'notion-red',
    red_background: 'notion-red-background',
    yellow: 'notion-yellow',
    yellow_background: 'notion-yellow-background',
  },
  padding: {
    card: 'padding-card',
    post_component: 'post-component',
    btn_round: 'padding-btn-round',
    btn_square: 'padding-btn-squre',
  },
  border: {
    radius: {
      card: 'border-radius-card',
      list: 'border-radius-list',
      btn_square: 'border-radius-btn-square',
      btn_round: 'border-radius-btn-round',
    },
  },
})
const COLORS_COMMON = {
  background_filter: 'oklch(0.4695 0.0062 247.96 / 0.5)',
  white: 'oklch(1.0000 0.0000 0.00)',
  whitegray: 'oklch(0.975 0 975)',
  lightgray: 'oklch(0.92 0 95)',
  blacktext: 'oklch(0.4386 0 0)',
  highlight: 'oklch(0.5868 0.2043 256.27)',
  nav_bg: 'transparent',
  postListTitleText: 'oklch(0.9561 0.2447 100 / 0.8)',
  postListTextHoveredLight: 'oklch(0.4940 0.0091 265.27)',
  postListTextHoveredDark: 'oklch(0.4940 0.0091 265.27)',
  postListBgLight: 'oklch(0.9958 0.0025 228.78)',
  postListBgDark: 'oklch(0.9958 0.0025 228.78)',
} as const

const NOTION_COLORS_COMMON = {
  default_background: 'oklch(0.9517 0.0030 253.10)',
} as const

const COLORS_LIGHT = {
  theme: 'oklch(0.9958 0.0025 228.78)',
  invert: 'oklch(0.9037 0 0)',
  default: 'oklch(0.4386 0 0)',
  gray: 'oklch(0.6062 0.0065 264.52)',

  b1: 'oklch(1.0000 0.0000 0.00)',
  b2: 'oklch(0.9801 0 0)',
  b3: 'oklch(0.9006 0 0)',
  b4: 'oklch(0.3791 0 0 / 50%)',
  btn_bg: COLORS_COMMON.lightgray,
} as const

const NOTION_COLORS_LIGHT = {
  blue: 'oklch(0.5321 0.1942 260.16)',
  blue_background: 'oklch(0.8019 0.1019 253.85)',
  brown: 'oklch(0.5805 0.0422 73.31)',
  brown_background: 'oklch(0.8702 0.0174 76.10)',
  default: 'oklch(0.4386 0 0)',
  gray: 'oklch(0.6062 0.0065 264.52)',
  gray_background: 'oklch(0.9252 0.0013 286.37)',
  green: 'oklch(0.7667 0.1800 156.92)',
  green_background: 'oklch(0.9474 0.1248 119.18)',
  orange: 'oklch(0.6740 0.2072 39.23)',
  orange_background: 'oklch(0.8178 0.1240 61.20)',
  pink: 'oklch(0.6462 0.2295 22.07)',
  pink_background: 'oklch(0.8705 0.1322 22.15)',
  purple: 'oklch(0.5415 0.2476 294.45)',
  purple_background: 'oklch(0.8211 0.1663 294.48)',
  red: 'oklch(0.5700 0.2139 29.29)',
  red_background: 'oklch(0.8604 0.1264 29.89)',
  yellow: 'oklch(0.7912 0.1154 92.48)',
  yellow_background: 'oklch(0.9597 0.0633 94.68)',
} as const

const COLORS_DARK = {
  theme: 'oklch(0.1173 0.0020 259.41)',
  invert: 'oklch(0.4386 0 0)',
  default: 'oklch(0.9037 0 0)',
  gray: 'oklch(0.7839 0.0050 266.94)',

  b1: 'oklch(0.3368 0 0)',
  b2: 'oklch(0.3942 0 0)',
  b3: 'oklch(0.5103 0 0)',
  b4: 'oklch(0.3791 0 0 / 50%)',
  btn_bg: 'oklch(0.25 0.0063 250 / 0.5)',
} as const

const NOTION_COLORS_DARK = {
  blue: 'oklch(0.6232 0.1846 257.68)',
  blue_background: 'oklch(0.8580 0.1034 252.55)',
  brown: 'oklch(0.6291 0.0384 73.31)',
  brown_background: 'oklch(0.9263 0.0160 75.32)',
  default: 'oklch(0.9037 0 0)',
  gray: 'oklch(0.7839 0.0050 266.94)',
  gray_background: 'oklch(0.9361 0.0010 286.03)',
  green: 'oklch(0.7997 0.1768 156.56)',
  green_background: 'oklch(0.9589 0.1218 119.00)',
  orange: 'oklch(0.7057 0.2033 39.13)',
  orange_background: 'oklch(0.8908 0.1220 60.88)',
  pink: 'oklch(0.6740 0.2259 22.03)',
  pink_background: 'oklch(0.9100 0.1299 22.08)',
  purple: 'oklch(0.6287 0.2414 294.29)',
  purple_background: 'oklch(0.8585 0.1630 294.38)',
  red: 'oklch(0.6417 0.2084 29.23)',
  red_background: 'oklch(0.8980 0.1242 29.86)',
  yellow: 'oklch(0.8550 0.1130 92.38)',
  yellow_background: 'oklch(0.9822 0.0620 94.65)',
} as const

const BASE_LAYOUT = {
  border: { radius: RADIUS },
  padding: PADDING,
} as const

createGlobalTheme('[data-theme="light"]', vars, {
  ...BASE_LAYOUT,
  color: { ...COLORS_COMMON, ...COLORS_LIGHT },
  notion: { ...NOTION_COLORS_COMMON, ...NOTION_COLORS_LIGHT },
})

createGlobalTheme('[data-theme="dark"]', vars, {
  ...BASE_LAYOUT,
  color: { ...COLORS_COMMON, ...COLORS_DARK },
  notion: { ...NOTION_COLORS_COMMON, ...NOTION_COLORS_DARK },
})
