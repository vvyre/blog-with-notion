import { meta } from '@/constants/meta';
import { Flex } from '../../layout/flex/flex';
import { BASE, FOOTER_LINK } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../../layout/view/view';
import { Spacing } from '../../layout/spacing/spacing';
import { Heading } from '../../typography/heading/heading';
import { List } from '../../list/list';
import { RESPONSIVE } from '../../template/responsive.css';

export function Footer() {
  return (
    <Flex as="nav" styleVariant={BASE} justifyContents="center" alignItems="flexEnd">
      <View styleVariant={RESPONSIVE}>
        <Heading as="h3" size="S" bold>
          Contact
        </Heading>
        <List as="ul">
          {meta.footer.links.map(l => (
            <List as="li" key={l.name}>
              <Txt as="a" href={l.href} size="XS" styleVariant={FOOTER_LINK}>
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
