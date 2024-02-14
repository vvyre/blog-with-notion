import { meta } from '@/constants/meta';
import Flex from '../../layout/flex/flex';
import { BASE, FLEX } from './footer.css';
import { RESPONSIVE } from '../../template/responsive.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../../layout/view/view';
import { Spacing } from '../../layout/spacing/spacing';
import { Heading } from '../../typography/heading/heading';
import { List } from '../../list/list';

export function Footer() {
  return (
    <Flex as="nav" styleVariant={BASE} justifyContents="center" alignItems="flexEnd">
      <View styleVariant={FLEX}>
        <Heading as="h3" size="S" bold>
          Contact
        </Heading>
        <List as="ul">
          {meta.footer.links.map(l => (
            <List as="li" key={l.name}>
              <Txt as="a" href={l.href} size="XS">
                {l.name}
              </Txt>
            </List>
          ))}
        </List>
        <Spacing size="1rem" />
        <Txt size="XS" bold>
          {meta.footer.copyright}
        </Txt>
      </View>
    </Flex>
  );
}
