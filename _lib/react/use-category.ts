import { usePathname } from 'next/navigation';

export const useCategory: () => { path: string; isEngineering: boolean; isTil: boolean; isPost: boolean } = () => {
  const path = usePathname();
  const isEngineering = path.startsWith('/engineering');
  const isTil = path.startsWith('/til');
  const isPost = isEngineering || (isTil && path.length > 4);

  return { path, isEngineering, isTil, isPost };
};
