import { useEffect, useLayoutEffect, useState } from 'react';

export function useScrollPosition(): number {
  const [position, setPosition] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const handleScroll = () => setPosition(window?.scrollY);

  const update = () => {
    const target = document.querySelector('body');
    setScrollHeight(target?.scrollHeight ?? 0);
  };

  useEffect(() => {
    update();
  }, [window.innerHeight]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (position / scrollHeight) * 100;
}
