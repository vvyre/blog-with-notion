import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/layout/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { isr_revalidate_period, notion_env } from '@/env';
import About from '@/_lib/components/layout/about/page';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { LAYOUT_CENTERED } from '@/_lib/components/layout/article/article.css';
import { Logo } from '@/_lib/components/layout/logo/logo';
import { LAYOUT } from './page.css';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);

  return (
    <View as="main">
      <View styleVariant={LAYOUT}>
        <Spacing size="1rem" />
        <Logo />
        <Spacing size="1rem" />
        <PostListLayout category="engineering" postList={postList} />
      </View>
    </View>
  );
}
