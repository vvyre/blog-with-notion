'use client';
import { Btn } from '../../basics/button/btn';
import {
  BACKGROUND,
  BASE,
  BTN_WRAPPER,
  EXPANDED,
  NAV,
  POST_TITLE,
  POST_TITLE_WRAPPER,
  TEXT_COLOR,
} from './navigation.css';
import { View } from '../../basics/view/view';
import { getTitle } from '@/utils/get-title';
import { useContext, useEffect } from 'react';
import { CurrentPostContext } from '@/_lib/context/current-post-provider';
import { useCategory } from '@/_lib/react/use-category';
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import { Spacing } from '../../basics/spacing/spacing';
import { GithubLink } from '../_external-logos/github';
import { About } from './about/about';
import { NavigationContext } from '@/_lib/context/navigation-provider';
import { AboutBtn } from './about/about-btn';

export function Navigation({ profile }: { profile: EntireNotionBlockResponse[] }) {
  const { currentPost, setCurrentPost } = useContext(CurrentPostContext);
  const { isPost, handleProfile, displayProfile } = useContext(NavigationContext);

  const [href] = useCategory();
  const styleKey = isPost ? 'post' : 'main';
  const RightFlexText = currentPost ? getTitle(currentPost) : <AboutBtn />;

  useEffect(() => {
    if (!isPost) setCurrentPost(null);
  }, [isPost]);

  return (
    <View as="nav" styleVariant={`${BACKGROUND[styleKey]} ${BASE}`}>
      <View as="nav" styleVariant={NAV}>
        <View styleVariant={BTN_WRAPPER}>{null}</View>
        <View styleVariant={POST_TITLE_WRAPPER}>
          <Btn
            as={isPost ? 'span' : 'div'}
            onClick={() => handleProfile()}
            styleVariant={`${POST_TITLE} ${TEXT_COLOR[styleKey]}`}>
            {RightFlexText}
          </Btn>
          <Spacing size="0.3rem" dir="hori" />
          <GithubLink isPost={isPost} />
        </View>
      </View>

      {displayProfile && (
        <View styleVariant={EXPANDED}>
          <Spacing size="1rem" />
          <About blocks={profile} />
        </View>
      )}
    </View>
  );
}
