import { MentionResponse } from '@/_lib/types/components/component-props';
import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';

export function Mention({ block }: MentionResponse) {
  console.log('mention', block);
  return (
    <View>
      <Txt as="a" href={block.href}>
        {block.plain_text}+'ㅋㅋ'
      </Txt>
    </View>
  );
}
