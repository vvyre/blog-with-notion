import { Heading } from '../../basics/typography/heading/heading';
import { BASE, HEADING_3 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../basics/button/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';
import { Spacing } from '../../basics/spacing/spacing';
import { View } from '../../basics/view/view';

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  const TITLE = block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text);
  return (
    <>
      <a id={cleanUrl(block.heading_3.rich_text[0].plain_text)} />
      <Spacing size="1rem" />
      <View styleVariant={BASE}>
        <Heading as="h4" styleVariant={HEADING_3}>
          {TITLE}
          <ShareBtn subtitle={block.heading_3.rich_text[0].plain_text} />
        </Heading>
      </View>
    </>
  );
}
