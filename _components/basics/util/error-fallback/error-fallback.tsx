import { Btn } from 'components/basics/button/btn'
import { Heading } from 'components/basics/typography/heading/heading'
import { Spacing } from 'components/basics/spacing/spacing'
import { View } from 'components/basics/view/view'
import { BASE, ERROR_BTN } from './error-fallback.css'

export function ErrorFallback({
  message,
  error = null,
}: {
  message?: string
  error?: Error | null
}) {
  return (
    <View className={BASE}>
      <Heading as="h1">{error?.message ?? message ?? '알 수 없는 오류입니다'}</Heading>
      <Spacing size="1rem" />

      <Btn as="Link" href="/" className={ERROR_BTN}>
        돌아가기
      </Btn>
    </View>
  )
}
