import { View } from '../../basics/view/view';
import { Txt } from '../../basics/typography/txt/txt';
import { BASE, BOOKMARK_TEXT, BOOKMARK_TITLE, BOOKMARK_URL, DESC_URL, INNER } from './bookmark.css';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Heading } from '../../basics/typography/heading/heading';
import { Flex } from '../../basics/flex/flex';
import { Spacing } from '../../basics/spacing/spacing';

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const og = block.bookmarkInfo.open_graph;
  const icon = block.bookmarkInfo.favicon;
  return (
    <View styleVariant={BASE}>
      <a href={block.bookmark.url} target="_blank">
        <Flex as="div" styleVariant={INNER} flexDirection="column" justifyContents="center" alignItems="flexStart">
          <Heading color="gray" as="h3" size="L" styleVariant={BOOKMARK_TITLE}>
            {block.bookmarkInfo.title}
          </Heading>

          <Spacing size="0.4rem" />
          <View styleVariant={DESC_URL}>
            {icon && (
              <div
                style={{
                  width: '0.85rem',
                  height: '0.85rem',
                  backgroundImage: `url('${icon}')`,
                  backgroundSize: '0.85rem',
                  backgroundRepeat: 'no-repeat',
                  marginRight: '0.35rem',
                }}
              />
            )}
            <Txt as="p" color="gray" styleVariant={BOOKMARK_URL}>
              {block.bookmark.url}
            </Txt>
          </View>

          <Spacing size="0.4rem" />
          {og?.description && (
            <Txt color="gray" styleVariant={BOOKMARK_TEXT}>
              {og.description}
            </Txt>
          )}

          {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
            <Txt key={idx} as="p" richText={txt} styleVariant={BOOKMARK_TEXT} />
          ))}
        </Flex>
      </a>
    </View>
  );
}
