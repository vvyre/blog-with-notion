import { usePathname } from 'next/navigation';
import { getRandomInt, useRandomInt } from './use-random-int';
import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';

export const useRandomBackgroundImg = (nums_of_files: number): string => {
  const path = usePathname();
  const n = useRandomInt([0, nums_of_files - 1], [path]);

  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${n}.png`;
};

export const useBackgroundTransition = (nums_of_files: number) => {
  const path = usePathname;
  const [n, setNum] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    setNum(getRandomInt([0, nums_of_files - 1]));
  }, [path]);

  useEffect(() => {
    const T: ReturnType<typeof setTimeout> = setInterval(() => {
      setNum(getRandomInt([0, nums_of_files - 1]));
    }, 7500);

    return () => clearTimeout(T);
  }, []);

  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${n}.png`;
};

export const getBackgroundImg = (num_of_file: number): string => {
  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num_of_file}.png`;
};
