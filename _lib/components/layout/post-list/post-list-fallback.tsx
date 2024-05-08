import { Txt } from '../../typography/txt/txt';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';

export function PostListFallback() {
  return (
    <Flex width="fill" justifyContents="center" alignItems="center">
      <Spacing size="10rem" />
      <Txt as="p" color="gray">
        작성된 글이 없습니다
      </Txt>
    </Flex>
  );
}
