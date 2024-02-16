import { NotionComponentProps } from '@/_lib/types/components/component-common';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_3 } from './headings.css';
import { Heading_3 } from '@/_lib/types/components/component-props';

export function Heading_3({ block }: NotionComponentProps<Heading_3>) {
  return (
    <Heading as="h3" size="L" styleVariant={HEADING_3}>
      {block.heading_3.rich_text.map((txt: RichText) => txt.plain_text)}
    </Heading>
  );
}
