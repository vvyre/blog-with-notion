import { CategoryType } from '@/constants/category';
import { usePathname } from 'next/navigation';

export const useCategory: () => [string, CategoryType] | [] = () => {
  const path = usePathname();
  const isEngineering = path === '/' || path.startsWith('/engineering');
  const isAsdf = path === '/asdf' || path.startsWith('/asdf');
  if (isEngineering) return ['/', 'engineering'];
  if (isAsdf) return ['/asdf', 'asdf'];

  return [];
};
