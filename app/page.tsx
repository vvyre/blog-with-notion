import { getPost, getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/layout/post-list/post-list';
import { Profile } from '@/_lib/components/layout/profile/profile';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { View } from '@/_lib/components/layout/view/view';
import { PostListBox } from '@/_lib/components/layout/post-list-box/post-list-box';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { processedBlock } from '@/utils/process-block';
import { notion_env } from '@/env';
import { Block } from '@/_lib/components/block/block';

export const revalidate = 300;

export default async function PostListPage() {
  const postList = await getPostList();
  const PROFILE_BLOCKS = await processedBlock(await getPost(notion_env.profile_id));

  return (
    <View as="main">
      <View as="section">
        <Profile>
          {PROFILE_BLOCKS.map(block => (
            <Block key={block.id} block={block} />
          ))}
        </Profile>
        <PostListBox>
          {postList.length > 0 ? (
            postList.map(post => <PostList key={post.id} pageData={post} />)
          ) : (
            <Txt>작성된 글이 없어요.</Txt>
          )}
        </PostListBox>
      </View>
      <Spacing size="10rem" />
    </View>
  );
}
