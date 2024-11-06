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
  HIDE_UNDER_500PX,
  HIDE_UNDER_700PX,
  NAV,
  POST_TITLE,
  POST_TITLE_WRAPPER,
  TEXT_COLOR,
} from './navigation.css';
import { View } from '../view/view';
import { getTitle } from '@/utils/get-title';
import { useContext, useEffect } from 'react';
import { CurrentPostContext } from '@/_lib/context/current-post-provider';
import { useCategory } from '@/_lib/react/use-category';
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map';
import { Spacing } from '../spacing/spacing';
import { GithubLink } from '../logo/github';
import { About } from './about';
import { NavigationContext } from '@/_lib/context/navigation-provider';
import { Logo } from '../logo/logo';

export function Navigation({ profile }: { profile: EntireNotionBlockResponse[] }) {
  const { currentPost, setCurrentPost } = useContext(CurrentPostContext);
  const { isPost, handleProfile, displayProfile } = useContext(NavigationContext);

  const [href] = useCategory();
  const styleKey = isPost ? 'post' : 'main';
  const RightFlexText = currentPost ? getTitle(currentPost) : <Logo />;

  useEffect(() => {
    if (!isPost) setCurrentPost(null);
  }, [isPost]);

  return (
    <View as="nav" styleVariant={`${BACKGROUND[styleKey]} ${BASE}`}>
      <View as="nav" styleVariant={NAV}>
        <View styleVariant={BTN_WRAPPER}>
          {isPost && (
            <Btn as="Link" href={href} styleVariant={`${BACK_BTN} ${HIDE_UNDER_500PX}`}>
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
          <View styleVariant={HIDE_UNDER_700PX}>
            <Spacing size="0.8rem" dir="hori" />
          </View>
          <View styleVariant={HIDE_UNDER_700PX}>
            <GithubLink isPost={isPost} />
          </View>
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
