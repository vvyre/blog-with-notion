import { Block } from '@/_lib/components/_blocks/block';
import { Article } from '@/_lib/components/layout/article/article';
import { View } from '@/_lib/components/layout/view/view';
import { ABOUT, ABOUT_INNER } from './post.css';
import { LAYOUT_CENTERED } from '@/_lib/components/layout/article/article.css';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';

export default function Post({
  theme = 'light',
  blocks,
}: {
  theme?: 'light' | 'dark';
  blocks: EntireNotionBlockResponse[];
}) {
  return blocks.map((b: EntireNotionBlockResponse) => <Block key={b.id} block={b} />);
}
