'use client';
import { CategoryType, categories } from '@/constants/category';
import { Btn } from '../../interaction/button/btn';
import { CATEGORY } from './category.css';
import { View } from '../view/view';
import { LAYOUT_CENTERED } from '../article/article.css';
import { Spacing } from '../spacing/spacing';
import { useState } from 'react';

export function Category() {
  const [selected, setSelected] = useState<CategoryType>('engineering');
  return (
    <View styleVariant={LAYOUT_CENTERED}>
      <Spacing size="2rem" />
      {categories.map(c => (
        <Btn
          as="Link"
          key={c.name}
          href={c.route}
          styleVariant={selected === c.type ? CATEGORY['selected'] : CATEGORY['options']}
          onClick={() => setSelected(c.type)}>
          {c.name}
        </Btn>
      ))}
    </View>
  );
}
