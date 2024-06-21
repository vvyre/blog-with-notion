import { Heading } from '../../typography/heading/heading';
import { HEADING_2 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../interaction/button/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';
import { Spacing } from '../../layout/spacing/spacing';

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  return (
    <>
      <a id={cleanUrl(block.heading_2.rich_text[0].plain_text)} />
      <Spacing size="2rem" />
      <Heading as="h3" styleVariant={HEADING_2}>
        {block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)}
        <ShareBtn subtitle={block.heading_2.rich_text[0].plain_text} />
      </Heading>
    </>
  );
}
