import { View } from 'components/basics/view/view'
import { Txt } from 'components/basics/typography/txt/txt'
import {
  BASE,
  BOOKMARK_TEXT,
  BOOKMARK_TITLE,
  BOOKMARK_URL,
  DESC_URL,
  INNER,
} from './bookmark.css'
import type { NotionComponentProps } from 'types/block'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Heading } from 'components/basics/typography/heading/heading'
import { Flex } from 'components/basics/flex/flex'
import { Spacing } from 'components/basics/spacing/spacing'

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  const og = block.bookmarkInfo.open_graph
  const icon = block.bookmarkInfo.favicon
  return (
    <View
      as="a"
      href={block.bookmark.url}
      target="_blank"
      className={BASE}
      aria-label={`Bookmark: ${block.bookmarkInfo.title ?? 'No title available'}`}
    >
      <Flex
        as="div"
        className={INNER}
        flexDirection="column"
        justifyContent="center"
        alignItems="flexStart"
      >
        <Heading color="gray" as="h3" size="L" className={BOOKMARK_TITLE}>
          {block.bookmarkInfo.title}
        </Heading>

        <Spacing size="0.4rem" />
        <View className={DESC_URL}>
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
              aria-label="site favicon"
            />
          )}
          <Txt as="p" color="gray" className={BOOKMARK_URL}>
            {block.bookmark.url}
          </Txt>
        </View>

        <Spacing size="0.4rem" />
        {og?.description && (
          <Txt
            color="gray"
            className={BOOKMARK_TEXT}
            aria-describedby="bookmark description"
          >
            {og.description}
          </Txt>
        )}

        {block.bookmark.caption.map((txt: RichTextItemResponse, idx) => (
          <Txt
            key={idx}
            as="p"
            richText={txt}
            className={BOOKMARK_TEXT}
            aria-describedby="bookmark caption"
          />
        ))}
      </Flex>
    </View>
  )
}
