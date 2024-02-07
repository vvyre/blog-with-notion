import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seungyoon Yu',
  description: 'Seungyoon Yu Blog',
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
