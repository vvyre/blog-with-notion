import { Txt } from '../../typography/txt/txt';
import logo from '@/public/img/logo.png';
import Image from 'next/image';
import { LOGO } from './logo.css';
export function Logo() {
  return (
    <Txt as="Link" href="/" styleVariant={LOGO}>
      <Image src={logo} alt="유승윤 개발 블로그 로고" style={{ width: '1.75rem', height: '1.75rem' }} />
    </Txt>
  );
}
