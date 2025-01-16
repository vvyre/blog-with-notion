import { Btn } from '../../../basics/button/btn'
import { LOGO } from './about-btn.css'
export function AboutBtn({ ...props }) {
  return (
    <Btn as="Link" href="/" className={LOGO} aria-label="About Me" {...props}>
      Brewcold
    </Btn>
  )
}
