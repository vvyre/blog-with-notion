'use client';
import { Btn } from '../btn';
import { BASE, NAV_BASE, POST_SHARE } from './share-btn.css';
import LinkIcon from '#/img/icons/link.svg';
import OKIcon from '#/img/icons/ok.svg';
import Image from 'next/image';
import { site_env } from '@/env';
import { cleanUrl } from '@/utils/clean-url';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useClipboard } from '@/_lib/react/use-clipboard';

export function ShareBtn({ subtitle }: { subtitle?: string }) {
  const path = usePathname();
  const { copy, isCopied } = useClipboard(1000);

  const [label, setLabel] = useState<string>('포스트 링크 복사');
  useEffect(() => {
    if (isCopied) setLabel('링크가 복사되었습니다');
    else setLabel('포스트 링크 복사');
  }, [isCopied]);

  const fullUrl = subtitle ? `${site_env.root}${path}#${cleanUrl(subtitle)}` : `${site_env.root}${path}`;

  const handleClick = () => {
    copy(fullUrl);
  };

  return subtitle ? (
    <Btn className={BASE} onClick={handleClick}>
      {!isCopied ? (
        <Image src={LinkIcon} alt={`copy link for ${fullUrl}`} width="20" height="20" />
      ) : (
        <Image src={OKIcon} alt={`COPIED!`} width="20" height="20" />
      )}
    </Btn>
  ) : (
    <Btn styleVariant={POST_SHARE} onClick={handleClick}>
      {label}
    </Btn>
  );
}
