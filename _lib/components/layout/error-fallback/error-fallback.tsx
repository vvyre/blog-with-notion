import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';
import { View } from '../view/view';
import { BASE } from './error-fallback.css';

export function ErrorFallback({ message }: { message: string }) {
  return (
    <View>
      <Flex styleVariant={BASE} justifyContents="center" alignItems="center">
        <View>
          <Heading as="h1">{message}</Heading>
          <Spacing size="1rem" />
          <Txt as="Link" href="/">
            돌아가기
          </Txt>
        </View>
      </Flex>
    </View>
  );
}
