import { vars } from '@/_lib/styles/themes.css';
import { CODE } from '../typography.css';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

interface CodeProps {
  richText?: RichTextItemResponse;
}

export function Code({ richText, ...props }: CodeProps) {
  const COLOR = richText && richText?.annotations.color !== 'default' ? richText?.annotations.color : 'orange';

  const TEXT_COLOR = vars.notion[COLOR];
  const className = `${CODE}`;
  return (
    <code
      className={className}
      style={{
        color: TEXT_COLOR,
      }}
      {...props}
    />
  );
}
