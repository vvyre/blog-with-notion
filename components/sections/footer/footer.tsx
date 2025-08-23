import { BASE, FOOTER_COPYRIGHT } from './footer.css'
import { Txt } from 'components/common/typography/txt/txt'
import { View } from 'components/common/view/view'
import { NOTION_BLOCK_LAYOUT } from '../../notion/block-layout.css'
import FOOTER_UI from './footer.ui'

export function Footer() {
  return (
    <View as="footer" className={`${BASE} ${NOTION_BLOCK_LAYOUT}`}>
      <Txt as="p" className={FOOTER_COPYRIGHT}>
        {FOOTER_UI.COPYRIGHT}
      </Txt>
    </View>
  )
}
