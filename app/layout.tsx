import { Header } from '@/_lib/components/compounds/header/header';
import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';
import { View } from '@/_lib/components/layout/view/view';
import { Footer } from '@/_lib/components/compounds/footer/footer';

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDiscription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <View as="body">
        <Header />
        <View as="main">{children}</View>
        <Footer />
      </View>
    </html>
  );
}
