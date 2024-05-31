import { useEffect, useLayoutEffect, useState } from 'react';

export function useScrollPosition(): [number, number] {
  const [position, setPosition] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const handleScroll = () => setPosition(window.scrollY || document.documentElement.scrollTop);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const target = document.querySelector('body');
    setClientHeight(target?.clientHeight || 0);
  }, [clientHeight]);

  return [position, clientHeight];
}
