'use client';
import { routes } from '@/constants/routes';
import { View } from '../view/view';
import { Btn } from '../../interaction/button/btn';
import {
  BASE,
  HEADER_GRID,
  LOGO_GRID_PLACEMENT,
  MENU,
  MENU_GITHUB,
  MENU_GITHUB_PLACEMENT,
  MENU_GRID_ITEM,
  MENU_GRID_PLACEMENT,
  MENU_TEXT,
  THEME,
} from './header.css';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo/logo';
import Github_black from '#/img/github-mark.svg';
import Github_white from '#/img/github-mark-white.svg';
import Image from 'next/image';
import { Flex } from '../flex/flex';

export function Header() {
  const PATH = usePathname();
  const COLOR = PATH.includes('blog') || PATH.includes('faq') ? 'BLACK' : 'WHITE';
  const GITHUB_MARK = COLOR === 'BLACK' ? Github_white : Github_black;
  const BASE_CLASSNAME = `${BASE} ${THEME[COLOR]}`;

  return (
    <View styleVariant={BASE_CLASSNAME}>
      <View as="nav">
        <Flex justifyContents="spaceBetween" alignItems="center">
          <Logo />
          {PATH.includes('faq') ? (
            <Btn as="Link" href={'/'} styleVariant={`${MENU} ${MENU_TEXT[COLOR]}`}>
              {'BLOG'}
            </Btn>
          ) : (
            <Btn as="Link" href={'/faq'} styleVariant={`${MENU} ${MENU_TEXT[COLOR]}`}>
              {'ABOUT'}
            </Btn>
          )}

          <Btn as="a" href="https://github.com/brewcoldblue" target="_blank" styleVariant={`${MENU} ${MENU_GITHUB}`}>
            <Image alt="Seungyoon Yu's Github" src={GITHUB_MARK} style={{ width: '1.25rem', height: '1.25rem' }} />
          </Btn>
        </Flex>
      </View>
    </View>
  );
}
