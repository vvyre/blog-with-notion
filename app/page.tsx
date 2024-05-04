import { getPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/layout/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { isr_revalidate_period } from '@/env';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <View as="main">
      <Spacing size="3rem" />
      <View as="section">
        <PostListLayout postList={postList} />
      </View>
      <Spacing size="5rem" />
    </View>
  );
}
