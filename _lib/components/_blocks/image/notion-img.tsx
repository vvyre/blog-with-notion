'use client';
import Image from 'next/image';
import reloadingFallback from '#/img/loading.svg';
import { getPlainText } from '@/utils/get-plain-text';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import {
  CAPTION,
  CAPTION_TXT,
  CAPTION_TXT_ZOOMED,
  CAPTION_ZOOMED,
  IMG,
  IMG_CONTAINER,
  IMG_CONTAINER_ZOOMED,
} from './img.css';
import { useNotionImg } from './use-notion-img';
import { useState } from 'react';
import type { NotionComponentProps } from '@/_lib/types/block';

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block);
  const [zoomed, setZoomed] = useState<boolean>(false);

  return (
    <Flex justifyContents="center" alignItems="center" styleVariant={zoomed ? IMG_CONTAINER_ZOOMED : IMG_CONTAINER}>
      <Image
        unoptimized
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
      <Spacing size="0.35rem" />
      {block.image.caption.length > 0 && (
        <Txt styleVariant={zoomed ? CAPTION_TXT_ZOOMED : CAPTION_TXT}>{getPlainText(block.image.caption)}</Txt>
      )}
      <Spacing size="2rem" />
    </Flex>
  );
}
