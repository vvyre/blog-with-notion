'use client';
import type { NotionImageResponse } from '@/_lib/types/components/component-props';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getPlainText } from '@/utils/get-plain-text';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import { CAPTION, CAPTION_TXT, IMG_CONTAINER } from './img.css';
import { useNotionImg } from './use-notion-img';

export function NotionImg({ block }: NotionImageResponse) {
  const { imgUrl, reload } = useNotionImg(block);

  return (
    <Flex flexDirection="column" justifyContents="center" alignItems="flexStart">
      <View styleVariant={IMG_CONTAINER}>
        <Image
          src={imgUrl}
          alt={getPlainText(block?.image?.caption)}
          priority
          onError={() => reload()}
          blurDataURL={block.blurDataURL}
          width={720}
          height={600}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
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
