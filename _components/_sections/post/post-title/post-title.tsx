'use client'
import { Heading } from 'components/basics/typography/heading/heading'
import { getTitle } from 'utils/block-processing/get-title'
import { Txt } from 'components/basics/typography/txt/txt'
import { View } from 'components/basics/view/view'
import { BASE, TITLE, SUMMARY, INFO_BOX, TITLE_ALIGN } from './post-title.css'
import { getSummary } from 'utils/block-processing/get-summary'
import { PageObject } from 'types/notion-response'
import { CurrentPostContext } from 'components/context/current-post-provider'
import { useContext } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { Spacing } from 'components/basics/spacing/spacing'
import { Btn } from 'components/basics/button/btn'
import { BACK_BUTTON_BASE } from '../back-button/back-button.css'
import { DoubleArrowDownIcon } from '@radix-ui/react-icons'
import { Flex } from 'components/basics/flex/flex'
import { getDate } from 'utils/block-processing/get-date'
import { getTags } from 'utils/block-processing/get-tags'
import { Tag } from '../tag/tag'
import { TagBase } from '../tag/tag-base'

export function PostTitle({ ...meta }: PageObject) {
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
        <Spacing size="3rem" />
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

        <Spacing size="3rem" />
        <Flex>
          <DoubleArrowDownIcon width="12px" height="12px" />
        </Flex>
      </View>
    </View>
  )
}
