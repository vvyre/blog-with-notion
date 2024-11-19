import { Spacing } from '@/_lib/components/basics/spacing/spacing';
import { Txt } from '@/_lib/components/basics/typography/txt/txt';
import { View } from '@/_lib/components/basics/view/view';
import { FALLBACK, FALLBACK_BASE } from './giscus.css';

export function GiscusFallback() {
  return (
    <View styleVariant={FALLBACK_BASE}>
      <Txt as="p" styleVariant={FALLBACK}>
        댓글을 달 수 없는 포스트입니다
      </Txt>
      <Spacing size="5rem" />
    </View>
  );
}
