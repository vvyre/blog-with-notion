import { Txt } from '../../typography/txt/txt';
import logo from '#/img/logo.png';
import Image from 'next/image';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Txt as="Link" href="/about" styleVariant={LOGO}>
      <Image unoptimized src={logo} alt="about, 프로필" style={{ width: '1.7rem', height: '1.7rem' }} />
    </Txt>
  );
}
