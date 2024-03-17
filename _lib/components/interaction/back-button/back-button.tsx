import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';

export function BackButton({
  wrapperStyleVariant,
  buttonStyleVariant,
}: {
  wrapperStyleVariant?: string;
  buttonStyleVariant?: string;
}) {
  return (
    <View styleVariant={wrapperStyleVariant}>
      <Txt as="Link" href="/" size="XL" styleVariant={buttonStyleVariant}>
        {'←'}
      </Txt>
    </View>
  );
}
