import { meta, routes } from '@/constants/meta';
import { Flex } from '../../layout/flex/flex';
import { View } from '../../layout/view/view';
import { Btn } from '../../interaction/button/btn';
import { BASE, HEADER_GRID, LOGO, LOGO_GRID_PLACEMENT, MENU, MENU_GRID_PLACEMENT } from './header.css';
import { HeaderBorder } from './header-border';
import { Txt } from '../../typography/txt/txt';

export function Header() {
  return (
    <View styleVariant={BASE}>
      <Flex as="nav" justifyContents="center" alignItems="center">
        <Flex width="fill" justifyContents="spaceBetween" alignItems="center" styleVariant={HEADER_GRID}>
          <View styleVariant={LOGO_GRID_PLACEMENT}>
            <Txt as="Link" href="/" styleVariant={LOGO}>
              {meta.siteTitle}
            </Txt>
          </View>
          <Flex width="fill" justifyContents="spaceBetween" alignItems="center" styleVariant={MENU_GRID_PLACEMENT}>
            {routes.map((route, idx) => (
              <Btn key={route.name} as="Link" href={route.path} styleVariant={MENU}>
                {route.name}
              </Btn>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <HeaderBorder />
    </View>
  );
}
