import { usePathname } from 'next/navigation';

export const useCategory: () => { path: string; isEngineering: boolean; isTil: boolean; isPost: boolean } = () => {
  const path = usePathname();
  const isEngineering = path.startsWith('/engineering');
  const isTil = path.startsWith('/til');
  const isPost = isEngineering || path.startsWith('/til/');

  return { path, isEngineering, isTil, isPost };
};
