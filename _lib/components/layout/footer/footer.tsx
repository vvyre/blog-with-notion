import { meta } from '@/constants/meta';
import { Flex } from '../flex/flex';
import { BASE, FOOTER_COPYRIGHT, FOOTER_LINK, FOOTER_SITE_TITLE } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { Spacing } from '../spacing/spacing';
import { List } from '../../list/list';

export function Footer() {
  return (
    <Flex as="footer" styleVariant={BASE} justifyContents="flexStart" alignItems="flexEnd">
      <View>
        <Txt styleVariant={FOOTER_SITE_TITLE}>{meta.siteTitle}</Txt>
        <Spacing size="1rem" />
        <List as="ul">
          {meta.footer.links.map(l => (
            <List as="li" key={l.name}>
              <Txt as="a" href={l.href} styleVariant={FOOTER_LINK}>
                {l.name}
              </Txt>
            </List>
          ))}
        </List>
        <Spacing size="1rem" />
        <Txt styleVariant={FOOTER_COPYRIGHT}>{meta.footer.copyright}</Txt>
      </View>
    </Flex>
  );
}
