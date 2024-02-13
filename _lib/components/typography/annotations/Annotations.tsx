import { COLORS } from '@/_lib/styles/colors.css';
import { RichText } from '@/_lib/types/block';
import { Wrapper } from '../../util/Wrapper';
import { Strong } from './strong';
import { Italic } from './italic';
import { Strike } from './strike';
import { Underline } from './underline';
import { Code } from './code';
import { ReactNode } from 'react';

interface AnnotationsProps {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
  underline?: boolean;
  color?: keyof typeof COLORS;
  richText?: RichText;
  children?: ReactNode;
}
export function Annotations({
  bold = false,
  code = false,
  italic = false,
  strike = false,
  underline = false,
  richText,
  children,
}: AnnotationsProps) {
  return (
    <Wrapper condition={richText ? richText.annotations.bold : bold} wrapper={Strong}>
      <Wrapper condition={richText ? richText.annotations.italic : italic} wrapper={Italic}>
        <Wrapper condition={richText ? richText.annotations.strikethrough : strike} wrapper={Strike}>
          <Wrapper condition={richText ? richText.annotations.underline : underline} wrapper={Underline}>
            <Wrapper condition={richText ? richText.annotations.code : code} wrapper={Code}>
              {richText && richText.plain_text}
              {children && children}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}
