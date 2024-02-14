export const meta = {
  siteTitle: '유승윤 개발 블로그',
  siteDiscription: '유승윤 개발 블로그',
  footer: {
    links: [
      { name: 'Github', href: 'https://github.com/brewcoldblue' },
      { name: 'Contact - seung.yoon.yu (at) gmail', href: 'mailto:seung.yoon.yu@gmail.com' },
    ],
    copyright: 'Copyright 2024. Seungyoon Yu All rights reserved.',
  },
};
export const routes: { name: string; path: string }[] = [
  { name: '블로그', path: '/' },
  { name: '소개', path: '/about' },
];
