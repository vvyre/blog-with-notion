import { Txt } from '../../typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { View } from '../../layout/view/view';
import { BASE } from './quote.css';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Quote({ block }: NotionComponentPropsWithChildren<'quote'>) {
  return (
    <View styleVariant={BASE}>
      {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <Txt key={idx} as="span" richText={txt} />
      ))}
      {block.quote.children && <ChildrenBlocks block={block} />}
    </View>
  );
}
