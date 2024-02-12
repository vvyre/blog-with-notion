import { parsedSlug } from '@/utils/parsed-slug';
import { getPostList } from '@/fetch/notion';
import Link from 'next/link';
import { getTitle } from '@/utils/get-title';
import { getSummary } from '@/utils/get-summary';

export const revalidate = 60;
export default async function PostList() {
  const posts = await getPostList();

  return (
    <main>
      {posts.length === 0 && <p>작성된 글이 없어요.</p>}
      {posts.map(post => (
        <div key={post.id}>
          <h1>
            <Link href={`/blog/${parsedSlug(post)}`}>{getTitle(post)}</Link>
          </h1>
          <p>{getSummary(post)}</p>
        </div>
      ))}
    </main>
  );
}
