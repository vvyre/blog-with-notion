import { getRandomInt } from 'utils/get-random-int'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { DependencyList, useState } from 'react'

/** low 이상 high 미만 */
export const useRandomIntEffect = (
  range: [number, number],
  deps: DependencyList = []
): number | null => {
  const [low, high] = range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]
  const [num, setNum] = useState<number | null>(
    typeof window === 'undefined' ? low : getRandomInt([low, high]) + low
  )

  useIsomorphicLayoutEffect(() => {
    deps.length !== 0 &&
      setNum(typeof window === 'undefined' ? low : getRandomInt([low, high]) + low)
  }, deps)

  return num
}
