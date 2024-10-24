import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { meta } from '@/constants/meta';
import { getCachedPostList, getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/_blocks/block';
import { PostTitle } from '@/_lib/components/layout/post-title/post-title';
import { Article } from '@/_lib/components/layout/article/article';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { processedBlock } from '@/utils/process-block';
import { View } from '@/_lib/components/layout/view/view';
import { LAYOUT_CENTERED } from '@/_lib/components/layout/article/article.css';
import { isr_revalidate_period, notion_env } from '@/env';
import { Giscus } from '@/_lib/components/embed/giscus/giscus';
import { ShareBtn } from '@/_lib/components/interaction/button/share-btn/share-btn';
import { Flex } from '@/_lib/components/layout/flex/flex';
import { OtherArticlesBtn } from '@/_lib/components/interaction/button/other-articles-btn/other-articles-btn';

export interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = isr_revalidate_period;

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.database_id);
  const [matchPost] = posts.filter(post => parsedSlug(post) === params.slug);
  const meta = await getPostMetaData(matchPost.id);
  const blocks = await processedBlock(await getPost(matchPost.id));

  return (
    <View as="main">
      <Article>
        <PostTitle {...meta} />
        <View styleVariant={LAYOUT_CENTERED}>
          {blocks.map(b => (
            <Block key={b.id} block={b} />
          ))}
          <Spacing size="5rem" />
          <Flex justifyContents="spaceBetween">
            <OtherArticlesBtn />
            <ShareBtn />
          </Flex>
          <Giscus />
        </View>
      </Article>
      <Spacing size="10rem" />
    </View>
  );
}

export async function generateStaticParams() {
  const posts = await getCachedPostList(notion_env.database_id);

  return posts.map(post => {
    return {
      slug: parsedSlug(post),
    };
  });
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getCachedPostList(notion_env.database_id);
  const [matchPost] = posts.filter(post => parsedSlug(post) === params.slug);

  return {
    title: `${getTitle(matchPost)} – ${meta.siteTitle}`,
    description: getSummary(matchPost),
  };
}
