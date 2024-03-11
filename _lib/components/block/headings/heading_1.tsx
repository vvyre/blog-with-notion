import { Heading } from '../../typography/heading/heading';
import { HEADING_1 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  return (
    <Heading as="h2" styleVariant={HEADING_1}>
      {block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
    </Heading>
  );
}
