//CSS Import 순서를 변경하지 마세요
import 'components/notion-blocks/code/hljs.css'
import 'styles/themes.css'
import 'styles/global.css'
import 'styles/global-fonts.css'
import 'components/notion-blocks/toggle/details-summary-global.css'
import 'components/notion-blocks/numbered-list-item/ol-global.css'
import 'components/notion-blocks/bulleted-list-item/ul-global.css'

import { meta } from 'constants/meta'
import type { Metadata } from 'next'
import { View } from 'components/basics/view/view'
import { site_env } from 'constants/envs'
import { Providers } from 'components/providers'
import { Navigation } from 'components/_sections/navigation/navigation'
import { BackgroundControl } from 'components/_sections/background/background-control'
import { getBackgroundImgs } from 'utils/fetch/get-background-imgs'

export const metadata: Metadata = {
  ...meta,
  openGraph: {
    ...meta.openGraph,
    images: meta.openGraph.images.src,
    siteName: meta.openGraph.title,
  },
  alternates: {
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const imgSrcList = await getBackgroundImgs()

  return (
    <html lang="ko">
      <View as="body">
        <Providers>
          <Navigation />
          <BackgroundControl imgSrcList={imgSrcList} />
          {children}
        </Providers>
      </View>
    </html>
  )
}
