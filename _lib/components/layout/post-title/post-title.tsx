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
import { PageObject } from '@/_lib/types/notion-response'
import { CurrentPostContext } from '@/_lib/context/current-post-provider'
import { useContext, useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import {
  getRandomBackground,
  useRandomBackground,
} from '@/utils/get-random-background'
import { vars } from '@/_lib/styles/themes.css'

export function PostTitle({ ...meta }: PageObject) {
  const [gradient, setGradient] = useState<{
    left: string | null
    right: string | null
  }>(() => ({
    left: null,
    right: null,
  }))

  useEffect(() => {
    let left = getRandomBackground().backgroundColor
    let right = getRandomBackground().backgroundColor

    while (IS_INVALID_COLOR_PAIR(left, right)) {
      left = getRandomBackground().backgroundColor
      right = getRandomBackground().backgroundColor
    }

    setGradient({ left, right })
  }, [])

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
      <View
        className={INFO_BOX}
        style={{
          background: `linear-gradient(to right, ${gradient.left}, ${gradient.right})`,
        }}
      >
        <Txt as="span" className={RELEASED_DATE}>
          {rel_date}
        </Txt>
        <Heading as="h1" className={TITLE_ALIGN}>
          <Txt as="span" className={TITLE}>
            {title}
          </Txt>
        </Heading>
        <Txt as="p" className={SUMMARY}>
          {summary}
        </Txt>
      </View>
    </View>
  )
}

const BLOCKED_BACKGROUND_COLORS = [
  vars.notion.default,
  vars.notion.gray,
  vars.notion.gray_background,
  vars.notion.yellow_background,
  vars.notion.green_background,
]

const IS_INVALID_COLOR_PAIR = (
  c1: ReturnType<typeof useRandomBackground>['backgroundColor'],
  c2: ReturnType<typeof useRandomBackground>['backgroundColor']
) =>
  !c1 ||
  !c2 ||
  c1 === c2 ||
  BLOCKED_BACKGROUND_COLORS.includes(c1) ||
  BLOCKED_BACKGROUND_COLORS.includes(c2)
