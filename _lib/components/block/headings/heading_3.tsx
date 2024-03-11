import { Heading } from '../../typography/heading/heading';
import { HEADING_3 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  return (
    <Heading as="h4" styleVariant={HEADING_3}>
      {block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
    </Heading>
  );
}
