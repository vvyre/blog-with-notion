import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';

export function Heading_3({ block }: NotionPolymorphicComponentProps<'heading_3'>) {
  return <Heading>{block.heading_3.rich_text.map((txt: RichText) => txt.plain_text)}</Heading>;
}
