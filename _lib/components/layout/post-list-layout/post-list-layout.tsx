import { PostList } from '../post-list/post-list';
import { View } from '../view/view';
import { POST_LIST_CENTERED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { PostListFallback } from '../post-list/post-list-fallback';
import { CategoryType } from '@/constants/category';

export function PostListLayout({ postList, category }: { postList: PostListObject; category: CategoryType }) {
  return (
    <View as="ul" styleVariant={POST_LIST_CENTERED}>
      {postList?.length > 0 ? (
        postList.map(post => <PostList category={category} key={post.id} pageData={post} />)
      ) : (
        <PostListFallback />
      )}
    </View>
  );
}
