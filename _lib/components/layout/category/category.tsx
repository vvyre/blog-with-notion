'use client';
import { categories } from '@/constants/category';
import { Btn } from '../../basics/button/btn';
import { CATEGORY } from './category.css';
import { View } from '../../basics/view/view';
import { LAYOUT_CENTERED } from '../../basics/article/article.css';
import { Spacing } from '../../basics/spacing/spacing';
import { useCategory } from '@/_lib/hooks/use-category';

export function Category() {
  return (
    // <View as="nav" className={LAYOUT_CENTERED}>
    //   <Spacing size="2rem" />
    //   {categories.map(c => {
    //     const isSelected =
    //       c.route === path ??
    //       (isEngineering && c.route.startsWith('/engineering')) ??
    //       (isAsdf && c.route.startsWith('/asdf'));
    //     return (
    //       <Btn
    //         as="Link"
    //         key={c.name}
    //         href={c.route}
    //         className={isSelected ? CATEGORY['selected'] : CATEGORY['options']}>
    //         {c.name}
    //       </Btn>
    //     );
    //   })}
    // </View>
    <></>
  );
}
