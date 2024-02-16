import type { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { BASE } from './paragraph.css';
import { ParagraphResponse } from '@/_lib/types/components/component-props';

export function Paragraph({ block }: ParagraphResponse) {
  const id = useId();
  return (
    <View as="p" styleVariant={BASE}>
      {block.paragraph.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.paragraph.children && <ChildrenBlocks block={block} />}
    </View>
  );
}
