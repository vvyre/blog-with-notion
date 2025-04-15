'use client'

import { ErrorFallback } from '@/_lib/components/basics/util/error-fallback/error-fallback'
import { View } from '@/_lib/components/basics/view/view'
import { useEffect } from 'react'

export default function NotFound({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <View>
      <ErrorFallback message={'찾을 수 없는 페이지입니다 (404)'} />
    </View>
  )
}
