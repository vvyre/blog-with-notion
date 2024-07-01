'use client';
import { Btn } from '../btn';
import { BASE } from './other-articles-btn.css';
import { useCategory } from '@/_lib/react/use-category';

export function OtherArticlesBtn() {
  const [path] = useCategory();
  return (
    <Btn as="Link" href={path} styleVariant={BASE}>
      다른 글
    </Btn>
  );
}
