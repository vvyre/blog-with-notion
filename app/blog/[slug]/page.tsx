import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { meta } from '@/constants/meta';
import { getCachedPostList, getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { PostTitle } from '@/_lib/components/layout/post-title/post-title';
import { Article } from '@/_lib/components/layout/post/article';
import { Utterances } from '@/_lib/components/utterances/utterances';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { processedBlock } from '@/utils/process-block';
import { View } from '@/_lib/components/layout/view/view';
import { POST_GRID, POST_GRID_PLACEMENT } from '@/_lib/components/layout/post/article.css';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 300;

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList();
  const [matchPost] = posts.filter(post => parsedSlug(post) == params.slug);

  const meta = await getPostMetaData(matchPost.id);
  const blocks = await processedBlock(await getPost(matchPost.id));

  return (
    <>
      <Article>
        <Spacing size="3rem" />
        <PostTitle {...meta} />

        <View styleVariant={POST_GRID}>
          <View styleVariant={POST_GRID_PLACEMENT}>
            {blocks.map(b => (
              <Block key={b.id} block={b} />
            ))}
            <Spacing size="5rem" />
            <Utterances />
          </View>
        </View>
      </Article>
      <Spacing size="8rem" />
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
