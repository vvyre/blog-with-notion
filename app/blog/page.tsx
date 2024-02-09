import { parsedSlug } from '@/utils/parsed-slug';
import { getPostList } from '@/fetch/notion';
import Link from 'next/link';

export const revalidate = 60;
export default async function PostList() {
  const posts = await getPostList();

  return (
    <main>
      {posts.map(post => (
        <>
          <h1>
            <Link href={`/blog/${parsedSlug(post)}`}>
              {post.properties.title.title[0].plain_text}
            </Link>
          </h1>
          <p>{post.properties.summary.rich_text.plain_text || ''}</p>
        </>
      ))}
    </main>
  );
}
