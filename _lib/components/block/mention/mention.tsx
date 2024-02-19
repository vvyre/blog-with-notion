import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { NotionComponentProps } from '@/_lib/types/component-common';

export function Mention({ block }: NotionComponentProps<'mention'>) {
  console.log('mention', block);
  return (
    <View>
      <Txt as="a" href={block.href || ''}>
        {block.plain_text}
      </Txt>
    </View>
  );
}
