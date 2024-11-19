import { Flex } from '../../basics/flex/flex';
import reloadingFallback from '#/img/loading.svg';
import Image from 'next/image';

export function PostListFallback() {
  return (
    <Flex width="fill" justifyContents="center" alignItems="center">
      <Image src={reloadingFallback} alt="loading" />
    </Flex>
  );
}
