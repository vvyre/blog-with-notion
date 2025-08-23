import { Txt } from 'components/common/typography/txt/txt'
import { ChildrenBlocks } from '../children-blocks'
import { View } from 'components/common/view/view'
import { BASE } from './paragraph.css'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'types/block'
import { Youtube } from '../../sections/post/embed/youtube/youtube'

export function Paragraph({ block }: NotionComponentProps<'paragraph'>) {
  const flattenTxt: string = block.paragraph.rich_text
    .map((txt: RichTextItemResponse) => txt.plain_text)
    .join('')
  if (flattenTxt.includes('<<https://youtu.be') && flattenTxt.includes('>>')) {
    return <Youtube src={flattenTxt} />
  }

  return (
    <View as="p" className={BASE}>
      {block.paragraph.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <Txt key={idx} as="span" richText={txt} />
      ))}
      {block.paragraph.children && (
        <ChildrenBlocks childrenBlocks={block.paragraph.children} />
      )}
    </View>
  )
}
