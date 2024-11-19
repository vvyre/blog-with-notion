'use client';
import { useCategory } from '@/_lib/react/use-category';
import { View } from '../view/view';
import { Txt } from '../typography/txt/txt';

export function BackButton({
  wrapperStyleVariant,
  buttonStyleVariant,
}: {
  wrapperStyleVariant?: string;
  buttonStyleVariant?: string;
}) {
  const [path] = useCategory();
  return (
    <View styleVariant={wrapperStyleVariant}>
      <Txt as="Link" href={path} size="XL" styleVariant={buttonStyleVariant}>
        {'←'}
      </Txt>
    </View>
  );
}
