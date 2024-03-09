import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '유승윤 개발 일지',
    short_name: '유승윤 개발 일지',
    description: '유승윤의 개발 일지입니다.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#13D483',
    // icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon',
    //   },
    // ],
  };
}
