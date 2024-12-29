import { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import Post from '../../../render-blocks';
import { Footer } from '../../footer/footer';
import { Flex } from '../../../basics/flex/flex';
import { View } from '../../../basics/view/view';
import { LAYOUT_CENTERED } from '../../../basics/article/article.css';
import { ABOUT } from './about.css';

export function About({ blocks }: { blocks: EntireNotionBlockResponse[] }) {
  return (
    <Flex width="fill" flexDirection="column" justifyContent="center" alignItems="center" className={ABOUT}>
      <View className={LAYOUT_CENTERED}>
        <Post blocks={blocks} />
      </View>
      <Footer />
    </Flex>
  );
}
