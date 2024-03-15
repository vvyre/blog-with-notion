import { meta } from '@/constants/meta';
import { getPost } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { Article } from '@/_lib/components/layout/post/article';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { View } from '@/_lib/components/layout/view/view';
import { POST_GRID } from '@/_lib/components/layout/post/article.css';
import { BACK_BUTTON_PLACEMENT } from '@/_lib/components/layout/post-title/post-title.css';
import { BackButton } from '@/_lib/components/interaction/back-button/back-button';
import { notion_env } from '@/env';
import { processedBlock } from '@/utils/process-block';
import { DEFAULT_BLOCK_GRID_PLACEMENT } from '@/_lib/components/block/block-layout.css';

export const revalidate = 3600;

export default async function Post() {
  const blocks = await processedBlock(await getPost(notion_env.about_id));

  return (
    <View as="main">
      <Article>
        <Spacing size="3rem" />
        <View styleVariant={POST_GRID}>
          <BackButton styleVariant={BACK_BUTTON_PLACEMENT} />
          {blocks.map(b => (
            <Block key={b.id} block={b} />
          ))}
        </View>
      </Article>
      <Spacing size="8rem" />
    </View>
  );
}

export async function generateMetadata() {
  return {
    title: `Frequently Asked Question – ${meta.siteTitle}`,
    description: meta.siteDiscription,
  };
}
