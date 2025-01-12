import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/basics/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { notion_env } from '@/env';
import { LAYOUT_INNER, OVERFLOW } from './page.css';
import { BackgroundLayout } from '@/_lib/components/layout/background/background';

export const revalidate = 3600;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);
  return (
    <BackgroundLayout>
      <View as="section" className={LAYOUT_INNER}>
        <View className={OVERFLOW}>
          <PostListLayout category="engineering" posts={postList} />
        </View>
      </View>
    </BackgroundLayout>
  );
}
