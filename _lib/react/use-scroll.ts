import { useEffect, useState } from 'react';

export function useScroll(): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    window.scrollY > 64 && setScrolled(true);
    window.scrollY < 64 && setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
}
