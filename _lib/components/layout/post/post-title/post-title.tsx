'use client'
import { Heading } from '@/_lib/components/basics/typography/heading/heading'
import { getTitle } from '@/_lib/utils/block-processing/get-title'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { View } from '@/_lib/components/basics/view/view'
import { BASE, TITLE, SUMMARY, INFO_BOX, TITLE_ALIGN } from './post-title.css'
import { getSummary } from '@/_lib/utils/block-processing/get-summary'
import { PageObject } from '@/_lib/types/notion-response'
import { CurrentPostContext } from '@/_lib/components/context/current-post-provider'
import { useContext, useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { getRandomBackground, useRandomBackground } from '@/_lib/utils/block-processing/get-random-background'
import { vars } from '@/_lib/styles/themes.css'
import { Spacing } from '@/_lib/components/basics/spacing/spacing'
import { Btn } from '@/_lib/components/basics/button/btn'
import { BACK_BUTTON_BASE } from '../back-button/back-button.css'
import { DoubleArrowDownIcon } from '@radix-ui/react-icons'
import { Flex } from '@/_lib/components/basics/flex/flex'

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

  //SSR-ED Content
  useIsomorphicLayoutEffect(() => {
    setCurrentPost(meta)
  }, [meta.id])

  return (
    <View className={[BASE].join('')}>
      <View
        className={INFO_BOX}
        style={{
          background: `linear-gradient(to right, ${gradient.left}, ${gradient.right})`,
        }}
      >
        <Btn as="Link" href={'/'} className={BACK_BUTTON_BASE}>
          <Txt as="span" className={BACK_BUTTON_BASE}>
            ←
          </Txt>
        </Btn>
        <Spacing size="3rem" />
        <View className={TITLE_ALIGN}>
          <Heading as="h1" className={TITLE}>
            {title}
          </Heading>
          <Txt as="p" className={SUMMARY}>
            {summary}
          </Txt>
        </View>

        <Spacing size="3rem" />
        <Flex>
          <DoubleArrowDownIcon width="12px" height="12px" />
        </Flex>
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
) => !c1 || !c2 || c1 === c2 || BLOCKED_BACKGROUND_COLORS.includes(c1) || BLOCKED_BACKGROUND_COLORS.includes(c2)
