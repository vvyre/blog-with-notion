import { meta, routes } from '@/constants/meta';
import { Flex } from '../../layout/flex/flex';
import { View } from '../../layout/view/view';
import { Btn } from '../../interaction/button/btn';
import { BASE, HEADER_GRID, LOGO, LOGO_GRID_PLACEMENT, MENU, MENU_GRID_PLACEMENT } from './header.css';
import { Txt } from '../../typography/txt/txt';
export function Header() {
  return (
    <View styleVariant={BASE}>
      <View as="nav" styleVariant={HEADER_GRID}>
        <View styleVariant={LOGO_GRID_PLACEMENT}>
          <Txt as="Link" href="/" styleVariant={LOGO}>
            {meta.siteTitle}
          </Txt>
        </View>
        <View styleVariant={MENU_GRID_PLACEMENT[0]}>
          <Btn key={routes[0].name} as="Link" href={routes[0].path} styleVariant={MENU}>
            {routes[0].name}
          </Btn>
        </View>
        <View styleVariant={MENU_GRID_PLACEMENT[1]}>
          <Btn key={routes[1].name} as="Link" href={routes[1].path} styleVariant={MENU}>
            {routes[1].name}
          </Btn>
        </View>
      </View>
    </View>
  );
}
