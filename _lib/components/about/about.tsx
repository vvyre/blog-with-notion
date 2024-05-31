import { getPost } from '@/fetch/notion';
import { Block } from '@/_lib/components/_blocks/block';
import { Article } from '@/_lib/components/layout/article/article';
import { View } from '@/_lib/components/layout/view/view';
import { isr_revalidate_period, notion_env, site_env } from '@/env';
import { processedBlock } from '@/utils/process-block';
import { ABOUT, ABOUT_INNER, ABOUT_SITE_TITLE } from './about.css';
import { Heading } from '../typography/heading/heading';
import { meta } from '@/constants/meta';
import { GithubLink } from '../layout/logo/github';
import { Spacing } from '../layout/spacing/spacing';

export const revalidate = isr_revalidate_period;

export default async function About() {
  const blocks = await processedBlock(await getPost(notion_env.about_id));

  return (
    <Article styleVariants={ABOUT}>
      <View styleVariant={ABOUT_INNER}>
        <Heading as="h1" styleVariant={ABOUT_SITE_TITLE}>
          {meta.siteDomain}
        </Heading>
        {blocks.map(b => (
          <Block key={b.id} block={b} />
        ))}
        <GithubLink />
      </View>
    </Article>
  );
}
