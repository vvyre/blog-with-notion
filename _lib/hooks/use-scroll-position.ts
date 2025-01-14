/* eslint-disable react-hooks/rules-of-hooks */
import { isClient } from '@syyu/util';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from './use-debounced-callback';

/**
 *
 * @returns [ref의 현재 위치px, 현재 스크롤 위치px, 전체 DOM 높이px]
 */
export function useScrollPosition(ref?: MutableRefObject<HTMLElement | null>): [number, number, number] {
  const [refPosition, setRefPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const isCSR = isClient();
  // const BODY = isCSR ? document.body : null;
  const TARGET = isCSR ? document.querySelector('main') : null;
  const WINDOW = isCSR ? window : null;
  const REF = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    REF.current = ref.current;
  }, [ref]);

  const updateLayout = () => setHeight(TARGET ? TARGET.scrollHeight - TARGET.clientHeight : 0);

  const updateTargetLayout = () => {
    const posY = TARGET?.scrollTop || 0;
    setPosition(posY);
    ref && setRefPosition(REF.current?.scrollTop || 0);
  };

  useIsomorphicLayoutEffect(() => {
    updateLayout();
  }, []);

  useEffect(() => {
    updateTargetLayout();
  }, []);

  const handleScroll = useDebouncedCallback(() => updateTargetLayout(), 25, [TARGET, REF]);

  useEffect(() => {
    TARGET?.addEventListener('scroll', handleScroll);
    WINDOW?.addEventListener('resize', updateLayout);

    return () => {
      TARGET?.removeEventListener('scroll', handleScroll);
      WINDOW?.removeEventListener('resize', updateLayout);
    };
  }, [TARGET, WINDOW]);

  //scrollHeight로 나눌 때 초기값이 0으로 렌더링되어 0으로 나누어지는 경우 방지
  return [refPosition, position, height > 0 ? height : 1];
}
