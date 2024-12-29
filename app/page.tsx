import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/basics/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { notion_env } from '@/env';
import { LAYOUT_BG, LAYOUT_INNER } from './page.css';
import { Flex } from '@/_lib/components/basics/flex/flex';
import { BackgroundLayout } from '@/_lib/components/layout/background/background';

export const revalidate = 3600;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);
  return (
    <BackgroundLayout>
      <View as="section" className={LAYOUT_INNER}>
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <PostListLayout category="engineering" posts={postList} />
        </Flex>
      </View>
    </BackgroundLayout>
  );
}
