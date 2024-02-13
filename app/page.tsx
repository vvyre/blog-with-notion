import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/list/postlist/post-list';

export const revalidate = 60;

export default async function PostListPage() {
  const posts = await getPostList();

  return (
    <main>
      {posts.length === 0 && <p>작성된 글이 없어요.</p>}
      {posts.map(post => (
        <PostList key={post.id} pageData={post} />
      ))}
    </main>
  );
}
