import { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/txt/txt';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { ChildrenBlocks } from '../ChildrenBlocks';
import { useId } from 'react';

export function Paragraph({ block }: NotionPolymorphicComponentProps<'paragraph'>) {
  const id = useId();
  return (
    <div>
      {block.paragraph.rich_text.map((txt: RichText) => (
        <Txt key={id} as="p" richText={txt} />
      ))}
      {block.paragraph.children && <ChildrenBlocks block={block.paragraph.children} />}
    </div>
  );
}
