import { meta } from '@/constants/meta';
import { Flex } from '../flex/flex';
import { BASE, FOOTER_LINK } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { Spacing } from '../spacing/spacing';
import { Heading } from '../../typography/heading/heading';
import { List } from '../../list/list';

export function Footer() {
  return (
    <Flex as="nav" styleVariant={BASE} justifyContents="center" alignItems="flexEnd">
      <View>
        <Heading as="h3" size="XS" bold>
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
        <Txt size="XXS">{meta.footer.copyright}</Txt>
      </View>
    </Flex>
  );
}
