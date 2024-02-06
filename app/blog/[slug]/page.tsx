import { PageProps } from '@/.next/types/app/page';
import { getPostList, getPost, getPostMetaData } from '@/fetch/notion';

//Incremental Static Regeneration
export const revalidate = 60;

export async function generateSlugs() {
  const posts = await getPostList();
  //@ts-expect-error
  const postSlugs = posts.map(post => post.id.slice(0, 8));
  return {
    paths: postSlugs,
    fallback: 'blocking',
  };
}

export default async function Post({ params }: PageProps) {
  const meta = await getPostMetaData(params.slug);
  const blocks = await getPost(params.slug);

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
