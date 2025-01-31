import { meta } from '@/constants/meta'
import { randomTheme } from '@/utils/random-theme'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const theme = randomTheme()
  return {
    name: meta.siteTitle,
    short_name: meta.siteTitle,
    description: meta.siteDiscription,
    start_url: '/',
    display: 'browser',
    background_color: theme,
    theme_color: theme,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
