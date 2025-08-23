'use client'
import { default as Img } from 'next/image'
import { getPlainText } from 'utils/block-processing/get-plain-text'
import { Txt } from 'components/common/typography/txt/txt'
import { View } from 'components/common/view/view'
import {
  CAPTION_TXT_TEXTBOX,
  CAPTION_TXT_ZOOMED,
  IMG,
  IMG_CONTAINER,
  IMG_CONTAINER_ZOOMED,
} from './img.css'
import { useNotionImg } from './use-notion-img'
import { useEffect, useState } from 'react'
import loading from '#/img/loading.svg'
import type { NotionComponentProps } from 'types/block'
import { useModal } from '@frfla/react-hooks'

export function NotionImg({ block }: NotionComponentProps<'image'>) {
  const { imgUrl, reload, isReloading } = useNotionImg(block)
  const [[width, height], setImgSize] = useState<[number, number]>([400, 300])
  const [zoomed, setZoomed] = useState<boolean>(false)
  const { open, close } = useModal()

  useEffect(() => {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
      if (img.height >= 400) setImgSize([img.width / 2, img.height / 2])
      else setImgSize([img.width, img.height])
    }
  }, [imgUrl])

  useEffect(() => {
    if (zoomed)
      open(
        <View as="figure" className={IMG_CONTAINER_ZOOMED} onClick={() => close()}>
          <Img
            unoptimized
            className={IMG}
            key={imgUrl}
            src={isReloading ? loading : imgUrl}
            alt={getPlainText(block?.image?.caption)}
            priority
            onError={() => reload()}
            onClick={() => setZoomed(!zoomed)}
            blurDataURL={block.blurDataURL}
            width={width}
            height={height}
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
  }, [zoomed, setZoomed])

  return (
    <View as="figure" className={IMG_CONTAINER} onClick={() => setZoomed(true)}>
      <Img
        unoptimized
        className={IMG}
        key={imgUrl}
        src={isReloading ? loading : imgUrl}
        alt={getPlainText(block?.image?.caption)}
        priority
        onError={() => reload()}
        onClick={() => setZoomed(!zoomed)}
        blurDataURL={block.blurDataURL}
        width={width}
        height={height}
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
