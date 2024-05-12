import { site_env } from '@/env';
import logo from '#/img/logo.png';

const TITLE = 'Seyu';
const DESCRIPTION = 'Writings about life as a developer';

export const meta = {
  siteTitle: TITLE,
  siteDomain: 'seungyoon-yu.com',
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
