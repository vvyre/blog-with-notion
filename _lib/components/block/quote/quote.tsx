import type { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { BASE } from './quote.css';
import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Quote({ block }: NotionComponentPropsWithChildren<'quote'>) {
  const id = useId();
  return (
    <View styleVariant={BASE}>
      {block.quote.rich_text.map((txt: RichTextItemResponse) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.quote.children && <ChildrenBlocks block={block} />}
    </View>
  );
}
