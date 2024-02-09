import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { getPostList, getPost, getPostMetaData } from '@/fetch/notion';
import { meta } from '@/constants/meta';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Post({ params }: PostPageProps) {
  const posts = await getPostList();
  const [matchPost] = posts.filter(
    post => parsedSlug(post) === decodeURIComponent(params.slug)
  );
  const meta = await getPostMetaData(matchPost.id);
  const blocks = await getPost(matchPost.id);

  return (
    <main>
      <h1>{meta.properties.title.title[0].plain_text}</h1>
      <p>{meta.properties.summary.rich_text.plain_text}</p>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPostList();
  return posts.map(post => ({
    slug: parsedSlug(post),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const posts = await getPostList();
  const [matchPost] = posts.filter(
    post => parsedSlug(post) === decodeURIComponent(params.slug)
  );

  return {
    title: `${meta.siteTitle} / ${getTitle(matchPost)}`,
    description: getSummary(matchPost),
  };
}
