import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';

export function Heading_1({ block }: NotionPolymorphicComponentProps<'heading_1'>) {
  return <Heading>{block.heading_1.rich_text.map((txt: RichText) => txt.plain_text)}</Heading>;
}
