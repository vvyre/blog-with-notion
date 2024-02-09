//@ts-nocheck
import { getSummary } from '@/utils/get-summary';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { getPostList, getPost, getPostMetaData } from '@/fetch/notion';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageProps) {
  const posts = await getPostList({ revalidate: 60 });
  const [matchPost] = posts.filter(
    post => parsedSlug(post) === decodeURIComponent(params.slug)
  );
  const meta = await getPostMetaData(matchPost.id);
  const blocks = await getPost(matchPost.id);

  return (
    <main>
      <h1>{meta.id}</h1>
      <div>
        {/* {blocks.map(b => {
          //@ts-expect-error
          const type = b.type;
          //@ts-expect-error
          return b[type].rich_text[0].plain_text;
        })} */}
      </div>
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
    title: `Seungyoon Yu / ${getTitle(matchPost)}`,
    description: getSummary(matchPost),
  };
}
