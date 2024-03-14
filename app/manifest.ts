import { THEMES } from '@/_lib/styles/colors.css';
import { meta } from '@/constants/meta';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.siteTitle,
    short_name: meta.siteTitle,
    description: meta.siteDiscription,
    start_url: '/',
    display: 'browser',
    background_color: THEMES.default,
    theme_color: THEMES.default,
    // icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon',
    //   },
    // ],
  };
}
