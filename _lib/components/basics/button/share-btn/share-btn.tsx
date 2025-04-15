'use client'
import { Btn } from '../btn'
import { SHARE_BTN_BASE, PARAGRAPH_SHARE, TEXT_COLOR_GREEN } from './share-btn.css'
import { site_env } from '@/env'
import { cleanUrl } from '@/_lib/utils/clean-url'
import { useEffect, useState } from 'react'
import { useClipboard } from '@/_lib/hooks/use-clipboard'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { useCategory } from '@/_lib/hooks/use-category'
import { CheckIcon, Link2Icon } from '@radix-ui/react-icons'

export function ShareBtn({ subtitle }: { subtitle?: string }) {
  const { path } = useCategory()

  const { copy, isCopied } = useClipboard(1000)

  const [label, setLabel] = useState<string>('포스트 링크 복사')
  useEffect(() => {
    if (isCopied) setLabel('링크가 복사되었습니다')
    else setLabel('포스트 링크 복사')
  }, [isCopied])

  const fullUrl = subtitle ? `${site_env.root}${path}#${cleanUrl(subtitle)}` : `${site_env.root}${path}`

  const handleClick = () => copy(fullUrl)

  return subtitle ? (
    <Btn as="div" className={SHARE_BTN_BASE} onClick={handleClick} aria-label={`hare link for ${subtitle}`}>
      <Txt as="span" className={`${PARAGRAPH_SHARE} ${isCopied && TEXT_COLOR_GREEN}`}>
        {isCopied ? <CheckIcon width="1.3rem" height="1.3rem" /> : <Link2Icon width="1.3rem" height="1.3rem" />}
      </Txt>
    </Btn>
  ) : (
    <Btn onClick={handleClick}>{label}</Btn>
  )
}
