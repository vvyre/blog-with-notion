import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/compounds/postlist/post-list';
import { List } from '@/_lib/components/list/list';
import { Section } from '@/_lib/components/template/section';

export const revalidate = 60;

export default async function PostListPage() {
  const posts = await getPostList();

  return (
    <Section>
      {posts.length === 0 && <p>작성된 글이 없어요.</p>}
      {posts.length > 0 && (
        <List as="ul">
          {posts.map(post => (
            <PostList key={post.id} pageData={post} />
          ))}
        </List>
      )}
    </Section>
  );
}
