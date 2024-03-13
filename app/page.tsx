import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/layout/post-list/post-list';
import { List } from '@/_lib/components/list/list';
import { PostListHeader } from '@/_lib/components/layout/post-list-header/post-list-header';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { View } from '@/_lib/components/layout/view/view';
import { PostListBox } from '@/_lib/components/layout/post-list-box/post-list-box';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';

export const revalidate = 300;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <>
      <View as="section">
        <PostListHeader postListData={postList} />
        <PostListBox>
          {postList.length > 0 ? (
            postList.map(post => <PostList key={post.id} pageData={post} />)
          ) : (
            <Txt>작성된 글이 없어요.</Txt>
          )}
        </PostListBox>
      </View>
      <Spacing size="10rem" />
    </>
  );
}
