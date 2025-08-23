import { getSummary } from 'utils/block-processing/get-summary'
import { getTitle } from 'utils/block-processing/get-title'
import { parsedSlug } from 'utils/block-processing/parsed-slug'
import { meta } from 'constants/meta'
import { getCachedPostList, getPost, getPostMetaData } from 'utils/fetch/notion'
import { PostHeader } from 'components/sections/post/post-header/post-header'
import { Spacing } from 'components/common/spacing/spacing'
import { processedBlock } from 'utils/block-processing/process-block'
import { View } from 'components/common/view/view'
import { notion_env } from 'constants/envs'
import { ShareBtn } from 'components/common/button/share-btn/share-btn'
import { Flex } from 'components/common/flex/flex'
import { OtherArticlesBtn } from 'components/common/button/other-articles-btn/other-articles-btn'
import { NOTION_PARAGRAPH_BLOCK_LAYOUT } from 'components/notion/block-layout.css'
import RenderBlocks from 'components/notion/render-blocks'
import { ArticleRecommend } from 'components/sections/post/article-recommend/article-recommend'
import { POST_LAYOUT } from 'components/sections/background/background.css'
import { PostBorder } from 'components/sections/post/post-border/post-border'
import { Footer } from 'components/sections/footer/footer'
import { Metadata } from 'next'

export interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getCachedPostList(notion_env.database_id)

  return posts.map(post => {
    return {
      slug: parsedSlug(post),
    }
  })
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const posts = await getCachedPostList(notion_env.database_id)
  const { slug } = await params
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug)

  const title = `${getTitle(matchPost)} – ${meta.title}`
  const description = getSummary(matchPost)
  const postURI = `${meta.openGraph.url}/engineering/${slug}`
  return {
    ...meta,
    title,
    description,
    keywords: '',
    openGraph: {
      ...meta.openGraph,
      url: postURI,
      title: title,
      type: meta.openGraph.type,
      description: description,
      images: meta.openGraph.images.src,
      siteName: meta.openGraph.title,
    },
  }
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.database_id)
  const { slug } = await params
  const [matchPost] = posts.filter(post => parsedSlug(post) === slug)
  const meta = await getPostMetaData(matchPost.id)
  const blocks = await processedBlock(await getPost(matchPost.id))

  return (
    <View className={POST_LAYOUT}>
      <PostBorder>
        <PostHeader {...meta} />
        <RenderBlocks blocks={blocks} />
        <View className={NOTION_PARAGRAPH_BLOCK_LAYOUT}>
          <Spacing size="3rem" dir="vert" />
          <Flex justifyContent="spaceBetween">
            <ShareBtn />
            <OtherArticlesBtn />
          </Flex>
          <Spacing size="1rem" />
          <ArticleRecommend
            id={matchPost.id}
            posts={posts}
            targets={matchPost.properties.tags.multi_select}
          />
          <Spacing size="10rem" />
          <Footer />
        </View>
      </PostBorder>
    </View>
  )
}
