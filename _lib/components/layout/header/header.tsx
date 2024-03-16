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
import Github from '#/img/github-mark.svg';
import Image from 'next/image';

export function Header() {
  const PATH = usePathname();
  const COLOR = PATH.includes('blog') || PATH.includes('faq') ? 'BLACK' : 'WHITE';
  const BASE_CLASSNAME = `${BASE} ${THEME[COLOR]}`;

  return (
    <View styleVariant={BASE_CLASSNAME}>
      <View as="nav" styleVariant={HEADER_GRID}>
        <View styleVariant={LOGO_GRID_PLACEMENT}>
          <Logo />
        </View>
        {routes.map((r, idx) => (
          <View key={r.path} styleVariant={`${MENU_GRID_ITEM} ${idx === 0 && MENU_GRID_PLACEMENT}`}>
            <Btn as="Link" href={r.path} styleVariant={`${MENU} ${MENU_TEXT[COLOR]}`}>
              {r.name}
            </Btn>
          </View>
        ))}
        <View styleVariant={`${MENU_GRID_ITEM} ${MENU_GITHUB_PLACEMENT}`}>
          <Btn as="Link" href="https://github.com/brewcoldblue" styleVariant={`${MENU} ${MENU_GITHUB}`}>
            <Image alt="Seungyoon Yu's Github" src={Github} style={{ width: '1.2rem', height: '1.2rem' }} />
          </Btn>
        </View>
      </View>
    </View>
  );
}
