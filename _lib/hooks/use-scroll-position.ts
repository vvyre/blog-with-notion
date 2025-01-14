/* eslint-disable react-hooks/rules-of-hooks */
import { isClient } from '@syyu/util';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { MutableRefObject, Ref, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

/**
 *
 * @returns [ref의 현재 위치px, 현재 스크롤 위치px, 전체 DOM 높이px]
 */
export function useScrollPosition(ref?: MutableRefObject<HTMLElement | null>): [number, number, number] {
  const [refPosition, setRefPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const isCSR = isClient();
  const BODY = isCSR ? document.body : null;
  const WINDOW = isCSR ? window : null;
  const REF = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    REF.current = ref.current;
  }, [ref]);

  const updateLayout = () => setScrollHeight(BODY?.scrollHeight ?? 0);

  useIsomorphicLayoutEffect(() => {
    updateLayout();
  }, []);

  const handleScroll = useCallback(() => {
    setPosition(WINDOW?.scrollY || 0);
    ref && setRefPosition(REF.current?.scrollTop || 0);
  }, [WINDOW, REF.current]);

  useEffect(() => {
    WINDOW?.addEventListener('scroll', handleScroll);
    WINDOW?.addEventListener('resize', updateLayout);

    return () => {
      WINDOW?.removeEventListener('scroll', handleScroll);
      WINDOW?.removeEventListener('resize', updateLayout);
    };
  }, [WINDOW]);

  //scrollHeight로 나눌 때 초기값이 0으로 렌더링되어 0으로 나누어지는 경우 방지
  return [refPosition, position, scrollHeight > 0 ? scrollHeight : 1];
}
