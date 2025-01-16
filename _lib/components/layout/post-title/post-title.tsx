'use client'
import { Heading } from '../../basics/typography/heading/heading'
import { getTitle } from '@/utils/get-title'
import { getDate } from '@/utils/get-date'
import { Txt } from '../../basics/typography/txt/txt'
import { View } from '../../basics/view/view'
import {
  BASE,
  TITLE,
  SUMMARY,
  RELEASED_DATE,
  META,
  INFO_BOX,
  TITLE_ALIGN,
} from './post-title.css'
import { getSummary } from '@/utils/get-summary'
import { Spacing } from '../../basics/spacing/spacing'
import { PageObject } from '@/_lib/types/notion-response'
import { CurrentPostContext } from '@/_lib/context/current-post-provider'
import { useContext } from 'react'
import { useIsomorphicLayoutEffect, useRandomNumber } from '@syyu/util/react'
import { useRandomBackground } from '@/utils/get-random-background'
import { vars } from '@/_lib/styles/themes.css'

export function PostTitle({ ...meta }: PageObject) {
  const { backgroundColor: base } = useRandomBackground()
  const angle = useRandomNumber([15, 60], [], 'int')

  const { setCurrentPost } = useContext(CurrentPostContext)
  const title = getTitle(meta)
  const summary = getSummary(meta)
  const rel_date = getDate(meta)

  //SSR-ED Content
  useIsomorphicLayoutEffect(() => {
    setCurrentPost(meta)
  }, [meta.id])

  return (
    <View className={BASE}>
      <View className={INFO_BOX}>
        <Heading as="h1" className={TITLE_ALIGN}>
          <Txt
            as="span"
            className={TITLE}
            style={{
              background: `linear-gradient(.${angle}turn, ${vars.color.default}, ${base})`,
            }}
          >
            {title}
          </Txt>
        </Heading>
        <Spacing size="1rem" />
        <Txt as="div" className={META}>
          <Txt as="span" className={SUMMARY}>
            {summary}
          </Txt>
          <Spacing size="0" />
          <Txt as="span" className={RELEASED_DATE}>
            {rel_date}
          </Txt>
        </Txt>
      </View>
    </View>
  )
}
