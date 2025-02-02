/* eslint-disable react-hooks/rules-of-hooks */

import { getRandomInt } from '@/utils/get-random-int'
import { DependencyList, useEffect, useState } from 'react'

/** low 이상 high 미만 */
export const useRandomIntState = (
  range: [number, number],
  deps: DependencyList = []
): number => {
  const [low, high] =
    range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]
  const [num] = useState<number>(() =>
    typeof window === 'undefined' ? low : getRandomInt([low, high]) + low
  )

  return num
}
