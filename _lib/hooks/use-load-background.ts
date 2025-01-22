import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@syyu/util/react'
import { getRandomInt } from '@/utils/get-random-int'
import { preload } from 'react-dom'
import { getRandomNumber } from '@syyu/util'
import { useRandomInt } from './use-random-int'

export const useLoadBackground = (nums_of_files: number): string => {
  // const path = usePathname()
  // const [num, setNum] = useState<number>(getRandomNumber([0,nums_of_files-1], 'int'))
  const num = useRandomInt([0, nums_of_files - 1], [nums_of_files])
  // const [next, setNext] = useState<number>(0)
  const url = `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num}.webp`
  // const nextUrl = `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${next}.webp`

  // useIsomorphicLayoutEffect(() => {
  //   setNum(getRandomInt([0, nums_of_files - 1]))
  // }, [path])

  // useEffect(() => {
  //   const T: ReturnType<typeof setTimeout> = setInterval(() => {
  //     setNum(next)
  //     setNext(getRandomInt([0, nums_of_files - 1]))
  //   }, 10000)

  //   return () => clearInterval(T)
  // }, [next, nums_of_files])
  preload(url, { as: 'image' })
  // useEffect(() => {
  //   if (!(path === '/')) return
  //   preload(url, { as: 'image' })
  //   // preload(nextUrl, { as: 'image' })
  // }, [url, nextUrl])

  return url
}
