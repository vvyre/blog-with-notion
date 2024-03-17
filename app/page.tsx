import { getPost, getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/layout/post-list/post-list';
import { Profile } from '@/_lib/components/layout/profile/profile';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { View } from '@/_lib/components/layout/view/view';
import { PostListBox } from '@/_lib/components/layout/post-list-box/post-list-box';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { isr_revalidate_period, site_env } from '@/env';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <View as="main">
      <Spacing size="5rem" />
      <View as="section">
        <PostListBox>
          {postList.length > 0 ? (
            postList.map(post => <PostList key={post.id} pageData={post} />)
          ) : (
            <Txt>작성된 글이 없어요.</Txt>
          )}
        </PostListBox>
      </View>
      <Spacing size="5rem" />
    </View>
  );
}
