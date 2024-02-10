import { RichText } from '@/_lib/types/block';
import { Txt } from '../../typography/Txt';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { ChildrenBlocks } from '../ChildrenBlocks';

export function Paragraph({ block }: NotionPolymorphicComponentProps<'paragraph'>) {
  return (
    <>
      {block.paragraph.rich_text.map((txt: RichText) => (
        <Txt as="p" richText={txt} />
      ))}
      <ChildrenBlocks block={block.paragraph.children} />
    </>
  );
}
