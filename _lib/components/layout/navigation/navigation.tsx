'use client';
import { Btn } from '../../basics/button/btn';
import { BASE, EXPANDED, HIDE, NAV, POST_TITLE_WRAPPER } from './navigation.css';
import { View } from '../../basics/view/view';
import { getTitle } from '@/utils/get-title';
import { useContext, useEffect } from 'react';
import { CurrentPostContext } from '@/_lib/context/current-post-provider';
import { useCategory } from '@/_lib/hooks/use-category';
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import { Spacing } from '../../basics/spacing/spacing';
import { GithubLink } from '../_external-logos/github';
import { About } from './about/about';
import { NavigationContext } from '@/_lib/context/navigation-provider';
import { AboutBtn } from './about/about-btn';
import { ThemeContext } from '@/_lib/context/theme-provider';
import { LOGO } from './about/about-btn.css';
import { BackgroundContext } from '@/_lib/context/background-provider';
import { TEXT_COLOR_THEME_VARIANT } from '../../basics/typography/typography.css';

export function Navigation({ profile }: { profile: EntireNotionBlockResponse[] }) {
  const { theme, toggle } = useContext(ThemeContext);

  const { currentPost, setCurrentPost } = useContext(CurrentPostContext);
  const { handleProfile, hideProfile, displayProfile, path } = useContext(NavigationContext);
  const { DARK_TEXT_PREFERED } = useContext(BackgroundContext);
  const { isStudy, isPost } = useCategory();
  const LeftFlexText = currentPost ? getTitle(currentPost) : <AboutBtn />;
  const BLOG_TRANSFER = isStudy ? 'BLOG' : 'STUDY ARCHIVE';

  const TEXT_COLOR = DARK_TEXT_PREFERED ? 'DARK' : 'LIGHT';
  const NAV_TEXT_STYLE = [LOGO, isPost && TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ');

  useEffect(() => {
    if (!isPost) setCurrentPost(null);
  }, [isPost]);

  useEffect(() => {
    hideProfile();
  }, [path]);

  return (
    <View as="nav" className={BASE}>
      <View as="div" className={NAV}>
        <Btn as={isPost ? 'span' : 'div'} onClick={() => handleProfile()} className={NAV_TEXT_STYLE}>
          {LeftFlexText}
        </Btn>
        <View className={POST_TITLE_WRAPPER}>
          <Btn as={'Link'} href={isStudy ? '/' : '/study'} className={NAV_TEXT_STYLE}>
            {BLOG_TRANSFER}
          </Btn>
          <Spacing size="0.3rem" dir="hori" />
          <GithubLink />
          {isPost && (
            <>
              <Spacing size="0.3rem" dir="hori" />
              <Btn onClick={() => toggle()} className={NAV_TEXT_STYLE}>
                {theme === 'light' ? '🌚' : '🌞'}
              </Btn>
            </>
          )}
        </View>
      </View>
      {/* 프로필 */}
      <View className={displayProfile ? EXPANDED : HIDE}>
        <Spacing size="1rem" />
        <About blocks={profile} />
      </View>
    </View>
  );
}
