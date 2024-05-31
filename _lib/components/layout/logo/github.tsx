'use client';
import Image from 'next/image';
import { Btn } from '../../interaction/button/btn';
import { usePathname } from 'next/navigation';
import Github_black from '#/img/github-mark.svg';
import { EXTERNAL_LINK, MENU_GITHUB, MENU_GITHUB_IMG } from './logo.css';

export function GithubLink() {
  const PATH = usePathname();
  const IS_POST = PATH.includes('engineering') || PATH.includes('asdf');
  // const COLOR = IS_POST ? 'BLACK' : 'WHITE';
  // const GITHUB_MARK = COLOR === 'BLACK' ? Github_white : Github_black;
  const COLOR = 'WHITE';
  const GITHUB_MARK = Github_black;
  return (
    <Btn as="a" href="https://github.com/brewcold" target="_blank" styleVariant={EXTERNAL_LINK}>
      <Image unoptimized className={MENU_GITHUB_IMG} priority={true} alt="Seungyoon Yu's Github" src={GITHUB_MARK} />
    </Btn>
  );
}
