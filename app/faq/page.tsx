import { meta } from '@/constants/meta';
import { getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { Article } from '@/_lib/components/layout/post/article';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { View } from '@/_lib/components/layout/view/view';
import { POST_CENTERED } from '@/_lib/components/layout/post/article.css';
import { isr_revalidate_period, notion_env } from '@/env';
import { processedBlock } from '@/utils/process-block';
import { FaqTitle } from '@/_lib/components/layout/faq-title/faq-title';
import { getTitle } from '@/utils/get-title';

export const revalidate = isr_revalidate_period;

export default async function Post() {
  const blocks = await processedBlock(await getPost(notion_env.faq_id));
  const meta = await getPostMetaData(notion_env.faq_id);

  return (
    <View as="main">
      <Article>
        <FaqTitle {...meta} />
        <View styleVariant={POST_CENTERED}>
          {blocks.map(b => (
            <Block key={b.id} block={b} />
          ))}
        </View>
      </Article>
      <Spacing size="5rem" />
    </View>
  );
}

export async function generateMetadata() {
  const postMeta = await getPostMetaData(notion_env.faq_id);
  return {
    title: `${getTitle(postMeta)} – ${meta.siteTitle}`,
    description: meta.siteDiscription,
  };
}
