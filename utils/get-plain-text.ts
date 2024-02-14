import { RichText } from '@/_lib/types/block';

export const getPlainText = (arr: RichText[]) => {
  return arr.map(text => text.plain_text).join(' ');
};
