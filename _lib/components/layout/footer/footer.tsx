import { meta } from '@/constants/meta';
import { BASE, FOOTER_COPYRIGHT } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { Spacing } from '../spacing/spacing';

export function Footer() {
  return (
    <View styleVariant={BASE}>
      <Spacing size="1rem" />
      <Txt styleVariant={FOOTER_COPYRIGHT}>{meta.footer.copyright}</Txt>
    </View>
  );
}
