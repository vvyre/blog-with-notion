import { isClient } from '@syyu/util'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { RefObject, useEffect, useState } from 'react'
import { useDebouncedCallback } from './use-debounced-callback'

/**
 * @param {React.RefObject<HTMLElement | null>} scrollHeightRef 스크롤 높이를 가지는 DOM, 생략시 body에서 상속되었다고 가정
 * @param {React.RefObject<HTMLElement | null>} anchorRef 실질적으로 스크롤되는 DOM, 생략시 body로부터 측정
 * @caution scrollHeightRef와 anchorRef가 같을 수도 있습니다.
 * @caution body가 스크롤되지 않거나 fixed, sticky position 등 스크롤되지 않는 컴포넌트를 사용하는 경우 값이 제대로 나오지 않을 수 있습니다.
 * @returns {[number, number, number]} [ref 기준 현재 스크롤 위치px, body로부터의 현재 스크롤 위치px, DOM 높이px (없을 경우 body 기준)]
 */
export function useScrollPosition(
  scrollHeightRef: RefObject<HTMLElement | null> | null = null,
  anchorRef: RefObject<HTMLElement | null> | null = null,
  scrollDebouncingDelay: number = 25
): [number, number, number] {
  const [relativePosition, setRelativePosition] = useState<number>(0)
  const [positionFromBody, setPositionFromBody] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const isCSR = isClient()
  const WINDOW = isCSR ? window : null
  const BODY = isCSR ? document.documentElement : null

  const updateLayout = () => {
    if (scrollHeightRef) setHeight(scrollHeightRef?.current?.clientHeight || 0)
    else setHeight(BODY ? BODY.scrollHeight : 0)
  }

  // 초기 렌더링 완료 전 전체 레이아웃 계산
  useIsomorphicLayoutEffect(() => {
    updateLayout()
  }, [scrollHeightRef, BODY])

  const updatePosition = () => {
    // 부모의 높이값을 상속받는 경우 (또는 파라미터에 스크롤 높이 기준만 들어오는 경우)
    // (일반적으로) body로부터 스크롤 위치를 그냥 재는 경우
    // 스크롤 높이값을 가지는 DOM이 스크롤된다고 보는 경우
    setPositionFromBody(
      (scrollHeightRef
        ? scrollHeightRef.current?.scrollTop
        : BODY?.scrollTop) || 0
    )

    // 자식의 scrollHeight를 사용해야 하면서 실질적으로 부모가 스크롤되는 경우 (껍데기가 있는 경우)
    // 즉 부모의 높이값을 상속받지 않는 경우
    if (anchorRef) setRelativePosition(anchorRef.current?.scrollTop || 0)
  }

  // 디바운싱시켜 스크롤 이벤트 등록
  const handleScroll = useDebouncedCallback(
    () => updatePosition(),
    scrollDebouncingDelay,
    [anchorRef, scrollHeightRef, BODY]
  )

  // 리스너 등록, ref 동기화 이슈로 반드시 렌더링 완료 시 등록해야 함
  useEffect(() => {
    if (anchorRef) {
      anchorRef.current?.addEventListener('scroll', handleScroll)
    } else BODY?.addEventListener('scroll', handleScroll)

    WINDOW?.addEventListener('resize', updateLayout)

    return () => {
      anchorRef?.current?.removeEventListener('scroll', handleScroll)
      BODY?.removeEventListener('scroll', handleScroll)
      WINDOW?.removeEventListener('resize', updateLayout)
    }
  }, [scrollHeightRef, BODY, WINDOW])

  //scrollHeight로 나눌 때 초기값이 0으로 렌더링되어 0으로 나누어지는 경우 방지
  return [relativePosition, positionFromBody, height > 0 ? height : 1]
}
