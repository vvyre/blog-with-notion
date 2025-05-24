import { Heading } from 'components/basics/typography/heading/heading'
import { BASE, HEADING_2 } from './headings.css'
import type { NotionComponentProps } from 'types/block'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { ShareBtn } from 'components/basics/button/share-btn/share-btn'
import { cleanUrl } from 'utils/clean-url'

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  const TITLE = block.heading_2.rich_text.map(
    (txt: RichTextItemResponse) => txt.plain_text
  )
  return (
    <>
      <a id={cleanUrl(block.heading_2.rich_text[0].plain_text)} aria-hidden="true" />
      <Heading as="h3" className={[BASE, HEADING_2].join(' ')}>
        {TITLE} <ShareBtn subtitle={block.heading_2.rich_text[0].plain_text} />
      </Heading>
    </>
  )
}
