import { meta } from '@/_lib/constants/meta'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.siteTitle,
    short_name: meta.siteTitle,
    description: meta.siteDiscription,
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
