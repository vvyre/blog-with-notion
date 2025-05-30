import { Txt } from 'components/basics/typography/txt/txt'
import { View } from 'components/basics/view/view'
import { BASE, SITE_DESCRIPTION, SITE_TITLE } from './header.css'
import { meta } from 'constants/meta'

export const revalidate = 3600
export function Header() {
  return (
    <View className={BASE}>
      <Txt as="span" className={SITE_TITLE}>
        {meta.title}
      </Txt>
      <Txt as="span" className={SITE_DESCRIPTION}>
        {meta.description}
      </Txt>
    </View>
  )
}
