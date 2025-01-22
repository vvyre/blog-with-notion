import { preload } from 'react-dom'
import { useRandomInt } from './use-random-int'

export const useLoadBackground = (nums_of_files: number): string => {
  const num = useRandomInt([0, nums_of_files - 1])

  const url = `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num}.webp`

  preload(url, { as: 'image' })

  return url
}
