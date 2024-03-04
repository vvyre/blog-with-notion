import { Header } from '@/_lib/components/compounds/header/header';
import '@/_lib/components/block/code/hljs.css';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import { Footer } from '@/_lib/components/compounds/footer/footer';
import Head from 'next/head';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="naver-site-verification" content="bae405a50bfce503cf32d8d3f8460931bc2bf9bd" />
      </Head>
      <View as="body">
        <Header />
        <View as="main">{children}</View>
        <Footer />
      </View>
    </html>
  );
}
