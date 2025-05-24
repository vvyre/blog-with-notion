import { BASE, FOOTER_COPYRIGHT } from './footer.css'
import { Txt } from 'components/basics/typography/txt/txt'
import { View } from 'components/basics/view/view'
import { NOTION_BLOCK_LAYOUT } from 'components/notion-blocks/block-layout.css'
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
