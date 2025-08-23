import { Heading } from 'components/common/typography/heading/heading'
import { HEADING_3 } from './headings.css'
import type { NotionComponentProps } from 'types/block'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { ShareBtn } from 'components/common/button/share-btn/share-btn'
import { cleanUrl } from 'utils/clean-url'
export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  const TITLE = block.heading_3.rich_text.map(
    (txt: RichTextItemResponse) => txt.plain_text
  )
  return (
    <>
      <a id={cleanUrl(block.heading_3.rich_text[0].plain_text)} aria-hidden="true" />
      <Heading as="h4" className={HEADING_3}>
        <ShareBtn subtitle={block.heading_3.rich_text[0].plain_text} />
        {TITLE}
      </Heading>
    </>
  )
}
