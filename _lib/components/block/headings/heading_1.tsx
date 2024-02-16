import { NotionPolymorphicComponentProps } from '@/_lib/types/components/component-common';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_1 } from './headings.css';

export function Heading_1({ block }: NotionPolymorphicComponentProps<'heading_1'>) {
  return (
    <Heading as="h1" size="XXL" styleVariant={HEADING_1}>
      {block.heading_1.rich_text.map((txt: RichText) => txt.plain_text)}
    </Heading>
  );
}
