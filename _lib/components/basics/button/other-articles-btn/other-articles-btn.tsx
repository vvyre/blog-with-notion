'use client';
import { Btn } from '../btn';
import { useCategory } from '@/_lib/react/use-category';

export function OtherArticlesBtn() {
  const { path } = useCategory();
  return (
    <Btn as="Link" href={path}>
      글 목록
    </Btn>
  );
}
