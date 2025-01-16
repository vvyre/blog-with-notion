'use client'
import Image from 'next/image'
import reloadingFallback from '#/img/loading.svg'
import { getPlainText } from '@/utils/get-plain-text'
import { Txt } from '../../basics/typography/txt/txt'
import { View } from '../../basics/view/view'
import {
  CAPTION_TXT_TEXTBOX,
  CAPTION_TXT_ZOOMED,
  IMG,
  IMG_CONTAINER,
  IMG_CONTAINER_ZOOMED,
} from './img.css'
import { useNotionImg } from './use-notion-img'
import { useState } from 'react'
import type { NotionComponentProps } from '@/_lib/types/block'

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block)
  const [zoomed, setZoomed] = useState<boolean>(false)

  return (
    <View as="figure" className={zoomed ? IMG_CONTAINER_ZOOMED : IMG_CONTAINER}>
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
      {block.image.caption.length > 0 && (
        <Txt
          as="figcaption"
          className={zoomed ? CAPTION_TXT_ZOOMED : CAPTION_TXT_TEXTBOX}
        >
          {getPlainText(block.image.caption)}
        </Txt>
      )}
    </View>
  )
}
