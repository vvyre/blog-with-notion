'use client';
import { useCategory } from '@/_lib/hooks/use-category';
import { View } from '../../basics/view/view';
import { Txt } from '../../basics/typography/txt/txt';

export function BackButton({
  wrapperclassName,
  buttonclassName,
}: {
  wrapperclassName?: string;
  buttonclassName?: string;
}) {
  const { path } = useCategory();
  return (
    <View className={wrapperclassName}>
      <Txt as="Link" href={path} size="XL" className={buttonclassName}>
        {'←'}
      </Txt>
    </View>
  );
}
