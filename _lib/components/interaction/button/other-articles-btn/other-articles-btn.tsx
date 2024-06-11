import { styleVariants } from '@vanilla-extract/css';
import { Btn } from '../btn';
import { BASE } from './other-articles-btn.css';

export function OtherArticlesBtn() {
  return (
    <Btn as="Link" href="/" styleVariants={BASE}>
      다른 글
    </Btn>
  );
}
