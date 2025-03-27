import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { getRandomInt } from '@/_lib/utils/get-random-int'
import { preload } from 'react-dom'

export const useIntervalBackground = (nums_of_files: number): string => {
  const path = usePathname()
  const [num, setNum] = useState<number | null>(null)
  const [next, setNext] = useState<number>(0)
  const url = num
    ? `https://raw.githubusercontent.com/vvyre/blog-with-notion/refs/heads/main/_backgrounds/brewcold-bg-${num}.webp`
    : ''
  const nextUrl = `https://raw.githubusercontent.com/vvyre/blog-with-notion/refs/heads/main/_backgrounds/brewcold-bg-${next}.webp`

  useIsomorphicLayoutEffect(() => {
    setNum(getRandomInt([0, nums_of_files - 1]))
  }, [path])

  useEffect(() => {
    const T: ReturnType<typeof setTimeout> = setInterval(() => {
      setNum(next)
      setNext(getRandomInt([0, nums_of_files - 1]))
    }, 10000)

    return () => clearInterval(T)
  }, [next, nums_of_files])

  useEffect(() => {
    if (!(path === '/')) return
    preload(url, { as: 'image' })
    // preload(nextUrl, { as: 'image' })
  }, [url, nextUrl])

  return url
}
