'use client';
import { Txt } from '../../basics/typography/txt/txt';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Txt as="Link" href="/" styleVariant={LOGO}>
      ABOUT
    </Txt>
  );
}
