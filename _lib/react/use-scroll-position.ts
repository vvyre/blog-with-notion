import { useLayoutEffect, useState } from 'react';

export function useScrollPosition(): number {
  const [position, setPosition] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const handleScroll = () => setPosition(window?.scrollY);

  const update = () => {
    const target = document.querySelector('main');
    setScrollHeight(target?.scrollHeight || 0);
  };

  useLayoutEffect(() => {
    update();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight, window.innerHeight]);

  return (position * 100) / scrollHeight;
}
