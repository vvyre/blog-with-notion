import { Txt } from 'components/basics/typography/txt/txt'
import { View } from 'components/basics/view/view'
import { BASE, SITE_DESCRIPTION, SITE_TITLE } from './header.css'
import { meta } from 'constants/meta'
import { GithubLink } from '../external-logos/github'
import { Flex } from 'components/basics/flex/flex'

export function Header() {
  return (
    <View className={BASE}>
      <Txt as="span" className={SITE_TITLE}>
        {meta.title}
      </Txt>
      <Flex justifyContent="flexStart" alignItems="center">
        <Txt as="span" className={SITE_DESCRIPTION}>
          {meta.description}
        </Txt>
        <GithubLink />
      </Flex>
    </View>
  )
}
