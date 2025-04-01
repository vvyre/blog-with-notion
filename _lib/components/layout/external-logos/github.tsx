'use client'
import Image from 'next/image'
import { Btn } from '@/_lib/components/basics/button/btn'
import MARK_WHITE from '#/img/github-mark-white.svg'
import MARK_BLACK from '#/img/github-mark.svg'
import { MENU_GITHUB_IMG } from '../navigation/logo-button/logo-button.css'

import { useBackgroundStore } from '../background/store'
import { useEffect, useRef } from 'react'
import { NAV_BTN } from '../navigation/navigation.css'

export function GithubLink() {
  const { brightness, addRef } = useBackgroundStore()

  const githubRef = useRef<HTMLElement>(null)
  const key = 'githubRef'

  useEffect(() => {
    addRef(key, githubRef)
  }, [githubRef])

  const isDark = brightness.get(key)! > 186

  return (
    <Btn ref={githubRef} as="a" href="https://github.com/vvyre" target="_blank" className={NAV_BTN}>
      {isDark ? (
        <Image className={MENU_GITHUB_IMG} alt="github" src={MARK_BLACK} />
      ) : (
        <Image className={MENU_GITHUB_IMG} alt="github" src={MARK_WHITE} />
      )}
    </Btn>
  )
}
