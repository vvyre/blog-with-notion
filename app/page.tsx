import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/layout/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { isr_revalidate_period, notion_env } from '@/env';
import { LAYOUT_BG, LAYOUT_INNER } from './page.css';
import { Flex } from '@/_lib/components/layout/flex/flex';
import { getBackgroundImg } from '@/utils/get-background-img';

export const revalidate = isr_revalidate_period;

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id);
  const backgroundImg = getBackgroundImg();
  return (
    <View
      as="main"
      styleVariant={LAYOUT_BG}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}>
      <View styleVariant={LAYOUT_INNER}>
        <Flex flexDirection="column" justifyContents="center" alignItems="center">
          <PostListLayout category="engineering" postList={postList} />
        </Flex>
      </View>
    </View>
  );
}
