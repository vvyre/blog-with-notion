import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/basics/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { notion_env } from '@/env';
import { Flex } from '@/_lib/components/basics/flex/flex';
import { LAYOUT_BG_TIL, LAYOUT_INNER } from '../page.css';

export default async function TIL() {
  const postList = await getCachedPostList(notion_env.study_database_id);

  return (
    <View styleVariant={LAYOUT_BG_TIL}>
      <View as="section" styleVariant={LAYOUT_INNER}>
        <Flex flexDirection="column" justifyContents="center" alignItems="center">
          <PostListLayout category="til" posts={postList} />
        </Flex>
      </View>
    </View>
  );
}
