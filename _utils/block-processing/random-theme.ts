import { NOTION_THEMES, vars } from 'styles/themes.css'
import { objectKeys } from '@frfla/laser'
import { getRandomInt } from '../get-random-int'

const N = objectKeys(NOTION_THEMES).length

export const randomTheme = () => {
  const runtimeNum = getRandomInt([0, N])
  return NOTION_THEMES[objectKeys(NOTION_THEMES)[runtimeNum]]
}
