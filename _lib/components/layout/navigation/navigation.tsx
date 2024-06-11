'use client';
import { View } from '../view/view';
import { BASE, MENU, MENU_ICON, NAV_POST_TITLE, PADDINGS, PROGRESS_BAR, THEME } from './navigation.css';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo/logo';
import { Flex } from '../flex/flex';
import { NavShareBtn } from '../../interaction/button/share-btn/share-btn-nav';
import { Spacing } from '../spacing/spacing';

export function Navigation() {
  const PATH = usePathname();
  const IS_POST = PATH.includes('engineering') || PATH.includes('asdf');
  const COLOR = IS_POST ? 'BLACK' : 'WHITE';
  // const GITHUB_MARK = COLOR === 'BLACK' ? Github_white : Github_black;
  // const COLOR = 'WHITE';

  const BASE_CLASSNAME = `${BASE} ${THEME[COLOR]}`;

  return (
    <View styleVariant={BASE_CLASSNAME}>
      <View as="nav" styleVariant={PADDINGS}>
        <Logo />
        {IS_POST && (
          <Flex justifyContents="center">
            <Spacing size="0.5rem" dir="hori" />
            <NavShareBtn />
          </Flex>
        )}
      </View>
    </View>
  );
}
