import { usePathname } from 'next/navigation';

export const useCategory: () => { path: string; isEngineering: boolean; isStudy: boolean; isPost: boolean } = () => {
  const path = usePathname();
  const isEngineering = path.startsWith('/engineering');
<<<<<<< HEAD
  const isStudy = path.startsWith('/study');
  const isPost = isEngineering ?? (isStudy && path.length > 4);
=======
  const isTil = path.startsWith('/til');
  const isPost = isEngineering || path.startsWith('/til/');
>>>>>>> d0a565f2d511496cd685bfdad7ee777bf34ba2c2

  return { path, isEngineering, isStudy, isPost };
};
