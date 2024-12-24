import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { getRandomInt } from '@/utils/get-random-int';

export const useBackground = (nums_of_files: number): string => {
  const path = usePathname;
  const [n, setNum] = useState<number>(0);
  const url = `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${n}.webp`;

  const [img, setImg] = useState<string>('');

  useIsomorphicLayoutEffect(() => {
    setNum(getRandomInt([0, nums_of_files - 1]));
  }, [path]);

  useEffect(() => {
    const T: ReturnType<typeof setTimeout> = setInterval(() => {
      setNum(getRandomInt([0, nums_of_files - 1]));
    }, 10000);

    return () => clearTimeout(T);
  }, []);

  useIsomorphicLayoutEffect(() => {
    setImg(url);
  }, [n]);

  return img;
};
