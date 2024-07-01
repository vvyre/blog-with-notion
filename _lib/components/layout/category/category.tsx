'use client';
import { categories } from '@/constants/category';
import { usePathname } from 'next/navigation';
import { Btn } from '../../interaction/button/btn';
import { CATEGORY } from './category.css';
import { View } from '../view/view';
import { LAYOUT_CENTERED } from '../article/article.css';
import { Spacing } from '../spacing/spacing';

export function Category() {
  const current = usePathname();
  return (
    <View styleVariant={LAYOUT_CENTERED}>
      <Spacing size="2rem" />
      {categories.map(c => (
        <Btn
          as="Link"
          key={c.name}
          href={c.route}
          styleVariant={current.includes(c.route) ? CATEGORY['selected'] : CATEGORY['options']}>
          {c.name}
        </Btn>
      ))}
    </View>
  );
}
