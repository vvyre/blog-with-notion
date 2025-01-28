import { BASE, FOOTER_COPYRIGHT, FOOTER_LINK } from './footer.css'
import { Txt } from '../../basics/typography/txt/txt'
import { View } from '../../basics/view/view'
import { NOTION_BLOCK_LAYOUT } from '../../_blocks/block-layout.css'
import { meta } from '@/constants/meta'

export function Footer() {
  return (
    <View as="footer" className={`${BASE} ${NOTION_BLOCK_LAYOUT}`}>
      <Txt as="p" className={FOOTER_COPYRIGHT}>
        {meta.footer.copyright}
      </Txt>
    </View>
  )
}
