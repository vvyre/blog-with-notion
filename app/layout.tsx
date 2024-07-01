import { Navigation } from '@/_lib/components/layout/navigation/navigation_legacy';
import '@/_lib/components/_blocks/code/hljs.css';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import { Footer } from '@/_lib/components/layout/footer/footer';
import Head from 'next/head';
import { site_env } from '@/env';
import { Category } from '@/_lib/components/layout/category/category';

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
  authors: [{ name: 'Seungyoon Yu', url: 'https://seungyoon-yu.com' }],
  creator: 'Seungyoon Yu',
  publisher: 'Seungyoon Yu',
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
