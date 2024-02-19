const TITLE = '유승윤 개발 일지';
const DESCRIPTION = '유승윤 개발 블로그';

export const meta = {
  siteTitle: TITLE,
  siteDiscription: DESCRIPTION,
  og: {
    url: '',
    title: TITLE,
    type: 'website' as const,
    description: DESCRIPTION,
    images: '',
  },
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
