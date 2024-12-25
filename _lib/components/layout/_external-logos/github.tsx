'use client';
import Image from 'next/image';
import { Btn } from '../../basics/button/btn';
import MARK_WHITE from '#/img/github-mark-white.svg';
import MARK_BLACK from '#/img/github-mark.svg';
import { EXTERNAL_LINK, MENU_GITHUB_IMG } from '../navigation/about/about-btn.css';
import { useSystemTheme } from '@/_lib/react/use-system-theme';

export function GithubLink() {
  const [theme, isPost] = useSystemTheme();
  const MARK = theme === 'dark' ? MARK_BLACK : MARK_WHITE;

  return isPost ? (
    <Btn as="a" href="https://github.com/brewcold" target="_blank" className={EXTERNAL_LINK}>
      <Image className={MENU_GITHUB_IMG} alt="brewcold github" src={MARK} />
    </Btn>
  ) : null;
}
