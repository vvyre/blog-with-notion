import { Txt } from '../../typography/txt/txt';
import { View } from '../../layout/view/view';
import { CALLOUT, CALLOUT_EMOJI } from './callout.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Callout({ block }: NotionComponentProps<'callout'>) {
  return (
    <View styleVariant={CALLOUT}>
      <Txt as="p">
        <Txt as="span" styleVariant={CALLOUT_EMOJI}>
          {'emoji' in block.callout.icon! && block.callout.icon.emoji}
        </Txt>
        {block.callout.rich_text.map((txt: RichTextItemResponse, idx) => (
          <Txt key={idx} as="span" richText={txt} />
        ))}
      </Txt>
    </View>
  );
}
