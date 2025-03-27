import { site_env } from '@/env'
import logo from '#/img/logo.webp'

const TITLE = 'wyreframelife'
const DESCRIPTION = 'Writings about life as a developer'

export const meta = {
  siteTitle: TITLE,
  siteDomain: 'wyre.run',
  siteDiscription: DESCRIPTION,
  og: {
    url: site_env.root,
    title: TITLE,
    type: 'website' as const,
    description: DESCRIPTION,
    images: logo,
  },
  footer: {
    links: [{ name: 'Github', href: 'https://github.com/vvyre' }],
    copyright: 'Copyright 2024-2025. Seungyoon Yu All rights reserved.',
  },
}
