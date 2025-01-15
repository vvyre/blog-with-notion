import { Txt } from '../../basics/typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { View } from '../../basics/view/view';
import { BASE, INNER } from './quote.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Quote({ block }: NotionComponentProps<'quote'>) {
  return (
    <View className={BASE}>
      <View as="blockquote" className={INNER}>
        {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Txt key={idx} as="span" richText={txt} />
        ))}
        {block.quote.children && <ChildrenBlocks childrenBlocks={block.quote.children} />}
      </View>
    </View>
  );
}
