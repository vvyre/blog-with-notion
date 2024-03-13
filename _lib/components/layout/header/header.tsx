'use client';
import { routes } from '@/constants/meta';
import { View } from '../view/view';
import { Btn } from '../../interaction/button/btn';
import {
  BASE,
  HEADER_GRID,
  LOGO_GRID_PLACEMENT,
  MENU,
  MENU_GRID_ITEM,
  MENU_GRID_PLACEMENT,
  MENU_TEXT,
  THEME,
} from './header.css';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo/logo';

export function Header() {
  const path = usePathname();
  const color = path.includes('blog') ? 'BLACK' : 'WHITE';
  const CLASSNAME = `${BASE} ${THEME[color]}`;

  return (
    <View styleVariant={CLASSNAME}>
      <View as="nav" styleVariant={HEADER_GRID}>
        <View styleVariant={LOGO_GRID_PLACEMENT}>
          <Logo />
        </View>
        {routes.map((r, idx) => (
          <View key={r.name} styleVariant={`${MENU_GRID_ITEM} ${idx === 0 && MENU_GRID_PLACEMENT}`}>
            <Btn as="Link" href={r.path} styleVariant={`${MENU} ${MENU_TEXT[color]}`}>
              {r.name}
            </Btn>
          </View>
        ))}
      </View>
    </View>
  );
}
