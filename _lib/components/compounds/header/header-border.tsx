'use client';
import { useScroll } from '@/_lib/react/use-scroll';
import { NORMAL, SCROLLED } from './header-border.css';

export function HeaderBorder() {
  const scrolled = useScroll();
  return <hr className={scrolled ? SCROLLED : NORMAL} />;
}
