export type CategoryType = 'engineering' | 'asdf'
export const categories: { name: string; route: string; type: CategoryType }[] = [
  { name: '개발', route: '/', type: 'engineering' },
  { name: '신변잡기', route: '/asdf', type: 'asdf' },
]
