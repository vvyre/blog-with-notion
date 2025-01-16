/* eslint-disable react-hooks/rules-of-hooks */
import { randomInt } from 'crypto'
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
    setNum(randomInt(high - low + 1) + low)
  }, [low, high, ...deps])

  return num
}
