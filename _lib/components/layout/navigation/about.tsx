import { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import Post from '../../render-blocks';
import { Footer } from '../footer/footer';
import { Flex } from '../flex/flex';
import { View } from '../view/view';
import { LAYOUT_CENTERED } from '../article/article.css';
import { ABOUT } from '../../util/render-blocks/about.css';

export async function About({ blocks }: { blocks: EntireNotionBlockResponse[] }) {
  return (
    <>
      <Flex width="fill" flexDirection="column" justifyContents="center" alignItems="center" styleVariant={ABOUT}>
        <View styleVariant={LAYOUT_CENTERED}>
          <Post blocks={blocks} />
        </View>
        <Footer />
      </Flex>
    </>
  );
}
