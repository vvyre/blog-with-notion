'use client'
import { Heading } from 'components/common/typography/heading/heading'
import { getTitle } from 'utils/block-processing/get-title'
import { Txt } from 'components/common/typography/txt/txt'
import { View } from 'components/common/view/view'
import { BASE, TITLE, SUMMARY, INFO_BOX, TITLE_ALIGN } from './post-header.css'
import { getSummary } from 'utils/block-processing/get-summary'
import { PageObject } from 'types/notion-response'
import { CurrentPostContext } from 'components/providers/current-post-provider'
import { useContext } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { Spacing } from 'components/common/spacing/spacing'
import { Btn } from 'components/common/button/btn'
import { BACK_BUTTON_BASE } from '../back-button/back-button.css'
import { getDate } from 'utils/block-processing/get-date'
import { getTags } from 'utils/block-processing/get-tags'
import { Tag } from '../tag/tag'
import { TagBase } from '../tag/tag-base'

export function PostHeader({ ...meta }: PageObject) {
  const { setCurrentPost } = useContext(CurrentPostContext)
  const title = getTitle(meta)
  const summary = getSummary(meta)
  const rel_date = getDate(meta)
  const tags = getTags(meta)

  //SSR-ED Content
  useIsomorphicLayoutEffect(() => {
    setCurrentPost(meta)
  }, [meta.id])

  return (
    <View className={[BASE].join('')}>
      <View className={INFO_BOX}>
        <Btn as="Link" href={'/'} className={BACK_BUTTON_BASE}>
          <Txt as="span">←</Txt>
        </Btn>
        <Spacing size="2rem" />
        <View className={TITLE_ALIGN}>
          <Txt as="p" className={SUMMARY}>
            {rel_date}
          </Txt>
          <Heading as="h1" className={TITLE}>
            {title}
          </Heading>
          <Txt as="p" className={SUMMARY}>
            {summary}
          </Txt>
          <Spacing size="2rem" />
          <TagBase>
            {tags.map(tag => (
              <Tag key={tag.id}>{tag.name}</Tag>
            ))}
          </TagBase>
        </View>
      </View>
    </View>
  )
}
