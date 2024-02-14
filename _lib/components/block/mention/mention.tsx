import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { Mention } from './mention-block';

export function Mention({ block }: Mention) {
  console.log('mention', block);
  return (
    <View>
      <Txt as="a" href={block.href}>
        {block.plain_text}+'ㅋㅋ'
      </Txt>
    </View>
  );
}
