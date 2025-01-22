/* eslint-disable react-hooks/rules-of-hooks */

import { getRandomInt } from '@syyu/util'
import { useState } from 'react'

export const useRandomInt = (range: [number, number]): number => {
  const [low, high] =
    range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]
  const [num] = useState<number>(() =>
    typeof window === 'undefined' ? low : getRandomInt(high - low + 1) + low
  )

  return num
}
