import { Navigation } from '@/_lib/components/layout/navigation/navigation_legacy';
import '@/_lib/components/_blocks/code/hljs.css';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import { Footer } from '@/_lib/components/layout/footer/footer';
import Head from 'next/head';
import { site_env } from '@/env';

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
  openGraph: {
    url: meta.og.url,
    title: meta.og.title,
    type: meta.og.type,
    description: meta.og.description,
    images: meta.og.images.src,
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
        {children}
        <Footer />
      </View>
    </html>
  );
}
