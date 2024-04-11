'use client';
import { View } from '../view/view';
import { Btn } from '../../interaction/button/btn';
import { BASE, MENU, MENU_GITHUB, MENU_GITHUB_IMG, MENU_ICON, THEME } from './header.css';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo/logo';
import Github_black from '#/img/github-mark.svg';
import Github_white from '#/img/github-mark-white.svg';
import icon_info from '#/img/icons/info.svg';
import icon_list_white from '#/img/icons/list-white.svg';
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
          {PATH.includes('blog') || PATH.includes('faq') ? (
            <Btn as="Link" href={'/'} styleVariant={MENU}>
              <Image unoptimized className={MENU_ICON} alt="Go to the Post List" src={icon_list_white} />
            </Btn>
          ) : (
            <Btn as="Link" href={'/faq'} styleVariant={MENU}>
              <Image unoptimized className={MENU_ICON} alt="Go to the FAQ(Profile)" src={icon_info} />
            </Btn>
          )}
          <Btn as="a" href="https://github.com/brewcold" target="_blank" styleVariant={MENU_GITHUB}>
            <Image unoptimized className={MENU_GITHUB_IMG} alt="Seungyoon Yu's Github" src={GITHUB_MARK} />
          </Btn>
        </Flex>
      </View>
    </View>
  );
}
