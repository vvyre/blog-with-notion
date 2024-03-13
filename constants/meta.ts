const TITLE = '유승윤 개발 일지';
const DESCRIPTION = '개발을 하면서 있었던 일들이나 공부한 것들, 생각들을 정리하는 곳입니다.';

export const meta = {
  siteTitle: TITLE,
  siteDiscription: DESCRIPTION,
  siteHeader: '우왓 대박',
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
