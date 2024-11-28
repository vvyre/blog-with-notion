import { vars } from '@/_lib/styles/themes.css';
import { meta } from '@/constants/meta';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.siteTitle,
    short_name: meta.siteTitle,
    description: meta.siteDiscription,
    start_url: '/',
    display: 'browser',
    background_color: vars.color.default,
    theme_color: vars.color.theme,
    // icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon',
    //   },
    // ],
  };
}
