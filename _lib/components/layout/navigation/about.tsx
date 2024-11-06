import { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import Post from '../post/post';
import { Footer } from '../footer/footer';
import { Flex } from '../flex/flex';

export function About({ blocks }: { blocks: EntireNotionBlockResponse[] }) {
  return (
    <>
      <Flex width="fill" flexDirection="column" justifyContents="center" alignItems="center">
        <Post blocks={blocks} />
        <Footer />
      </Flex>
    </>
  );
}
