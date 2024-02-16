import { NotionComponentProps } from '@/_lib/types/components/component-common';
import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_2 } from './headings.css';
import { Heading_2 } from '@/_lib/types/components/component-props';

export function Heading_2({ block }: NotionComponentProps<Heading_2>) {
  return (
    <Heading as="h2" size="XL" styleVariant={HEADING_2}>
      {block.heading_2.rich_text.map((txt: RichText) => txt.plain_text)}
    </Heading>
  );
}
