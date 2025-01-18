'use client'
import Image from 'next/image'
import { Btn } from '../../basics/button/btn'
import MARK_WHITE from '#/img/github-mark-white.svg'
import MARK_BLACK from '#/img/github-mark.svg'
import {
  EXTERNAL_LINK,
  MENU_GITHUB_IMG,
} from '../navigation/about/about-btn.css'

import { useBackgroundStore } from '../background/store'
import { useEffect, useRef } from 'react'

export function GithubLink() {
  const { brightness, addRef } = useBackgroundStore()

  const githubRef = useRef<HTMLElement>(null)
  const key = 'githubRef'

  useEffect(() => {
    addRef(key, githubRef)
  }, [githubRef])

  const isDark = brightness.get(key)! > 186

  return (
    <Btn
      ref={githubRef}
      as="a"
      href="https://github.com/brewcold"
      target="_blank"
      className={EXTERNAL_LINK}
    >
      {isDark ? (
        <Image
          className={MENU_GITHUB_IMG}
          alt="brewcold github"
          src={MARK_BLACK}
        />
      ) : (
        <Image
          className={MENU_GITHUB_IMG}
          alt="brewcold github"
          src={MARK_WHITE}
        />
      )}
    </Btn>
  )
}
