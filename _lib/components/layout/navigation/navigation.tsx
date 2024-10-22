'use client';
import Image from 'next/image';
import Arrow from '#/img/icons/arrow_back_white.svg';
import { Btn } from '../../interaction/button/btn';
import {
  BACK_BTN,
  BACKGROUND,
  BASE,
  BTN_WRAPPER,
  EXPANDED,
  NAV,
  POST_TITLE,
  POST_TITLE_WRAPPER,
  TEXT_COLOR,
} from './navigation.css';
import { View } from '../view/view';
import { getTitle } from '@/utils/get-title';
import { useContext, useEffect, useState } from 'react';
import { CurrentPostContext } from '@/_lib/context/current-post-provider';
import { usePathname } from 'next/navigation';
import { useCategory } from '@/_lib/react/use-category';
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import { useBooleanState } from '@syyu/util/react';
import { Spacing } from '../spacing/spacing';
import { GithubLink } from '../logo/github';
import { About } from './about';
import { NavigationContext } from '@/_lib/context/navigation-provider';

export function Navigation({ profile }: { profile: EntireNotionBlockResponse[] }) {
  const { currentPost, setCurrentPost } = useContext(CurrentPostContext);
  const { isPost, handleProfile, displayProfile } = useContext(NavigationContext);

  const [href] = useCategory();
  const styleKey = isPost ? 'post' : 'main';
  const RightFlexText = currentPost ? getTitle(currentPost) : 'About';

  useEffect(() => {
    if (!isPost) setCurrentPost(null);
  }, [isPost]);

  return (
    <View as="nav" styleVariant={`${BACKGROUND[styleKey]} ${BASE}`}>
      <View as="nav" styleVariant={NAV}>
        <View styleVariant={BTN_WRAPPER}>
          {isPost && (
            <Btn as="Link" href={href} styleVariant={BACK_BTN}>
              <Image alt="go to post list" unoptimized src={Arrow} />
            </Btn>
          )}
        </View>
        <View styleVariant={POST_TITLE_WRAPPER}>
          <Btn
            as={isPost ? 'span' : 'button'}
            onClick={() => handleProfile()}
            styleVariant={`${POST_TITLE} ${TEXT_COLOR[styleKey]}`}>
            {RightFlexText}
          </Btn>
          <Spacing size="0.8rem" dir="hori" />
          <GithubLink isPost={isPost} />
        </View>
      </View>
      <Spacing size="1rem" />
      {displayProfile && (
        <View styleVariant={EXPANDED}>
          <About blocks={profile} />
        </View>
      )}
    </View>
  );
}
