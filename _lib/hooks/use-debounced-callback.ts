import { debounce } from '@/utils/debounce';
import { useCallback, useEffect, useRef } from 'react';

/** 콜백을 디바운스시켜 리턴함. delay 시간 후 fn이 한 번만 실행됨  */
export const useDebouncedCallback = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  // fn의 참조가 바뀌면 ref + effect로 발생시켜 참조를 업데이트시킴
  // state로 쓰지 않음으로써 리렌더를 트리거하지 않고 최신 콜백의 참조를 유지하기 위함
  const callbackRef = useRef<T>(fn);
  useEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  return useCallback(
    // 디바운스 원리는 디바운스 함수 내 주석 참조
    debounce((...args) => {
      callbackRef.current(...args);
    }, delay),
    // 의존성에 fn과 관련된 무언가가 들어가면
    // 디바운스 함수가 새로 생성되면서 타이머가 깨지게 됨
    [delay]
  );
};
