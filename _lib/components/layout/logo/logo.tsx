import { Txt } from '../../typography/txt/txt';
import logo from '#/img/logo.png';
import Image from 'next/image';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Txt as="Link" href="/faq" styleVariant={LOGO}>
      <Image src={logo} alt="frequently asked questions, 프로필" style={{ width: '1.75rem', height: '1.75rem' }} />
    </Txt>
  );
}
