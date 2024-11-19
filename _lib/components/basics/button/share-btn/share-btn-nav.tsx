'use client';
import { Btn } from '../btn';
import { BASE, NAV_BASE, POST_SHARE } from './share-btn.css';
import LinkIcon from '#/img/icons/link.svg';
import OKIcon from '#/img/icons/ok.svg';
import Image from 'next/image';
import { site_env } from '@/env';
import { usePathname } from 'next/navigation';
import { useClipboard } from '@/_lib/react/use-clipboard';

export function NavShareBtn() {
  const path = usePathname();
  const { copy, isCopied } = useClipboard(1000);

  const fullUrl = `${site_env.root}${path}`;

  const handleClick = () => {
    copy(fullUrl);
  };

  return (
    <Btn styleVariant={NAV_BASE} onClick={handleClick}>
      {!isCopied ? (
        <Image src={LinkIcon} alt={`copy link for ${fullUrl}`} width="20" height="20" />
      ) : (
        <Image src={OKIcon} alt={`COPIED!`} width="20" height="20" />
      )}
    </Btn>
  );
}
