import { BASE, FOOTER_LINK } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';

export function Footer() {
  return (
    <View as="footer" styleVariant={BASE}>
      <Txt as="p" styleVariant={FOOTER_LINK}>
        출처가 없는 모든 사진 및 컨텐츠의 저작권은 brewcold에 있습니다.
        <br />
        Copyright 2024. Brewcold all rights reserved.
      </Txt>
    </View>
  );
}
