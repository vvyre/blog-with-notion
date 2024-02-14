import { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/txt/txt';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { ChildrenBlocks } from '../ChildrenBlocks';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { BASE } from './paragraph.css';

export function Paragraph({ block }: NotionPolymorphicComponentProps<'paragraph'>) {
  const id = useId();
  return (
    <View as="p" styleVariant={BASE}>
      {block.paragraph.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.paragraph.children && <ChildrenBlocks block={block.paragraph.children} />}
    </View>
  );
}
