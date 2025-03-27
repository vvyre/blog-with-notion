import { vars } from '@/_lib/styles/themes.css'
import { objectKeys } from '@syyu/util'
import { getRandomInt } from '../get-random-int'
import { useCategory } from '@/_lib/hooks/use-category'
import { useRandomIntState } from '@/_lib/hooks/use-random-int-state'

const N = objectKeys(vars.notion).length

export const getRandomBackground = () => {
  const num = getRandomInt([0, N])
  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[num]],
  }
}

export const useRandomBackground = () => {
  const [P] = useRandomIntState([0, N])

  return {
    backgroundColor: vars.notion[objectKeys(vars.notion)[P]],
  }
}
