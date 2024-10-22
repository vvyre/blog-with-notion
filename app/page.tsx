import { getCachedPostList, getPost } from '@/fetch/notion';
import { View } from '@/_lib/components/layout/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { isr_revalidate_period, notion_env } from '@/env';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { Logo } from '@/_lib/components/layout/logo/logo';
import { LAYOUT } from './page.css';
import { Flex } from '@/_lib/components/layout/flex/flex';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);
  return (
    <View as="main" styleVariant={LAYOUT}>
      <Flex flexDirection="column" justifyContents="center" alignItems="center">
        <Spacing size="1rem" />
        <Spacing size="1rem" />
        <PostListLayout category="engineering" postList={postList} />
      </Flex>
    </View>
  );
}
