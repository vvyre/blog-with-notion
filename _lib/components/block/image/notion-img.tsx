import Image from 'next/image';
import { NotionImg } from './notion-img-block';
import { getPlainText } from '@/utils/get-plain-text';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';

export function NotionImg({ block }: NotionImg) {
  return (
    <Flex flexDirection="column" justifyContents="center" alignItems="flexStart">
      <Image
        src={block.image.file.url}
        layout="responsive"
        width="100"
        height="100"
        alt={getPlainText(block.image.caption)}
      />
      {block.image.caption.length > 0 ? (
        <>
          <Txt size="XS">{getPlainText(block.image.caption)}</Txt>
          <Spacing size="1rem" />
        </>
      ) : (
        <Spacing size="1rem" />
      )}
    </Flex>
  );
}
