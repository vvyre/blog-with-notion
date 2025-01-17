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
  const { PREFERS_DARK_TEXT, addRef } = useBackgroundStore()

  const githubRef = useRef<HTMLElement>(null)

  useEffect(() => {
    addRef('githubRef', githubRef)
  }, [githubRef])

  return (
    <Btn
      ref={githubRef}
      as="a"
      href="https://github.com/brewcold"
      target="_blank"
      className={EXTERNAL_LINK}
    >
      {PREFERS_DARK_TEXT() ? (
        <Image
          className={MENU_GITHUB_IMG}
          alt="brewcold github"
          src={MARK_WHITE}
        />
      ) : (
        <Image
          className={MENU_GITHUB_IMG}
          alt="brewcold github"
          src={MARK_BLACK}
        />
      )}
    </Btn>
  )
}
