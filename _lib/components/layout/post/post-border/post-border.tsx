'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { View } from '@/_lib/components//basics/view/view'
import { useReadingPositionStore } from '../reading-position/store'
import { LAYOUT_CENTERED } from '@/_lib/components/basics/article/article.css'

export function PostBorder({ children }: { children: ReactNode }) {
  const { setAnchorRef, setScrollHeightRef } = useReadingPositionStore()

  const articleRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setScrollHeightRef(articleRef)
    setAnchorRef(scrollRef)
  }, [])

  return (
    <View as="main" ref={scrollRef}>
      <article id="post" ref={articleRef} className={LAYOUT_CENTERED}>
        {children}
      </article>
    </View>
  )
}
