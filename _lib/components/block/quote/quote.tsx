import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/txt/txt';
import { ChildrenBlocks } from '../children-blocks';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { BASE } from './quote.css';
import { Quote } from '@/_lib/types/components/component-props';

export function Quote({ block }: NotionComponentProps<Quote>) {
  const id = useId();
  return (
    <View styleVariant={BASE}>
      {block.quote.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.quote.children && <ChildrenBlocks block={block} />}
    </View>
  );
}
