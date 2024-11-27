import { Btn } from '../../../basics/button/btn';
import { LOGO } from './about-btn.css';
export function AboutBtn() {
  return (
    <Btn as="Link" href="/" styleVariant={LOGO}>
      ABOUT
    </Btn>
  );
}
