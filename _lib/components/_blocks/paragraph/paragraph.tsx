import { Txt } from '../../typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { View } from '../../layout/view/view';
import { BASE } from './paragraph.css';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';

export function Paragraph({ block }: NotionComponentPropsWithChildren<'paragraph'>) {
  return (
    <View as="p" styleVariant={BASE}>
      {block.paragraph.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <Txt key={idx} as="span" richText={txt} />
      ))}
      {block.paragraph.children && <ChildrenBlocks block={block} />}
    </View>
  );
}
