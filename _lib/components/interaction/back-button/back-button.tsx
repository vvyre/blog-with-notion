import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';

export function BackButton({ styleVariant }: { styleVariant?: string }) {
  return (
    <View styleVariant={styleVariant}>
      <Txt as="Link" href="/" size="XL">
        {'←'}
      </Txt>
    </View>
  );
}
