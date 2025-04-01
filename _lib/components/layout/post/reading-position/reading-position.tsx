'use client'
import { vars } from '@/_lib/styles/themes.css'
import { View } from '@/_lib/components/basics/view/view'
import { useScrollPosition } from '@/_lib/hooks/use-scroll-position'
import { useRandomBackground } from '@/_lib/utils/block-processing/get-random-background'
import { BASE, INNER } from './reading-position.css'

import { useReadingPositionStore } from './store'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ReadingPosition() {
  const { scrollHeightRef, anchorRef, resetRefs } = useReadingPositionStore()

  const path = usePathname
  useEffect(() => {
    resetRefs()
  }, [path])

  const [pos, _, height] = useScrollPosition(scrollHeightRef, anchorRef, 15)

  //round, toFixed로 스크롤 끝단에서의 감성 조정
  //완전 끝까지 다 스크롤하지 않아도 글을 다 읽었으면 원을 다 채울 수 있도록
  const percentage = Number((pos / height).toFixed(3))
  const read = Math.ceil(percentage * 100)
  const PX = read > 90 ? 100 : read

  const { backgroundColor } = useRandomBackground()

  return (
    <View
      className={BASE}
      style={{
        outline: `1.5px solid ${backgroundColor}`,
      }}
    >
      <View
        className={INNER}
        style={{
          height: `${PX}%`,
          width: `${100}%`,
          backgroundColor: PX === 100 ? backgroundColor : vars.color.default,
        }}
      />
    </View>
  )
}
