'use client';
import { Btn } from '../button/btn';
import { BASE, POST_SHARE } from './share-btn.css';
import LinkIcon from '#/img/icons/link.svg';
import Image from 'next/image';
import { site_env } from '@/env';
import { cleanUrl } from '@/utils/clean-url';
import { Flex } from '../../layout/flex/flex';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useBooleanState } from '@syyu/util/react';

export function ShareBtn({ subtitle }: { subtitle?: string }) {
  const [label, setLabel] = useState<string>('포스트 링크 공유');
  const [isCopied, labelChange, labelRestore] = useBooleanState(false);

  const path = usePathname();
  const handleClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      labelChange();
    } catch (err) {}
  };

  useEffect(() => {
    if (!isCopied) return;

    setLabel('링크가 복사되었습니다');
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLabel('포스트 링크 공유');
      labelRestore();
    }, 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const fullUrl = subtitle ? `${site_env.root}${path}/#${cleanUrl(subtitle)}` : `${site_env.root}${path}`;

  return subtitle ? (
    <Btn styleVariant={BASE} onClick={() => handleClipboard(fullUrl)}>
      <Image src={LinkIcon} alt={`copy link for ${subtitle}`} width="20" height="20" />
    </Btn>
  ) : (
    <Flex width="fill" justifyContents="flexEnd">
      <Btn styleVariant={POST_SHARE} onClick={() => handleClipboard(fullUrl)}>
        {label}
      </Btn>
    </Flex>
  );
}
