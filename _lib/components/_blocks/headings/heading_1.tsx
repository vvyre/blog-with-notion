import { Heading } from '../../basics/typography/heading/heading';
import { BASE, HEADING_1 } from './headings.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { ShareBtn } from '../../basics/button/share-btn/share-btn';
import { cleanUrl } from '@/utils/clean-url';
import { Spacing } from '../../basics/spacing/spacing';
import { View } from '../../basics/view/view';

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  const TITLE = block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text);
  return (
    <>
      <a id={cleanUrl(block.heading_1.rich_text[0].plain_text)} aria-hidden="true" />
      <Spacing size="2.5rem" />
      <View className={BASE}>
        <Heading as="h2" className={HEADING_1}>
          <ShareBtn subtitle={block.heading_1.rich_text[0].plain_text} />
          {TITLE}
        </Heading>
      </View>
    </>
  );
}
