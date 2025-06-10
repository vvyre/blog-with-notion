import { getCachedPostList } from 'utils/fetch/notion'
import { PostListLayout } from 'components/_sections/post-list/post-list-layout/post-list-layout'
import { notion_env } from 'constants/envs'
import { BackgroundLayout } from 'components/_sections/background/background'

export const revalidate = 3600

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id)
  return (
    <BackgroundLayout>
      <PostListLayout category="engineering" posts={postList} />
    </BackgroundLayout>
  )
}
