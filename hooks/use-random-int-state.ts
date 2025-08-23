import { getRandomInt } from 'utils/get-random-int'
import { useState } from 'react'

/** low 이상 high 미만 */
export const useRandomIntState = (range: [number, number]): [number, () => void] => {
  const [low, high] = range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]
  const [num, setNum] = useState<number>(() =>
    typeof window === 'undefined' ? low : getRandomInt([low, high]) + low
  )

  const render = () =>
    setNum(typeof window === 'undefined' ? low : getRandomInt([low, high]) + low)

  return [num, render]
}
