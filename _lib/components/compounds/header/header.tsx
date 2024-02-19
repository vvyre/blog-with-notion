import { meta, routes } from '@/constants/meta';
import { Flex } from '../../layout/flex/flex';
import { View } from '../../layout/view/view';
import { Btn } from '../../interaction/button/btn';
import { BASE, MENU } from './header.css';
import { RESPONSIVE } from '../../template/responsive.css';
import { HeaderBorder } from './header-border';

export function Header() {
  return (
    <View styleVariant={BASE}>
      <Flex as="nav" styleVariant={RESPONSIVE} justifyContents="center" alignItems="center">
        <Flex width="fill" justifyContents="spaceBetween" alignItems="center">
          <View>{meta.siteTitle}</View>
          <Flex width="fit" justifyContents="spaceBetween" alignItems="center">
            {routes.map(route => (
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
