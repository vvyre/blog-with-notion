import { usePathname } from 'next/navigation';
import { useRandomInt } from './use-random-int';

export const useRandomBackgroundImg = (nums_of_files: number): string => {
  const path = usePathname();
  const n = useRandomInt([0, nums_of_files - 1], [path]);

  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${n}.png`;
};

export const getBackgroundImg = (num_of_file: number): string => {
  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num_of_file}.png`;
};
