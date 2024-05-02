import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/layout/post-list/post-list';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { View } from '@/_lib/components/layout/view/view';
import { PostListBox } from '@/_lib/components/layout/post-list-box/post-list-box';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { isr_revalidate_period } from '@/env';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <View as="main">
      <Spacing size="3rem" />
      <View as="section">
        <PostListBox postList={postList} />
      </View>
      <Spacing size="5rem" />
    </View>
  );
}
