import '../_lib/styles/global.css';
import { meta } from '@/constants/meta';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
