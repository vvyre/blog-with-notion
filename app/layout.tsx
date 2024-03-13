import { Header } from '@/_lib/components/layout/header/header';
import '@/_lib/components/block/code/hljs.css';
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
    images: meta.og.images,
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
        <Header />
        <View as="main">{children}</View>
        <Footer />
      </View>
    </html>
  );
}
