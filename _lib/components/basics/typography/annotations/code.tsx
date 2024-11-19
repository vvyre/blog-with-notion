import { COLORS, COLOR_STYLE_VARIANTS } from '@/_lib/styles/colors.css';
import { CODE } from '../typography.css';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

interface CodeProps {
  richText?: RichTextItemResponse;
}

export function Code({ richText, ...props }: CodeProps) {
  const COLOR = richText && richText.annotations.color !== 'default' ? richText.annotations.color : 'red';
  const className = `${COLOR_STYLE_VARIANTS[COLOR]} ${CODE}`;
  return <code className={className} {...props} />;
}
