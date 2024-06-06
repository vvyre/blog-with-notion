'use client';
import { usePathname } from 'next/navigation';
import { Txt } from '../../typography/txt/txt';
import { LOGO } from './logo.css';
import { meta } from '@/constants/meta';
export function Logo() {
  const PATH = usePathname();
  const IS_POST = PATH.includes('engineering') || PATH.includes('asdf');
  const COLOR = IS_POST ? 'WHITE' : 'BLACK';
  return (
    <Txt as="Link" href="/" styleVariant={LOGO[COLOR]}>
      {meta.siteTitle}
    </Txt>
  );
}
