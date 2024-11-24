'use client';
import { Btn } from '../../basics/button/btn';
import { Txt } from '../../basics/typography/txt/txt';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Btn as="Link" href="/" styleVariant={LOGO}>
      ABOUT
    </Btn>
  );
}
