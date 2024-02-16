import { NotionComponentProps } from '@/_lib/types/components/component-common';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_1 } from './headings.css';
import { Heading_1 } from '@/_lib/types/components/component-props';

export function Heading_1({ block }: NotionComponentProps<Heading_1>) {
  return (
    <Heading as="h1" size="XXL" styleVariant={HEADING_1}>
      {block.heading_1.rich_text.map((txt: RichText) => txt.plain_text)}
    </Heading>
  );
}
