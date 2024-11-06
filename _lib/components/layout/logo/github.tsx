'use client';
import Image from 'next/image';
import { Btn } from '../../interaction/button/btn';
import MARK_BLACK from '#/img/github-mark.svg';
import MARK_WHITE from '#/img/github-mark-white.svg';
import { EXTERNAL_LINK, MENU_GITHUB_IMG } from './logo.css';

export function GithubLink({ isPost }: { isPost: boolean }) {
  const MARK = isPost ? MARK_WHITE : MARK_WHITE;

  return (
    <Btn as="a" href="https://github.com/brewcold" target="_blank" styleVariant={EXTERNAL_LINK}>
      <Image unoptimized className={MENU_GITHUB_IMG} priority={true} alt="brewcold github" src={MARK} />
    </Btn>
  );
}
