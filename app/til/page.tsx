import { getCachedPostList } from '@/fetch/notion';
import { View } from '@/_lib/components/basics/view/view';
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout';
import { notion_env } from '@/env';
import { Flex } from '@/_lib/components/basics/flex/flex';
import { LAYOUT_BG_TIL, LAYOUT_INNER } from '../page.css';
import { POST_LIST_TIL_CENTERED } from '@/_lib/components/layout/post-list-layout/post-list-layout.css';
import { Txt } from '@/_lib/components/basics/typography/txt/txt';

export default async function TIL() {
  const postList = await getCachedPostList(notion_env.study_database_id);

  return (
    <View styleVariant={LAYOUT_BG_TIL}>
      <View as="section" styleVariant={LAYOUT_INNER}>
        <Txt bold as="pre">
          STUDY ARCHIVE
        </Txt>
        <Flex justifyContents="center" alignItems="center">
          <PostListLayout category="til" posts={postList} className={POST_LIST_TIL_CENTERED} />
        </Flex>
      </View>
    </View>
  );
}
