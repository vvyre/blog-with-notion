import { useId } from 'react';
import { Txt } from '../../typography/txt/txt';
import { Heading } from '../../typography/heading/heading';
import { View } from '../../layout/view/view';
import { CALLOUT } from './callout.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Callout({ block }: NotionComponentProps<'callout'>) {
  const id = useId();
  return (
    <View styleVariant={CALLOUT}>
      <Heading as="span" size="L">
        {'emoji' in block.callout.icon! && block.callout.icon.emoji}
      </Heading>
      {block.callout.rich_text.map((txt: RichTextItemResponse) => (
        <Txt key={id} as="p" richText={txt} />
      ))}
    </View>
  );
}
