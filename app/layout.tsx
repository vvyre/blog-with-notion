import '@/_lib/components/_blocks/code/hljs.css';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import Head from 'next/head';
import { site_env } from '@/env';
import { Category } from '@/_lib/components/layout/category/category';

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
  authors: [{ name: 'Brewcold', url: 'https://www.brewcoldblue.com' }],
  creator: 'Brewcold',
  publisher: 'Brewcold',
  openGraph: {
    url: meta.og.url,
    title: meta.og.title,
    type: meta.og.type,
    description: meta.og.description,
    images: meta.og.images.src,
    siteName: meta.og.title,
  },
  verification: {
    google: site_env.gv,
    other: {
      'naver-site-verification': site_env.nv,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
      </Head>

      <View as="body">
        <View as="nav">
          <Category />
        </View>
        {children}
      </View>
    </html>
  );
}
