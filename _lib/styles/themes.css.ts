import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

const RADIUS = {
  card: '0.425rem',
  btn_square: '0.425rem',
  btn_round: '2rem',
};

const PADDING = {
  card: '0.75rem 1rem 0.75rem 1rem',
  btn_square: '0.4rem 0.55rem 0.4rem 0.55rem',
  btn_round: '0.65rem',
};

export const vars = createGlobalThemeContract({
  color: {
    theme: 'color-theme',
    white: 'color-white',
    whitegray: 'color-whitegray',
    lightgray: 'color-lightgray',
    default: 'color-default',
    blueblack: 'color-blueblack',
    gray: 'color-gray',
    highlight: 'color-highlight',
    b1: 'color-light-b1',
    b2: 'color-light-b2',
    b3: 'color-light-b3',
    b4: 'color-light-b4',
    btn_bg: 'color-btn-bg',
    nav_bg: 'color-nav-bg',
    postListText: 'color-postlist-text',
    postListTextHovered: 'color-postlist-text-hovered',
  },
  notion: {
    blue: 'notion-blue',
    blue_background: 'notion-blue-background',
    brown: 'notion-brown',
    brown_background: 'notion-brown-background',
    default: 'notion-default',
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
    btn_round: 'padding-btn-round',
    btn_square: 'padding-btn-squre',
  },
  border: {
    radius: {
      card: 'border-radius-card',
      btn_square: 'border-radius-btn-square',
      btn_round: 'border-radius-btn-round',
    },
  },
});

createGlobalTheme('[data-theme="light"]', vars, {
  border: { radius: RADIUS },
  padding: PADDING,
  color: {
    theme: '#F0F2F6',
    white: '#FFFFFF',
    whitegray: '#F7F8FB',
    lightgray: '#A0A2A6',
    default: 'rgba(64, 66, 70, 1)',
    blueblack: '#404246',
    gray: '#808286',
    highlight: '#3696eb',
    b1: '#FFFFFF',
    b2: '#F7F8FB',
    b3: '#E6E6E7',
    b4: 'rgba(88,91,94,0.4)',
    btn_bg: 'rgba(241,242,247,0.5)',
    nav_bg: 'transparent',
    postListText: 'rgba(255,255,0,1)',
    postListTextHovered: 'rgba(240, 242, 246, 1)',
  },
  notion: {
    blue: '#1b64da',
    blue_background: '#90c2ff',
    brown: '#8a775f',
    brown_background: '#dbd3c8',
    default: '#303236',
    gray: '#808286',
    gray_background: '#E6E6E7',
    green: '#13D483',
    green_background: '#E4FA98',
    orange: '#FA5A15',
    orange_background: '#eda16f',
    pink: '#ff6666',
    pink_background: '#ffcccc',
    purple: '#7F38EC',
    purple_background: '#DA98FA',
    red: '#e42939',
    red_background: '#feafb4',
    yellow: '#ffb331',
    yellow_background: '#ffe69b',
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  border: { radius: RADIUS },
  padding: PADDING,
  color: {
    theme: '#101216',
    white: '#FFFFFF',
    whitegray: '#F7F8FB',
    lightgray: '#A0A2A6',
    default: 'rgba(240, 242, 246, 1)',
    blueblack: '#404246',
    gray: '#C0C3C6',
    highlight: '#3696eb',
    b1: '#202226',
    b2: '#303236',
    b3: '#404246',
    b4: 'rgba(48,50,54,0.4)',
    btn_bg: 'rgba(48,50,54,0.5)',
    nav_bg: 'transparent',
    postListText: 'rgba(255,255,0,1)',
    postListTextHovered: 'rgba(240, 242, 246, 1)',
  },
  notion: {
    blue: '#4A90E2',
    blue_background: '#A6D4FF',
    brown: '#A68A6F',
    brown_background: '#EDE3D6',
    default: '#F0F2F6',
    gray: '#A0A2A6',
    gray_background: '#F2F2F3',
    green: '#2EE59D',
    green_background: '#E8FFD5',
    orange: '#FF7F41',
    orange_background: '#FFC199',
    pink: '#FF8896',
    pink_background: '#FFE0E5',
    purple: '#9B6BFF',
    purple_background: '#E8D7FF',
    red: '#FF5A68',
    red_background: '#FFD6DA',
    yellow: '#FFD154',
    yellow_background: '#FFF2C2',
  },
});
