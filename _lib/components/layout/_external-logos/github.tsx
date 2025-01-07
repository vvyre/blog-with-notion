'use client';
import Image from 'next/image';
import { Btn } from '../../basics/button/btn';
import MARK_WHITE from '#/img/github-mark-white.svg';
import MARK_BLACK from '#/img/github-mark.svg';
import { EXTERNAL_LINK, MENU_GITHUB_IMG } from '../navigation/about/about-btn.css';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { BackgroundContext } from '@/_lib/context/background-provider';

export function GithubLink() {
  const { DARK_TEXT_PREFERED } = useContext(BackgroundContext);
  const path = usePathname();
  const isPost = path.startsWith('engineering') || path.startsWith('til/');
  const theme = DARK_TEXT_PREFERED ? 'light' : 'dark';

  if (isPost) return <></>;
  else
    switch (theme) {
      case 'dark':
        return (
          <Btn as="a" href="https://github.com/brewcold" target="_blank" className={EXTERNAL_LINK}>
            <Image key={theme} className={MENU_GITHUB_IMG} alt="brewcold github" src={MARK_WHITE} />
          </Btn>
        );
      case 'light': {
        return (
          <Btn as="a" href="https://github.com/brewcold" target="_blank" className={EXTERNAL_LINK}>
            <Image key={theme} className={MENU_GITHUB_IMG} alt="brewcold github" src={MARK_BLACK} />
          </Btn>
        );
      }
    }
}
