import { getPost } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { Article } from '@/_lib/components/layout/article/article';
import { View } from '@/_lib/components/layout/view/view';
import { isr_revalidate_period, notion_env } from '@/env';
import { processedBlock } from '@/utils/process-block';
import { ABOUT, ABOUT_INNER } from './about.css';

export const revalidate = isr_revalidate_period;

export default async function About() {
  const blocks = await processedBlock(await getPost(notion_env.about_id));

  return (
    <Article styleVariants={ABOUT}>
      <View styleVariant={ABOUT_INNER}>
        {blocks.map(b => (
          <Block key={b.id} block={b} />
        ))}
      </View>
    </Article>
  );
}
