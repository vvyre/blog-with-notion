'use client';
import Image from 'next/image';
import reloadingFallback from '#/img/loading.svg';
import { getPlainText } from '@/utils/get-plain-text';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import { CAPTION, CAPTION_TXT, IMG, IMG_CONTAINER, IMG_CONTAINER_ZOOMED } from './img.css';
import { useNotionImg } from './use-notion-img';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import { useState } from 'react';

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block);
  const [zoomed, setZoomed] = useState<boolean>(false);

  return (
    <Flex
      flexDirection="column"
      justifyContents="center"
      alignItems="center"
      styleVariant={zoomed ? IMG_CONTAINER_ZOOMED : IMG_CONTAINER}>
      <Image
        className={IMG}
        key={imgUrl}
        src={isReloading ? reloadingFallback : imgUrl}
        alt={getPlainText(block?.image?.caption)}
        priority
        onError={() => reload()}
        onClick={() => setZoomed(!zoomed)}
        blurDataURL={block.blurDataURL}
        width={1680}
        height={1200}
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
