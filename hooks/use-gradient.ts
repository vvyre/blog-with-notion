import { useEffect, useState } from 'react'
import { vars } from 'styles/themes.css'
import {
  getRandomBackground,
  useRandomBackground,
} from 'utils/block-processing/get-random-background'

export function useGradient() {
  const [gradient, setGradient] = useState<{
    left: string | null
    right: string | null
  }>(() => ({
    left: null,
    right: null,
  }))

  useEffect(() => {
    let left = getRandomBackground().backgroundColor
    let right = getRandomBackground().backgroundColor

    while (IS_INVALID_COLOR_PAIR(left, right)) {
      left = getRandomBackground().backgroundColor
      right = getRandomBackground().backgroundColor
    }

    setGradient({ left, right })
  }, [])

  return gradient
}

const BLOCKED_BACKGROUND_COLORS = [
  vars.notion.default,
  vars.notion.gray,
  vars.notion.gray_background,
  vars.notion.yellow_background,
  vars.notion.green_background,
]

const IS_INVALID_COLOR_PAIR = (
  c1: ReturnType<typeof useRandomBackground>['backgroundColor'],
  c2: ReturnType<typeof useRandomBackground>['backgroundColor']
) =>
  !c1 ||
  !c2 ||
  c1 === c2 ||
  BLOCKED_BACKGROUND_COLORS.includes(c1) ||
  BLOCKED_BACKGROUND_COLORS.includes(c2)
