import { meta } from '@/constants/meta';
import { getPost, getPostMetaData } from '@/fetch/notion';
import { Block } from '@/_lib/components/block/block';
import { Article } from '@/_lib/components/layout/post/article';
import { Spacing } from '@/_lib/components/layout/spacing/spacing';
import { groupedBlocks } from '@/utils/grouped-blocks';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { View } from '@/_lib/components/layout/view/view';
import { POST_GRID, POST_GRID_PLACEMENT } from '@/_lib/components/layout/post/article.css';
import { BACK_BUTTON_PLACEMENT } from '@/_lib/components/layout/post-title/post-title.css';
import { BackButton } from '@/_lib/components/interaction/back-button/back-button';

export const revalidate = 3600;

export default async function Post() {
  const blocks = groupedBlocks(await getPost(process.env.NOTION_ABOUT_ID as string));

  return (
    <>
      <Article>
        <Spacing size="3rem" />
        <View styleVariant={POST_GRID}>
          <BackButton styleVariant={BACK_BUTTON_PLACEMENT} />
          <View styleVariant={POST_GRID_PLACEMENT}>
            {blocks.map(b => (
              <Block key={b.id} block={b} />
            ))}
          </View>
        </View>
      </Article>
      <Spacing size="8rem" />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `Frequently Asked Question – ${meta.siteTitle}`,
    description: meta.siteDiscription,
  };
}
