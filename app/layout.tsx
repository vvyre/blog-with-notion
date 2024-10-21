import '@/_lib/components/_blocks/code/hljs.css';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import { site_env } from '@/env';
import { Category } from '@/_lib/components/layout/category/category';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { Footer } from '@/_lib/components/layout/footer/footer';
import { Providers } from '@/_lib/components/providers';

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
  authors: [{ name: 'Brewcold', url: meta.og.url }],
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
  alternates: {
    canonical: site_env.root,
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'RSS' }],
    },
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
      <Providers>
        <View as="body">{children}</View>
      </Providers>
    </html>
  );
}
