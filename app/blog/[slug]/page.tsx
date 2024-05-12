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
import { POST_CENTERED } from '@/_lib/components/layout/article/article.css';
import { isr_revalidate_period } from '@/env';
import { Giscus } from '@/_lib/components/giscus/giscus';
import { getTags } from '@/utils/get-tags';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { style } from '@vanilla-extract/css';
import { GiscusFallback } from '@/_lib/components/giscus/giscus-fallback';
import { ShareBtn } from '@/_lib/components/interaction/share-btn/share-btn';
import { Flex } from '@/_lib/components/layout/flex/flex';

export interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = isr_revalidate_period;

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList();
  const [matchPost] = posts.filter(post => parsedSlug(post) == params.slug);

  const meta = await getPostMetaData(matchPost.id);
  const blocks = await processedBlock(await getPost(matchPost.id));

  const [category] = getTags(meta);
  const isDevPost = category.color === 'purple';

  return (
    <>
      <View as="main">
        <Article>
          <PostTitle {...meta} />
          <View styleVariant={POST_CENTERED}>
            {blocks.map(b => (
              <Block key={b.id} block={b} />
            ))}
            <Spacing size="2rem" />
            <ShareBtn />
            {isDevPost ? <Giscus /> : <GiscusFallback />}
          </View>
        </Article>
      </View>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getCachedPostList();

  return posts.map(post => {
    return {
      slug: parsedSlug(post),
    };
  });
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getCachedPostList();
  const [matchPost] = posts.filter(post => parsedSlug(post) === params.slug);

  return {
    title: `${getTitle(matchPost)} – ${meta.siteTitle}`,
    description: getSummary(matchPost),
  };
}
