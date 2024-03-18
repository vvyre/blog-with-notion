import { meta } from '@/constants/meta';
import { BASE, FOOTER_COPYRIGHT } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { Spacing } from '../spacing/spacing';
import { site_env } from '@/env';

export function Footer() {
  return (
    <View styleVariant={BASE}>
      <Spacing size="1rem" />
      <Txt as="a" target="_blank" href={`${site_env.root}/feed.xml`} styleVariant={FOOTER_COPYRIGHT}>
        rss
      </Txt>
      <Spacing size="0.5rem" />
      <Txt styleVariant={FOOTER_COPYRIGHT}>{meta.footer.copyright}</Txt>
    </View>
  );
}
