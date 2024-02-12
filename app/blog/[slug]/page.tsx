import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { meta } from '@/constants/meta';
import { getCachedPostList, getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/Block';
import { Title } from '@/_lib/components/layout/title/Title';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Post({ params }: PostPageProps) {
  const posts = await getCachedPostList();
  const [matchPost] = posts.filter(post => parsedSlug(post) === decodeURIComponent(params.slug));
  const meta = await getPostMetaData(matchPost.id);
  const blocks = await getPost(matchPost.id);

  return (
    <article>
      <Title title={getTitle(meta)} />
      {blocks.map(b => (
        <Block key={b.id} block={b} />
      ))}
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getCachedPostList();
  return posts.map(post => ({
    slug: parsedSlug(post),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getCachedPostList();
  const [matchPost] = posts.filter(post => parsedSlug(post) === decodeURIComponent(params.slug));

  return {
    title: `${meta.siteTitle} / ${getTitle(matchPost)}`,
    description: getSummary(matchPost),
  };
}
