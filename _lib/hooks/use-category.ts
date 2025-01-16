import { usePathname } from 'next/navigation';

export const useCategory: () => { path: string; isEngineering: boolean; isPost: boolean } = () => {
  const path = usePathname();
  const isEngineering = path.startsWith('/engineering');
  const isPost = isEngineering;

  return { path, isEngineering, isPost };
};
