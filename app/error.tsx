'use client'

import { ErrorFallback } from 'components/basics/util/error-fallback/error-fallback'
import { View } from 'components/basics/view/view'
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <View>
      <ErrorFallback message={'서버 에러입니다 (500)'} />
    </View>
  )
}
