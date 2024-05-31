import { getCachedPostList, getPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/layout/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { isr_revalidate_period, notion_env } from '@/env';
import About from '@/_lib/components/about/about';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);

  return (
    <View as="main">
      <View as="section">
        <Spacing size="3rem" />
        <About />
        <Spacing size="3rem" />
        <PostListLayout postList={postList} />
      </View>
    </View>
  );
}
