/* eslint-disable react-hooks/rules-of-hooks */

import { getRandomInt } from '@syyu/util'
import { DependencyList, useEffect, useState } from 'react'

export const useRandomInt = (
  range: [number, number],
  deps: DependencyList,
  init?: number
): number => {
  const [low, high] =
    range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]
  const [num, setNum] = useState<number>(() => init ?? low)

  useEffect(() => {
    setNum(getRandomInt(high - low + 1) + low)
  }, [low, high, ...deps])

  return num
}
