import { Txt } from '../../typography/txt/txt';
import logo from '#/img/logo.png';
import Image from 'next/image';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Txt as="Link" href="/" styleVariant={LOGO}>
      <Image unoptimized src={logo} alt="Seungyoon Yu Logo" style={{ width: '1.7rem', height: '1.7rem' }} />
    </Txt>
  );
}
