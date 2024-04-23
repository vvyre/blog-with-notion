'use client';

import { Flex } from '@/_lib/components/layout/flex/flex';
import { Article } from '@/_lib/components/layout/post/article';
import { View } from '@/_lib/components/layout/view/view';
import { Heading } from '@/_lib/components/typography/heading/heading';
import { Txt } from '@/_lib/components/typography/txt/txt';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Article>
      <Flex justifyContents="center" alignItems="center">
        <View>
          <Heading as="h1">무언가 잘못되었어요!</Heading>
          <Txt as="Link" href="/">
            돌아가기
          </Txt>
        </View>
      </Flex>
    </Article>
  );
}
