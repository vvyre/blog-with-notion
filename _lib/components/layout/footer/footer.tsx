import { BASE, FOOTER_COPYRIGHT } from './footer.css'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { View } from '@/_lib/components/basics/view/view'
import { NOTION_BLOCK_LAYOUT } from '@/_lib/components/_blocks/block-layout.css'
import { meta } from '@/_lib/constants/meta'

export function Footer() {
  return (
    <View as="footer" className={`${BASE} ${NOTION_BLOCK_LAYOUT}`}>
      <Txt as="p" className={FOOTER_COPYRIGHT}>
        {meta.footer.copyright}
      </Txt>
    </View>
  )
}
