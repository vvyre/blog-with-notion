import { BASE, FOOTER_LINK } from './footer.css';
import { Txt } from '../../basics/typography/txt/txt';
import { View } from '../../basics/view/view';
import { BLOCK_GRID_BASE } from '../../_blocks/block-layout.css';

export function Footer() {
  return (
    <View as="footer" styleVariant={`${BASE} ${BLOCK_GRID_BASE}`}>
      <Txt as="p" styleVariant={FOOTER_LINK}>
        출처가 없는 모든 사진 및 컨텐츠의 저작권은 brewcold에 있습니다.
        <br />
        Copyright 2024. Brewcold all rights reserved.
      </Txt>
    </View>
  );
}
