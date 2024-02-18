import { Heading } from '../../typography/heading/heading';
import { RichText } from '@/_lib/types/block';
import { HEADING_3 } from './headings.css';
import { NotionComponentProps } from '@/_lib/types/component-common';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  return (
    <Heading as="h3" size="L" styleVariant={HEADING_3}>
      {block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
    </Heading>
  );
}
