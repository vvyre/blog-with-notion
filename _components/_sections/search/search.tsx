'use client'
import { DocSearchModal } from '@docsearch/react'
import { View } from 'components/basics/view/view'
import { SEARCH_BASE } from './search.css'

export function Search() {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APPID!
  const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!

  return (
    <View className={SEARCH_BASE}>
      <DocSearchModal
        initialScrollY={200}
        appId={appId}
        indexName={indexName}
        apiKey={apiKey}
        searchParameters={{
          facetFilters: ['language:ko', 'version:1.0.0'],
        }}
        insights
      />
    </View>
  )
}
