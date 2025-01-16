import { vars } from '@/_lib/styles/themes.css'
import { CODE } from '../typography.css'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { TEXT_COLOR } from './color.css'

interface CodeProps {
  richText?: RichTextItemResponse
}

export function Code({ richText, ...props }: CodeProps) {
  const COLOR =
    richText && richText?.annotations.color !== 'default'
      ? richText?.annotations.color
      : 'orange'

  const className = `${CODE} ${TEXT_COLOR[COLOR]}`
  return <code className={className} {...props} />
}
