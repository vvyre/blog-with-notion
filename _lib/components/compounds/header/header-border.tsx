'use client';
import { useScroll } from '@/_lib/react/useScroll';
import { NORMAL, SCROLLED } from './header-border.css';

export function HeaderBorder() {
  const scrolled = useScroll();
  return <hr className={scrolled ? SCROLLED : NORMAL} />;
}
