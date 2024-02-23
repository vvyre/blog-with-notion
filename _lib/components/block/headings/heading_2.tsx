import { Heading } from '../../typography/heading/heading';
import { HEADING_2 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  return (
    <Heading as="h2" size="XL" styleVariant={HEADING_2}>
      {block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
    </Heading>
  );
}
