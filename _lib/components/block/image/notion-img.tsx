'use client';
import Image from 'next/image';
import reloadingFallback from '#/img/loading.svg';
import { getPlainText } from '@/utils/get-plain-text';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import { CAPTION, CAPTION_TXT, IMG_CONTAINER } from './img.css';
import { useNotionImg } from './use-notion-img';

import type { NotionComponentProps } from '@/_lib/types/component-common';

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block);
  return (
    <Flex flexDirection="column" justifyContents="center" alignItems="center" styleVariant={IMG_CONTAINER}>
      <Image
        key={imgUrl}
        src={isReloading ? reloadingFallback : imgUrl}
        alt={getPlainText(block?.image?.caption)}
        priority
        onError={() => reload()}
        blurDataURL={block.blurDataURL}
        width={1200}
        height={600}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '55vw',
          maxHeight: '75vh',
        }}
      />
      <Spacing size="0.25rem" />
      {block.image.caption.length > 0 ? (
        <View styleVariant={CAPTION}>
          <Txt styleVariant={CAPTION_TXT}>{getPlainText(block.image.caption)}</Txt>
          <Spacing size="1rem" />
        </View>
      ) : (
        <Spacing size="1rem" />
      )}
    </Flex>
  );
}
