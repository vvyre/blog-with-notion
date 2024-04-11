import { site_env } from '@/env';
import logo from '#/img/logo.png';

const TITLE = '유승윤 개발 일지';
const DESCRIPTION = '개발을 하면서 있었던 일들이나 공부한 것들, 생각들을 정리하는 곳입니다.';

export const meta = {
  siteTitle: TITLE,
  siteDiscription: DESCRIPTION,
  og: {
    url: site_env.root,
    title: TITLE,
    type: 'website' as const,
    description: DESCRIPTION,
    images: logo,
  },
  footer: {
    links: [
      { name: 'Github', href: 'https://github.com/brewcold' },
      { name: 'seung.yoon.yu (at) gmail', href: 'mailto:seung.yoon.yu@gmail.com' },
    ],
    copyright: 'Copyright 2024. Seungyoon Yu All rights reserved.',
  },
};
