'use client';
import { Btn } from '../button/btn';
import { BASE, POST_SHARE } from './share-btn.css';
import LinkIcon from '#/img/icons/link.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site_env } from '@/env';
import { cleanUrl } from '@/utils/clean-url';
import { Flex } from '../../layout/flex/flex';

export function ShareBtn({ subtitle }: { subtitle?: string }) {
  const path = usePathname();
  const handleClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  const fullUrl = subtitle ? `${site_env.root}${path}/#${cleanUrl(subtitle)}` : `${site_env.root}${path}`;

  return subtitle ? (
    <Btn styleVariant={BASE} onClick={() => handleClipboard(fullUrl)}>
      <Image src={LinkIcon} alt={`copy link for ${subtitle}`} width="20" height="20" />
    </Btn>
  ) : (
    <Flex width="fill" justifyContents="flexEnd">
      <Btn styleVariant={POST_SHARE} onClick={() => handleClipboard(fullUrl)}>
        포스트 링크 공유
      </Btn>
    </Flex>
  );
}
