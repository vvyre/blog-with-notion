import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/compounds/postlist/post-list';
import { List } from '@/_lib/components/list/list';
import { Section } from '@/_lib/components/template/section';
import { PostListMenu } from '@/_lib/components/compounds/postlistmenu/post-list-menu';
import { Txt } from '@/_lib/components/typography/txt/txt';

export const revalidate = 60;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <Section>
      <PostListMenu postListData={postList} />
      {postList.length > 0 ? (
        <List as="ul">
          {postList.map(post => (
            <PostList key={post.id} pageData={post} />
          ))}
        </List>
      ) : (
        <Txt>작성된 글이 없어요.</Txt>
      )}
    </Section>
  );
}
