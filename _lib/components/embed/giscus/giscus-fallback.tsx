import { Spacing } from '../layout/spacing/spacing';
import { View } from '../layout/view/view';
import { Txt } from '../typography/txt/txt';
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
