'use client';
import { categories } from '@/constants/category';
import { Btn } from '../../interaction/button/btn';
import { CATEGORY } from './category.css';
import { View } from '../view/view';
import { LAYOUT_CENTERED } from '../article/article.css';
import { Spacing } from '../spacing/spacing';
import { useCategory } from '@/_lib/react/use-category';

export function Category() {
  const [path, category] = useCategory();
  const isEngineering = category === 'engineering';
  const isAsdf = category === 'asdf';

  return (
    // <View as="nav" styleVariant={LAYOUT_CENTERED}>
    //   <Spacing size="2rem" />
    //   {categories.map(c => {
    //     const isSelected =
    //       c.route === path ||
    //       (isEngineering && c.route.startsWith('/engineering')) ||
    //       (isAsdf && c.route.startsWith('/asdf'));
    //     return (
    //       <Btn
    //         as="Link"
    //         key={c.name}
    //         href={c.route}
    //         styleVariant={isSelected ? CATEGORY['selected'] : CATEGORY['options']}>
    //         {c.name}
    //       </Btn>
    //     );
    //   })}
    // </View>
    <></>
  );
}
