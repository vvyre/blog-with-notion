import { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import Post from '../post/post';

export function About({ blocks }: { blocks: EntireNotionBlockResponse[] }) {
  return (
    <>
      <Post blocks={blocks} />
    </>
  );
}
