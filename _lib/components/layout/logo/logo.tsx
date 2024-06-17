import { Txt } from '../../typography/txt/txt';
import { LOGO } from './logo.css';
import { meta } from '@/constants/meta';
export function Logo() {
  return (
    <Txt as="Link" href="/" styleVariant={LOGO}>
      {meta.siteTitle}
    </Txt>
  );
}
