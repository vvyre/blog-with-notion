import { Txt } from '../../basics/typography/txt/txt';
import { Flex } from '../../basics/flex/flex';
import { Spacing } from '../../basics/spacing/spacing';

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
