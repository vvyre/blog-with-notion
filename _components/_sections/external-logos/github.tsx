import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { vars } from 'styles/themes.css'
import { Txt } from 'components/basics/typography/txt/txt'
import { BASE } from './github.css'

export function GithubLink() {
  return (
    <Txt as="a" href="https://github.com/vvyre" target="_blank" className={BASE}>
      <GitHubLogoIcon color={vars.color.blacktext} />
    </Txt>
  )
}
