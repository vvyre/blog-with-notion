import { site_env } from '@/env';
import logo from '#/img/logo.webp';

const TITLE = 'Brewcold';
const DESCRIPTION = 'Writings about life as a developer';

export const meta = {
  siteTitle: TITLE,
  siteDomain: 'brewcoldblue.com',
  siteDiscription: DESCRIPTION,
  og: {
    url: site_env.root,
    title: TITLE,
    type: 'website' as const,
    description: DESCRIPTION,
    images: logo,
  },
  footer: {
    links: [{ name: 'Github', href: 'https://github.com/brewcold' }],
    copyright: 'Copyright 2024. BREWCOLD All rights reserved.',
  },
};
