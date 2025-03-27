import { Heading } from '../../basics/typography/heading/heading'
import { BASE, HEADING_1 } from './headings.css'
import type { NotionComponentProps } from '@/_lib/types/block'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { ShareBtn } from '../../basics/button/share-btn/share-btn'
import { cleanUrl } from '@/_lib/utils/clean-url'

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  const TITLE = block.heading_1.rich_text.map(
    (txt: RichTextItemResponse) => txt.plain_text
  )
  return (
    <>
      <a
        id={cleanUrl(block.heading_1.rich_text[0].plain_text)}
        aria-hidden="true"
      />

      <Heading as="h2" className={[BASE, HEADING_1].join(' ')}>
        {TITLE}
        <ShareBtn subtitle={block.heading_1.rich_text[0].plain_text} />
      </Heading>
    </>
  )
}
