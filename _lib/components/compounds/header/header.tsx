import { meta, routes } from '@/constants/meta';
import { Flex } from '../../layout/flex/flex';
import { View } from '../../layout/view/view';
import { Btn } from '../../interaction/button/btn';
import { BASE, MENU } from './header.css';
import { RESPONSIVE } from '../../template/responsive.css';

export function Header() {
  return (
    <Flex as="nav" styleVariant={`${BASE} ${RESPONSIVE}`} justifyContents="center" alignItems="center">
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
  );
}
