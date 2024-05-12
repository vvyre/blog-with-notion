import { Heading } from '../../typography/heading/heading';
import { HEADING_3 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../interaction/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  return (
    <a id={cleanUrl(block.heading_3.rich_text[0].plain_text)}>
      <Heading as="h4" styleVariant={HEADING_3}>
        {block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
        <ShareBtn subtitle={block.heading_3.rich_text[0].plain_text} />
      </Heading>
    </a>
  );
}
